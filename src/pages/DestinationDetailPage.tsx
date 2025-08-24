import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, Camera, Phone, Calendar, Thermometer, Utensils, Bed } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import InteractiveMap from '../components/InteractiveMap';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const DestinationDetailPage = () => {
  const { region } = useParams<{ region: string }>();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    date: ''
  });

  // Get region data based on URL parameter
  const getRegionData = () => {
    const regionData: { [key: string]: any } = {
      'north-india-rajasthan': {
        name: 'North India & Rajasthan',
        description: 'Explore the royal heritage, magnificent forts, and vibrant desert landscapes of North India and Rajasthan.',
        heroSlides: [
          {
            id: 1,
            image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
            title: 'Royal Rajasthan',
            subtitle: 'Land of Kings and Palaces',
            description: 'Experience the grandeur of royal palaces, magnificent forts, and vibrant desert culture.',
            buttonText: 'Explore Rajasthan'
          },
          {
            id: 2,
            image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
            title: 'Ladakh Adventure',
            subtitle: 'Land of High Passes',
            description: 'Journey through dramatic landscapes, ancient monasteries, and pristine high-altitude lakes.',
            buttonText: 'Discover Ladakh'
          }
        ],
        bestTime: 'October to March',
        temperature: '15°C to 35°C',
        duration: '7-15 Days',
        highlights: [
          'Amber Fort & City Palace, Jaipur',
          'Udaipur Lake Palace',
          'Jaisalmer Desert Safari',
          'Taj Mahal, Agra',
          'Red Fort, Delhi',
          'Magnetic Hill, Ladakh'
        ],
        packages: [
          {
            id: 1,
            name: 'Golden Triangle Tour',
            duration: '6 Days',
            price: '₹18,999',
            image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
            highlights: ['Delhi', 'Agra', 'Jaipur', 'Taj Mahal Visit'],
            itinerary: [
              'Day 1: Delhi Arrival & City Tour',
              'Day 2-3: Agra - Taj Mahal & Red Fort',
              'Day 4-5: Jaipur - Amber Fort & City Palace',
              'Day 6: Delhi Departure'
            ]
          },
          {
            id: 2,
            name: 'Rajasthan Royal Tour',
            duration: '12 Days',
            price: '₹45,999',
            image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
            highlights: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
            itinerary: [
              'Day 1-3: Jaipur - Pink City',
              'Day 4-6: Udaipur - City of Lakes',
              'Day 7-9: Jodhpur - Blue City',
              'Day 10-12: Jaisalmer - Golden City'
            ]
          }
        ],
        mapLocations: [
          { id: '1', name: 'Delhi', coordinates: [28.7041, 77.1025], description: 'Capital city with Red Fort and India Gate' },
          { id: '2', name: 'Agra', coordinates: [27.1767, 78.0081], description: 'Home to the magnificent Taj Mahal' },
          { id: '3', name: 'Jaipur', coordinates: [26.9124, 75.7873], description: 'Pink City with stunning palaces' },
          { id: '4', name: 'Udaipur', coordinates: [24.5854, 73.7125], description: 'City of Lakes and royal palaces' }
        ]
      },
      'south-india-kerala': {
        name: 'South India & Kerala',
        description: 'Experience the tropical paradise of Kerala with its backwaters, hill stations, and rich cultural heritage.',
        heroSlides: [
          {
            id: 1,
            image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
            title: 'Kerala Backwaters',
            subtitle: "God's Own Country",
            description: 'Cruise through tranquil backwaters, lush tea plantations, and pristine beaches.',
            buttonText: 'Explore Kerala'
          }
        ],
        bestTime: 'October to April',
        temperature: '20°C to 32°C',
        duration: '6-12 Days',
        highlights: [
          'Alleppey Backwater Cruise',
          'Munnar Tea Plantations',
          'Kochi Chinese Fishing Nets',
          'Thekkady Wildlife Sanctuary',
          'Kovalam Beaches',
          'Meenakshi Temple, Madurai'
        ],
        packages: [
          {
            id: 1,
            name: 'Kerala Backwaters & Hills',
            duration: '8 Days',
            price: '₹28,999',
            image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
            highlights: ['Kochi', 'Munnar', 'Alleppey', 'Kovalam'],
            itinerary: [
              'Day 1-2: Kochi - Historical City',
              'Day 3-4: Munnar - Hill Station',
              'Day 5-6: Alleppey - Backwater Cruise',
              'Day 7-8: Kovalam - Beach Relaxation'
            ]
          }
        ],
        mapLocations: [
          { id: '1', name: 'Kochi', coordinates: [9.9312, 76.2673], description: 'Historic port city with Chinese fishing nets' },
          { id: '2', name: 'Munnar', coordinates: [10.0889, 77.0595], description: 'Beautiful hill station with tea plantations' },
          { id: '3', name: 'Alleppey', coordinates: [9.4981, 76.3388], description: 'Venice of the East with backwaters' }
        ]
      }
    };

    return regionData[region || ''] || regionData['north-india-rajasthan'];
  };

  const regionData = getRegionData();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) return;

    const message = `Hi! I want to book "${selectedPackage.name}" for ${bookingForm.travelers} travelers on ${bookingForm.date}.
    
Customer Details:
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}

Please confirm availability and send package details.`;

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
        title={`${regionData.name} Tours - Hivix Tour & Travel`}
        description={regionData.description}
        keywords={`${regionData.name} tours, India travel packages, ${regionData.name} tourism`}
      />

      {/* Hero Section */}
      <HeroSlider slides={regionData.heroSlides} height="h-[70vh]" />

      {/* Region Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {regionData.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {regionData.description}
              </p>
              
              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Best Time</div>
                    <div className="font-semibold">{regionData.bestTime}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Thermometer className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Temperature</div>
                    <div className="font-semibold">{regionData.temperature}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold">{regionData.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Group Size</div>
                    <div className="font-semibold">2-20 People</div>
                  </div>
                </div>
              </div>

              <motion.button
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Trip
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={regionData.heroSlides[0].image}
                alt={regionData.name}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-gray-600 text-sm">Tour Packages</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Highlights */}
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
              Top Attractions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the must-visit places and experiences in {regionData.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionData.highlights.map((highlight: string, index: number) => (
              <motion.div
                key={highlight}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-3 rounded-full">
                    <Camera className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {highlight}
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.8 Rating</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore the Map
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive map showing key destinations and routes in {regionData.name}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <InteractiveMap
              locations={regionData.mapLocations}
              height="h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Tour Packages */}
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
              Popular Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted tour packages for {regionData.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {regionData.packages.map((pkg: any, index: number) => (
              <motion.div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-full font-bold">
                    {pkg.price}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Package Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight: string) => (
                        <span
                          key={highlight}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Detailed Itinerary:</h4>
                    <div className="space-y-2">
                      {pkg.itinerary.map((day: string, dayIndex: number) => (
                        <div key={dayIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {dayIndex + 1}
                          </div>
                          <span className="text-gray-600 text-sm">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => setSelectedPackage(pkg)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                    <motion.button
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Customize
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {selectedPackage && (
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
                    Book Package
                  </h3>
                  <p className="text-gray-600">{selectedPackage.name}</p>
                  <p className="text-blue-600 font-semibold">{selectedPackage.price} per person</p>
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers *
                  </label>
                  <select
                    required
                    value={bookingForm.travelers}
                    onChange={(e) => setBookingForm({ ...bookingForm, travelers: parseInt(e.target.value) })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

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

      {/* Travel Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Complete Travel Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a perfect vacation in {regionData.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Bed, title: 'Premium Hotels', description: 'Hand-picked accommodations from budget to luxury' },
              { icon: Utensils, title: 'Local Cuisine', description: 'Authentic regional dishes and dining experiences' },
              { icon: Users, title: 'Expert Guides', description: 'Professional local guides with cultural insights' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DestinationDetailPage;