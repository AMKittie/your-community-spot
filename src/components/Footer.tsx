import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Community Support Center
            </h3>
            <p className="text-background/80 leading-relaxed">
              Connecting people with essential resources and support services across California.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Resources</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Get Involved</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@community.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© 2024 Community Support Center. All rights reserved. Made with ❤️ for the community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
