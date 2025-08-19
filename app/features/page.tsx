"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Globe, Lock, Eye, Wifi, Server, Smartphone } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description:
        "AES-256 encryption protects your data with the same security standards used by governments and militaries worldwide.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Speed",
      description:
        "Optimized servers deliver blazing-fast connection speeds without compromising your security or privacy.",
    },
    {
      icon: Globe,
      title: "111+ Server Locations",
      description: "Access content from anywhere with our global network of high-speed servers across 60+ countries.",
    },
    {
      icon: Lock,
      title: "No-Logs Policy",
      description:
        "We never track, collect, or share your private data. Your online activity remains completely anonymous.",
    },
    {
      icon: Eye,
      title: "Kill Switch Protection",
      description: "Automatically blocks internet traffic if VPN connection drops, ensuring your data never leaks.",
    },
    {
      icon: Wifi,
      title: "Public WiFi Security",
      description: "Stay safe on public networks with automatic protection against hackers and data thieves.",
    },
    {
      icon: Server,
      title: "Unlimited Bandwidth",
      description: "No data caps or speed throttling. Stream, download, and browse without limits.",
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Protect up to 10 devices simultaneously with one Phoenix VPN account.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Powerful VPN Features</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Phoenix VPN delivers enterprise-grade security with consumer-friendly simplicity. Discover the features that
            make us the trusted choice for millions worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advanced Features Section */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">DNS Leak Protection</h3>
              <p className="text-muted-foreground mb-6">
                Prevents DNS requests from leaking outside the VPN tunnel, ensuring your browsing history remains
                completely private.
              </p>

              <h3 className="text-xl font-semibold mb-4">Split Tunneling</h3>
              <p className="text-muted-foreground">
                Choose which apps use the VPN connection and which use your regular internet, giving you complete
                control over your traffic.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">IPv6 Leak Protection</h3>
              <p className="text-muted-foreground mb-6">
                Blocks IPv6 traffic to prevent potential IP leaks, maintaining your anonymity even on modern networks.
              </p>

              <h3 className="text-xl font-semibold mb-4">Auto-Connect</h3>
              <p className="text-muted-foreground">
                Automatically connects to VPN when joining untrusted networks, providing seamless protection without
                manual intervention.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Phoenix VPN?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions of users who trust Phoenix VPN for their online security and privacy.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-3"
            onClick={() => window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")}
          >
            Get Phoenix VPN Now
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
