import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, CreditCard, AlertTriangle, Users, Gavel } from "lucide-react"

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By using Phoenix VPN services, you agree to be bound by these Terms of Service",
        "These terms apply to all users of our website, applications, and services",
        "If you do not agree to these terms, you may not use our services",
        "We may update these terms periodically, and continued use constitutes acceptance",
      ],
    },
    {
      icon: Shield,
      title: "Service Description",
      content: [
        "Phoenix VPN provides virtual private network services for privacy and security",
        "We offer both free and premium subscription plans with different features",
        "Service availability may vary by location due to technical or legal restrictions",
        "We strive for 99.9% uptime but cannot guarantee uninterrupted service",
      ],
    },
    {
      icon: FileText,
      title: "Acceptable Use Policy",
      content: [
        "Use our service only for lawful purposes and in accordance with applicable laws",
        "Do not use our service for illegal activities, harassment, or harmful conduct",
        "Respect intellectual property rights and do not infringe on copyrights",
        "Do not attempt to circumvent our security measures or access restrictions",
        "Commercial use requires prior written authorization from Phoenix VPN",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      content: [
        "Premium subscriptions are billed in advance on a recurring basis",
        "All fees are non-refundable except as provided in our refund policy",
        "We offer a 30-day money-back guarantee for new premium subscriptions",
        "Price changes will be communicated 30 days in advance",
        "Failure to pay may result in service suspension or termination",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "Spamming, phishing, or distributing malware",
        "Accessing or attempting to access others' accounts or data",
        "Interfering with or disrupting our services or servers",
        "Using our service to violate others' privacy or rights",
        "Reselling or redistributing our service without authorization",
      ],
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: [
        "Phoenix VPN provides services 'as is' without warranties of any kind",
        "We are not liable for indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount paid for our services",
        "We are not responsible for third-party content or services",
        "Users are responsible for their own data backup and security",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of Phoenix VPN services. Please read them carefully before using our service.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: January 15, 2025</p>
        </div>

        {/* Terms Sections */}
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

        {/* Additional Terms */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Account Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms or engage in prohibited
                activities.
              </p>
              <p>
                Users may cancel their accounts at any time through their account settings or by contacting support.
              </p>
              <p>Upon termination, access to our services will cease, but these terms will continue to apply.</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Phoenix VPN and all related trademarks, logos, and content are owned by Phoenix VPN or our licensors.
              </p>
              <p>Users may not copy, modify, or distribute our software or content without permission.</p>
              <p>We respect intellectual property rights and expect our users to do the same.</p>
            </CardContent>
          </Card>
        </div>

        {/* Governing Law */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Governing Law & Disputes</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
            <p>
              These Terms of Service are governed by the laws of the State of California, United States, without regard
              to conflict of law principles.
            </p>
            <p>
              Any disputes arising from these terms or our services will be resolved through binding arbitration in San
              Francisco, California.
            </p>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining provisions will continue in
              full force and effect.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Questions About These Terms?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have questions about these Terms of Service or need clarification on any provisions, please contact
            our legal team.
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p>Email: legal@phoenixvpn.com</p>
            <p>Address: Phoenix VPN Legal Department, 123 Tech Street, San Francisco, CA 94105</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
