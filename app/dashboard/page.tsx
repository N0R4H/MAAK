import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  AlertTriangle,
  MapPin,
  Users,
  Truck,
  Heart,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  MessageSquare,
  Navigation,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">معاك</h1>
              <p className="text-gray-600">Emergency Response Command Center</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="destructive" className="animate-pulse">
                🔴 ACTIVE EMERGENCY
              </Badge>
              <Badge variant="outline">Morocco Earthquake Response</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">SOS Signals Detected</p>
                  <p className="text-3xl font-bold text-red-600">247</p>
                  <p className="text-sm text-gray-500">+23 in last hour</p>
                </div>
                <MessageSquare className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Families Located</p>
                  <p className="text-3xl font-bold text-blue-600">1,847</p>
                  <p className="text-sm text-gray-500">89% coverage</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Aid Delivered</p>
                  <p className="text-3xl font-bold text-green-600">1,203</p>
                  <p className="text-sm text-gray-500">65% of located</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Still Waiting</p>
                  <p className="text-3xl font-bold text-orange-600">644</p>
                  <p className="text-sm text-gray-500">Need immediate aid</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sos-detector" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="sos-detector">🔍 SOS Detector</TabsTrigger>
            <TabsTrigger value="victim-locator">📍 Victim Locator</TabsTrigger>
            <TabsTrigger value="aid-distribution">🚛 Aid Distribution</TabsTrigger>
          </TabsList>

          {/* SOS Detector Tab */}
          <TabsContent value="sos-detector" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Recent SOS Signals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-l-red-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="destructive">HIGH PRIORITY</Badge>
                      <span className="text-sm text-gray-500">2 min ago</span>
                    </div>
                    <p className="text-sm font-medium">WhatsApp Forward (Darija)</p>
                    <p className="text-sm text-gray-600">"نحن محاصرون في دوار أيت حمو، البيوت مهدمة والأطفال جرحى"</p>
                    <p className="text-xs text-gray-500">📍 Estimated: Ait Hamou Village, Al Haouz</p>
                  </div>

                  <div className="border-l-4 border-l-orange-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="secondary">MEDIUM</Badge>
                      <span className="text-sm text-gray-500">15 min ago</span>
                    </div>
                    <p className="text-sm font-medium">Facebook Post</p>
                    <p className="text-sm text-gray-600">"Besoin d'aide urgente à Amizmiz, pas d'eau depuis 3 jours"</p>
                    <p className="text-xs text-gray-500">📍 Amizmiz, Al Haouz Province</p>
                  </div>

                  <div className="border-l-4 border-l-yellow-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="outline">VERIFIED</Badge>
                      <span className="text-sm text-gray-500">1 hour ago</span>
                    </div>
                    <p className="text-sm font-medium">Twitter + Image Analysis</p>
                    <p className="text-sm text-gray-600">Image shows collapsed building, 3 people visible</p>
                    <p className="text-xs text-gray-500">📍 Coordinates: 31.2156°N, 8.0108°W</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    AI Detection Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Darija Distress Detection</span>
                      <span>94% accuracy</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Image Damage Classification</span>
                      <span>87% accuracy</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Location Inference</span>
                      <span>76% accuracy</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Signal Sources (Last 24h)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>WhatsApp Forwards</span>
                        <span className="font-medium">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Facebook Posts</span>
                        <span className="font-medium">67</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Twitter/X</span>
                        <span className="font-medium">24</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Victim Locator Tab */}
          <TabsContent value="victim-locator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Field Team Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <div>
                        <p className="font-medium">Team Alpha - Amizmiz</p>
                        <p className="text-sm text-gray-600">32 households tagged today</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ACTIVE
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                      <div>
                        <p className="font-medium">Team Beta - Talat N'Yaaqoub</p>
                        <p className="text-sm text-gray-600">18 households tagged today</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      ACTIVE
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-400 rounded-full" />
                      <div>
                        <p className="font-medium">Team Gamma - Ouirgane</p>
                        <p className="text-sm text-gray-600">Returning to base</p>
                      </div>
                    </div>
                    <Badge variant="outline">OFFLINE</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    AI Coverage Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="font-medium text-red-700">Coverage Gap Detected</span>
                    </div>
                    <p className="text-sm text-red-600">Douar Tafrawt: 15 estimated households, only 3 tagged</p>
                    <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                      Dispatch Team
                    </Button>
                  </div>

                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="font-medium text-orange-700">High Priority Families</span>
                    </div>
                    <p className="text-sm text-orange-600">12 families with elderly/children waiting 48+ hours</p>
                    <Button size="sm" variant="outline" className="mt-2 border-orange-600 text-orange-600">
                      View List
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Regional Coverage</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Amizmiz</span>
                          <span>94%</span>
                        </div>
                        <Progress value={94} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Talat N'Yaaqoub</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Ouirgane</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aid Distribution Tab */}
          <TabsContent value="aid-distribution" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Active Aid Deliveries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Navigation className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Truck A-1 → Amizmiz</p>
                        <p className="text-sm text-gray-600">Food & Water • ETA: 45 min</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-600">EN ROUTE</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Truck B-2 → Talat N'Yaaqoub</p>
                        <p className="text-sm text-gray-600">Medical Supplies • Delivered</p>
                      </div>
                    </div>
                    <Badge className="bg-green-600">DELIVERED</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium">Truck C-3 → Ouirgane</p>
                        <p className="text-sm text-gray-600">Tents & Blankets • Loading</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      PREPARING
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Distribution Fairness
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-green-700">No Duplicate Deliveries</span>
                    </div>
                    <p className="text-sm text-green-600">AI prevented 23 duplicate aid deliveries this week</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Aid Type Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Food & Water</span>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-20 h-2" />
                          <span className="text-sm font-medium">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Medical Supplies</span>
                        <div className="flex items-center gap-2">
                          <Progress value={72} className="w-20 h-2" />
                          <span className="text-sm font-medium">72%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Shelter Materials</span>
                        <div className="flex items-center gap-2">
                          <Progress value={58} className="w-20 h-2" />
                          <span className="text-sm font-medium">58%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-red-600 hover:bg-red-700">View Public Transparency Map</Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Real-time public tracking of all aid deliveries
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
