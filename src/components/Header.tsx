import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Community Support</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-smooth font-medium">
              Resources
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-hero-gradient hover:opacity-90 transition-smooth">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
