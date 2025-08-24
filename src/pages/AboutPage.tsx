import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, MapPin, Heart, Shield, Clock, Star, Target } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const AboutPage = () => {
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      title: 'About Hivix Tours',
      subtitle: 'Your Trusted Travel Partner',
      description: 'Creating unforgettable memories across India with 15+ years of expertise and passion for travel.',
      buttonText: 'Our Story'
    }
  ];

  const stats = [
    { icon: MapPin, number: '150+', label: 'Tours Completed', color: 'text-blue-600' },
    { icon: Users, number: '5000+', label: 'Happy Travelers', color: 'text-orange-500' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Star, number: '4.9', label: 'Average Rating', color: 'text-yellow-500' }
  ];

  const teamMembers = [
    {
      name: 'Arjun Patel',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      description: 'With 15+ years in the travel industry, Arjun founded Hivix Tours with a vision to showcase India\'s incredible diversity.',
      specialization: 'Adventure Tours'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      description: 'Priya ensures seamless travel experiences with her expertise in logistics and customer service excellence.',
      specialization: 'Cultural Tours'
    },
    {
      name: 'Vikram Singh',
      role: 'Head Guide',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      description: 'A local expert with deep knowledge of Indian history, culture, and hidden gems across the country.',
      specialization: 'Historical Tours'
    },
    {
      name: 'Meera Joshi',
      role: 'Customer Relations',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      description: 'Dedicated to ensuring every customer has an exceptional experience from booking to return.',
      specialization: 'Luxury Tours'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We share your love for exploration and create journeys that touch your heart and soul.'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Your safety is our priority with comprehensive insurance, vetted accommodations, and 24/7 support.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Punctual services, transparent pricing, and consistent quality across all our tour packages.'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Every tour is crafted with your preferences in mind, ensuring personalized experiences.'
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

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Hivix Tour & Travel began as a small family business with a big dream: 
                to showcase the incredible diversity and beauty of India to travelers from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as weekend trips to nearby hill stations has evolved into a comprehensive 
                travel service covering all corners of India. From the snow-capped peaks of the Himalayas 
                to the sun-kissed beaches of Goa, we've helped thousands of travelers create memories that last a lifetime.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to authentic experiences, sustainable tourism, and exceptional customer 
                service has made us one of India's most trusted travel partners.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Tours
                </motion.button>
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg"
                alt="Travel team planning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>
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
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To provide authentic, safe, and memorable travel experiences that connect people 
                with India's rich cultural heritage, natural beauty, and diverse traditions while 
                promoting sustainable and responsible tourism practices.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To become India's most trusted travel partner, known for exceptional service, 
                innovative itineraries, and creating transformative journeys that inspire 
                travelers to explore, learn, and connect with the incredible diversity of India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every experience we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate travel experts dedicated to creating extraordinary experiences for every traveler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-blue-600 text-xs px-2 py-1 rounded-full">
                      {member.specialization}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;