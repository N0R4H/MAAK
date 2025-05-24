import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, AlertTriangle, Heart, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 text-lg border-red-200 text-red-700">
                🆘 معاك Emergency Innovation
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">معاك</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
              <span className="text-lg text-gray-500 italic">{'"With You" - We are with you in crisis'}</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI-powered Emergency Aid Tracker ensuring <strong>every affected family</strong> in disaster zones
              receives help—especially the unreachable, undocumented, and digitally invisible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  View Live Dashboard
                </Button>
              </Link>
              <Link href="/map">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  View Live Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Crisis We're Solving</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Inspired by the 2023 Morocco earthquake, where thousands in remote villages were never located and never
              received aid.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-l-4 border-l-red-500">
              <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Never Located</h3>
              <p className="text-gray-600">
                Families in remote mountainous villages had no digital footprint and no formal addresses.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-500">
              <MapPin className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">No Communication</h3>
              <p className="text-gray-600">
                No internet or phone lines meant they couldn't call for help or be reached by aid organizations.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-yellow-500">
              <Users className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Aid Never Arrived</h3>
              <p className="text-gray-600">
                While some areas received multiple aid deliveries, entire communities were completely forgotten.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Three-Part AI Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive system that detects, tracks, and ensures delivery of aid to every affected family.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* SOS Detector */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">1. SOS Detector</h3>
                <p className="text-gray-600 mb-6">
                  AI-powered listening tool that scans social media for distress signals in local dialects.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Scans WhatsApp, Facebook, Twitter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Detects Darija/MSA/French distress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Analyzes damage photos/videos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Infers location from metadata</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Victim Locator */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">2. Victim Locator</h3>
                <p className="text-gray-600 mb-6">
                  Mobile app for NGOs and volunteers to tag and track every household during visits.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Tag households with QR codes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Track aid status per family</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Flag missing households</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Prioritize by vulnerability</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Aid Distribution */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">3. Fair Distribution</h3>
                <p className="text-gray-600 mb-6">
                  Central dashboard preventing over-serving while ensuring no family is forgotten.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Optimize aid truck routes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Prevent duplicate aid delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Identify coverage gaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Public transparency layer</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Accountability in Crisis</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            This isn't just an app—it's a digital safety net ensuring that in humanity's darkest hours, no one is left
            behind, forgotten, or invisible. <strong>معاك</strong> means we are always with you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Coverage Goal</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Real-time</div>
              <div className="text-lg opacity-90">Aid Tracking</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-lg opacity-90">Families Forgotten</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to See It in Action?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our working prototype and see how AI can transform disaster response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                Launch Dashboard
              </Button>
            </Link>
            <Link href="/map">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                View Live Map
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
