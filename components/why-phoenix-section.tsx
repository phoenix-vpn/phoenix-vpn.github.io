import { Card, CardContent } from "@/components/ui/card"
import { Server, Gauge, ShieldCheck, Gamepad2, Lock, Zap } from "lucide-react"

const benefits = [
  {
    icon: Server,
    title: "Servers in 111 VPN locations",
    description: "Connect to anywhere with all types of servers worldwide in Phoenix.",
  },
  {
    icon: Gauge,
    title: "Ultra fast internet speed",
    description:
      "Provide super fast VPN protocols like IKEv2, OpenVPN, L2TP, which are known for their speed and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "No-logs policy",
    description:
      "A strict no-logs policy of Phoenix VPN ensures that your online activities are not recorded or stored.",
  },
  {
    icon: Gamepad2,
    title: "Free VPN service",
    description:
      "Offer free VPN service, everyone can access the internet with Phoenix VPN without connecting to the free server.",
  },
  {
    icon: Lock,
    title: "Special servers for entertainment",
    description: "Specialized types of servers and optimized server locations optimize your internet speed.",
  },
  {
    icon: Zap,
    title: "Best VPN encryption",
    description: "AES-256 encryption, the highest level encryption for online activities.",
  },
]

export function WhyPhoenixSection() {
  return (
    <section id="why-phoenix" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why use <span className="text-secondary">Phoenix VPN</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Phoenix VPN offers the best combination of speed, security, and reliability for all your online activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
