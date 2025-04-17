export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface FAQSection {
  title: string;
  description?: string;
  items: FAQItem[];
}