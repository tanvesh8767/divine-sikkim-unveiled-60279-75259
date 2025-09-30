import React from "react";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LocalGuides = () => {
  const navigate = useNavigate();

  const guides = [
    {
      name: "Tashi Dorjee",
      specialty: "Mountain Trekking Expert",
      location: "Gangtok",
      phone: "+91 98765 43210",
      email: "tashi.d@sikkimguides.com",
      experience: "15 years"
    },
    {
      name: "Pemba Sherpa",
      specialty: "Cultural Heritage Guide",
      location: "Pelling",
      phone: "+91 98765 43211",
      email: "pemba.s@sikkimguides.com",
      experience: "12 years"
    },
    {
      name: "Lhamu Tsering",
      specialty: "Wildlife & Nature Tours",
      location: "Yuksom",
      phone: "+91 98765 43212",
      email: "lhamu.t@sikkimguides.com",
      experience: "10 years"
    },
    {
      name: "Karma Wangchuk",
      specialty: "Monastery & Spiritual Tours",
      location: "Gangtok",
      phone: "+91 98765 43213",
      email: "karma.w@sikkimguides.com",
      experience: "18 years"
    },
    {
      name: "Dawa Lepcha",
      specialty: "Adventure Sports Guide",
      location: "Namchi",
      phone: "+91 98765 43214",
      email: "dawa.l@sikkimguides.com",
      experience: "8 years"
    },
    {
      name: "Sonam Bhutia",
      specialty: "Photography Tours",
      location: "Lachung",
      phone: "+91 98765 43215",
      email: "sonam.b@sikkimguides.com",
      experience: "14 years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-primary-foreground hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Local Tour Guides
          </h1>
          <p className="text-xl text-primary-foreground/90 animate-fade-in">
            Connect with experienced local guides for an authentic Sikkim experience
          </p>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-monastery transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-golden mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary-foreground group-hover:animate-glow">
                {guide.name.charAt(0)}
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-card-foreground mb-1">
                  {guide.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {guide.specialty}
                </p>
                <p className="text-xs text-muted-foreground">
                  {guide.experience} experience
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{guide.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 text-monastery" />
                  <a href={`tel:${guide.phone}`}>{guide.phone}</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${guide.email}`} className="truncate">
                    {guide.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalGuides;
