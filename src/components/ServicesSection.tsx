import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

// Import images from src/assets
import w1 from "../../src/assets/w1.png";
import w2 from "../../src/assets/w2.png";
import w3 from "../../src/assets/w3.jpg";

const ServicesSection = () => {
  const { services } = siteContent;

  return (
    <section id="services" className="py-16">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-md">
            <img
              src={w1}
              alt="Service 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={w2}
              alt="Service 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={w3}
              alt="Service 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-primary">
            {services.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {services.subtitle}
          </p>

          {/* List of points */}
          <div className="space-y-3">
            {services.items.map((item, index) => (
              <p key={index} className="text-gray-700">
                {item.title}
              </p>
            ))}
          </div>

          {/* Button */}
          <div className="pt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 flex items-center gap-2">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
