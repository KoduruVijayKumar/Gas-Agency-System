"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { UserSidebar } from "@/components/user-sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface UserData {
  fullName: string
  email: string
  phone: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<UserData>({ fullName: "", email: "", phone: "" })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    const parsed = JSON.parse(userData)
    setUser(parsed)
    setFormData(parsed)
    setIsLoading(false)
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(formData))
    setUser(formData)
    setIsEditing(false)
  }

  if (isLoading) return null

  return (
    <div className="flex min-h-screen bg-background">
      <UserSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your account information</p>
        </div>

        <div className="max-w-2xl">
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground disabled:opacity-50"
                />
              </div>

              <div className="pt-4">
                {isEditing ? (
                  <div className="flex gap-4">
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                      Save Changes
                    </Button>
                    <Button onClick={() => setIsEditing(false)} variant="outline">
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsEditing(true)} variant="outline">
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
