import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, Headphones, MapPin, Calendar, Users, Award } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import BookingWidget from '../components/BookingWidget';

const HomePage = () => {
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
      title: 'Royal Rajasthan',
      subtitle: 'Discover the Land of Kings',
      description: 'Experience magnificent forts, stunning palaces, and rich cultural heritage in the desert state of Rajasthan.',
      buttonText: 'Explore Rajasthan',
      location: 'Jaipur, Udaipur, Jodhpur',
      duration: '7-12 Days'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      title: 'Kashmir Paradise',
      subtitle: 'Heaven on Earth',
      description: 'Immerse yourself in the breathtaking beauty of snow-capped mountains, serene lakes, and blooming gardens.',
      buttonText: 'Visit Kashmir',
      location: 'Srinagar, Gulmarg, Pahalgam',
      duration: '5-8 Days'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      title: 'Kerala Backwaters',
      subtitle: "God's Own Country",
      description: 'Cruise through tranquil backwaters, lush tea plantations, and pristine beaches in tropical Kerala.',
      buttonText: 'Explore Kerala',
      location: 'Alleppey, Munnar, Kochi',
      duration: '6-10 Days'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      title: 'Goa Beaches',
      subtitle: 'Sun, Sand & Serenity',
      description: 'Relax on golden beaches, enjoy vibrant nightlife, and explore Portuguese colonial architecture.',
      buttonText: 'Visit Goa',
      location: 'North & South Goa',
      duration: '4-7 Days'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
      title: 'Ladakh Adventure',
      subtitle: 'Land of High Passes',
      description: 'Embark on an epic journey through dramatic landscapes, ancient monasteries, and pristine lakes.',
      buttonText: 'Adventure Awaits',
      location: 'Leh, Pangong, Nubra Valley',
      duration: '8-12 Days'
    }
  ];

  const featuredDestinations = [
    {
      name: 'Rajasthan',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'Forts, palaces, and desert adventures',
      tours: '15+ Tours'
    },
    {
      name: 'Kerala',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      description: 'Backwaters, hill stations, and spice gardens',
      tours: '12+ Tours'
    },
    {
      name: 'Kashmir',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      description: 'Lakes, gardens, and snow-capped peaks',
      tours: '8+ Tours'
    },
    {
      name: 'Ladakh',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
      description: 'High altitude lakes and mountain passes',
      tours: '6+ Tours'
    },
    {
      name: 'Goa',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      description: 'Beaches, nightlife, and water sports',
      tours: '10+ Tours'
    },
    {
      name: 'Himachal Pradesh',
      image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg',
      description: 'Hill stations and adventure activities',
      tours: '14+ Tours'
    }
  ];

  const upcomingTours = [
    {
      name: 'Golden Triangle Tour',
      destination: 'Delhi - Agra - Jaipur',
      date: 'March 15, 2024',
      duration: '6 Days',
      price: '₹18,999',
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
      seatsLeft: 8
    },
    {
      name: 'Kerala Backwater Cruise',
      destination: 'Alleppey - Kumarakom',
      date: 'March 20, 2024',
      duration: '5 Days',
      price: '₹22,999',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      seatsLeft: 12
    },
    {
      name: 'Kashmir Valley Tour',
      destination: 'Srinagar - Gulmarg - Pahalgam',
      date: 'April 5, 2024',
      duration: '7 Days',
      price: '₹28,999',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      seatsLeft: 6
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Amazing experience with Hivix Tours! The Rajasthan package was perfectly organized and our guide was knowledgeable. Highly recommended!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Kerala backwater cruise was a dream come true. Excellent service, comfortable accommodation, and breathtaking views. Thank you Hivix!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Anjali Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'The Kashmir tour exceeded all expectations. Beautiful landscapes, great hospitality, and seamless travel arrangements. Five stars!',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    }
  ];

  const stats = [
    { icon: MapPin, number: '150+', label: 'Tours Completed' },
    { icon: Users, number: '5000+', label: 'Happy Travelers' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Star, number: '4.9', label: 'Average Rating' }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive travel insurance and 24/7 emergency support for peace of mind.'
    },
    {
      icon: Star,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden costs. Get the best value for your travel budget.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service to assist you before, during, and after your trip.'
    },
    {
      icon: Clock,
      title: 'Expert Guides',
      description: 'Professional, local guides with extensive knowledge of destinations and culture.'
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
      <HeroSlider slides={heroSlides} />
      
      {/* Quick Booking Widget */}
      <div className="container mx-auto">
        <BookingWidget />
      </div>

      {/* Featured Destinations */}
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
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore India's most incredible destinations with our expertly crafted tour packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{destination.tours}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                    Explore Tours →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Tours */}
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
              Upcoming Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our scheduled group tours and make new friends while exploring incredible destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTours.map((tour, index) => (
              <motion.div
                key={tour.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.seatsLeft} seats left
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {tour.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {tour.destination}
                  </p>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {tour.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {tour.duration}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {tour.price}
                    </span>
                    <motion.button
                      className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Why Choose Hivix Tours?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making your travel dreams come true with exceptional service and unforgettable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read genuine reviews from our happy customers who have experienced the magic of India with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;