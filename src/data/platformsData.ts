export interface PlatformItem {
  id: string;
  name: string;
  shortCode: string;
  category: string;
  role: string;
  description: string;
  capabilities: string[];
}

export const platformsData: PlatformItem[] = [
  {
    id: "rdn",
    name: "RDN",
    shortCode: "RDN",
    category: "Master Recovery Network",
    role: "Assignment & Client Communication",
    description: "Industry-standard recovery database management. Seamless handling of order intake, regular debtor updates, on-hook status notifications, and client messaging.",
    capabilities: [
      "Order intake & verification",
      "Real-time update entry",
      "Condition report transmission",
      "Document uploads & invoice tracking"
    ]
  },
  {
    id: "recovery-connect",
    name: "Recovery Connect",
    shortCode: "RC",
    category: "Workflow & Forwarder Portal",
    role: "Lender & Forwarder Integration",
    description: "Direct integration with major forwarders and lenders. Continuous status synchronization, fee approvals, and compliance verification.",
    capabilities: [
      "Forwarder order acceptance",
      "Automated update scheduling",
      "Fee & mileage approval submissions",
      "Post-recovery closure files"
    ]
  },
  {
    id: "clearplan",
    name: "Clearplan",
    shortCode: "CP",
    category: "Logistics & Zone Mapping",
    role: "Field Dispatch & Route Optimization",
    description: "Spatial account mapping and route staging. Ensuring all active addresses, check-ins, and driver territories are organized for peak field efficiency.",
    capabilities: [
      "Account plotting & territory staging",
      "Driver route coordination",
      "Real-time check-in monitoring",
      "Hot account prioritization"
    ]
  },
  {
    id: "cleardata",
    name: "ClearData",
    shortCode: "CD",
    category: "LPR & Data Intelligence",
    role: "License Plate Recognition Processing",
    description: "Systematic review and staging of LPR historical sightings and live hits, linking actionable vehicle locations straight to agency dispatch.",
    capabilities: [
      "LPR hit verification",
      "Historical sighting analysis",
      "Field dispatch notification",
      "Data cross-referencing"
    ]
  },
  {
    id: "wombat-als",
    name: "Wombat (ALS)",
    shortCode: "ALS",
    category: "Agency Management System",
    role: "Internal Operations & Impound Control",
    description: "Comprehensive agency ERP support including internal lot management, personal property logging, debtor redemption scheduling, and invoicing.",
    capabilities: [
      "Agency assignment ingestion",
      "Lot inventory & gate logs",
      "Personal property tracking",
      "Internal billing reconciliation"
    ]
  },
  {
    id: "idi-core",
    name: "IDI Core",
    shortCode: "IDI",
    category: "Investigative Intelligence",
    role: "Advanced Skip Tracing & Locates",
    description: "Advanced data intelligence to pinpoint elusive debtors, locate current employers, verify secondary relatives, and uncover verified vehicle locations.",
    capabilities: [
      "Public record & debt profile research",
      "Current employer & relative locate",
      "Utility & phone record cross-check",
      "Address risk assessment"
    ]
  },
  {
    id: "webtransfer",
    name: "WebTransfer",
    shortCode: "WT",
    category: "Secure Transport & Ingestion",
    role: "Automated Data & File Interchange",
    description: "Automated transmission of recovery packets, digital photographs, signed releases, and financial invoices directly between forwarder networks and agency records.",
    capabilities: [
      "Automated file transmission",
      "Bulk photo packet handling",
      "Secure document exchange",
      "Data transfer error reconciliation"
    ]
  }
];

export const platformSupportingStatement = 
  "Our team brings hands-on experience across widely used recovery industry platforms, helping agencies manage workflows, process assignments, and maintain operational consistency.";
