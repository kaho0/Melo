import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your team's productivity?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of teams who are working smarter with LuminaAI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-white dark:text-purple-600 dark:hover:bg-gray-100"
          >
            Start Your Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
