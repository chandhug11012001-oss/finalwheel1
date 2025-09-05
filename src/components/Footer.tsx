import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
         
          <div className="flex flex-col items-center md:items-start space-y-6">
           
            <img
              src="/logo.png" 
              alt="Demo Aviation"
              className="w-16 h-16"
            />

           
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-bold text-lg mb-4">WHAT WE DO</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
            </ul>
          </div>

      
          <div>
            <h3 className="font-bold text-lg mb-4">INSIGHTS</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
              <li>Heading</li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 pt-6">
          <p>© DEMO AVIATION. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Consent Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
