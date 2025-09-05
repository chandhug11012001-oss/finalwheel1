import { Smartphone, Clock, Settings, Shield } from "lucide-react";
import { siteContent } from "@/data/content";

const iconMap = {
  Smartphone,
  Clock,
  Settings,
  Shield,
};

const FeaturesSection = () => {
  const { features } = siteContent;

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
       
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {features.title}
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            {features.subtitle}
          </p>
        </div>

      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="flex items-start bg-gray-100 rounded-xl shadow-sm overflow-hidden relative"
              >
              
                <div className="relative">
                  <div className="bg-blue-900 text-white p-4 flex items-center justify-center">
                    <IconComponent size={28} />
                  </div>
                 
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-transparent border-t-black absolute left-0 right-0 mx-auto -bottom-5"></div>
                </div>

               
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
