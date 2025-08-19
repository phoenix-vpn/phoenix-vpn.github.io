import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, Smartphone, Tablet, Download, Play, CheckCircle, AlertCircle } from "lucide-react"

export default function SetupGuidePage() {
  const platforms = [
    {
      id: "windows",
      name: "Windows",
      icon: Monitor,
      version: "Windows 10/11",
      steps: [
        {
          title: "Download Phoenix VPN",
          description: "Click the download button and save the installer file to your computer.",
          tip: "Make sure to download from our official website only.",
        },
        {
          title: "Run the Installer",
          description: "Double-click the downloaded file and follow the installation wizard.",
          tip: "You may need administrator privileges to install the software.",
        },
        {
          title: "Launch the App",
          description: "Open Phoenix VPN from your desktop or Start menu.",
          tip: "The app will appear in your system tray for easy access.",
        },
        {
          title: "Sign In",
          description: "Enter your Phoenix VPN account credentials to log in.",
          tip: "Don't have an account? Create one for free in just 30 seconds.",
        },
        {
          title: "Connect to a Server",
          description: "Choose a server location and click Connect to secure your connection.",
          tip: "Select the closest server for best performance.",
        },
      ],
    },
    {
      id: "android",
      name: "Android",
      icon: Smartphone,
      version: "Android 6.0+",
      steps: [
        {
          title: "Download from Play Store",
          description: "Search for 'Phoenix VPN' in Google Play Store and install the app.",
          tip: "Look for the official Phoenix VPN app with our logo.",
        },
        {
          title: "Open the App",
          description: "Tap the Phoenix VPN icon on your home screen or app drawer.",
          tip: "Grant necessary permissions when prompted.",
        },
        {
          title: "Create or Sign In",
          description: "Sign in with your existing account or create a new one.",
          tip: "Use the same account across all your devices.",
        },
        {
          title: "Allow VPN Configuration",
          description: "Android will ask permission to set up VPN. Tap 'OK' to continue.",
          tip: "This is required for the VPN to function properly.",
        },
        {
          title: "Connect and Browse",
          description: "Tap the connect button and start browsing securely.",
          tip: "You'll see a VPN icon in your status bar when connected.",
        },
      ],
    },
    {
      id: "ios",
      name: "iOS",
      icon: Tablet,
      version: "iOS 12.0+",
      steps: [
        {
          title: "Download from App Store",
          description: "Search for 'Phoenix VPN' in the App Store and install the app.",
          tip: "Make sure it's the official Phoenix VPN app.",
        },
        {
          title: "Launch the App",
          description: "Tap the Phoenix VPN icon on your home screen.",
          tip: "The app may request location permissions for optimal server selection.",
        },
        {
          title: "Sign In to Your Account",
          description: "Enter your Phoenix VPN credentials or create a new account.",
          tip: "Enable Face ID/Touch ID for quick access.",
        },
        {
          title: "Install VPN Profile",
          description: "iOS will prompt you to install a VPN configuration profile.",
          tip: "This is necessary for the VPN connection to work.",
        },
        {
          title: "Start Protecting Your Privacy",
          description: "Select a server and tap connect to secure your internet connection.",
          tip: "The VPN status will appear in your Control Center.",
        },
      ],
    },
    {
      id: "macos",
      name: "macOS",
      icon: Monitor,
      version: "macOS 10.15+",
      steps: [
        {
          title: "Download for Mac",
          description: "Download the Phoenix VPN installer for macOS from our website.",
          tip: "The file will be saved to your Downloads folder.",
        },
        {
          title: "Install the Application",
          description: "Open the .dmg file and drag Phoenix VPN to your Applications folder.",
          tip: "You may need to allow installation from unidentified developers in System Preferences.",
        },
        {
          title: "Launch Phoenix VPN",
          description: "Open Phoenix VPN from your Applications folder or Launchpad.",
          tip: "The app will appear in your menu bar for easy access.",
        },
        {
          title: "Authenticate Your Account",
          description: "Sign in with your Phoenix VPN account credentials.",
          tip: "Enable keychain storage to save your login information.",
        },
        {
          title: "Connect to VPN",
          description: "Choose your preferred server location and click Connect.",
          tip: "macOS may ask for permission to modify network settings.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Setup Guides</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our step-by-step guides to set up Phoenix VPN on any device. Get connected and protected in just a
            few minutes.
          </p>
        </div>

        {/* Quick Start */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
          <p className="text-lg text-muted-foreground mb-8">
            New to Phoenix VPN? Follow these simple steps to get started on any device.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Download</h3>
              <p className="text-sm text-muted-foreground">Get the app for your device</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Install</h3>
              <p className="text-sm text-muted-foreground">Run the installer</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Sign In</h3>
              <p className="text-sm text-muted-foreground">Use your account credentials</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">Choose a server and connect</p>
            </div>
          </div>
        </div>

        {/* Platform Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Setup Guides</h2>
          <Tabs defaultValue="windows" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              {platforms.map((platform) => (
                <TabsTrigger key={platform.id} value={platform.id} className="flex items-center gap-2">
                  <platform.icon className="w-4 h-4" />
                  {platform.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {platforms.map((platform) => (
              <TabsContent key={platform.id} value={platform.id} className="mt-8">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <platform.icon className="w-12 h-12 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">Phoenix VPN for {platform.name}</CardTitle>
                        <CardDescription className="text-base">
                          Compatible with {platform.version} and later versions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {platform.steps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground mb-3">{step.description}</p>
                          <div className="flex items-start gap-2 bg-muted/50 rounded-lg p-3">
                            <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                              <strong>Tip:</strong> {step.tip}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Troubleshooting */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Having trouble with installation? Our support team is here to help you get connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-3" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
              <a href="/faq">View FAQ</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
