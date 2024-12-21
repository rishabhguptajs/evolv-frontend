import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-12 sm:py-16 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 to-transparent opacity-50"/>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"/>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower"/>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="group flex items-center gap-3 mb-6 hover:-translate-y-0.5 transition-transform">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <span className="text-lg font-bold">e</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">evolv</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Building better habits, one day at a time. Join our community of achievers and transform your life.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: "🌟", text: "4.9/5 on App Store" },
                  { icon: "👥", text: "50K+ Users" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                    <span>{stat.icon}</span>
                    <span>{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {[
              { 
                title: "Product", 
                items: ["Features", "Pricing", "API", "FAQ", "Support", "Resources"]
              },
              { 
                title: "Company", 
                items: ["About", "Blog", "Careers", "Press Kit", "Partners", "Contact"]
              },
              { 
                title: "Legal & More", 
                items: ["Privacy Policy", "Terms of Service", "Security", "Status", "Sitemap"]
              }
            ].map((col, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg mb-6">{col.title}</h3>
                <ul className="space-y-4">
                  {col.items.map(item => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <span className="relative">
                          {item}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-500 transition-all duration-300 group-hover:w-full"/>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm text-white/60">© 2023 Evolv. All rights reserved.</p>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"/>
                <p className="text-sm text-white/60">Made with ❤️ by Rishabh</p>
              </div>

              <div className="flex items-center gap-6">
                {[
                  { name: "Twitter", icon: "𝕏" },
                  { name: "GitHub", icon: "⌨" },
                  { name: "Discord", icon: "💬" },
                  { name: "LinkedIn", icon: "💼" }
                ].map(social => (
                  <a
                    key={social.name}
                    href="#"
                    className="group relative p-2 hover:-translate-y-1 transition-transform"
                    aria-label={social.name}
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"/>
                    <span className="relative text-lg text-white/70 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              {["App Store", "Play Store"].map(store => (
                <button
                  key={store}
                  className="group relative px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    Get it on {store}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
