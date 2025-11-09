import { MapPin, Home, Apple, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Homeless Shelters",
    description: "Find safe, temporary housing and support services for individuals and families experiencing homelessness.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Apple,
    title: "Food Banks",
    description: "Locate food distribution centers and meal programs providing nutritious food to those in need.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Snowflake,
    title: "Cooling Centers",
    description: "Access air-conditioned spaces during extreme heat to stay safe and comfortable.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-subtle-gradient">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Essential Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our interactive map helps you quickly find the support services you need in your area
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
