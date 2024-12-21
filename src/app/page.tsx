import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import { FiTarget, FiBarChart2, FiFlag, FiLock, FiUser, FiCalendar } from 'react-icons/fi'
import { BsGraphUp, BsBadge3D, BsBell } from 'react-icons/bs'
import Footer from '@/components/Layout/Footer'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-violet-500/30">
      <Navbar />
      
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
            <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-mono bg-violet-500/10 px-2 sm:px-3 py-1 rounded-full text-violet-400">
                  Launching Soon ⭐
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Transform habits into<br/>
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
                  <span className="relative text-white group-hover:text-white">Get Started →</span>
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

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Discover the tools that will transform your daily routines into lasting achievements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
            {[
              { 
                icon: <FiTarget/>, 
                title: "Smart Habit Tracking", 
                desc: "Track daily and weekly habits with visual streaks and completion rates" 
              },
              { 
                icon: <FiFlag/>, 
                title: "Goal Management", 
                desc: "Set, track, and achieve personal goals with milestone tracking" 
              },
              { 
                icon: <BsBadge3D/>, 
                title: "Gamification", 
                desc: "Earn badges, points, and level up as you maintain consistency" 
              },
              { 
                icon: <FiBarChart2/>, 
                title: "Analytics Dashboard", 
                desc: "Visualize progress with interactive charts and habit patterns" 
              },
              { 
                icon: <BsBell/>, 
                title: "Smart Reminders", 
                desc: "Get personalized notifications and streak alerts" 
              },
              { 
                icon: <BsGraphUp/>, 
                title: "AI Insights", 
                desc: "Receive AI-powered recommendations for habit optimization" 
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200"/>
                <div className="relative p-4 sm:p-6 bg-black rounded-lg h-full">
                  <div className="text-lg sm:text-xl mb-2 sm:mb-3 text-violet-400">{feature.icon}</div>
                  <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Detailed Features</h2>
          <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Explore the powerful capabilities that make Evolv your perfect companion for personal growth
          </p>
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="flex-1 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Secure User Authentication</h3>
                <p className="text-base sm:text-lg text-white/70">Keep your progress safe with our robust authentication system.</p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">JWT-based secure authentication</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Persistent sessions with secure storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Easy password recovery process</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 w-full">
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-violet-500/20 flex items-center justify-center animate-pulse">
                      <FiLock className="w-12 h-12 text-violet-400" />
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

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12">
              <div className="flex-1 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Advanced Habit Tracking</h3>
                <p className="text-base sm:text-lg text-white/70">Comprehensive tools to build and maintain positive habits.</p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Daily and weekly habit tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Visual streak indicators</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Flexible habit scheduling</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 w-full">
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={`rounded-lg ${i % 2 === 0 ? 'bg-violet-500/20' : 'bg-white/5'} flex items-center justify-center`}>
                        <FiCalendar className={`w-6 h-6 ${i % 2 === 0 ? 'text-violet-400' : 'text-white/20'}`} />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-violet-500/30 flex items-center justify-center">
                      <div className="text-2xl font-bold text-violet-400">7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="flex-1 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Comprehensive Goal Management</h3>
                <p className="text-base sm:text-lg text-white/70">Set and achieve meaningful goals with our powerful tracking system.</p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Milestone-based goal tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Progress visualization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Smart goal recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 w-full">
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-8 border-violet-500/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute bottom-0 w-full h-3/4 bg-violet-500/30" />
                      <div className="relative text-2xl font-bold text-violet-400">75%</div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-4">
                    <div className="w-3/4 h-2 bg-violet-500/20 rounded-full mx-auto overflow-hidden">
                      <div className="w-3/4 h-full bg-violet-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12">
              <div className="flex-1 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Data-Driven Insights</h3>
                <p className="text-base sm:text-lg text-white/70">Make informed decisions with our advanced analytics and AI insights.</p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Interactive charts and graphs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">AI-powered habit recommendations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"/>
                    <span className="text-sm sm:text-base text-white/70">Trend analysis and predictions</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 w-full">
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path d="M10,50 Q25,20 40,50 T70,50 T100,50" stroke="url(#gradient)" fill="none" strokeWidth="2"/>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#7C3AED"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`rounded-lg ${i % 3 === 0 ? 'bg-violet-500/20' : 'bg-white/5'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Our Impact</h2>
          <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Join thousands of users who are already transforming their lives with Evolv
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "10k+", label: "Active Users" },
              { value: "1M+", label: "Habits Tracked" },
              { value: "95%", label: "Success Rate" },
              { value: "4.9/5", label: "User Rating" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-violet-400 mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-800 to-violet-950 p-8 sm:p-12">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Habits?</h2>
                <p className="text-white/90 text-base sm:text-lg">
                  Join our community of achievers and start your journey to better habits today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button className="px-6 py-3 bg-violet-500 text-white font-medium rounded-lg hover:bg-violet-400 transition-colors">
                  Get Started Free
                </button>
                <button className="px-6 py-3 border border-violet-500/30 text-white font-medium rounded-lg hover:bg-violet-500/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">What Our Users Say</h2>
          <p className="text-center text-white/70 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Hear from people who have transformed their lives using Evolv
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
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
            ].map((testimonial, i) => (
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

      <Footer />
    </div>
  )
}

export default Home