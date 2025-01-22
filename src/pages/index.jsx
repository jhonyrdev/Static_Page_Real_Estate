import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { ArrowRight, Building2, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Dream Luxury Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-in">
            Discover exclusive properties in prime locations
          </p>
          <button 
            onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-800 hover:bg-gray-800/90 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto space-x-2 transition-colors"
          >
            <span>View Properties</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Modern Villa",
              location: "Beverly Hills",
              price: "$4,500,000",
              image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            }, {
              title: "Luxury Penthouse",
              location: "Downtown LA",
              price: "$3,200,000",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            }, {
              title: "Seaside Mansion",
              location: "Malibu",
              price: "$6,800,000",
              image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            }].map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={18} className="mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-accent font-bold">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">About Us</h2>
            <p className="text-gray-600 text-lg mb-8">
              With over 20 years of experience in luxury real estate, we pride ourselves on providing exceptional service
              and finding the perfect properties for our discerning clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Premium Properties</h3>
                <p className="text-gray-600">Access to exclusive listings</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
                <p className="text-gray-600">Properties in sought-after areas</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">24/7 dedicated assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-800/90 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
