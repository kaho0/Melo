import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900 p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
              AI-Powered Productivity
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4">
              Transform your workflow with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                LuminaAI
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Empower your team with AI-driven tools that automate tedious tasks
              and help you focus on what truly matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800"
              >
                Book a Demo
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium dark:bg-gray-700">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium dark:bg-gray-600">
                  MK
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-xs font-medium dark:bg-gray-500">
                  AS
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-gray-900 dark:text-white">
                  1,000+
                </span>{" "}
                teams already using LuminaAI
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 p-4">
                <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg flex flex-col">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                        <span className="text-lg">✨</span>
                      </div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200">
                        LuminaAI Dashboard
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                        <span className="text-xs">🔍</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                        <span className="text-xs">🔔</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 p-4 overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Productivity Score
                        </div>
                        <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                          92%
                        </div>
                        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full w-11/12"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Tasks Automated
                        </div>
                        <div className="text-xl font-bold text-blue-500 dark:text-blue-400">
                          134
                        </div>
                        <div className="text-xs text-green-500 mt-1">
                          +12% from last week
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Weekly Performance
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Last 7 days
                        </div>
                      </div>
                      <div className="h-16 flex items-end space-x-2">
                        <div className="w-1/7 bg-purple-200 dark:bg-purple-800 rounded-t h-6"></div>
                        <div className="w-1/7 bg-purple-300 dark:bg-purple-700 rounded-t h-8"></div>
                        <div className="w-1/7 bg-purple-400 dark:bg-purple-600 rounded-t h-10"></div>
                        <div className="w-1/7 bg-purple-500 dark:bg-purple-500 rounded-t h-12"></div>
                        <div className="w-1/7 bg-purple-600 dark:bg-purple-400 rounded-t h-14"></div>
                        <div className="w-1/7 bg-purple-700 dark:bg-purple-300 rounded-t h-10"></div>
                        <div className="w-1/7 bg-purple-800 dark:bg-purple-200 rounded-t h-16"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-purple-50 dark:bg-purple-900/30 p-2 rounded-lg flex items-center justify-center">
                        <span className="text-xs">📈</span>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg flex items-center justify-center">
                        <span className="text-xs">📊</span>
                      </div>
                      <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg flex items-center justify-center">
                        <span className="text-xs">🤖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
