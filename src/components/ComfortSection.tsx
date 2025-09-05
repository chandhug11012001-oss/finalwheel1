import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

const ComfortSection = () => {
  const { comfort } = siteContent; // reuse comfort section data

  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <p className="uppercase tracking-widest text-sm font-semibold">
            {comfort.subtitle}
          </p>
          <h2 className="text-4xl font-bold leading-snug">
            {comfort.title}
          </h2>
          <p className="text-lg text-gray-200 max-w-xl">
            {comfort.description}
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-gray-100 font-semibold flex items-center gap-2"
            >
                {comfort.button}<ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Right Side Steps */}
        <div className="space-y-6">
          {comfort.steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-md flex-shrink-0"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm mt-1">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
