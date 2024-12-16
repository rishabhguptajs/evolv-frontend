"use client";

export default function Stats() {
  const stats = [
    { value: "10k+", label: "Active Users" },
    { value: "1M+", label: "Habits Tracked" },
    { value: "95%", label: "Success Rate" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Our Impact</h2>
        <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
          Join thousands of users who are already transforming their lives with Evolv
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-violet-400 mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 