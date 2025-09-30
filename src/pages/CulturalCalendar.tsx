import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Calendar as CalendarIcon, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import sikkimMonasteryBg from "@/assets/sikkim-monastery-bg.jpg";
import festivalLosar from "@/assets/festival-losar.jpg";
import festivalSagaDawa from "@/assets/festival-saga-dawa.jpg";
import festivalDrukpaKunley from "@/assets/festival-drukpa-kunley.jpg";
import festivalDashain from "@/assets/festival-dashain.jpg";
import festivalDiwali from "@/assets/festival-diwali.jpg";

const CulturalCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const navigate = useNavigate();

  const festivals = [
    {
      id: 1,
      name: "Losar (Tibetan New Year)",
      date: "February 10, 2024",
      location: "All Monasteries",
      description: "Most important festival in Sikkim, celebrating the Tibetan New Year with prayers and festivities.",
      type: "Major Festival",
      image: festivalLosar
    },
    {
      id: 2,
      name: "Saga Dawa",
      date: "May 23, 2024",
      location: "Rumtek Monastery",
      description: "Celebrates Buddha's birth, enlightenment, and death. Sacred month for Buddhist pilgrimage.",
      type: "Religious",
      image: festivalSagaDawa
    },
    {
      id: 3,
      name: "Drukpa Kunley Festival",
      date: "September 15, 2024",
      location: "Hemis Monastery",
      description: "Annual festival with masked dances and traditional ceremonies.",
      type: "Cultural",
      image: festivalDrukpaKunley
    },
    {
      id: 4,
      name: "Dashain Festival",
      date: "October 12, 2024",
      location: "Various Monasteries",
      description: "Hindu festival celebrated across Sikkim with special prayers and community gatherings.",
      type: "Religious",
      image: festivalDashain
    },
    {
      id: 5,
      name: "Diwali Celebrations",
      date: "November 1, 2024",
      location: "All Monasteries",
      description: "Festival of lights celebrated with lamp lighting ceremonies and prayers.",
      type: "Festival",
      image: festivalDiwali
    }
  ];

  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sikkimMonasteryBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Cultural Calendar</h1>
              <p className="text-muted-foreground">Discover monastery festivals and celebrations</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Side */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{festivals.length}</p>
                      <p className="text-xs text-muted-foreground">Festivals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-2xl font-bold">12+</p>
                      <p className="text-xs text-muted-foreground">Monasteries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendar Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Festival Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border w-full [&_.rdp-months]:w-full [&_.rdp-month]:w-full [&_table]:w-full [&_td]:p-0 [&_button]:w-full [&_button]:h-12"
                />
                {selectedDate && (
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Selected Date:</p>
                    <p className="font-medium">{format(selectedDate, "PPP")}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="bg-gradient-to-br from-monastery/10 to-monastery/5 border-monastery/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-monastery">
                  <TrendingUp className="h-5 w-5" />
                  Peak Season
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Spring (Mar-May)</span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-700">Best</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Autumn (Sep-Nov)</span>
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-700">Good</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Winter (Dec-Feb)</span>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-700">Cold</Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Plan your visit during festival seasons for the most authentic cultural experience
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Festivals Side */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Upcoming Festivals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {festivals.map((festival) => (
                  <div
                    key={festival.id}
                    className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer overflow-hidden"
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={festival.image} 
                          alt={festival.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{festival.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {festival.type}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {festival.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {festival.location}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {festival.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalCalendar;