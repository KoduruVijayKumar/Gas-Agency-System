"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { UserSidebar } from "@/components/user-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BookingsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) return null

  const bookings = [
    {
      id: "BK001",
      type: "LPG - 14kg",
      date: "Jan 10, 2025",
      time: "10:30 AM",
      amount: "₹500",
      address: "123 Main St, City",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "BK002",
      type: "Piped Gas",
      date: "Jan 5, 2025",
      time: "2:15 PM",
      amount: "₹300",
      address: "456 Park Ave, City",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "BK003",
      type: "LPG - 5kg",
      date: "Dec 28, 2024",
      time: "9:00 AM",
      amount: "₹250",
      address: "789 Oak Rd, City",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "BK004",
      type: "LPG - 14kg",
      date: "Dec 20, 2024",
      time: "3:30 PM",
      amount: "₹500",
      address: "321 Elm St, City",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <UserSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
          <p className="text-muted-foreground">View and manage all your gas delivery orders</p>
        </div>

        <Card className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Booking ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 font-semibold">Date & Time</th>
                  <th className="text-left py-3 px-4 font-semibold">Address</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition">
                    <td className="py-3 px-4 font-medium">{booking.id}</td>
                    <td className="py-3 px-4">{booking.type}</td>
                    <td className="py-3 px-4 text-sm">
                      {booking.date} {booking.time}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{booking.address}</td>
                    <td className="py-3 px-4 font-semibold">{booking.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${booking.statusColor}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
