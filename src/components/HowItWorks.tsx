import { Search, Filter, Navigation } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Your Area",
    description: "Enter your location or allow us to detect it automatically to see nearby resources.",
    number: "01",
  },
  {
    icon: Filter,
    title: "Filter Resources",
    description: "Choose the type of support you need: shelters, food banks, or cooling centers.",
    number: "02",
  },
  {
    icon: Navigation,
    title: "Get Directions",
    description: "Select a location to view details and get turn-by-turn directions.",
    number: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting help is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 -z-10" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-full blur-xl" />
                  <div className="relative bg-card border-2 border-primary/20 rounded-full p-6 shadow-soft">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-medium">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
