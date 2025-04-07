"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              LuminaAI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
          >
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800"
          >
            Sign In
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 py-4 px-4 border-b">
          <div className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800"
              >
                Sign In
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
