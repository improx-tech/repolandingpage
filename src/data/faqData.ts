export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "services-provided",
    question: "What services do you provide to repossession agencies?",
    answer: "We provide comprehensive back-office, operational, recovery support, and documentation services specifically designed for US repossession agencies. Our scope covers two major operational categories: Order Management & Field Operations (including order acceptance/rejection, real-time client status updates, condition report preparation, and live field driver coordination) and Recovery Back-Office & Administrative Support (including skip tracing, order loading, coverage area verification, billing and invoicing, and post-recovery documentation management)."
  },
  {
    id: "us-support",
    question: "Do you support US-based recovery companies?",
    answer: "Yes, our operational and back-office services are exclusively tailored to automotive recovery businesses and repossession agencies operating across the United States. Our team is familiar with US repossession workflows, lender client expectations, forwarder network standards, and industry compliance norms."
  },
  {
    id: "platforms-experience",
    question: "Which recovery management platforms do you have experience with?",
    answer: "Our team brings hands-on working experience across the industry's widely used recovery and dispatch platforms, including RDN (Recovery Database Network), Recovery Connect, Clearplan, ClearData, Wombat (ALS), IDI Core, and WebTransfer. We integrate directly into your existing accounts using authorized agency sub-credentials, eliminating software switching costs."
  },
  {
    id: "order-processing-docs",
    question: "Can you assist with order processing and documentation?",
    answer: "Absolutely. We manage order intake and loading from forwarders and lenders, verify coverage zones, update order status logs promptly, prepare detailed multi-point condition reports with inspection photos, itemize personal property records, and assemble post-recovery legal and auction release packets."
  },
  {
    id: "skip-tracing-support",
    question: "Do you provide skip tracing support?",
    answer: "Yes. We offer dedicated skip tracing research to assist agencies in locating elusive debtors and collateral. Using investigative intelligence platforms such as IDI Core along with public records, place-of-employment verifications, and relative cross-referencing, we generate actionable leads that can be routed straight to your field agents."
  },
  {
    id: "schedule-demo",
    question: "How can we schedule a demo?",
    answer: "You can schedule a personalized operational demo directly through our online form below. Simply provide your agency name, business email, contact number, preferred date and time, and the specific operational areas you would like to discuss. Our team will promptly review your requirements and confirm your session."
  },
  {
    id: "customization",
    question: "Can services be customized according to our agency's workflow?",
    answer: "Yes. Every repossession agency operates with unique regional footprints, fleet sizes, and client mixes. We do not impose rigid templates; instead, we study your existing operating procedures, dispatch rhythms, and platform setups to deliver dedicated support that seamlessly complements your internal team."
  }
];
