"use client";

import { FiTarget, FiFlag, FiBarChart2 } from "react-icons/fi";
import { BsBadge3D, BsBell, BsGraphUp } from "react-icons/bs";

export default function Features() {
  const features = [
    {
      icon: <FiTarget />,
      title: "Smart Habit Tracking",
      desc: "Track daily and weekly habits with visual streaks and completion rates",
    },
    {
      icon: <FiFlag />,
      title: "Goal Management",
      desc: "Set, track, and achieve personal goals with milestone tracking",
    },
    {
      icon: <BsBadge3D />,
      title: "Gamification",
      desc: "Earn badges, points, and level up as you maintain consistency",
    },
    {
      icon: <FiBarChart2 />,
      title: "Analytics Dashboard",
      desc: "Visualize progress with interactive charts and habit patterns",
    },
    {
      icon: <BsBell />,
      title: "Smart Reminders",
      desc: "Get personalized notifications and streak alerts",
    },
    {
      icon: <BsGraphUp />,
      title: "AI Insights",
      desc: "Receive AI-powered recommendations for habit optimization",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Powerful Features
        </h2>
        <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
          Discover the tools that will transform your daily routines into lasting achievements
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {features.map((feature, i) => (
            <div key={i} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200" />
              <div className="relative p-4 sm:p-6 bg-black rounded-lg h-full">
                <div className="text-lg sm:text-xl mb-2 sm:mb-3 text-violet-400">
                  {feature.icon}
                </div>
                <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}