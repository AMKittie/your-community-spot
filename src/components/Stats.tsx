import { Card } from "@/components/ui/card";

const stats = [
  { number: "150+", label: "Resource Locations" },
  { number: "24/7", label: "Access Available" },
  { number: "10K+", label: "People Helped" },
  { number: "100%", label: "Free Service" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-smooth"
            >
              <div className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
