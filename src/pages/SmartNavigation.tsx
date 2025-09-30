import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Navigation, MapPin, Star, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import smartNavigationBg from "@/assets/smart-navigation-bg.jpg";
import MapboxMap from "@/components/MapboxMap";

const SmartNavigation = () => {
  const navigate = useNavigate();

  // Famous monasteries in Sikkim with details
  const monasteries = [
    {
      name: "Rumtek Monastery",
      description: "The largest monastery in Sikkim, seat of the Karmapa",
      rating: 4.8,
      visitors: "2000+/month",
      bestTime: "Mar-May, Sep-Nov"
    },
    {
      name: "Enchey Monastery",
      description: "200-year-old monastery above Gangtok",
      rating: 4.6,
      visitors: "1500+/month",
      bestTime: "All Year"
    },
    {
      name: "Do Drul Chorten",
      description: "Important stupa built by Trulshik Rinpoche",
      rating: 4.7,
      visitors: "1800+/month",
      bestTime: "Oct-Mar"
    },
    {
      name: "Pemayangtse Monastery",
      description: "Second oldest monastery in Sikkim",
      rating: 4.9,
      visitors: "1200+/month",
      bestTime: "Apr-Jun, Sep-Nov"
    },
    {
      name: "Tashiding Monastery",
      description: "Sacred monastery on a hilltop",
      rating: 4.8,
      visitors: "1000+/month",
      bestTime: "Mar-May"
    },
    {
      name: "Labrang Monastery",
      description: "Beautiful monastery in North Sikkim",
      rating: 4.5,
      visitors: "800+/month",
      bestTime: "Apr-Jun"
    },
    {
      name: "Ralang Monastery",
      description: "Historic monastery in West Sikkim",
      rating: 4.6,
      visitors: "900+/month",
      bestTime: "Sep-Nov"
    },
    {
      name: "Phodong Monastery",
      description: "Beautiful monastery in North Sikkim",
      rating: 4.7,
      visitors: "1100+/month",
      bestTime: "Mar-Jun"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-xl font-bold">Smart Navigation</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section with Background */}
      <section 
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url(${smartNavigationBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <Navigation className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-2">Monastery Navigator</h2>
          <p className="text-xl">Discover Sacred Places with GPS Guidance</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Interactive Monastery Map of Sikkim
                  </CardTitle>
                  <CardDescription>
                    Click on monastery markers (golden stars) to get information and directions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-[600px]">
                    <MapboxMap />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-3xl font-bold text-primary">{monasteries.length}</h3>
                    <p className="text-sm text-muted-foreground">Featured Monasteries</p>
                  </div>
                </CardContent>
              </Card>

              {/* Monastery List */}
              <Card>
                <CardHeader>
                  <CardTitle>Famous Monasteries</CardTitle>
                  <CardDescription>Explore sacred sites of Sikkim</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 max-h-[450px] overflow-y-auto">
                  {monasteries.map((monastery, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-muted cursor-pointer transition-colors group">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium group-hover:text-primary transition-colors">{monastery.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-yellow-500">
                          <Star className="h-3 w-3 fill-yellow-500" />
                          {monastery.rating}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{monastery.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {monastery.visitors}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {monastery.bestTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartNavigation;