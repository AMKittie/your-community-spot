import { Button } from "@/components/ui/button";
import { Heart, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-subtle-gradient">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Join Our Community</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Find the Support You Need?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Start exploring our interactive map to discover resources in your area. 
            No registration required—just compassionate support when you need it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-hero-gradient hover:opacity-90 transition-all shadow-medium hover:shadow-lg hover:scale-105"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Launch Resource Finder
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 border-2 hover:bg-muted transition-smooth"
            >
              Contact Support
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Available 24/7 • Completely Free • Confidential
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
