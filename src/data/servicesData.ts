export interface ServiceItem {
  id: string;
  category: "field-ops" | "back-office";
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  // Category A: Order Management & Field Operations
  {
    id: "accepting-declining-orders",
    category: "field-ops",
    title: "Accepting / Declining Orders",
    shortDesc: "Efficient order acceptance and rejection management aligned with your agency's parameters and capacity.",
    fullDesc: "Review incoming assignments against your agency's coverage zones, vehicle class capabilities, and current field workload to accept high-priority orders promptly or decline out-of-scope files within client SLAs.",
    features: [
      "Review incoming assignments promptly",
      "Process orders according to agency specifications & zip criteria",
      "Minimize SLA breach risks with prompt client responses",
      "Filter out-of-boundary assignments before dispatch"
    ],
    iconName: "CheckSquare",
    badge: "Field Operations"
  },
  {
    id: "order-status-updates",
    category: "field-ops",
    title: "Order Status Updates",
    shortDesc: "Maintain accurate, timely recovery status updates to keep forwarding networks and lending clients fully informed.",
    fullDesc: "Ensure continuous synchronization between field agent activities and client portals. We log updates, timestamps, field notes, and staging alerts accurately across all required platforms.",
    features: [
      "Real-time update entry into RDN, Recovery Connect, and client portals",
      "Accurate tracking of spotter hits, drive-bys, and verified addresses",
      "Proactive notifications to prevent status hold delays",
      "Consistent formatting conforming to lender reporting standards"
    ],
    iconName: "Clock",
    badge: "Field Operations"
  },
  {
    id: "condition-reports",
    category: "field-ops",
    title: "Condition Reports",
    shortDesc: "Prepare and manage detailed vehicle condition reports to maintain accurate, audit-ready recovery records.",
    fullDesc: "Coordinate incoming vehicle inspection details, tire conditions, odometer readings, personal property itemization, and photo uploads into clear, standardized condition documentation.",
    features: [
      "Standardized multi-point vehicle condition documentation",
      "Thorough review of field inspection photos before portal upload",
      "Accurate personal property inventory tracking",
      "Audit-ready digital storage for agency liability protection"
    ],
    iconName: "FileSpreadsheet",
    badge: "Field Operations"
  },
  {
    id: "real-time-field-support",
    category: "field-ops",
    title: "Real-Time Field Support",
    shortDesc: "Provide operational assistance and coordination for field agents and seamless field-to-back-office communication.",
    fullDesc: "Act as the central communication conduit for recovery agents on the road. We verify VINs, look up updated debtor addresses, run quick plate checks, and coordinate tow transport logistics in real time.",
    features: [
      "Active coordination bridge between tow drivers, spotters, and dispatch",
      "Fast VIN and tag verification during on-site recoveries",
      "Assistance with gate codes, updated addresses, and contact logs",
      "Instant notification dispatch upon vehicle hookup"
    ],
    iconName: "Radio",
    badge: "Field Operations"
  },

  // Category B: Recovery Back-Office & Administrative Support
  {
    id: "skip-tracing",
    category: "back-office",
    title: "Skip Tracing",
    shortDesc: "Support locating vehicle owners and recovery-related information through disciplined research workflows.",
    fullDesc: "Comprehensive investigative support utilizing industry-standard databases to verify debtor residency, employment locations, social leads, utility records, and secondary addresses.",
    features: [
      "Deep database research across IDI Core and specialized data tools",
      "Cross-referencing verified relative and co-borrower addresses",
      "Place of employment (POE) and current vehicle staging inquiries",
      "Actionable lead generation routed straight to field routes"
    ],
    iconName: "SearchCheck",
    badge: "Back-Office Support"
  },
  {
    id: "order-loading",
    category: "back-office",
    title: "Order Loading",
    shortDesc: "Manage and process incoming recovery assignments efficiently into your primary management system.",
    fullDesc: "Eliminate intake bottlenecks by rapidly capturing assignments from RDN, email transmissions, client portals, and forwarders, verifying account accuracy, and populating your agency software.",
    features: [
      "Swift entry of assignment data without keying errors",
      "Attachment of collateral details, loan balances, and hold notices",
      "Automatic geocoding and account assignment tagging",
      "Immediate alert generation on hot sheets and high-priority accounts"
    ],
    iconName: "UploadCloud",
    badge: "Back-Office Support"
  },
  {
    id: "coverage-area-verification",
    category: "back-office",
    title: "Coverage Area Verification",
    shortDesc: "Verify service areas and geographical coverage before processing assignments to protect agency margins.",
    fullDesc: "Prevent costly out-of-boundary runs by rigorously vetting debtor addresses against your agency's designated primary and secondary zip codes, mileage radii, and county boundaries.",
    features: [
      "Strict zip-code and county jurisdiction validation",
      "Clear identification of out-of-area accounts for mileage pre-approval",
      "Alignment with Clearplan zone mapping and driver route boundaries",
      "Prevention of unbillable travel and dead-head transport miles"
    ],
    iconName: "MapPin",
    badge: "Back-Office Support"
  },
  {
    id: "billing-invoicing",
    category: "back-office",
    title: "Billing & Invoicing",
    shortDesc: "Assist with billing operations, invoice preparation, and comprehensive payment documentation.",
    fullDesc: "Maintain healthy agency cash flow by preparing accurate itemized invoices for recovery fees, mileage, storage, personal property handling, key cutting, and administrative charges.",
    features: [
      "Prompt invoice generation following vehicle recovery verification",
      "Detailed fee breakdowns matching forwarder fee schedules",
      "Audit invoice attachments (signed CRs, tow receipts, photo proof)",
      "Reconciliation of paid accounts against outstanding client receivables"
    ],
    iconName: "Receipt",
    badge: "Back-Office Support"
  },
  {
    id: "post-recovery-documentation",
    category: "back-office",
    title: "Post-Recovery Documentation",
    shortDesc: "Organize and process recovery documents after successful operations to ensure immediate compliance.",
    fullDesc: "Manage the crucial closing loop of every repossession. We compile repossession affidavits, notice of seizure filings, vehicle condition sheets, and release authorizations required by state law and lenders.",
    features: [
      "Rapid packet compilation for auction dispatch or debtor redemption",
      "Verification of police department notification logs",
      "Centralized archiving of all signed release and inventory documents",
      "Ensuring clean audit trails for client compliance reviews"
    ],
    iconName: "FolderCheck",
    badge: "Back-Office Support"
  }
];
