"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card } from "@/components/ui/card"
import { Package, Users, Truck, DollarSign, AlertCircle } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const adminData = localStorage.getItem("admin")
    if (!adminData) {
      router.push("/auth/admin-login")
      return
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) return null

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome to GasFlow Administration Panel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total Orders", value: "2,345", icon: Package, color: "text-primary", change: "+12% this month" },
            { label: "Active Users", value: "1,234", icon: Users, color: "text-accent", change: "+8% this month" },
            { label: "Active Drivers", value: "45", icon: Truck, color: "text-secondary", change: "5 new this week" },
            { label: "Revenue", value: "₹12.5L", icon: DollarSign, color: "text-primary", change: "+15% this month" },
            { label: "Pending Orders", value: "23", icon: AlertCircle, color: "text-destructive", change: "2 urgent" },
          ].map((metric, idx) => {
            const Icon = metric.icon
            return (
              <Card key={idx} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                  <Icon className={`w-6 h-6 opacity-30 ${metric.color}`} />
                </div>
                <p className="text-xs text-muted-foreground">{metric.change}</p>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-medium">Order ID</th>
                      <th className="text-left py-2 px-2 font-medium">Customer</th>
                      <th className="text-left py-2 px-2 font-medium">Product</th>
                      <th className="text-left py-2 px-2 font-medium">Amount</th>
                      <th className="text-left py-2 px-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "BK001", customer: "John Doe", product: "LPG - 14kg", amount: "₹500", status: "Delivered" },
                      {
                        id: "BK002",
                        customer: "Jane Smith",
                        product: "Piped Gas",
                        amount: "₹300",
                        status: "In Transit",
                      },
                      { id: "BK003", customer: "Bob Johnson", product: "LPG - 5kg", amount: "₹250", status: "Pending" },
                      {
                        id: "BK004",
                        customer: "Alice Williams",
                        product: "LPG - 14kg",
                        amount: "₹500",
                        status: "Delivered",
                      },
                      {
                        id: "BK005",
                        customer: "Charlie Brown",
                        product: "Piped Gas",
                        amount: "₹300",
                        status: "In Transit",
                      },
                    ].map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-muted/30 transition">
                        <td className="py-3 px-2 font-medium text-primary">{order.id}</td>
                        <td className="py-3 px-2">{order.customer}</td>
                        <td className="py-3 px-2 text-muted-foreground">{order.product}</td>
                        <td className="py-3 px-2 font-semibold">{order.amount}</td>
                        <td className="py-3 px-2">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "In Transit"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Quick Summary</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Delivery Success Rate</p>
                <p className="text-2xl font-bold text-green-600">98.5%</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Avg. Delivery Time</p>
                <p className="text-2xl font-bold text-blue-600">2.3 hours</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Customer Rating</p>
                <p className="text-2xl font-bold text-purple-600">4.8/5.0</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Today's Orders</p>
                <p className="text-2xl font-bold text-orange-600">127</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
