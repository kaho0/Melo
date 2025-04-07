// src/components/sections/Pricing.jsx
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    price: 19,
    description:
      "Perfect for individuals and small teams just getting started.",
    features: [
      "Smart task automation",
      "Basic analytics",
      "Email integration",
      "5 team members",
      "5GB storage",
      "Community support",
    ],
    buttonText: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: 49,
    description: "Ideal for growing teams that need more advanced features.",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "Team collaboration tools",
      "Unlimited team members",
      "50GB storage",
      "Priority support",
    ],
    buttonText: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description:
      "For organizations requiring maximum security and customization.",
    features: [
      "Everything in Professional",
      "Custom AI workflows",
      "Enterprise security",
      "API access",
      "Unlimited storage",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your team's needs with our straightforward
            pricing model.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl p-8 ${
                plan.popular
                  ? "border-2 border-purple-500 bg-white dark:bg-gray-800"
                  : "border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-purple-500 text-white text-xs font-bold py-1 px-3 rounded-bl">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500 pt-1">
                      <Check size={16} />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600"
                    : "bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 dark:bg-gray-800 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-700"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
