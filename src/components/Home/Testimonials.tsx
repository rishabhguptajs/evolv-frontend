"use client";

import { FiUser } from "react-icons/fi";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Evolv has completely changed how I approach my daily routines. The gamification aspect makes building habits fun!",
      author: "Sarah J.",
      role: "Fitness Coach"
    },
    {
      quote: "The AI insights have helped me optimize my habits in ways I never thought possible. Truly revolutionary!",
      author: "Michael R.",
      role: "Software Engineer"
    },
    {
      quote: "I've tried many habit tracking apps, but Evolv's approach to goal setting and tracking is unmatched.",
      author: "Emma L.",
      role: "Student"
    },
    {
      quote: "The visual progress tracking keeps me motivated, and the community support is incredible!",
      author: "David M.",
      role: "Entrepreneur"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">What Our Users Say</h2>
        <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
          Hear from people who have transformed their lives using Evolv
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
              <p className="text-white/80 text-base sm:text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-violet-400"/>
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 