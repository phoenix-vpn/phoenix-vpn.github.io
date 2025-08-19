import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Shield, Globe, Users, ArrowRight } from "lucide-react"

export default function FreeVPNPage() {
  const freeFeatures = [
    { feature: "500MB daily data limit", included: true },
    { feature: "3 server locations", included: true },
    { feature: "1 device connection", included: true },
    { feature: "Basic AES-256 encryption", included: true },
    { feature: "Email support", included: true },
    { feature: "No credit card required", included: true },
    { feature: "Unlimited bandwidth", included: false },
    { feature: "111+ server locations", included: false },
    { feature: "10 device connections", included: false },
    { feature: "Kill switch protection", included: false },
    { feature: "24/7 priority support", included: false },
    { feature: "No-logs policy", included: false },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Student",
      content:
        "Perfect for checking my university email securely on campus WiFi. The free plan gives me just enough data for essential browsing.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Freelancer",
      content:
        "Started with the free plan to test Phoenix VPN. The speed and reliability convinced me to upgrade to premium within a week.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Traveler",
      content:
        "Great for occasional use when traveling. I use the free plan for quick security checks and important transactions.",
      rating: 4,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">100% Free Forever</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Free VPN Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Phoenix VPN's premium security without any cost. Perfect for light browsing, email checking, and
            testing our service quality.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">2M+</div>
            <div className="text-sm text-muted-foreground">Free Users</div>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Server Locations</div>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
            <div className="text-sm text-muted-foreground">AES Encryption</div>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">500MB</div>
            <div className="text-sm text-muted-foreground">Daily Data</div>
          </div>
        </div>

        {/* Free vs Premium Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Free vs Premium Features</h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">What's Included in Free Plan</CardTitle>
              <CardDescription>Compare our free offering with premium features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {freeFeatures.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <span className="text-sm">{item.feature}</span>
                    <div className="flex items-center gap-2">
                      {item.included ? (
                        <>
                          <Check className="w-5 h-5 text-green-500" />
                          <Badge variant="secondary" className="text-xs">
                            Free
                          </Badge>
                        </>
                      ) : (
                        <>
                          <X className="w-5 h-5 text-muted-foreground" />
                          <Badge variant="outline" className="text-xs">
                            Premium
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Get Started */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started in 3 Easy Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Account</h3>
              <p className="text-muted-foreground">
                Sign up with just your email address. No credit card or payment information required.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Download App</h3>
              <p className="text-muted-foreground">
                Install Phoenix VPN on your device. Available for Windows, Mac, iOS, and Android.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Browsing</h3>
              <p className="text-muted-foreground">
                Connect to one of our free servers and enjoy secure, private browsing immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Free Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Check
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Try Phoenix VPN Free?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of users who trust Phoenix VPN for their online security. Start with our free plan and upgrade
            when you need more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-3">
              Get Free VPN Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              View Premium Plans
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
