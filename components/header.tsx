"use client"

import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Phoenix VPN</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="/features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="/download" className="text-sm font-medium hover:text-primary transition-colors">
            Download
          </a>
          <a href="/help" className="text-sm font-medium hover:text-primary transition-colors">
            Help
          </a>
          <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            className="bg-secondary hover:bg-secondary/90"
            onClick={() => window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")}
          >
            Get Phoenix VPN
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
