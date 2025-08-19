"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Download, Shield, Globe, Zap } from "lucide-react"

export default function PricingPage() {
  const features = [
    "Unlimited data usage",
    "111+ server locations worldwide",
    "Unlimited device connections",
    "Military-grade encryption",
    "24/7 customer support",
    "Kill switch protection",
    "Strict no-logs policy",
    "Split tunneling",
    "Ad blocker included",
    "Malware protection",
    "High-speed connections",
    "Easy one-click connect",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-secondary text-secondary-foreground px-4 py-2 text-lg">
            <Star className="w-5 h-5 mr-2" />
            100% Free
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Phoenix VPN - Completely Free</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience premium VPN features without spending a penny. Phoenix VPN provides all the security and privacy
            features you need, completely free forever.
          </p>
        </div>

        {/* Free Plan Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-primary border-2 shadow-2xl">
            <CardHeader className="text-center pb-8 bg-gradient-to-r from-primary/10 to-secondary/10">
              <Badge className="mx-auto mb-4 bg-primary text-primary-foreground">
                <Download className="w-4 h-4 mr-1" />
                Download Now
              </Badge>
              <CardTitle className="text-3xl font-bold">Phoenix VPN</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-bold text-primary">FREE</span>
                </div>
                <div className="text-lg text-muted-foreground mt-2">Forever - Unlimited</div>
              </div>
              <CardDescription className="mt-4 text-lg">
                Completely free VPN app with full premium features
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full mt-8 py-4 text-lg"
                size="lg"
                onClick={() =>
                  window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")
                }
              >
                <Download className="w-5 h-5 mr-2" />
                Download Phoenix VPN Free
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Why Free Section */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why is Phoenix VPN Free?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We believe that online privacy and security are fundamental rights for everyone. Phoenix VPN is supported by
            trusted partners, allowing us to provide high-quality VPN service completely free of charge.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Absolute Security</h3>
              <p className="text-muted-foreground">Military-grade AES-256 bit encryption</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
              <p className="text-muted-foreground">111+ servers worldwide</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">High Speed</h3>
              <p className="text-muted-foreground">Fast connections, unlimited bandwidth</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Is Phoenix VPN really free?</h3>
              <p className="text-muted-foreground">
                Yes, Phoenix VPN is completely free with all premium features. No hidden fees, no time limits, and no
                credit card information required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Are there any data limits?</h3>
              <p className="text-muted-foreground">
                No, Phoenix VPN provides unlimited bandwidth. You can use as much data as you want without worrying
                about limits.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">How to download and install?</h3>
              <p className="text-muted-foreground">
                Simply click the "Download Phoenix VPN Free" button above, download the APK file and install it on your
                Android device. The installation process is simple and quick.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Is Phoenix VPN safe?</h3>
              <p className="text-muted-foreground">
                Absolutely safe. We use military-grade AES-256 bit encryption, strict no-logs policy, and the most
                advanced security protocols.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
