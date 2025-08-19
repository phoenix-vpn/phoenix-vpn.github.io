"use client"

import { Button } from "@/components/ui/button"
import { Download, Settings, Shield } from "lucide-react"

const steps = [
  {
    icon: Settings,
    step: "1",
    title: "Choose a VPN plan",
    description: "Pick a premium plan that fits your needs for the best VPN service. Or try with the free VPN service.",
  },
  {
    icon: Download,
    step: "2",
    title: "Download VPN",
    description: "Sign up your account, download Phoenix VPN on all your devices for free, and sign in your account.",
  },
  {
    icon: Shield,
    step: "3",
    title: "Connect to the VPN server",
    description:
      "Tap your desired server location, you'll browse the internet freely and safely on all your devices with Phoenix protection.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How to get and use VPN <span className="text-secondary">Phoenix</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with Phoenix VPN in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-secondary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
            onClick={() => window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")}
          >
            Start VPN Free Now
          </Button>
        </div>
      </div>
    </section>
  )
}
