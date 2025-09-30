import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MonasteryShowcase from "@/components/MonasteryShowcase";
import FeatureHighlights from "@/components/FeatureHighlights";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MonasteryShowcase />
        <FeatureHighlights />
      </main>
      <Chatbot />
    </div>
  );
};

export default Index;
