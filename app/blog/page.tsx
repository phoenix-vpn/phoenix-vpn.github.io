import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, TrendingUp, Shield, Globe, Smartphone } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to VPN Security in 2025",
    excerpt:
      "Everything you need to know about VPN security, from encryption protocols to choosing the right provider for your needs.",
    author: "Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Security",
    image: "/blog-vpn-security-guide.png",
    featured: true,
  }

  const blogPosts = [
    {
      title: "How to Choose the Best VPN Server Location",
      excerpt:
        "Learn how server location affects your VPN performance and which locations to choose for different use cases.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "5 min read",
      category: "Tips & Guides",
      image: "/blog-server-locations.png",
    },
    {
      title: "VPN vs Proxy: Which One Should You Use?",
      excerpt:
        "Understanding the key differences between VPNs and proxies to make the right choice for your privacy needs.",
      author: "Emma Thompson",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Education",
      image: "/blog-vpn-vs-proxy.png",
    },
    {
      title: "Protecting Your Privacy on Public WiFi",
      excerpt: "Essential tips for staying secure when using public WiFi networks in cafes, airports, and hotels.",
      author: "David Kim",
      date: "January 8, 2025",
      readTime: "4 min read",
      category: "Security",
      image: "/blog-public-wifi-security.png",
    },
    {
      title: "The Rise of Remote Work and VPN Usage",
      excerpt: "How the shift to remote work has changed VPN usage patterns and what it means for cybersecurity.",
      author: "Sarah Chen",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "Industry News",
      image: "/blog-remote-work-vpn.png",
    },
    {
      title: "Understanding VPN Protocols: OpenVPN vs WireGuard",
      excerpt:
        "A technical comparison of popular VPN protocols and their impact on speed, security, and compatibility.",
      author: "Michael Rodriguez",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Technical",
      image: "/blog-vpn-protocols.png",
    },
    {
      title: "Mobile VPN Apps: Features That Matter Most",
      excerpt: "What to look for in a mobile VPN app and how Phoenix VPN delivers the best mobile experience.",
      author: "Emma Thompson",
      date: "December 30, 2024",
      readTime: "5 min read",
      category: "Mobile",
      image: "/blog-mobile-vpn-features.png",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, icon: TrendingUp },
    { name: "Security", count: 8, icon: Shield },
    { name: "Tips & Guides", count: 6, icon: Globe },
    { name: "Mobile", count: 4, icon: Smartphone },
    { name: "Industry News", count: 3, icon: TrendingUp },
    { name: "Technical", count: 2, icon: Shield },
    { name: "Education", count: 1, icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Phoenix VPN Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay informed about VPN technology, cybersecurity trends, and privacy tips from our team of experts.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input placeholder="Search blog posts..." className="pl-12 py-4 text-lg border-2 focus:border-primary" />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <Card className="border-2 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image || "/placeholder.svg?height=300&width=400"}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <Badge className="mb-3 bg-secondary text-secondary-foreground">{featuredPost.category}</Badge>
                    <CardTitle className="text-2xl mb-4 leading-tight">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base mb-4 leading-relaxed">{featuredPost.excerpt}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button>Read Full Article</Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-2 overflow-hidden hover:border-primary/50 transition-colors">
                    <img
                      src={post.image || "/placeholder.svg?height=200&width=300"}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg mb-3 leading-tight">{post.title}</CardTitle>
                      <CardDescription className="text-sm mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <category.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription>Get the latest VPN news and security tips delivered to your inbox.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email" type="email" />
                <Button className="w-full bg-secondary hover:bg-secondary/90">Subscribe to Newsletter</Button>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Popular This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="flex gap-3">
                    <img
                      src={post.image || "/placeholder.svg?height=60&width=80"}
                      alt={post.title}
                      className="w-20 h-15 object-cover rounded flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-semibold leading-tight mb-1">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
