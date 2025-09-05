import { useState } from "react";
import { siteContent } from "@/data/content";

const HowItWorksSection = () => {
  const { howItWorks } = siteContent;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-black via-gray-900 to-[#0a0a2a] text-white">
      <div className="container-custom flex flex-col md:flex-row gap-12">

        <div className="relative flex flex-col items-start space-y-6 md:w-1/4">
         
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-white/70"></div>

          {howItWorks.steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative z-10 flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                activeStep === index
                  ? "bg-white text-blue-600 font-semibold shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {/* Circle */}
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  activeStep === index
                    ? "bg-blue-600 border-blue-600"
                    : "bg-black border-white"
                }`}
              ></div>
              Step {step.step}
            </button>
          ))}
        </div>

      
        <div className="md:w-3/4 space-y-6">
          <h2 className="text-4xl font-bold">{howItWorks.steps[activeStep].title}</h2>
          <p className="text-gray-300">{howItWorks.steps[activeStep].description}</p>
          <div>
            <h3 className="text-xl font-semibold">Step {howItWorks.steps[activeStep].step}</h3>
            <p className="text-gray-400 leading-relaxed mt-2">
              Lorem ipsum dolor sit amet consectetur. Felis amet massa quis eget magna nunc
              pellentesque ac urna. Quam consectetur etiam eu gravida quis elementum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
