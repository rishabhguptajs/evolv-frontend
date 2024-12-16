"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Set Your Goals",
      description: "Define your habits and set meaningful goals. Our AI helps you create realistic, achievable targets.",
      image: "/goal-setting.svg"
    },
    {
      step: "02",
      title: "Track Progress",
      description: "Log your daily activities and watch your progress. Get insights and adjustments in real-time.",
      image: "/progress.svg"
    },
    {
      step: "03",
      title: "Stay Motivated",
      description: "Earn rewards, compete with friends, and celebrate milestones as you build better habits.",
      image: "/rewards.svg"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              How evolv works
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Start your journey to better habits in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-5xl font-bold text-white/10 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-white/60 mb-6">{item.description}</p>
              <img src={item.image} alt={item.title} className="w-full rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 