"use client";

import { FiLock, FiCalendar } from "react-icons/fi";

export default function DetailedFeatures() {
  const features = [
    {
      title: "Secure User Authentication",
      description: "Keep your progress safe with our robust authentication system.",
      points: [
        "JWT-based secure authentication",
        "Persistent sessions with secure storage",
        "Easy password recovery process"
      ],
      icon: <FiLock className="w-12 h-12 text-violet-400" />,
      reversed: false
    },
    {
      title: "Advanced Habit Tracking",
      description: "Comprehensive tools to build and maintain positive habits.",
      points: [
        "Daily and weekly habit tracking",
        "Visual streak indicators",
        "Flexible habit scheduling"
      ],
      icon: <FiCalendar className="w-12 h-12 text-violet-400" />,
      reversed: true
    }
    // Add other detailed features here
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Detailed Features</h2>
        <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
          Explore the powerful capabilities that make Evolv your perfect companion for personal growth
        </p>
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${feature.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 sm:gap-10 md:gap-12`}
            >
              <div className="flex-1 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">{feature.title}</h3>
                <p className="text-base sm:text-lg text-white/70">{feature.description}</p>
                <ul className="space-y-3 sm:space-y-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-500"/>
                      <span className="text-sm sm:text-base text-white/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 w-full">
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-violet-500/20 flex items-center justify-center animate-pulse">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-violet-500/30 animate-spin-slow" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border-2 border-violet-500/20 animate-spin-slower" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 