"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import SocialLogin from "@/components/auth/SocialLogin"
import { FiLock } from "react-icons/fi"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-violet-500/30 flex items-center justify-center">
      <div className="relative w-[380px] p-4">
        <div className="absolute -inset-1">
          <div className="w-full h-full bg-gradient-to-r from-violet-600 to-purple-600 opacity-20 blur-lg rounded-lg" />
        </div>

        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-3">
              <FiLock className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-xl font-bold">Welcome Back</h2>
            <p className="text-white/60 text-sm mt-1">
              Sign in to continue your journey
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-2 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-white/80 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-white placeholder-white/40 text-sm"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-white/80 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-white placeholder-white/40 text-sm"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full px-3 py-2 overflow-hidden rounded-lg text-sm"
            >
              <div className="absolute inset-0 w-3 bg-violet-600 transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative text-white group-hover:text-white">
                Sign in →
              </span>
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white/95 backdrop-blur-sm border border-white/10 text-black/80 rounded-md">
                  or
                </span>
              </div>
            </div>

            <div className="mt-4">
              <SocialLogin />
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/60">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
