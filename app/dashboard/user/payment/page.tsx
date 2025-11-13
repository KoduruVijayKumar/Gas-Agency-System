"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { UserSidebar } from "@/components/user-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Lock, CheckCircle } from "lucide-react"

interface BookingDetails {
  bookingId: string
  product: string
  amount: number
  quantity: number
  date: string
  address: string
}

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "wallet">("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }

    const bookingId = searchParams.get("bookingId") || "BK001"
    const booking = {
      bookingId,
      product: "LPG - 14kg Cylinder",
      amount: 500,
      quantity: 1,
      date: new Date().toISOString().split("T")[0],
      address: "123 Main St, City",
    }
    setBookingDetails(booking)
    setIsLoading(false)
  }, [router, searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCardPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("[v0] Payment processed:", {
        method: paymentMethod,
        amount: bookingDetails?.amount,
        bookingId: bookingDetails?.bookingId,
      })

      setPaymentSuccess(true)
      setTimeout(() => {
        router.push("/dashboard/user/bookings")
      }, 2000)
    } catch (error) {
      console.error("[v0] Payment error:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  if (isLoading) return null

  if (paymentSuccess) {
    return (
      <div className="flex min-h-screen bg-background">
        <UserSidebar />

        <div className="flex-1 p-4 md:p-8 flex items-center justify-center">
          <Card className="p-8 text-center max-w-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground mb-6">Your booking has been confirmed and payment processed.</p>

            <div className="bg-muted/50 rounded-lg p-4 text-left mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Booking ID</p>
                  <p className="font-bold">{bookingDetails?.bookingId}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Amount Paid</p>
                  <p className="font-bold">₹{bookingDetails?.amount}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">Redirecting to bookings...</p>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <UserSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Complete Payment</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="p-6">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Booking ID:</span>
                    <span className="font-medium">{bookingDetails?.bookingId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Product:</span>
                    <span className="font-medium">{bookingDetails?.product}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="font-medium">x{bookingDetails?.quantity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Date:</span>
                    <span className="font-medium">{bookingDetails?.date}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="text-2xl font-bold text-primary">₹{bookingDetails?.amount}</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="font-bold text-lg mb-6">Choose Payment Method</h2>

                <div className="space-y-3 mb-8">
                  {[
                    { id: "card", label: "Credit/Debit Card", icon: CreditCard },
                    { id: "upi", label: "UPI (Google Pay, PhonePe, etc.)", icon: CreditCard },
                    { id: "wallet", label: "Digital Wallet", icon: CreditCard },
                  ].map((method) => {
                    const Icon = method.icon
                    return (
                      <label
                        key={method.id}
                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition ${
                          paymentMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={(e) => setPaymentMethod(e.target.value as "card" | "upi" | "wallet")}
                          className="sr-only"
                        />
                        <Icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{method.label}</span>
                      </label>
                    )
                  })}
                </div>

                {paymentMethod === "card" && (
                  <form onSubmit={handleCardPayment} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                          type="password"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength="3"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                      <Lock className="w-4 h-4" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 py-2"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing Payment..." : `Pay ₹${bookingDetails?.amount}`}
                    </Button>
                  </form>
                )}

                {paymentMethod === "upi" && (
                  <form onSubmit={handleCardPayment} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">UPI ID</label>
                      <input
                        type="text"
                        placeholder="yourname@bankname"
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 py-2"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : `Pay ₹${bookingDetails?.amount} via UPI`}
                    </Button>
                  </form>
                )}

                {paymentMethod === "wallet" && (
                  <form onSubmit={handleCardPayment} className="space-y-4">
                    <div className="text-center py-6 bg-muted/30 rounded-lg">
                      <p className="text-muted-foreground mb-4">Redirect to your wallet provider</p>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : `Complete Payment via Wallet`}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
