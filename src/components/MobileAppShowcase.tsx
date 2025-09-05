import { Button } from "@/components/ui/button";
import mobileMockup from "../assets/mobile-mockup.png";

const MobileAppShowcase = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
         
          <div className="relative">
            <div className="relative mx-auto">
              <img 
                src={mobileMockup} 
                alt="Mobile App Showcase"
                className="w-full h-auto"
              />
            </div>
          </div>

         
          <div className="space-y-8">
            <div className="space-y-6">
          
              <p className="text-sm font-semibold uppercase text-foreground">About Us</p>

             
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
                A three line content will <br />
                be coming here just <br />
                like the design
              </h2>

             
              <div className="space-y-4 text-muted-foreground text-base">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Felis amet massa quis 
                  eget magna nunc pellentesque ac urna. Quam consectetur etiam 
                  eu gravida quis elementum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Felis amet massa quis 
                  eget magna nunc pellentesque ac urna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Felis amet massa quis 
                  eget magna nunc pellentesque ac urna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Felis amet massa quis 
                  eget magna nunc pellentesque ac urna.
                </p>
              </div>
            </div>

         
            <div>
              <Button 
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-md"
              >
                Learn More →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;
