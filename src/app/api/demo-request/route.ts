import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const RECIPIENT_EMAIL = "enquiry@improxgroup.com";

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

    // Attempt actual email dispatch via SMTP if configured
    const smtpUser = process.env.SMTP_USER || "enquiry@improxgroup.com";
    const smtpPass = process.env.SMTP_PASS; // Requires Google App Password or SMTP password
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    let emailSent = false;
    let emailError: string | null = null;

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
                Docket ID: <strong>${submissionId}</strong> · Routed to ${RECIPIENT_EMAIL}
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
              This notification was generated from the RepoDesk Solutions landing page and routed directly to ${RECIPIENT_EMAIL}.
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"RepoDesk Dispatch" <${smtpUser}>`,
          to: RECIPIENT_EMAIL,
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

    // Also support Web3Forms forwarding as an alternative webhook/relay if configured
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key && !emailSent) {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `[New Lead] ${companyName.trim()} — ${talkAbout}`,
            from_name: "RepoDesk Dispatch",
            to_email: RECIPIENT_EMAIL,
            replyto: businessEmail.trim(),
            Agency: companyName.trim(),
            Contact: `${firstName.trim()} ${lastName.trim()}`,
            Email: businessEmail.trim(),
            Phone: contactNumber.trim(),
            Topic: talkAbout,
            Notes: notes && notes.trim() ? notes.trim() : "None provided",
            Docket_ID: submissionId
          })
        });
        if (web3Res.ok) {
          emailSent = true;
        }
      } catch (wErr) {
        console.error("Web3Forms forward failed:", wErr);
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
        recipientEmail: RECIPIENT_EMAIL,
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

    return NextResponse.json(
      {
        success: true,
        message: `Your inquiry has been successfully routed to our operational team at ${RECIPIENT_EMAIL}.`,
        submissionId,
        recipientEmail: RECIPIENT_EMAIL,
        emailSent,
        details: {
          agencyName: companyName.trim(),
          contactPerson: `${firstName.trim()} ${lastName.trim()}`,
          businessEmail: businessEmail.trim().toLowerCase(),
          topic: talkAbout,
          routedTo: RECIPIENT_EMAIL,
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
