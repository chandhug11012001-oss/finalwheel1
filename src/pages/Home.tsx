import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MobileAppShowcase from '@/components/MobileAppShowcase';
import FeaturesSection from '@/components/FeaturesSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComfortSection from '@/components/ComfortSection';
import WheelchairTypes from '@/components/WheelchairTypes';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MobileAppShowcase />
        <FeaturesSection />
        <ServicesSection />
        <HowItWorksSection />
        <ComfortSection />
        <WheelchairTypes />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;