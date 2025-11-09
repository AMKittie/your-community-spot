import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-gray-800" />
            <span className="text-xl font-bold text-foreground">Community Support</span>
          </div>
          
          <div className="flex-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
