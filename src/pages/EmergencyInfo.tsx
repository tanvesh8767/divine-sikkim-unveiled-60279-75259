import React from "react";
import { ArrowLeft, Phone, Hospital, Shield, Flame, Ambulance, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const EmergencyInfo = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    {
      icon: Shield,
      title: "Police",
      number: "100",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Ambulance,
      title: "Ambulance",
      number: "102",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Flame,
      title: "Fire Department",
      number: "101",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      icon: Hospital,
      title: "STNM Hospital (Gangtok)",
      number: "+91 3592-222014",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Phone,
      title: "Tourism Helpline",
      number: "1363",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MapPin,
      title: "Sikkim Tourism Office",
      number: "+91 3592-221634",
      color: "text-monastery",
      bgColor: "bg-monastery/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with urgent styling */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Emergency Information
          </h1>
          <p className="text-xl text-white/90 animate-fade-in">
            Important contact numbers for emergencies in Sikkim
          </p>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-4">
          {emergencyContacts.map((contact, index) => (
            <a
              key={index}
              href={`tel:${contact.number.replace(/\s/g, '')}`}
              className={`block ${contact.bgColor} border-2 border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-102 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="h-10 w-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">
                    {contact.title}
                  </h3>
                  <p className={`text-2xl font-bold ${contact.color}`}>
                    {contact.number}
                  </p>
                </div>
                <Phone className={`h-6 w-6 ${contact.color} group-hover:animate-pulse`} />
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            Important Notes:
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Save these numbers in your phone before traveling</li>
            <li>• Emergency services are available 24/7</li>
            <li>• For medical emergencies, call 102 immediately</li>
            <li>• Inform your hotel reception about any emergencies</li>
            <li>• Keep your location handy when calling for help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyInfo;
