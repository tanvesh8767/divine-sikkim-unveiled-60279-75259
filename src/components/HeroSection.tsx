import React from "react";
import { Button } from "@/components/ui/button";
import { Map, Camera, Calendar, Archive } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Realistic Monastery POV Video Background */}
      <div className="absolute inset-0 z-0">
        {/* POV monastery entrance image with parallax effect */}
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/videos/monastery-entrance-pov.jpg)'
      }} />
        {/* Animated overlay for video-like effect */}
        <div className="absolute inset-0 monastery-mist animate-gentle-float opacity-30" />
        <div className="absolute inset-0 monastery-prayer-flags animate-prayer-flutter opacity-20" />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-hero/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-float">
          <span className="text-primary font-medium text-sm">{t('digitalHeritage')}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          {t('monasteryName').split(' ')[0]} <span className="text-primary">{t('monasteryName').split(' ')[1]}</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light text-foreground/80">
          {t('heroDescription')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <Map className="mr-2 h-5 w-5" />
            {t('exploreMonasteries')}
          </Button>
          <Button variant="prayer" size="lg" className="text-lg px-8 py-6">
            <Camera className="mr-2 h-5 w-5" />
            {t('virtualDiscovery')}
          </Button>
        </div>

        {/* Feature Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="group cursor-pointer p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-monastery" onClick={() => navigate("/smart-navigation")}>
            <Map className="h-8 w-8 text-primary mx-auto mb-2 group-hover:animate-glow" />
            <p className="text-sm font-medium text-card-foreground">{t('smartNavigation')}</p>
          </div>
          <div className="group cursor-pointer p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-monastery">
            <Camera className="h-8 w-8 text-accent mx-auto mb-2 group-hover:animate-glow" />
            <p className="text-sm font-medium text-card-foreground">{t('virtualTours')}</p>
          </div>
          <div className="group cursor-pointer p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-monastery" onClick={() => navigate("/cultural-calendar")}>
            <Calendar className="h-8 w-8 text-monastery mx-auto mb-2 group-hover:animate-glow" />
            <p className="text-sm font-medium text-card-foreground">{t('culturalCalendar')}</p>
          </div>
          <div className="group cursor-pointer p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-monastery" onClick={() => navigate("/digital-archives")}>
            <Archive className="h-8 w-8 text-primary mx-auto mb-2 group-hover:animate-glow" />
            <p className="text-sm font-medium text-card-foreground">{t('digitalArchives')}</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{
      animationDelay: "2s"
    }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-monastery rounded-full animate-float opacity-80" style={{
      animationDelay: "4s"
    }} />
    </section>;
};
export default HeroSection;