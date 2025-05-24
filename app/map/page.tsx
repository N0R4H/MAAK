import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Navigation,
  Users,
  Truck,
  AlertTriangle,
  CheckCircle,
  Clock,
  MessageSquare,
  Layers,
  Filter,
  Zap,
  Heart,
  Home,
} from "lucide-react"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">معاك Emergency Response Map</h1>
              <p className="text-gray-600">Real-time visualization of aid distribution and family locations</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="destructive" className="animate-pulse">
                🔴 LIVE
              </Badge>
              <Badge variant="outline">Morocco Earthquake - Day 3</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Controls */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Map Layers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-sm">SOS Signals</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    247
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-sm">Located Families</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    1,847
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm">Aid Delivered</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    1,203
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full" />
                    <span className="text-sm">Waiting for Aid</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    644
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    <span className="text-sm">Aid Routes</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    12
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Quick Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-red-600 border-red-200">
                  <AlertTriangle className="h-3 w-3 mr-2" />
                  High Priority Only
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Clock className="h-3 w-3 mr-2" />
                  Waiting 48+ Hours
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="h-3 w-3 mr-2" />
                  Families with Children
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Heart className="h-3 w-3 mr-2" />
                  Medical Needs
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Coverage Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center p-3 bg-green-50 rounded">
                  <p className="text-2xl font-bold text-green-600">89%</p>
                  <p className="text-sm text-gray-600">Overall Coverage</p>
                </div>
                <div className="text-center p-3 bg-red-50 rounded">
                  <p className="text-2xl font-bold text-red-600">3</p>
                  <p className="text-sm text-gray-600">Coverage Gaps</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3">
            <Card className="h-[800px]">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Atlas Mountains Region - Al Haouz Province
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Navigation className="h-4 w-4 mr-1" />
                      Center Map
                    </Button>
                    <Button variant="outline" size="sm">
                      Satellite
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-full p-0">
                {/* Mock Map Interface */}
                <div className="relative h-full bg-gradient-to-br from-green-100 via-yellow-50 to-orange-100 rounded-b-lg overflow-hidden">
                  {/* Map Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" className="text-gray-400">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Mountain Ranges (Visual) */}
                  <div className="absolute top-20 left-20 w-32 h-16 bg-gray-300 rounded-full opacity-60 transform rotate-12"></div>
                  <div className="absolute top-32 left-40 w-40 h-20 bg-gray-400 rounded-full opacity-50 transform -rotate-6"></div>
                  <div className="absolute top-16 right-32 w-36 h-18 bg-gray-300 rounded-full opacity-60 transform rotate-45"></div>

                  {/* Cities/Towns */}
                  <div className="absolute top-40 left-60">
                    <div className="flex items-center gap-2 bg-white p-2 rounded shadow-lg border">
                      <Home className="h-4 w-4 text-gray-600" />
                      <span className="font-medium text-sm">Marrakech</span>
                    </div>
                  </div>

                  <div className="absolute top-80 left-80">
                    <div className="flex items-center gap-2 bg-white p-2 rounded shadow-lg border">
                      <Home className="h-4 w-4 text-gray-600" />
                      <span className="font-medium text-sm">Amizmiz</span>
                    </div>
                  </div>

                  {/* SOS Signals (Red dots) */}
                  <div className="absolute top-60 left-90">
                    <div className="relative">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                      <div className="absolute -top-8 left-6 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        SOS: "محاصرون في دوار أيت حمو"
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-45 left-120">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>

                  <div className="absolute top-85 left-70">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>

                  {/* Located Families (Blue dots) */}
                  <div className="absolute top-70 left-85">
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  </div>

                  <div className="absolute top-55 left-95">
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  </div>

                  <div className="absolute top-75 left-75">
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  </div>

                  <div className="absolute top-90 left-85">
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  </div>

                  {/* Aid Delivered (Green dots) */}
                  <div className="absolute top-65 left-80">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                  </div>

                  <div className="absolute top-80 left-90">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                  </div>

                  {/* Waiting for Aid (Orange dots) */}
                  <div className="absolute top-50 left-85">
                    <div className="relative">
                      <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                      <div className="absolute -top-6 left-4 bg-orange-500 text-white text-xs px-1 py-0.5 rounded">
                        48h
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-95 left-75">
                    <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                  </div>

                  {/* Aid Truck Routes */}
                  <div className="absolute top-40 left-60">
                    <div className="flex items-center gap-2 bg-purple-600 text-white p-2 rounded shadow-lg">
                      <Truck className="h-4 w-4" />
                      <span className="text-sm font-medium">Truck A-1</span>
                    </div>
                    {/* Route line */}
                    <div className="absolute top-6 left-8 w-32 h-0.5 bg-purple-400 transform rotate-45"></div>
                  </div>

                  {/* Coverage Gap Alert */}
                  <div className="absolute top-30 right-40">
                    <div className="bg-red-50 border-2 border-red-300 border-dashed p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-red-700">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">Coverage Gap</span>
                      </div>
                      <p className="text-xs text-red-600 mt-1">Douar Tafrawt</p>
                      <p className="text-xs text-red-600">15 estimated, 3 tagged</p>
                    </div>
                  </div>

                  {/* Field Team Locations */}
                  <div className="absolute top-85 left-85">
                    <div className="flex items-center gap-2 bg-blue-600 text-white p-2 rounded shadow-lg">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">Team Alpha</span>
                    </div>
                  </div>

                  <div className="absolute top-55 left-110">
                    <div className="flex items-center gap-2 bg-green-600 text-white p-2 rounded shadow-lg">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">Team Beta</span>
                    </div>
                  </div>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border">
                    <h4 className="font-medium text-sm mb-3">Live Updates</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span>New SOS Signal (2 min ago)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Aid Delivered (15 min ago)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Family Tagged (32 min ago)</span>
                      </div>
                    </div>
                  </div>

                  {/* Zoom Controls */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1">
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      +
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      -
                    </Button>
                  </div>

                  {/* Coordinates Display */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    31.2156°N, 8.0108°W
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Real-time Activity Feed */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Real-time Activity Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-red-600">🚨 SOS Signals</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-red-50 rounded text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-3 w-3 text-red-500" />
                      <span className="font-medium">2 min ago</span>
                    </div>
                    <p className="text-red-700">WhatsApp: "نحن محاصرون في دوار أيت حمو"</p>
                    <p className="text-xs text-red-600">📍 Ait Hamou Village</p>
                  </div>

                  <div className="p-2 bg-orange-50 rounded text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-3 w-3 text-orange-500" />
                      <span className="font-medium">15 min ago</span>
                    </div>
                    <p className="text-orange-700">Facebook: "Besoin d'aide urgente à Amizmiz"</p>
                    <p className="text-xs text-orange-600">📍 Amizmiz Center</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">📍 Family Tracking</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-3 w-3 text-blue-500" />
                      <span className="font-medium">5 min ago</span>
                    </div>
                    <p className="text-blue-700">Family #A-128 tagged by Team Alpha</p>
                    <p className="text-xs text-blue-600">5 people, needs medical aid</p>
                  </div>

                  <div className="p-2 bg-yellow-50 rounded text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="h-3 w-3 text-yellow-500" />
                      <span className="font-medium">12 min ago</span>
                    </div>
                    <p className="text-yellow-700">Coverage gap detected in Douar Tafrawt</p>
                    <p className="text-xs text-yellow-600">AI recommends team dispatch</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-green-600">🚛 Aid Delivery</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-green-50 rounded text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="font-medium">8 min ago</span>
                    </div>
                    <p className="text-green-700">Truck B-2 delivered to Talat N'Yaaqoub</p>
                    <p className="text-xs text-green-600">Medical supplies for 12 families</p>
                  </div>

                  <div className="p-2 bg-purple-50 rounded text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Navigation className="h-3 w-3 text-purple-500" />
                      <span className="font-medium">20 min ago</span>
                    </div>
                    <p className="text-purple-700">Truck A-1 en route to Amizmiz</p>
                    <p className="text-xs text-purple-600">ETA: 25 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
