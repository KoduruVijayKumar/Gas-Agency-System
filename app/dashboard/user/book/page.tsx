"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { UserSidebar } from "@/components/user-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Package } from "lucide-react"

interface BookingData {
  gasType: string
  quantity: number
  date: string
  time: string
  address: string
  pincode: string
  phone: string
}

interface ConfirmationData extends BookingData {
  bookingId: string
  estimatedAmount: number
  deliverySlot: string
}

export default function BookingPage() {
  const router = useRouter()
  const [step, setStep] = useState<"form" | "confirmation">("form")
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState<BookingData>({
    gasType: "lpg-14kg",
    quantity: 1,
    date: "",
    time: "",
    address: "",
    pincode: "",
    phone: "",
  })
  const [confirmation, setConfirmation] = useState<ConfirmationData | null>(null)

  const gasTypes = [
    { id: "lpg-14kg", name: "LPG - 14kg Cylinder", price: 500 },
    { id: "lpg-5kg", name: "LPG - 5kg Cylinder", price: 250 },
    { id: "piped-gas", name: "Piped Gas", price: 300 },
  ]

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ]

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    const user = JSON.parse(userData)
    setFormData((prev) => ({
      ...prev,
      phone: user.phone || "",
    }))
    setIsLoading(false)
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number.parseInt(value) : value,
    }))
  }

  const getEstimatedAmount = () => {
    const selectedGas = gasTypes.find((g) => g.id === formData.gasType)
    return selectedGas ? selectedGas.price * formData.quantity : 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const bookingId = `BK${Date.now()}`
    const estimatedAmount = getEstimatedAmount()

    setConfirmation({
      ...formData,
      bookingId,
      estimatedAmount,
      deliverySlot: formData.time,
    })
    setStep("confirmation")
  }

  const handleConfirm = async () => {
    if (!confirmation) return

    console.log("[v0] Booking submitted:", confirmation)
    router.push("/dashboard/user/bookings")
  }

  if (isLoading) return null

  if (step === "confirmation" && confirmation) {
    return (
      <div className="flex min-h-screen bg-background">
        <UserSidebar />

        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
              <p className="text-muted-foreground mb-6">Your booking has been placed successfully</p>

              <div className="bg-muted/50 rounded-lg p-6 text-left mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Booking ID</p>
                    <p className="font-bold text-lg">{confirmation.bookingId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Order Amount</p>
                    <p className="font-bold text-lg">₹{confirmation.estimatedAmount}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product</span>
                    <span className="font-medium">{gasTypes.find((g) => g.id === confirmation.gasType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity</span>
                    <span className="font-medium">{confirmation.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Date</span>
                    <span className="font-medium">{confirmation.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Slot</span>
                    <span className="font-medium">{confirmation.deliverySlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Address</span>
                    <span className="font-medium">{confirmation.address}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-col sm:flex-row">
                <Button onClick={() => setStep("form")} variant="outline" className="flex-1">
                  Modify Booking
                </Button>
                <Button onClick={handleConfirm} className="flex-1 bg-primary hover:bg-primary/90">
                  Proceed to Payment
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <UserSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Book Gas Delivery</h1>
          <p className="text-muted-foreground mb-8">Fill in the details below to book your gas delivery</p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Select Gas Type</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {gasTypes.map((gas) => (
                    <label
                      key={gas.id}
                      className={`relative cursor-pointer p-4 rounded-lg border-2 transition ${
                        formData.gasType === gas.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="gasType"
                        value={gas.id}
                        checked={formData.gasType === gas.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-left">
                        <p className="font-medium">{gas.name}</p>
                        <p className="text-sm text-muted-foreground mt-1">₹{gas.price}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <option key={q} value={q}>
                      {q} {q === 1 ? "Cylinder" : "Cylinders"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Delivery Date</label>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 absolute ml-3 text-muted-foreground pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Delivery Time Slot</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Delivery Address</label>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mt-3 ml-3 absolute text-muted-foreground pointer-events-none" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter your full delivery address"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    rows={3}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="000000"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Base Amount:</span>
                  <span className="font-medium">₹{gasTypes.find((g) => g.id === formData.gasType)?.price || 0}</span>
                </div>
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                  <span className="text-muted-foreground">Quantity:</span>
                  <span className="font-medium">x{formData.quantity}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Amount:</span>
                  <span className="text-primary">₹{getEstimatedAmount()}</span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-2">
                Review & Confirm Booking
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
