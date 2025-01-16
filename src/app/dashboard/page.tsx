"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { checkAuth } from "@/redux/features/authSlice"
import { FiActivity, FiAward, FiCalendar, FiTrendingUp } from "react-icons/fi"

export default function Dashboard() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { user, isAuthenticated, loading } = useAppSelector(
    (state) => state.auth
  )

  useEffect(() => {
    const validateAuth = async () => {
      const result = await dispatch(checkAuth())
      if (checkAuth.rejected.match(result)) {
        router.push("/login")
      }
    }
    validateAuth()
  }, [dispatch, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-violet-500" />
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user.email.split("@")[0]}! 👋
        </h1>
        <p className="text-white/60">
          Here's what's happening with your habits today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Active Habits"
          value="12"
          change="+2"
          icon={<FiActivity />}
        />
        <StatCard
          title="Completion Rate"
          value="87%"
          change="+5%"
          icon={<FiTrendingUp />}
        />
        <StatCard
          title="Current Streak"
          value="8 days"
          change="+1"
          icon={<FiCalendar />}
        />
        <StatCard
          title="Achievements"
          value="5"
          change="+1"
          icon={<FiAward />}
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white/5 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <ActivityItem key={i} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <QuickActionCard
          title="Add New Habit"
          description="Start tracking a new daily habit"
          action={() => {}}
        />
        <QuickActionCard
          title="View Statistics"
          description="See detailed progress analytics"
          action={() => {}}
        />
        <QuickActionCard
          title="Set Reminders"
          description="Configure your notification settings"
          action={() => {}}
        />
      </div>
    </div>
  )
}

// Helper Components
const StatCard = ({
  title,
  value,
  change,
  icon,
}: {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}) => (
  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
    <div className="flex items-center justify-between mb-4">
      <span className="text-white/60">{title}</span>
      <span className="text-2xl text-violet-400">{icon}</span>
    </div>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-bold">{value}</span>
      <span
        className={`text-sm ${
          change.startsWith("+") ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </span>
    </div>
  </div>
)

const ActivityItem = () => (
  <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
    <div className="w-2 h-2 rounded-full bg-violet-400" />
    <div className="flex-1">
      <p className="text-sm">Completed "Morning Meditation"</p>
      <p className="text-xs text-white/60">2 hours ago</p>
    </div>
  </div>
)

const QuickActionCard = ({
  title,
  description,
  action,
}: {
  title: string
  description: string
  action: () => void
}) => (
  <button
    onClick={action}
    className="bg-white/5 p-6 rounded-lg text-left border border-white/10 hover:bg-white/10 transition-colors"
  >
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-white/60">{description}</p>
  </button>
)
