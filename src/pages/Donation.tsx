import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import donationBg from "@/assets/donation-bg.jpg";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const presetAmounts = [500, 1000, 2500, 5000];

  const impactAreas = [
    {
      icon: Sparkles,
      title: "Preserve Ancient Murals",
      description: "Help restore and maintain centuries-old Buddhist art and murals"
    },
    {
      icon: Users,
      title: "Support Monks",
      description: "Provide education, food, and living expenses for monastery monks"
    },
    {
      icon: Home,
      title: "Restore Infrastructure",
      description: "Maintain monastery buildings, prayer halls, and sacred spaces"
    },
    {
      icon: Heart,
      title: "Cultural Programs",
      description: "Fund festivals, rituals, and cultural preservation initiatives"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div 
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${donationBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link to="/" className="inline-block mb-6">
            <Button variant="ghost" className="text-white hover:text-primary-glow">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Support Monasteries of Sikkim
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
            Contribute towards preserving culture, heritage, and spiritual traditions.
          </p>
        </div>
      </div>

      {/* Donation Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Donation Amount Cards */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Contribution</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {presetAmounts.map((amount) => (
              <Card
                key={amount}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-golden border-2 ${
                  selectedAmount === amount
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                }`}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
              >
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary">₹{amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="max-w-md mx-auto">
            <Label htmlFor="custom-amount" className="text-lg mb-2 block">
              Or Enter Custom Amount
            </Label>
            <Input
              id="custom-amount"
              type="number"
              placeholder="Enter amount in ₹"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="text-lg h-12"
            />
          </div>
        </div>

        {/* Payment Form */}
        <Card className="max-w-2xl mx-auto mb-16 shadow-monastery">
          <CardHeader>
            <CardTitle className="text-2xl">Donor Information</CardTitle>
            <CardDescription>Please fill in your details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="payment-method">Payment Method</Label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select payment method</option>
                <option value="upi">UPI</option>
                <option value="credit-debit">Credit/Debit Card</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            <Button 
              variant="golden" 
              size="lg" 
              className="w-full text-lg"
              disabled={(!selectedAmount && !customAmount) || !name || !email || !paymentMethod}
            >
              Donate Now
            </Button>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Your Impact</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every contribution helps keep the spirit of Sikkim's monasteries alive
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:scale-105 hover:shadow-golden hover:-translate-y-1 border-primary/20"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-golden flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Thank You Note */}
        <Card className="max-w-3xl mx-auto text-center bg-gradient-monastery border-primary/30">
          <CardContent className="p-8">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
            <p className="text-xl md:text-2xl font-medium text-monastery-foreground">
              "Every contribution helps keep the spirit of Sikkim's monasteries alive."
            </p>
            <p className="text-muted-foreground mt-4">
              Thank you for your generosity and support in preserving our cultural heritage.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donation;
