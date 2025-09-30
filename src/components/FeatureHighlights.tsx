import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Map, 
  Camera, 
  Calendar, 
  Archive, 
  MessageCircle, 
  Headphones,
  Globe,
  Smartphone
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Map,
    title: "Smart Navigation",
    description: "Interactive maps with geo-tagged monasteries, suggested routes, and location-based discovery.",
    color: "primary",
    highlights: ["Interactive Maps", "Route Planning", "GPS Integration"]
  },
  {
    icon: Camera, 
    title: "Virtual Discovery",
    description: "Immersive 360° tours, VR experiences, and augmented reality monastery exploration.",
    color: "accent",
    highlights: ["360° Tours", "VR Experience", "AR Integration"]
  },
  {
    icon: MessageCircle,
    title: "AI Guide Assistant", 
    description: "Multilingual chatbot providing personalized recommendations and cultural insights.",
    color: "monastery",
    highlights: ["Multi-language", "Smart Recommendations", "Cultural Context"]
  },
  {
    icon: Headphones,
    title: "Audio Tours",
    description: "Location-aware audio guides with offline downloads and narrated cultural stories.",
    color: "secondary",
    highlights: ["Location-Based", "Offline Mode", "Cultural Stories"]
  },
  {
    icon: Calendar,
    title: "Cultural Calendar",
    description: "Live events, festival schedules, and ceremony participation for authentic experiences.",
    color: "primary",
    highlights: ["Live Events", "Festival Alerts", "Participation"]
  },
  {
    icon: Archive,
    title: "Digital Archives",
    description: "Searchable manuscripts, historical documents, and preserved cultural artifacts.",
    color: "accent",
    highlights: ["Manuscripts", "Historical Docs", "Cultural Artifacts"]
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Content available in English, Hindi, Nepali, Tibetan, and local dialects.",
    color: "monastery", 
    highlights: ["5+ Languages", "Voice Support", "Cultural Adaptation"]
  },
  {
    icon: Smartphone,
    title: "PWA & Offline Mode",
    description: "Progressive Web App with offline access, background sync, and mobile optimization.",
    color: "secondary",
    highlights: ["Offline Access", "Mobile Optimized", "Background Sync"]
  }
];

const colorMap = {
  primary: "text-primary border-primary/20 bg-primary/5",
  accent: "text-accent border-accent/20 bg-accent/5", 
  monastery: "text-monastery border-monastery/20 bg-monastery/5",
  secondary: "text-secondary border-secondary/20 bg-secondary/5"
};

const FeatureHighlights = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-monastery/10 border border-monastery/20 rounded-full mb-4">
            <span className="text-monastery font-medium text-sm">{t('platformFeatures')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('immersiveCultural')} <span className="text-monastery">{t('experience')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('featuresDescription')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = colorMap[feature.color as keyof typeof colorMap];
            
            return (
              <Card 
                key={index}
                className="group p-6 hover:shadow-monastery transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm animate-scale-in hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg mb-4 ${colorClasses} group-hover:animate-glow`}>
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <div className={`w-1 h-1 rounded-full ${feature.color === 'primary' ? 'bg-primary' : feature.color === 'accent' ? 'bg-accent' : feature.color === 'monastery' ? 'bg-monastery' : 'bg-secondary'}`} />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-monastery rounded-2xl p-8 border border-border/50 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {t('readyJourney')}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('journeyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Map className="mr-2 h-5 w-5" />
              {t('startExploring')}
            </Button>
            <Button variant="prayer" size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('askAiGuide')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;