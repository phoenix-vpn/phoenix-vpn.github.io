"use client"

import { Button } from "@/components/ui/button"
import { Shield, Zap, Lock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-muted/20 py-20 md:py-32">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                <Shield className="mr-2 h-4 w-4 text-primary" />
                Passed the security verification
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-6">Phoenix VPN</div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                The best VPN for <span className="text-secondary">online freedom</span> and security
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Phoenix VPN is a lightning-fast app that provides free VPN service. Not need any configuration, just
                simply click one button, you can access the Internet securely and anonymously.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-lg px-8"
                onClick={() =>
                  window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")
                }
              >
                Get Phoenix VPN Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
                onClick={() =>
                  window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")
                }
              >
                Try For Free Now!
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-secondary" />
                Lightning Fast
              </div>
              <div className="flex items-center">
                <Lock className="mr-2 h-4 w-4 text-secondary" />
                Secure & Anonymous
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl">
                <img src="/phoenix-logo.png" alt="Phoenix VPN" className="w-48 h-48 md:w-64 md:h-64 object-contain" />
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                1000+ Downloads
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
