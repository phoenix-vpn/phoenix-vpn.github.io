import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Mail, Phone, Clock, MapPin, Headphones } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 2 hours",
      action: "Send Email",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri 9AM-6PM EST",
      action: "Call Now",
      color: "bg-purple-500/10 text-purple-600",
    },
  ]

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 100",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "London",
      address: "456 Innovation Ave, Floor 5",
      zipCode: "London, UK EC1A 1BB",
      phone: "+44 20 7123 4567",
    },
    {
      city: "Singapore",
      address: "789 Business Blvd, Tower A",
      zipCode: "Singapore 018956",
      phone: "+65 6123 4567",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help with Phoenix VPN? Our dedicated support team is here to assist you 24/7. Choose your preferred
            contact method below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${method.color} flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription className="text-base">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {method.availability}
                </div>
                <Button className="w-full" size="lg">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Send us a Message
              </CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your question or issue in detail..."
                  className="min-h-[120px]"
                />
              </div>

              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Office Locations */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Our Offices
              </h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">{office.city}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>{office.address}</p>
                        <p>{office.zipCode}</p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {office.phone}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Live Chat</span>
                  <span className="text-sm font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Email Support</span>
                  <span className="text-sm font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Phone Support</span>
                  <span className="text-sm font-medium">Mon-Fri 9AM-6PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Emergency Support</span>
                  <span className="text-sm font-medium">24/7 for Premium users</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Before You Contact Us</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check our FAQ section for quick answers to common questions. You might find the solution you need right
            away!
          </p>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
            <a href="/faq">View FAQ</a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
