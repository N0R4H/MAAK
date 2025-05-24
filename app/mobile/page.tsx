import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Camera,
  Users,
  Heart,
  AlertTriangle,
  CheckCircle,
  Clock,
  QrCode,
  Navigation,
  Phone,
  Home,
} from "lucide-react"

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-red-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">معاك Field</h1>
            <p className="text-sm opacity-90">Emergency Response Team</p>
          </div>
          <Badge variant="secondary" className="bg-red-700 text-white">
            Team Alpha
          </Badge>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center">
            <CardContent className="p-3">
              <Users className="h-6 w-6 mx-auto mb-1 text-blue-600" />
              <p className="text-lg font-bold">32</p>
              <p className="text-xs text-gray-600">Tagged Today</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-3">
              <CheckCircle className="h-6 w-6 mx-auto mb-1 text-green-600" />
              <p className="text-lg font-bold">18</p>
              <p className="text-xs text-gray-600">Aid Delivered</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-3">
              <Clock className="h-6 w-6 mx-auto mb-1 text-orange-600" />
              <p className="text-lg font-bold">14</p>
              <p className="text-xs text-gray-600">Still Waiting</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Location */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              Current Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-red-500" />
              <span>Douar Ait Hamou, Amizmiz</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">
                <QrCode className="h-4 w-4 mr-1" />
                Scan QR
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Camera className="h-4 w-4 mr-1" />
                Photo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tag Household */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Home className="h-4 w-4" />
              Tag New Household
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Family Size</label>
                <Input type="number" placeholder="5" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Children</label>
                <Input type="number" placeholder="2" className="mt-1" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Urgent Needs</label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-red-50">
                  Food
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                  Water
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
                  Medical
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                  Shelter
                </Badge>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Notes</label>
              <Textarea placeholder="Elderly woman needs medication, roof collapsed..." className="mt-1 h-20" />
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">Tag Household</Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Family #A-127 - Aid Delivered</p>
                <p className="text-xs text-gray-600">Food & water • 15 min ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
              <Users className="h-4 w-4 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Family #A-126 - Tagged</p>
                <p className="text-xs text-gray-600">5 people, needs medical • 32 min ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Priority Alert</p>
                <p className="text-xs text-gray-600">Elderly couple needs urgent help</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-red-600">Emergency Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="destructive" className="w-full">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Report Critical Emergency
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-1" />
                Call Base
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                Medical Alert
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sync Status */}
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Synced • Last update: 2 min ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
