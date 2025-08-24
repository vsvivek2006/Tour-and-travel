import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Bed, MapPin, Calendar, Users, Star, Wifi, Coffee, Car as CarIcon, Phone } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const CarHotelBookingPage = () => {
  const [activeTab, setActiveTab] = useState('cars');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1
  });

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
      title: 'Car & Hotel Booking',
      subtitle: 'Complete Travel Solutions',
      description: 'Book premium cars and hotels for your perfect Indian vacation. Comfort, safety, and convenience guaranteed.',
      buttonText: 'Book Now'
    }
  ];

  const carRentals = [
    {
      id: 1,
      name: 'Toyota Innova Crysta',
      category: 'SUV',
      seats: 7,
      price: '₹2,500',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      features: ['AC', 'GPS', 'Driver Included', 'Fuel Included'],
      rating: 4.8,
      description: 'Spacious and comfortable SUV perfect for family trips'
    },
    {
      id: 2,
      name: 'Maruti Swift Dzire',
      category: 'Sedan',
      seats: 4,
      price: '₹1,800',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      features: ['AC', 'GPS', 'Driver Included', 'Fuel Included'],
      rating: 4.6,
      description: 'Compact sedan ideal for city tours and short trips'
    },
    {
      id: 3,
      name: 'Mahindra Scorpio',
      category: 'SUV',
      seats: 8,
      price: '₹2,200',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg',
      features: ['AC', 'GPS', 'Driver Included', 'Fuel Included'],
      rating: 4.5,
      description: 'Rugged SUV perfect for adventure tours and rough terrains'
    },
    {
      id: 4,
      name: 'Tempo Traveller',
      category: 'Minibus',
      seats: 12,
      price: '₹3,500',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      features: ['AC', 'GPS', 'Driver Included', 'Fuel Included'],
      rating: 4.7,
      description: 'Spacious vehicle ideal for group travel and long journeys'
    }
  ];

  const hotels = [
    {
      id: 1,
      name: 'Royal Palace Heritage Hotel',
      category: 'Luxury',
      location: 'Jaipur, Rajasthan',
      price: '₹8,500',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities: ['Pool', 'Spa', 'Restaurant', 'Free WiFi', 'Room Service'],
      rating: 4.9,
      description: 'Experience royal luxury in this magnificent heritage hotel'
    },
    {
      id: 2,
      name: 'Backwater Resort Kerala',
      category: 'Resort',
      location: 'Alleppey, Kerala',
      price: '₹6,200',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      amenities: ['Pool', 'Ayurveda Spa', 'Restaurant', 'Free WiFi', 'Boat Service'],
      rating: 4.8,
      description: 'Serene backwater resort with traditional Kerala architecture'
    },
    {
      id: 3,
      name: 'Mountain View Hotel',
      category: 'Premium',
      location: 'Shimla, Himachal Pradesh',
      price: '₹4,800',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      amenities: ['Heating', 'Restaurant', 'Free WiFi', 'Mountain Views', 'Room Service'],
      rating: 4.6,
      description: 'Cozy mountain hotel with breathtaking Himalayan views'
    },
    {
      id: 4,
      name: 'Beach Paradise Resort',
      category: 'Beach Resort',
      location: 'Goa',
      price: '₹5,500',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
      amenities: ['Pool', 'Beach Access', 'Bar', 'Free WiFi', 'Water Sports'],
      rating: 4.7,
      description: 'Tropical paradise with direct beach access and water activities'
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    const serviceType = activeTab === 'cars' ? 'Car Rental' : 'Hotel';
    const message = `Hi! I want to book ${serviceType}: "${selectedService.name}"

Customer Details:
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}

${activeTab === 'cars' 
  ? `Pickup Location: ${bookingForm.pickupLocation}
Dropoff Location: ${bookingForm.dropoffLocation}
Pickup Date: ${bookingForm.checkIn}`
  : `Check-in: ${bookingForm.checkIn}
Check-out: ${bookingForm.checkOut}
Guests: ${bookingForm.guests}
Rooms: ${bookingForm.rooms}`
}

Please confirm availability and send booking details.`;

    const whatsappUrl = `https://wa.me/${siteContent.site.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <SEO
        title="Car & Hotel Booking - Hivix Tour & Travel | India Travel Services"
        description="Book premium cars and hotels for your India tour. Wide selection of vehicles and accommodations across major destinations. Best rates guaranteed."
        keywords="car rental India, hotel booking India, travel services, car hire, accommodation booking"
      />

      {/* Hero Section */}
      <HeroSlider slides={heroSlides} height="h-[60vh]" autoRotate={false} />

      {/* Tab Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-4 mb-8">
              <motion.button
                onClick={() => setActiveTab('cars')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'cars'
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Car className="h-5 w-5" />
                <span>Car Rentals</span>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('hotels')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'hotels'
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Bed className="h-5 w-5" />
                <span>Hotels</span>
              </motion.button>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(activeTab === 'cars' ? carRentals : hotels).map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg card-hover"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.name}
                    </h3>
                    
                    {activeTab === 'cars' ? (
                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{(service as any).seats} seats</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 mb-4 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{(service as any).location}</span>
                      </div>
                    )}

                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {activeTab === 'cars' ? 'Features:' : 'Amenities:'}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {(activeTab === 'cars' ? (service as any).features : (service as any).amenities).slice(0, 3).map((item: string) => (
                          <span
                            key={item}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          {service.price}
                        </div>
                        <span className="text-sm text-gray-500">
                          per {activeTab === 'cars' ? 'day' : 'night'}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => setSelectedService(service)}
                      className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Book {activeTab === 'cars' ? 'Car' : 'Hotel'}
                  </h3>
                  <p className="text-gray-600">{selectedService.name}</p>
                  <p className="text-blue-600 font-semibold">
                    {selectedService.price} per {activeTab === 'cars' ? 'day' : 'night'}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                {activeTab === 'cars' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingForm.pickupLocation}
                        onChange={(e) => setBookingForm({ ...bookingForm, pickupLocation: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter pickup location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Drop-off Location
                      </label>
                      <input
                        type="text"
                        value={bookingForm.dropoffLocation}
                        onChange={(e) => setBookingForm({ ...bookingForm, dropoffLocation: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter drop-off location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingForm.checkIn}
                        onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check-in Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={bookingForm.checkIn}
                          onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check-out Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={bookingForm.checkOut}
                          onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Guests *
                        </label>
                        <select
                          required
                          value={bookingForm.guests}
                          onChange={(e) => setBookingForm({ ...bookingForm, guests: parseInt(e.target.value) })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {[1,2,3,4,5,6].map(num => (
                            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Rooms *
                        </label>
                        <select
                          required
                          value={bookingForm.rooms}
                          onChange={(e) => setBookingForm({ ...bookingForm, rooms: parseInt(e.target.value) })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {[1,2,3,4].map(num => (
                            <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>Book via WhatsApp</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Book With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional service, competitive rates, and 24/7 support for all your travel needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CarIcon,
                title: 'Well-Maintained Fleet',
                description: 'Regular maintenance and safety checks on all vehicles with professional drivers'
              },
              {
                icon: Bed,
                title: 'Quality Accommodations',
                description: 'Hand-picked hotels and resorts ensuring comfort and excellent service standards'
              },
              {
                icon: Phone,
                title: '24/7 Customer Support',
                description: 'Round-the-clock assistance for bookings, changes, and emergency support'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Custom Arrangements?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Looking for specific vehicles or accommodations? Our team can arrange custom solutions for your unique travel requirements.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us: {siteContent.site.phone}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CarHotelBookingPage;