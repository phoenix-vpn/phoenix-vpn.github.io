import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Database, Lock, Globe, UserCheck } from "lucide-react"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Account Information: Email address and payment information for account creation and billing",
        "Usage Data: Connection timestamps, bandwidth usage, and server selection for service optimization",
        "Device Information: Operating system and app version for compatibility and support purposes",
        "We do NOT collect: Browsing history, DNS queries, traffic content, or IP addresses while connected",
      ],
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our VPN service",
        "Process payments and manage subscriptions",
        "Provide customer support and technical assistance",
        "Improve our service quality and performance",
        "Send important service updates and security notifications",
        "Comply with legal obligations when required",
      ],
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "All data is encrypted using industry-standard AES-256 encryption",
        "Secure data centers with physical and digital access controls",
        "Regular security audits and penetration testing",
        "Staff access to user data is strictly limited and monitored",
        "Data retention policies ensure information is deleted when no longer needed",
      ],
    },
    {
      icon: Globe,
      title: "International Data Transfers",
      content: [
        "We operate servers globally to provide optimal performance",
        "Data transfers comply with applicable privacy laws (GDPR, CCPA, etc.)",
        "Appropriate safeguards are in place for cross-border data transfers",
        "Users can choose server locations to control where their traffic is routed",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access: Request a copy of your personal data",
        "Correction: Update or correct inaccurate information",
        "Deletion: Request deletion of your personal data",
        "Portability: Receive your data in a machine-readable format",
        "Objection: Object to processing of your personal data",
        "Withdrawal: Withdraw consent for data processing at any time",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is our priority. This policy explains how Phoenix VPN collects, uses, and protects your
            personal information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: January 15, 2025</p>
        </div>

        {/* No-Logs Promise */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our No-Logs Promise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Phoenix VPN operates under a strict no-logs policy. We do not monitor, record, or store any information
            about your online activities, browsing history, or internet traffic while using our service.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <section.icon className="w-8 h-8 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We use select third-party services to operate our business, including payment processors and analytics
                tools. These partners are bound by strict data protection agreements.
              </p>
              <p>
                We do not share your personal information with advertisers, data brokers, or other third parties for
                marketing purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Cookies & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our website uses essential cookies for functionality and security. We do not use tracking cookies or
                third-party advertising cookies.
              </p>
              <p>You can control cookie settings through your browser preferences at any time.</p>
            </CardContent>
          </Card>
        </div>

        {/* Legal Compliance */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Legal Compliance</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
            <p>
              Phoenix VPN complies with applicable privacy laws including the General Data Protection Regulation (GDPR),
              California Consumer Privacy Act (CCPA), and other regional privacy regulations.
            </p>
            <p>
              We may disclose personal information only when required by valid legal process, such as a court order or
              subpoena, and only to the extent legally required.
            </p>
            <p>Due to our no-logs policy, we have minimal user data to provide even when legally compelled to do so.</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Questions About This Policy?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have questions about this Privacy Policy or how we handle your personal information, please contact
            our Data Protection Officer.
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p>Email: privacy@phoenixvpn.com</p>
            <p>Address: Phoenix VPN Privacy Team, 123 Tech Street, San Francisco, CA 94105</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
