"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Globe, Award, Heart, Zap, Target, Eye } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "10M+", label: "Users Worldwide", icon: Users },
    { number: "111+", label: "Server Locations", icon: Globe },
    { number: "60+", label: "Countries", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: Zap },
  ]

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "We believe privacy is a fundamental right. Our no-logs policy and advanced encryption ensure your data stays private.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We're open about our practices, policies, and technology. No hidden agendas, just honest VPN service.",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description:
        "Every decision we make puts our users first. Your feedback shapes our product and drives our innovation.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in everything we do, from our technology to our customer support experience.",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former cybersecurity expert with 15+ years experience in privacy technology and digital rights advocacy.",
      image: "/professional-woman-ceo.png",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Network security specialist and former Google engineer. Expert in VPN protocols and encryption technologies.",
      image: "/professional-cto-engineer.png",
    },
    {
      name: "Emma Thompson",
      role: "Head of Product",
      bio: "UX designer turned product leader. Passionate about making privacy tools accessible to everyone.",
      image: "/professional-woman-product-manager-designer.png",
    },
    {
      name: "David Kim",
      role: "Head of Security",
      bio: "Ethical hacker and security researcher. Ensures Phoenix VPN meets the highest security standards.",
      image: "/professional-cybersecurity-expert.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">About Phoenix VPN</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Protecting Privacy Since 2018</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make the internet a safer, more private place for everyone. Phoenix VPN was born from
            the belief that online privacy should be accessible, reliable, and easy to use.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Phoenix VPN was founded in 2018 by a team of cybersecurity experts who were frustrated with the
                  complexity and unreliability of existing VPN solutions. We saw too many people struggling with
                  complicated setups, slow connections, and questionable privacy practices.
                </p>
                <p>
                  Our founders, Sarah Chen and Michael Rodriguez, combined their expertise in cybersecurity and network
                  engineering to create a VPN service that would be both powerful and user-friendly. Starting with just
                  3 servers, we've grown to become one of the most trusted VPN providers worldwide.
                </p>
                <p>
                  Today, Phoenix VPN protects over 10 million users across the globe, but our mission remains the same:
                  to provide fast, secure, and private internet access for everyone.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <img
                src="/cybersecurity-team.png"
                alt="Phoenix VPN team working"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 text-center">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best VPN 2024</h3>
              <p className="text-muted-foreground">TechRadar Editor's Choice</p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy Excellence</h3>
              <p className="text-muted-foreground">Digital Rights Foundation</p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top Security Product</h3>
              <p className="text-muted-foreground">Cybersecurity Awards 2024</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "To democratize online privacy and security by providing fast, reliable, and user-friendly VPN services that
            protect digital rights and enable free access to information worldwide."
          </p>
        </div>

        {/* Join Us CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Phoenix VPN Family</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that comes from a VPN service built with privacy, security, and user experience at
            its core.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-3"
            onClick={() => window.open("https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/", "_blank")}
          >
            Get Phoenix VPN Today
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
