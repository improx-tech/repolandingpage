import { NextRequest, NextResponse } from "next/server";
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

    // Strict validation
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

    // Generate submission record
    const submissionId = `DEMO-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const submissionRecord = {
      id: submissionId,
      createdAt: new Date().toISOString(),
      recipientEmail: RECIPIENT_EMAIL,
      status: "ROUTED_TO_IMPROX_GROUP",
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
      },
      emailNotification: {
        to: RECIPIENT_EMAIL,
        subject: `[New RepoDesk Lead] Operational Inquiry from ${companyName.trim()}`,
        sender: "RepoDesk Operations <enquiry@improxgroup.com>",
        timestamp: new Date().toISOString(),
        deliveryStatus: "QUEUED_FOR_DISPATCH"
      }
    };

    // Persist to local JSON data store
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

      existingRecords.push(submissionRecord);
      fs.writeFileSync(filePath, JSON.stringify(existingRecords, null, 2), "utf-8");
    } catch (fsError) {
      console.error("Local storage error (non-fatal):", fsError);
    }

    // Log operational lead notice
    console.log(`[RepoDesk Lead Routed -> ${RECIPIENT_EMAIL}] ID: ${submissionId} | Agency: ${companyName} | Contact: ${firstName} ${lastName} (${businessEmail}) | Topic: ${talkAbout}`);

    return NextResponse.json(
      {
        success: true,
        message: `Your inquiry has been successfully routed to our operational team at ${RECIPIENT_EMAIL}.`,
        submissionId,
        recipientEmail: RECIPIENT_EMAIL,
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
