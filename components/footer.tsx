import { Shield, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">Phoenix VPN</span>
            </div>
            <p className="text-primary-foreground/80">
              Lightning-fast, secure VPN service for online freedom and privacy protection.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/features" className="hover:text-secondary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-secondary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/download" className="hover:text-secondary transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="/free-vpn" className="hover:text-secondary transition-colors">
                  Free VPN
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/help" className="hover:text-secondary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/setup" className="hover:text-secondary transition-colors">
                  Setup Guides
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-secondary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Phoenix VPN. All rights reserved. Lightning-fast app providing free VPN service.</p>
        </div>
      </div>
    </footer>
  )
}
