import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LuxuryResidences</h3>
            <p className="text-gray-300">
              Your trusted partner in finding the perfect luxury property. We make your dream home a reality.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent" size={20} />
                <span>123 Luxury Avenue, Miraflores, Lima</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent" size={20} />
                <span>+51 999 999 999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent" size={20} />
                <span>contact@LuxuryResidences.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} LuxuryResidences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
