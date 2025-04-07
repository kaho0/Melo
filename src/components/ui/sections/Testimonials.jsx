import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "LuminaAI has revolutionized how our team works. The AI assistants feel like having an extra team member who's always available.",
    author: "Sarah Johnson",
    position: "CTO, TechStart Inc.",
  },
  {
    quote:
      "We've seen a 40% increase in productivity since implementing LuminaAI across our organization. The ROI is incredible.",
    author: "Michael Chen",
    position: "Operations Director, Global Solutions",
  },
  {
    quote:
      "The document intelligence feature alone has saved our legal team countless hours of review work. Game changer!",
    author: "Priya Patel",
    position: "Legal Counsel, Enterprise Corp",
  },
  {
    quote:
      "I was skeptical about AI tools, but LuminaAI's intuitive design made adoption seamless across our diverse team.",
    author: "James Wilson",
    position: "Team Lead, Creative Studios",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Trusted by innovative teams
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what our customers are saying about how LuminaAI has transformed
            their workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
