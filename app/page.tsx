import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Flame, Clock, Shield, Zap, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">GasFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm hover:text-primary transition">
                Features
              </a>
              <a href="#how-it-works" className="text-sm hover:text-primary transition">
                How it Works
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pretty">Gas Delivery at Your Fingertips</h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Book reliable gas delivery instantly. Real-time tracking, secure payments, and 24/7 customer support for
              your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Book Now
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-accent" />
              <span>Trusted by over 10,000+ customers</span>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <Flame className="w-40 h-40 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GasFlow?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of gas delivery with our advanced platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Get your gas delivered within hours of booking. Real-time tracking included.",
              },
              {
                icon: Zap,
                title: "Easy Booking",
                description: "Simple 3-step process to book your delivery. No complicated forms or delays.",
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Certified drivers, verified transactions, and 100% money-back guarantee.",
              },
              {
                icon: MapPin,
                title: "Wide Coverage",
                description: "Available in 500+ locations across the country.",
              },
              {
                icon: Phone,
                title: "24/7 Support",
                description: "Dedicated customer support team available round the clock for assistance.",
              },
              {
                icon: Flame,
                title: "Best Prices",
                description: "Competitive rates with transparent pricing. No hidden charges ever.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-colors">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Get your gas delivery in just 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Book Your Order",
                description: "Select your gas type, quantity, and preferred delivery time on our app.",
              },
              {
                step: "2",
                title: "Instant Confirmation",
                description: "Get real-time tracking and driver details immediately after booking.",
              },
              {
                step: "3",
                title: "Receive & Pay",
                description: "Driver delivers safely. Pay securely through our platform.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied customers and book your gas delivery today
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Sign Up for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/30 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About GasFlow</h3>
              <p className="text-sm text-muted-foreground">Revolutionizing gas delivery with technology and trust.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-primary transition">
                    How it Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Safety
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Email: support@gasflow.com
                <br />
                Phone: 1-800-GAS-FLOW
                <br />
                Available 24/7
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="text-sm text-muted-foreground">© 2025 GasFlow. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
