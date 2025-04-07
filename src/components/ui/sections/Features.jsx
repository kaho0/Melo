import {
  Activity,
  Zap,
  Calendar,
  MessageSquare,
  FileText,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: <Activity size={24} />,
    title: "Smart Analytics",
    description:
      "Get real-time insights into your team's productivity and workflow patterns.",
  },
  {
    icon: <Zap size={24} />,
    title: "Automation",
    description:
      "Automate repetitive tasks with AI workflows that learn from your team's habits.",
  },
  {
    icon: <Calendar size={24} />,
    title: "Smart Scheduling",
    description:
      "AI-powered calendar management that optimizes your team's time and availability.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Team Collaboration",
    description:
      "Enhanced communication tools with AI-summarization and action item extraction.",
  },
  {
    icon: <FileText size={24} />,
    title: "Document Intelligence",
    description:
      "Extract insights, summarize, and organize your documents automatically.",
  },
  {
    icon: <Lock size={24} />,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance with major security standards.",
  },
];
export default function Features() {
  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
            Features
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Everything you need to boost productivity
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our comprehensive suite of AI-powered tools helps your team work
            smarter, not harder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900 dark:border-gray-800"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4 dark:bg-purple-900 dark:text-purple-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
