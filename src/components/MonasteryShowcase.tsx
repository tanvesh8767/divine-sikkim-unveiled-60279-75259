import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users, Camera } from "lucide-react";
import monasteryAerial from "@/assets/monastery-aerial.jpg";
import monasteryInterior from "@/assets/monastery-interior.jpg";
import heroImage from "@/assets/hero-monastery.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    image: monasteryAerial,
    description: "The largest monastery in Sikkim, known for its golden stupa and rich Buddhist heritage.",
    established: "16th Century",
    visitors: "2000+ monthly",
    features: ["Virtual Tour Available", "Audio Guide", "Digital Archive"]
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim", 
    image: monasteryInterior,
    description: "One of the oldest monasteries, featuring intricate wall paintings and sacred manuscripts.",
    established: "17th Century", 
    visitors: "1500+ monthly",
    features: ["360° Experience", "Manuscript Collection", "Cultural Events"]
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    image: heroImage,
    description: "Sacred pilgrimage site with stunning mountain views and ancient Buddhist traditions.",
    established: "15th Century",
    visitors: "1000+ monthly", 
    features: ["Mountain Views", "Pilgrimage Routes", "Festival Calendar"]
  }
];

const MonasteryShowcase = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-monastery">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">{t('featuredMonasteries')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('sacredHeritage')} <span className="text-primary">{t('preserved')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('monasteryDescription')}
          </p>
        </div>

        {/* Monastery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {monasteries.map((monastery, index) => (
            <Card 
              key={monastery.id} 
              className="group overflow-hidden hover:shadow-monastery transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={monastery.image} 
                  alt={monastery.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {t('featured')}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{monastery.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {monastery.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {monastery.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{monastery.established}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-monastery" />
                    <span className="text-muted-foreground">{monastery.visitors}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {monastery.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    {t('virtualTour')}
                  </Button>
                  <Button variant="outline" size="sm">
                    {t('details')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button variant="golden" size="lg" className="px-8">
            {t('exploreAllMonasteries')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonasteryShowcase;