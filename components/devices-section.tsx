import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Smartphone, Tablet, Laptop, Tv, Globe } from "lucide-react"

const devices = [
  { icon: Monitor, name: "Windows VPN", color: "text-blue-500" },
  { icon: Smartphone, name: "Android VPN", color: "text-green-500" },
  { icon: Tablet, name: "iOS VPN", color: "text-gray-500" },
  { icon: Laptop, name: "macOS VPN", color: "text-gray-600" },
  { icon: Tv, name: "Android TV VPN", color: "text-orange-500" },
  { icon: Globe, name: "Chrome VPN", color: "text-red-500" },
]

export function DevicesSection() {
  return (
    <section id="devices" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Available for <span className="text-secondary">all devices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are VPN services for all devices and platforms. Download VPN Turbo to protect all your devices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {devices.map((device, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <device.icon className={`h-12 w-12 mx-auto ${device.color}`} />
                <h3 className="font-semibold text-sm">{device.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Compatible with Windows 7/8/10 PC & Laptop, Android, iOS, macOS, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.phoneix.expert"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img src="/google-play.png" alt="Download on Google Play" className="h-15" />
            </a>
            <a
              href="https://napkforpc.com/download/apk/classicstudio.phoenix.proxy.vpn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img src="/download-windows-button.png" alt="Download for Windows" className="h-15" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
