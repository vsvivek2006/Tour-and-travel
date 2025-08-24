import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Camera, Mountain, Waves, TreePine, Building } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const DestinationsPage = () => {
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
      title: 'Explore India',
      subtitle: 'Incredible Destinations Await',
      description: 'From snow-capped mountains to tropical beaches, ancient temples to modern cities - discover India\'s incredible diversity.',
      buttonText: 'Start Exploring'
    }
  ];

  const regions = [
    {
      id: 'north-india-rajasthan',
      name: 'North India & Rajasthan',
      description: 'Majestic forts, desert landscapes, and royal heritage',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      icon: Building,
      states: ['Delhi', 'Rajasthan', 'Ladakh', 'Himachal Pradesh', 'Punjab', 'Uttarakhand', 'Haryana', 'Jammu & Kashmir'],
      highlights: ['Golden Triangle', 'Desert Safari', 'Royal Palaces', 'Hill Stations'],
      tours: 25,
      duration: '5-15 Days',
      bestTime: 'Oct - Mar'
    },
    {
      id: 'south-india-kerala',
      name: 'South India & Kerala',
      description: 'Backwaters, temples, and tropical paradise',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      icon: Waves,
      states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Telangana'],
      highlights: ['Backwater Cruise', 'Temple Tours', 'Hill Stations', 'Beaches'],
      tours: 18,
      duration: '6-12 Days',
      bestTime: 'Oct - Apr'
    },
    {
      id: 'east-northeast-india',
      name: 'East & North East India',
      description: 'Tribal culture, pristine nature, and tea gardens',
      image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg',
      icon: TreePine,
      states: ['Assam', 'Sikkim', 'Arunachal Pradesh', 'Meghalaya', 'Mizoram', 'Nagaland', 'Manipur', 'Tripura', 'West Bengal'],
      highlights: ['Tea Estates', 'Tribal Culture', 'Wildlife', 'Mountain Views'],
      tours: 12,
      duration: '7-14 Days',
      bestTime: 'Oct - May'
    },
    {
      id: 'central-india-gujarat',
      name: 'Central India & Gujarat',
      description: 'Wildlife reserves, tribal heritage, and cultural diversity',
      image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
      icon: Mountain,
      states: ['Madhya Pradesh', 'Chhattisgarh', 'Gujarat'],
      highlights: ['Wildlife Safari', 'Tribal Tours', 'Heritage Sites', 'Salt Desert'],
      tours: 15,
      duration: '5-10 Days',
      bestTime: 'Nov - Mar'
    },
    {
      id: 'west-india',
      name: 'West India',
      description: 'Beaches, caves, and vibrant city life',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      icon: Waves,
      states: ['Maharashtra', 'Goa', 'Dadra & Nagar Haveli', 'Daman & Diu'],
      highlights: ['Beach Paradise', 'Ancient Caves', 'Wine Tours', 'Portuguese Heritage'],
      tours: 20,
      duration: '4-8 Days',
      bestTime: 'Nov - Apr'
    }
  ];

  const topDestinations = [
    {
      name: 'Rajasthan',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'Land of kings with magnificent palaces and forts',
      rating: 4.8,
      reviews: 245
    },
    {
      name: 'Kerala',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      description: 'God\'s own country with backwaters and spices',
      rating: 4.9,
      reviews: 189
    },
    {
      name: 'Kashmir',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      description: 'Paradise on earth with pristine lakes and gardens',
      rating: 4.7,
      reviews: 156
    },
    {
      name: 'Ladakh',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
      description: 'High altitude desert with Buddhist monasteries',
      rating: 4.8,
      reviews: 134
    },
    {
      name: 'Goa',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      description: 'Sun-soaked beaches and Portuguese heritage',
      rating: 4.6,
      reviews: 298
    },
    {
      name: 'Sikkim',
      image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg',
      description: 'Himalayan state with stunning mountain views',
      rating: 4.7,
      reviews: 98
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <HeroSlider slides={heroSlides} height="h-[70vh]" autoRotate={false} />

      {/* Regions Overview */}
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
              Explore by Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover India's diverse regions, each offering unique landscapes, cultures, and experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full">
                    <region.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex space-x-4 text-sm">
                      <div className="bg-blue-600 px-2 py-1 rounded-full">
                        {region.tours} Tours
                      </div>
                      <div className="bg-orange-500 px-2 py-1 rounded-full">
                        {region.duration}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {region.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {region.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Best: {region.bestTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {region.tours} Tours Available
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Top Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">States Covered:</h4>
                    <p className="text-gray-600 text-sm">
                      {region.states.join(', ')}
                    </p>
                  </div>
                  
                  <Link to={`/destinations/${region.id}`}>
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Region
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
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
              Most Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Travelers' favorite destinations based on reviews and bookings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center">
                    <Camera className="h-4 w-4 mr-1" />
                    {destination.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {destination.reviews} reviews
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                      View Tours →
                    </button>
                  </div>
                </div>
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
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us create a personalized itinerary for your dream trip to India. 
              Our travel experts are ready to help you plan the perfect journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Plan My Trip
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Tours
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default DestinationsPage;