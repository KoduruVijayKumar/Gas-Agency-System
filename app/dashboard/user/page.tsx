"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { UserSidebar } from "@/components/user-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Clock, DollarSign, MapPin } from "lucide-react"

interface UserData {
  fullName: string
  email: string
}

export default function UserDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    setUser(JSON.parse(userData))
    setIsLoading(false)
  }, [router])

  if (isLoading) return null

  return (
    <div className="flex min-h-screen bg-background">
      <UserSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, {user?.fullName?.split(" ")[0]}</h1>
          <p className="text-muted-foreground">Manage your gas bookings and account here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Bookings", value: "2", icon: TrendingUp, color: "text-primary" },
            { label: "Total Orders", value: "12", icon: Clock, color: "text-accent" },
            { label: "Total Spent", value: "₹2,450", icon: DollarSign, color: "text-secondary" },
            { label: "Deliveries", value: "12", icon: MapPin, color: "text-primary" },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card key={idx} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 opacity-30 ${stat.color}`} />
                </div>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
              <div className="space-y-4">
                {[
                  {
                    id: "BK001",
                    type: "LPG - 14kg",
                    date: "Jan 10, 2025",
                    amount: "₹500",
                    status: "Delivered",
                    statusColor: "bg-green-100 text-green-800",
                  },
                  {
                    id: "BK002",
                    type: "Piped Gas",
                    date: "Jan 5, 2025",
                    amount: "₹300",
                    status: "Delivered",
                    statusColor: "bg-green-100 text-green-800",
                  },
                  {
                    id: "BK003",
                    type: "LPG - 5kg",
                    date: "Dec 28, 2024",
                    amount: "₹250",
                    status: "Delivered",
                    statusColor: "bg-green-100 text-green-800",
                  },
                ].map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition"
                  >
                    <div>
                      <p className="font-medium">{booking.type}</p>
                      <p className="text-sm text-muted-foreground">{booking.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">{booking.amount}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${booking.statusColor}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/dashboard/user/bookings">
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Bookings
                </Button>
              </Link>
            </Card>
          </div>

          <div>
            <Card className="p-6 h-full flex flex-col">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3 flex-1">
                <Link href="/dashboard/user/book">
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </Link>
                <Link href="/dashboard/user/bookings">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Bookings
                  </Button>
                </Link>
                <Link href="/dashboard/user/profile">
                  <Button variant="outline" className="w-full bg-transparent">
                    Update Profile
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
