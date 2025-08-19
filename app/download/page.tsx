"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Monitor, Tablet, Download } from "lucide-react"

export default function DownloadPage() {
  const platforms = [
    {
      name: "Windows",
      icon: Monitor,
      version: "Windows 10/11",
      size: "45.2 MB",
      description: "Full-featured desktop client with advanced security options",
      downloadUrl: "https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/",
      features: ["Kill Switch", "Split Tunneling", "Auto-Connect"],
    },
    {
      name: "Android",
      icon: Smartphone,
      version: "Android 6.0+",
      size: "28.5 MB",
      description: "Mobile app with one-tap connection and battery optimization",
      downloadUrl: "https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/",
      features: ["Quick Connect", "Battery Saver", "Widget Support"],
    },
    {
      name: "iOS",
      icon: Tablet,
      version: "iOS 12.0+",
      size: "32.1 MB",
      description: "Native iOS app with seamless integration and Siri shortcuts",
      downloadUrl: "https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/",
      features: ["Siri Shortcuts", "Face ID/Touch ID", "Network Extension"],
    },
    {
      name: "macOS",
      icon: Monitor,
      version: "macOS 10.15+",
      size: "52.8 MB",
      description: "Native Mac application with menu bar integration",
      downloadUrl: "https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/",
      features: ["Menu Bar Widget", "Keychain Integration", "System Notifications"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Download Phoenix VPN</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get Phoenix VPN on all your devices. One account protects up to 10 devices simultaneously with
            military-grade encryption.
          </p>
        </div>

        {/* Quick Download Section */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Quick Download</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started in seconds with our automatic platform detection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-4"
              onClick={() =>
                window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")
              }
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              Other Platforms
            </Button>
          </div>
        </div>

        {/* Platform Downloads */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Available for All Platforms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <platform.icon className="h-12 w-12 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{platform.name}</CardTitle>
                      <CardDescription>
                        {platform.version} • {platform.size}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{platform.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full" size="lg" onClick={() => window.open(platform.downloadUrl, "_blank")}>
                    <Download className="w-4 h-4 mr-2" />
                    Download for {platform.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">System Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Windows
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Windows 10 or later</li>
                <li>2 GB RAM minimum</li>
                <li>100 MB free disk space</li>
                <li>Internet connection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Android
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Android 6.0 or later</li>
                <li>1 GB RAM minimum</li>
                <li>50 MB free storage</li>
                <li>OpenVPN support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Tablet className="w-5 h-5" />
                iOS
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>iOS 12.0 or later</li>
                <li>iPhone 6s or newer</li>
                <li>60 MB free storage</li>
                <li>Network Extension support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                macOS
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>macOS 10.15 or later</li>
                <li>4 GB RAM minimum</li>
                <li>150 MB free disk space</li>
                <li>Administrator privileges</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Easy Installation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Download</h3>
              <p className="text-muted-foreground">
                Click the download button for your platform and save the installer file.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Install</h3>
              <p className="text-muted-foreground">
                Run the installer and follow the simple setup wizard to complete installation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-muted-foreground">
                Launch Phoenix VPN, sign in to your account, and connect with one click.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
