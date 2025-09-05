import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/data/content';
import headerBg from '../assets/wheel.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { header } = siteContent;

  return (
    <section className="relative h-screen w-full">
     
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${headerBg})`,
            filter: 'brightness(0.85)',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                {header.logo}
              </h1>
            </div>

            
            <nav className="hidden md:flex items-center space-x-10">
              {header.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium text-sm ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant={isScrolled ? "default" : "outline"}
                size="default"
                className={`px-6 ${
                  isScrolled 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'border-white text-white hover:bg-white hover:text-blue-600'
                }`}
              >
                {header.cta}
              </Button>
            </div>

           
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>

        
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
              <nav className="py-4">
                {header.navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-6 py-4 border-t border-gray-100 mt-2">
                  <Button 
                    variant="default" 
                    size="default" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {header.cta}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

    
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            A three line content will
            be coming here just 
            like the design
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur. Felis amet massa quis eget magna nunc 
            pellentesque ac urna. Quam consectetur etiam eu gravida quis elementum.
          </p>

          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
