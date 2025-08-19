import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Book, MessageCircle, Video, Download, Settings, Shield, Smartphone } from "lucide-react"

export default function HelpCenterPage() {
  const categories = [
    {
      icon: Settings,
      title: "Getting Started",
      description: "Setup guides and first-time user help",
      articles: 12,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Understanding VPN security features",
      articles: 8,
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "iOS and Android app support",
      articles: 15,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: Download,
      title: "Installation",
      description: "Download and setup instructions",
      articles: 10,
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  const popularArticles = [
    {
      title: "How to set up Phoenix VPN on Windows",
      category: "Getting Started",
      views: "45K views",
      readTime: "3 min read",
    },
    {
      title: "Troubleshooting connection issues",
      category: "Technical Support",
      views: "32K views",
      readTime: "5 min read",
    },
    {
      title: "Understanding the Kill Switch feature",
      category: "Security & Privacy",
      views: "28K views",
      readTime: "4 min read",
    },
    {
      title: "How to change server locations",
      category: "Getting Started",
      views: "25K views",
      readTime: "2 min read",
    },
    {
      title: "Setting up Phoenix VPN on iPhone",
      category: "Mobile Apps",
      views: "22K views",
      readTime: "3 min read",
    },
    {
      title: "What is a VPN and how does it work?",
      category: "Security & Privacy",
      views: "18K views",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to your questions, learn how to use Phoenix VPN, and get the most out of your VPN experience.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for help articles, guides, and FAQs..."
              className="pl-12 py-4 text-lg border-2 focus:border-primary"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <Book className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Setup Guides</CardTitle>
              <CardDescription>Step-by-step installation instructions for all devices</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our 24/7 customer support team</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Watch detailed video guides for common tasks</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">
                    {category.articles} articles
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span>{article.views}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is available 24/7 to help you with any questions or
            issues.
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
