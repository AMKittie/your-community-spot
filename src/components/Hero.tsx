import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community support and helping hands" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Community Resource Finder</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Find Support When You Need It Most
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Connect with essential community resources including emergency shelters, 
            food banks, and cooling centers across California. Help is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-hero-gradient hover:opacity-90 transition-all shadow-medium hover:shadow-lg hover:scale-105"
            >
              Find Resources Near You
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-muted transition-smooth"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
