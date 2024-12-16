"use client";

import { BsBadge3D } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-mono bg-violet-500/10 px-2 sm:px-3 py-1 rounded-full text-violet-400">
                Launching Soon - Join Waitlist
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Transform habits into
              <br />
              <span className="relative">
                achievements
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 150 4 200 4" stroke="url(#paint0_linear)" strokeWidth="6" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#8B5CF6"/>
                      <stop offset="1" stopColor="#7C3AED"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto md:mx-0">
              Track habits, achieve goals, and unlock your potential with AI-powered insights and gamified progress tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group relative px-4 sm:px-6 py-2 overflow-hidden rounded-lg w-full sm:w-auto">
                <div className="absolute inset-0 w-3 bg-violet-600 transition-all duration-[250ms] ease-out group-hover:w-full"/>
                <span className="relative text-white group-hover:text-white">Start Free Trial →</span>
              </button>
              <button className="px-4 sm:px-6 py-2 text-white/70 hover:text-white transition-colors w-full sm:w-auto">
                View Demo
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none">
            <div className="absolute -inset-4 bg-violet-500/20 blur-3xl rounded-full"/>
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 bg-white/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                    <BsBadge3D className="w-5 h-5 sm:w-6 sm:h-6"/>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium">Achievement Unlocked!</h3>
                    <p className="text-xs sm:text-sm text-white/60">7-Day Meditation Streak</p>
                  </div>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-violet-500"/>
                </div>
              </div>
              {[
                { title: "Current Streak", value: "12 Days" },
                { title: "Total Points", value: "2,450" },
                { title: "Level", value: "Pro" },
                { title: "Badges", value: "15" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3 sm:p-4 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform">
                  <p className="text-xs sm:text-sm text-white/60">{stat.title}</p>
                  <p className="text-base sm:text-lg font-medium">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}