// src/components/sections/FAQ.jsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does LuminaAI's automation work?",
    answer:
      "LuminaAI uses machine learning to analyze your team's workflow patterns and automate repetitive tasks. It learns from your team's habits and suggests optimizations to improve productivity and reduce manual work.",
  },
  {
    question: "Is my data secure with LuminaAI?",
    answer:
      "Absolutely. We implement bank-level encryption and comply with all major security standards including GDPR, HIPAA, and SOC 2. Your data is encrypted both in transit and at rest, and we never use customer data to train our AI models.",
  },
  {
    question: "Can LuminaAI integrate with our existing tools?",
    answer:
      "Yes, LuminaAI seamlessly integrates with popular productivity tools including Google Workspace, Microsoft 365, Slack, Asana, Trello, and many more. Our API also allows for custom integrations with your proprietary systems.",
  },
  {
    question: "How much time can we expect to save?",
    answer:
      "Our customers report saving an average of 12 hours per employee per week after fully implementing LuminaAI. Results vary depending on your team's workflow and adoption rate, but our onboarding specialists work with you to maximize productivity gains.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial on all our plans with no credit card required. This gives you full access to all features so you can experience the benefits before committing.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about LuminaAI and how it can
            benefit your team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 text-left font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
