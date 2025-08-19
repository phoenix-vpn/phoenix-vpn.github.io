"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Lock, Eye, Wifi } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Shield internet security and privacy",
    description:
      "Shield your data and online activities from being monitored. Encrypt, transmitted to internet service providers, making it more secure than a typical proxy.",
  },
  {
    icon: Zap,
    title: "Bypass the geo-blocking",
    description:
      "With our global VPN servers, you can access websites, streaming services, and content that may be restricted or blocked in your region.",
  },
  {
    icon: Globe,
    title: "Free VPN service",
    description:
      "Offer free VPN service, everyone can access the internet with Phoenix VPN without connecting to the free server.",
  },
  {
    icon: Lock,
    title: "Ultra fast internet speed",
    description:
      "Provide super fast VPN protocols like IKEv2, OpenVPN, L2TP, which are known for their speed and reliability.",
  },
  {
    icon: Eye,
    title: "No-logs policy",
    description:
      "A strict no-logs policy of Phoenix VPN ensures that your online activities are not recorded or stored.",
  },
  {
    icon: Wifi,
    title: "Best VPN encryption",
    description: "AES-256 encryption, the highest level encryption for online activities.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What does a VPN do?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            VPN is the abbreviation of Virtual Private Network. It creates a secure and encrypted connection between
            your device and a remote server of different locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
            onClick={() => window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")}
          >
            Try For Free Now!
          </Button>
        </div>
      </div>
    </section>
  )
}
