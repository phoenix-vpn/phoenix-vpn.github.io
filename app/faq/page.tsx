"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Search, ChevronDown, Shield, Zap, Globe, CreditCard, Smartphone, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const categories = [
    {
      id: "general",
      title: "General",
      icon: HelpCircle,
      color: "bg-blue-500/10 text-blue-600",
      count: 8,
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      color: "bg-green-500/10 text-green-600",
      count: 6,
    },
    {
      id: "technical",
      title: "Technical",
      icon: Zap,
      color: "bg-orange-500/10 text-orange-600",
      count: 10,
    },
    {
      id: "billing",
      title: "Billing",
      icon: CreditCard,
      color: "bg-purple-500/10 text-purple-600",
      count: 5,
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      icon: Smartphone,
      color: "bg-pink-500/10 text-pink-600",
      count: 7,
    },
    {
      id: "servers",
      title: "Servers",
      icon: Globe,
      color: "bg-cyan-500/10 text-cyan-600",
      count: 4,
    },
  ]

  const faqs = [
    {
      id: "what-is-vpn",
      category: "general",
      question: "What is a VPN and why do I need one?",
      answer:
        "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet. It protects your privacy by hiding your IP address and encrypting your data, making it essential for secure browsing, especially on public WiFi networks.",
    },
    {
      id: "how-phoenix-works",
      category: "general",
      question: "How does Phoenix VPN work?",
      answer:
        "Phoenix VPN routes your internet traffic through our secure servers, encrypting your data with military-grade AES-256 encryption. This masks your real IP address and location, making your online activities private and secure.",
    },
    {
      id: "device-limit",
      category: "general",
      question: "How many devices can I connect simultaneously?",
      answer:
        "With a Phoenix VPN premium account, you can connect up to 10 devices simultaneously. This includes computers, smartphones, tablets, and other compatible devices. Our free plan allows 1 device connection.",
    },
    {
      id: "no-logs-policy",
      category: "security",
      question: "What is your no-logs policy?",
      answer:
        "Phoenix VPN has a strict no-logs policy. We do not track, collect, or store any information about your online activities, browsing history, or personal data. Your privacy is completely protected.",
    },
    {
      id: "encryption-type",
      category: "security",
      question: "What type of encryption do you use?",
      answer:
        "We use AES-256 encryption, the same military-grade standard used by governments and security agencies worldwide. This ensures your data is protected with the highest level of security available.",
    },
    {
      id: "kill-switch",
      category: "security",
      question: "What is the Kill Switch feature?",
      answer:
        "The Kill Switch automatically blocks all internet traffic if your VPN connection drops unexpectedly. This prevents your real IP address and data from being exposed, ensuring continuous protection.",
    },
    {
      id: "slow-connection",
      category: "technical",
      question: "Why is my internet connection slower with VPN?",
      answer:
        "Some speed reduction is normal with VPN due to encryption overhead and server distance. To optimize speed: choose the nearest server, use our optimized protocols, and ensure you have a stable internet connection.",
    },
    {
      id: "connection-issues",
      category: "technical",
      question: "I can't connect to Phoenix VPN. What should I do?",
      answer:
        "Try these steps: 1) Check your internet connection, 2) Try a different server location, 3) Restart the app, 4) Check if your firewall is blocking the VPN, 5) Contact our support team if issues persist.",
    },
    {
      id: "server-locations",
      category: "servers",
      question: "How many server locations do you have?",
      answer:
        "Phoenix VPN has 111+ servers across 60+ countries worldwide. Our global network ensures fast connections and access to geo-restricted content from anywhere in the world.",
    },
    {
      id: "best-server",
      category: "servers",
      question: "Which server should I choose?",
      answer:
        "For best performance, choose the server closest to your physical location. For accessing geo-restricted content, select a server in the country where the content is available. Our app can auto-select the optimal server for you.",
    },
    {
      id: "free-vs-premium",
      category: "billing",
      question: "What's the difference between free and premium plans?",
      answer:
        "Free plan includes 500MB daily data, 3 server locations, and 1 device. Premium offers unlimited data, 111+ servers, 10 devices, kill switch, no-logs policy, and 24/7 priority support.",
    },
    {
      id: "payment-methods",
      category: "billing",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency for maximum privacy. All payments are processed securely with industry-standard encryption.",
    },
    {
      id: "refund-policy",
      category: "billing",
      question: "Do you offer refunds?",
      answer:
        "Yes! We offer a 30-day money-back guarantee for all premium plans. If you're not satisfied, contact our support team within 30 days for a full refund, no questions asked.",
    },
    {
      id: "mobile-features",
      category: "mobile",
      question: "Are mobile apps different from desktop versions?",
      answer:
        "Our mobile apps offer the same core security features as desktop versions, optimized for mobile use. They include battery optimization, quick connect widgets, and mobile-specific features like auto-connect on untrusted networks.",
    },
    {
      id: "battery-usage",
      category: "mobile",
      question: "Does Phoenix VPN drain my phone's battery?",
      answer:
        "Phoenix VPN is optimized for minimal battery usage. While any VPN will use some battery due to encryption, our efficient protocols and battery optimization features minimize the impact on your device's battery life.",
    },
  ]

  const filteredFAQs = faqs

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find quick answers to common questions about Phoenix VPN. Can't find what you're looking for? Contact our
            support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input placeholder="Search FAQ..." className="pl-12 py-4 text-lg border-2 focus:border-primary" />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} questions
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="border-2">
                <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openItems.includes(faq.id) ? "transform rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly support team is available 24/7 to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-3">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Live Chat
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
