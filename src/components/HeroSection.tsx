import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";
import wheelchairImg from "../assets/wheelchair.png"; // replace with your image path

const HeroSection = () => {
  const { hero } = siteContent;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src={wheelchairImg}
              alt="Wheelchair"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Making your journey comfortable
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Felis amet massa quis eget
              magna nunc pellentesque ac urna. Quam consectetur etiam eu gravida
              quis elementum.
            </p>

            {/* Features Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-md bg-gray-300 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Heading</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lorem ipsum dolor sit amet consectetur. Sit malesuada
                      velit nisl etiam senectus
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-6 py-3 rounded-md bg-blue-900 text-white font-medium inline-flex items-center space-x-2 hover:bg-blue-800 transition">
                <span>Learn More</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
