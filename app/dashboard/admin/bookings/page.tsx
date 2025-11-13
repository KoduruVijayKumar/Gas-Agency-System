"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminBookingsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState("all")

  useEffect(() => {
    const adminData = localStorage.getItem("admin")
    if (!adminData) {
      router.push("/auth/admin-login")
      return
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) return null

  const bookings = [
    {
      id: "BK001",
      customer: "John Doe",
      phone: "+91-9876543210",
      product: "LPG - 14kg",
      date: "Jan 10, 2025",
      time: "10:30 AM",
      amount: "₹500",
      driver: "Rajesh K.",
      address: "123 Main St",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "BK002",
      customer: "Jane Smith",
      phone: "+91-9876543211",
      product: "Piped Gas",
      date: "Jan 10, 2025",
      time: "11:45 AM",
      amount: "₹300",
      driver: "Amit S.",
      address: "456 Park Ave",
      status: "In Transit",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "BK003",
      customer: "Bob Johnson",
      phone: "+91-9876543212",
      product: "LPG - 5kg",
      date: "Jan 10, 2025",
      time: "1:00 PM",
      amount: "₹250",
      driver: "-",
      address: "789 Oak Rd",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "BK004",
      customer: "Alice Williams",
      phone: "+91-9876543213",
      product: "LPG - 14kg",
      date: "Jan 9, 2025",
      time: "3:30 PM",
      amount: "₹500",
      driver: "Vikram P.",
      address: "321 Elm St",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
  ]

  const filteredBookings =
    filterStatus === "all" ? bookings : bookings.filter((b) => b.status.toLowerCase().includes(filterStatus))

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-8 flex justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Bookings</h1>
            <p className="text-muted-foreground">Manage and track all customer bookings</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Export Data</Button>
        </div>

        <Card className="p-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            {["all", "pending", "in transit", "delivered"].map((status) => (
              <Button
                key={status}
                variant={filterStatus === status ? "default" : "outline"}
                onClick={() => setFilterStatus(status)}
                className={filterStatus === status ? "bg-primary" : ""}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Order ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 font-semibold">Date & Time</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Driver</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition">
                    <td className="py-3 px-4 font-medium text-primary">{booking.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{booking.customer}</p>
                        <p className="text-xs text-muted-foreground">{booking.phone}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">{booking.product}</td>
                    <td className="py-3 px-4 text-xs">
                      {booking.date} {booking.time}
                    </td>
                    <td className="py-3 px-4 font-semibold">{booking.amount}</td>
                    <td className="py-3 px-4 text-sm">{booking.driver}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${booking.statusColor}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm">
                        Manage
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
