import React from "react";
import { ArrowLeft, Image, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import monasteryBg from "@/assets/sikkim-monastery-bg.jpg";

const DigitalArchives = () => {
  const navigate = useNavigate();

  const archiveItems = [
    {
      icon: Image,
      title: "Historic Photographs",
      description: "Rare images from Sikkim's past",
      count: "250+ photos",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Historical Documents",
      description: "Ancient manuscripts and records",
      count: "150+ documents",
      color: "text-monastery"
    },
    {
      icon: Video,
      title: "Cultural Videos",
      description: "Traditional ceremonies and festivals",
      count: "80+ videos",
      color: "text-primary"
    },
    {
      icon: Image,
      title: "Monastery Archives",
      description: "Sacred art and architecture",
      count: "300+ images",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Folk Stories",
      description: "Oral traditions preserved",
      count: "120+ stories",
      color: "text-monastery"
    },
    {
      icon: Video,
      title: "Interview Collection",
      description: "Elder wisdom and experiences",
      count: "50+ interviews",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${monasteryBg})`
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Digital Archives
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore Sikkim's rich heritage through preserved photographs, documents, and cultural records
          </p>
        </div>
      </div>

      {/* Archives Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-6 hover:shadow-monastery transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${item.color} mb-4 group-hover:animate-glow`}>
                  <item.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {item.description}
                </p>
                <span className="text-sm font-medium text-primary">
                  {item.count}
                </span>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalArchives;
