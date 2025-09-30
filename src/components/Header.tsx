import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, Globe, AlertCircle, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/monastery-360-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/lib/translations";

const Header = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Monastery 360 Logo" className="w-14 h-14" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">{t('monasteryName')}</h1>
            <p className="text-xs text-muted-foreground">{t('tagline')}</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="font-medium">
            {t('explore')}
          </Button>
          <Button variant="ghost" className="font-medium">
            {t('virtualTours')}
          </Button>
          <Button variant="ghost" className="font-medium" onClick={() => navigate("/digital-archives")}>
            {t('archives')}
          </Button>
          <Button variant="ghost" className="font-medium" onClick={() => navigate("/cultural-calendar")}>
            {t('calendar')}
          </Button>
          <Button variant="ghost" className="font-medium" onClick={() => navigate("/local-guides")}>
            {t('localGuides')}
          </Button>
          <Button 
            variant="destructive" 
            className="font-medium bg-red-600 hover:bg-red-700 text-white" 
            onClick={() => navigate("/emergency")}
          >
            <AlertCircle className="h-4 w-4 mr-2" />
            {t('emergency')}
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-background border-border">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="cursor-pointer flex items-center justify-between"
                >
                  <span>{lang.nativeName}</span>
                  {language === lang.code && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="hero" className="hidden sm:flex">
            {t('startJourney')}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;