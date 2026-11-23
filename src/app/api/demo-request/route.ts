import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const PRIMARY_EMAIL = "enquiry@improxgroup.com";
const SECONDARY_EMAIL = "rohanmate2810@gmail.com";
const RECIPIENT_EMAILS = [PRIMARY_EMAIL, SECONDARY_EMAIL];

const ALLOWED_TOPICS = [
  "Order Management & Processing",
  "Accepting / Declining Orders",
  "Order Status Updates",
  "Condition Reports",
  "Real-Time Field Support",
  "Skip Tracing Services",
  "Order Loading",
  "Coverage Area Verification",
  "Billing & Invoicing",
  "Post-Recovery Documentation",
  "Driver & Storage Management",
  "I-Beam Platform Support",
  "Complete Back-Office Support",
  "Platform & Workflow Support",
  "Other"
];

interface DemoRequestBody {
  firstName: string;
  lastName: string;
  businessEmail: string;
  contactNumber: string;
  companyName: string;
  talkAbout: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  consent: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: DemoRequestBody = await req.json();

    const {
      firstName,
      lastName,
      businessEmail,
      contactNumber,
      companyName,
      talkAbout,
      preferredDate,
      preferredTime,
      notes,
      consent
    } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!firstName || typeof firstName !== "string" || firstName.trim().length < 2) {
      errors.firstName = "Please provide your first name (at least 2 characters).";
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim().length < 2) {
      errors.lastName = "Please provide your last name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail.trim())) {
      errors.businessEmail = "Please provide a valid business email address.";
    }

    const phoneRegex = /^[0-9+()\-.\s]{7,25}$/;
    if (!contactNumber || !phoneRegex.test(contactNumber.trim())) {
      errors.contactNumber = "Please provide a valid contact phone number.";
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 2) {
      errors.companyName = "Please provide your repossession agency or company name.";
    }

    if (!talkAbout || !ALLOWED_TOPICS.includes(talkAbout)) {
      errors.talkAbout = "Please select a valid topic from the options.";
    }

    if (consent !== true) {
      errors.consent = "You must agree to be contacted regarding your inquiry.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check the required fields.",
          errors
        },
        { status: 400 }
      );
    }

    const submissionId = `DEMO-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    let emailSent = false;
    let emailError: string | null = null;

    // 1. Dispatch through FormSubmit Relay (delivers directly to enquiry@improxgroup.com + rohanmate2810@gmail.com)
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${PRIMARY_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Referer": "https://improxgroup.com",
          "Origin": "https://improxgroup.com"
        },
        body: JSON.stringify({
          _subject: `[New RepoDesk Lead] ${companyName.trim()} — ${talkAbout}`,
          _cc: SECONDARY_EMAIL,
          _replyto: businessEmail.trim(),
          _template: "table",
          _captcha: "false",
          "Agency / Company": companyName.trim(),
          "Contact Person": `${firstName.trim()} ${lastName.trim()}`,
          "Business Email": businessEmail.trim(),
          "Contact Phone": contactNumber.trim(),
          "Requested Focus": talkAbout,
          "Operational Notes": notes && notes.trim() ? notes.trim() : "None provided",
          "Docket Reference ID": submissionId,
          "Dispatched To": `${PRIMARY_EMAIL}, ${SECONDARY_EMAIL}`,
          "Timestamp": new Date().toISOString()
        })
      });

      const fsData = await formSubmitRes.json().catch(() => null);
      if (fsData && (fsData.success === "true" || fsData.success === true)) {
        emailSent = true;
      }
    } catch (fsErr) {
      console.error("FormSubmit relay error:", fsErr);
    }

    // 2. Dispatch via SMTP if configured in environment
    const smtpUser = process.env.SMTP_USER || PRIMARY_EMAIL;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        const htmlEmail = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E0DBD1; background-color: #F7F5F0; padding: 24px;">
            <div style="border-bottom: 2px solid #101D35; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #101D35; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;">
                New Operational Inquiry
              </h2>
              <p style="color: #64748B; font-size: 13px; margin: 4px 0 0 0;">
                Docket ID: <strong>${submissionId}</strong> · Routed to ${PRIMARY_EMAIL} &amp; ${SECONDARY_EMAIL}
              </p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; background: #FFFFFF; border: 1px solid #E0DBD1;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; font-weight: bold; width: 35%; color: #475569;">Agency / Company</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; font-weight: bold; color: #101D35; font-size: 16px;">${companyName.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; font-weight: bold; color: #475569;">Contact Name</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; color: #101D35;">${firstName.trim()} ${lastName.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; font-weight: bold; color: #475569;">Business Email</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4;"><a href="mailto:${businessEmail.trim()}" style="color: #2878D0; text-decoration: none; font-weight: bold;">${businessEmail.trim()}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; font-weight: bold; color: #475569;">Phone Number</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4;"><a href="tel:${contactNumber.trim()}" style="color: #101D35; text-decoration: none; font-weight: bold;">${contactNumber.trim()}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; font-weight: bold; color: #475569;">Requested Discussion</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #EFECE4; color: #101D35; font-weight: 600;">${talkAbout}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: bold; color: #475569;">Operational Notes</td>
                <td style="padding: 12px 16px; color: #334155; white-space: pre-wrap;">${notes && notes.trim() ? notes.trim() : "None provided"}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 12px; background: #EFECE4; font-size: 11px; color: #64748B; text-align: center;">
              This notification was generated from RepoDesk Solutions and routed to ${PRIMARY_EMAIL} and ${SECONDARY_EMAIL}.
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"RepoDesk Dispatch" <${smtpUser}>`,
          to: RECIPIENT_EMAILS,
          replyTo: businessEmail.trim(),
          subject: `[New Lead] ${companyName.trim()} — ${talkAbout}`,
          text: `Agency: ${companyName}\nName: ${firstName} ${lastName}\nEmail: ${businessEmail}\nPhone: ${contactNumber}\nTopic: ${talkAbout}\nNotes: ${notes || "None"}`,
          html: htmlEmail
        });

        emailSent = true;
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error("Failed to send SMTP email:", errorMsg);
        emailError = errorMsg;
      }
    }

    // Persist to local JSON record
    try {
      const storageDir = path.join(process.cwd(), "src", "data", "submissions");
      if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true });
      }

      const filePath = path.join(storageDir, "demo-requests.json");
      let existingRecords: unknown[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const fileContent = fs.readFileSync(filePath, "utf-8");
          existingRecords = JSON.parse(fileContent);
          if (!Array.isArray(existingRecords)) {
            existingRecords = [];
          }
        } catch {
          existingRecords = [];
        }
      }

      existingRecords.push({
        id: submissionId,
        createdAt: new Date().toISOString(),
        recipients: RECIPIENT_EMAILS,
        emailSent,
        emailError,
        data: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          businessEmail: businessEmail.trim().toLowerCase(),
          contactNumber: contactNumber.trim(),
          companyName: companyName.trim(),
          talkAbout,
          preferredDate: preferredDate || "Earliest Available",
          preferredTime: preferredTime || "Flexible",
          notes: notes ? notes.trim() : "",
          consent: true
        }
      });
      fs.writeFileSync(filePath, JSON.stringify(existingRecords, null, 2), "utf-8");
    } catch (fsError) {
      console.error("Local storage error:", fsError);
    }

    console.log(`[RepoDesk Lead -> ${PRIMARY_EMAIL} & ${SECONDARY_EMAIL}] ID: ${submissionId} | Agency: ${companyName}`);

    return NextResponse.json(
      {
        success: true,
        message: `Your inquiry has been successfully routed to ${PRIMARY_EMAIL} and ${SECONDARY_EMAIL}.`,
        submissionId,
        recipientEmails: RECIPIENT_EMAILS,
        emailSent,
        details: {
          agencyName: companyName.trim(),
          contactPerson: `${firstName.trim()} ${lastName.trim()}`,
          businessEmail: businessEmail.trim().toLowerCase(),
          topic: talkAbout,
          routedTo: `${PRIMARY_EMAIL}, ${SECONDARY_EMAIL}`,
          receivedAt: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error handling demo request:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred while processing your request. Please try again or reach out directly."
      },
      { status: 500 }
    );
  }
}
