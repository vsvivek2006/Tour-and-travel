import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Thermometer, Utensils, MapPin, Plane, CreditCard, Phone, AlertTriangle } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const TravelTipsPage = () => {
  const [activeTab, setActiveTab] = useState('dos-donts');

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      title: 'Travel Tips & Guides',
      subtitle: 'Your Complete India Travel Guide',
      description: 'Essential tips, cultural insights, and practical advice for making your Indian journey safe, enjoyable, and memorable.',
      buttonText: 'Learn More'
    }
  ];

  const tabs = [
    { id: 'dos-donts', label: 'Do\'s & Don\'ts', icon: Check },
    { id: 'safety', label: 'Safety Features', icon: Shield },
    { id: 'visa', label: 'Visa Guide', icon: Plane },
    { id: 'general', label: 'General Tips', icon: MapPin }
  ];

  const generalTips = [
    {
      category: 'Best Time to Visit',
      icon: Thermometer,
      tips: [
        'October to March: Ideal for most of India (pleasant weather)',
        'April to June: Good for hill stations like Shimla, Manali',
        'June to September: Monsoon season, great for Kerala and Western Ghats',
        'December to February: Perfect for desert states like Rajasthan'
      ]
    },
    {
      category: 'What to Pack',
      icon: MapPin,
      tips: [
        'Cotton clothes for hot weather, layers for cold regions',
        'Comfortable walking shoes and sandals',
        'Sunscreen (SPF 30+), sunglasses, and hat',
        'Basic first aid kit and personal medications',
        'Power bank and universal adapter (Type C, D, M)',
        'Scarf or shawl for temple visits and air-conditioned spaces'
      ]
    },
    {
      category: 'Food & Water',
      icon: Utensils,
      tips: [
        'Drink only bottled or boiled water',
        'Start with mild spices if not used to Indian food',
        'Eat at busy, popular restaurants (high turnover = fresh food)',
        'Try local specialties but be cautious with street food initially',
        'Carry oral rehydration salts (ORS) for hot weather'
      ]
    },
    {
      category: 'Money Matters',
      icon: CreditCard,
      tips: [
        'Carry a mix of cash and cards (many places still prefer cash)',
        'ATMs are widely available in cities',
        'Inform your bank about travel plans',
        'Keep emergency cash in USD/EUR for remote areas',
        'UPI payments widely accepted in urban areas'
      ]
    }
  ];

  const visaGuide = {
    sections: [
      {
        title: 'e-Visa Categories',
        content: [
          {
            type: 'e-Tourist Visa',
            duration: 'Up to 90 days',
            validity: '1 year (multiple entry)',
            purpose: 'Tourism, sightseeing, casual visit to friends/relatives'
          },
          {
            type: 'e-Business Visa',
            duration: 'Up to 180 days',
            validity: '1 year (multiple entry)', 
            purpose: 'Business meetings, conferences, trade fairs'
          },
          {
            type: 'e-Medical Visa',
            duration: 'Up to 60 days',
            validity: '120 days (triple entry)',
            purpose: 'Medical treatment in recognized hospitals'
          }
        ]
      },
      {
        title: 'Required Documents',
        content: [
          'Passport with minimum 6 months validity',
          'Recent passport-size photograph (white background)',
          'Confirmed return flight tickets',
          'Hotel bookings or invitation letter',
          'Bank statements (last 3 months)',
          'Travel insurance (recommended)'
        ]
      },
      {
        title: 'Application Process',
        content: [
          'Visit the official Indian Visa Online portal',
          'Fill the application form accurately',
          'Upload required documents and photograph',
          'Pay the visa fee online (varies by nationality)',
          'Print the ETA (Electronic Travel Authorization)',
          'Carry printed ETA during travel'
        ]
      },
      {
        title: 'Important Notes',
        content: [
          'Apply at least 4-7 days before travel',
          'Visa on arrival available for some nationalities',
          'Some restricted areas require special permits',
          'Entry through designated airports/seaports only',
          'Visa fees are non-refundable'
        ]
      }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dos-donts':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Do's */}
            <motion.div
              className="bg-green-50 p-8 rounded-2xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-600 text-white p-3 rounded-full">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Do's ✅</h3>
              </div>
              <ul className="space-y-4">
                {siteContent.travelTips.dos.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-green-800">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Don'ts */}
            <motion.div
              className="bg-red-50 p-8 rounded-2xl"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <X className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">Don'ts ❌</h3>
              </div>
              <ul className="space-y-4">
                {siteContent.travelTips.donts.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-red-800">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        );

      case 'safety':
        return (
          <div className="space-y-8">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Our Safety Features
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your safety and security are our top priorities. Here's how we ensure your peace of mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteContent.travelTips.safetyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                      {feature.icon === 'Shield' && <Shield className="h-8 w-8" />}
                      {feature.icon === 'Phone' && <Phone className="h-8 w-8" />}
                      {feature.icon === 'Users' && <Phone className="h-8 w-8" />}
                      {feature.icon === 'MapPin' && <MapPin className="h-8 w-8" />}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contacts */}
            <motion.div
              className="bg-red-50 p-8 rounded-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-red-800">
                  Emergency Contacts in India
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h5 className="font-semibold text-red-800 mb-2">Police</h5>
                  <p className="text-2xl font-bold text-red-600">100</p>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold text-red-800 mb-2">Fire Brigade</h5>
                  <p className="text-2xl font-bold text-red-600">101</p>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold text-red-800 mb-2">Ambulance</h5>
                  <p className="text-2xl font-bold text-red-600">108</p>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case 'visa':
        return (
          <div className="space-y-8">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Visa for India Guide
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete guide to obtaining an Indian visa for international travelers
              </p>
            </motion.div>

            {visaGuide.sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h4 className="text-2xl font-bold text-blue-600 mb-6">
                  {section.title}
                </h4>
                
                {section.title === 'e-Visa Categories' ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left">Visa Type</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Duration</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Validity</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.content.map((visa: any, visaIndex: number) => (
                          <tr key={visaIndex} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-semibold">
                              {visa.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-3">{visa.duration}</td>
                            <td className="border border-gray-300 px-4 py-3">{visa.validity}</td>
                            <td className="border border-gray-300 px-4 py-3">{visa.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {(section.content as string[]).map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <Plane className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <motion.div
              className="bg-yellow-50 p-6 rounded-lg border border-yellow-200"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <h5 className="font-semibold text-yellow-800">Important Notice</h5>
              </div>
              <p className="text-yellow-700">
                Visa requirements and processes may change. Always verify current requirements on the 
                official Indian government visa website before applying. We recommend applying well in advance of your travel dates.
              </p>
            </motion.div>
          </div>
        );

      case 'general':
        return (
          <div className="space-y-8">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                General Travel Tips for India
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Practical advice to help you make the most of your Indian adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {generalTips.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-3 rounded-full">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {category.category}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Cultural Etiquette */}
            <motion.div
              className="bg-purple-50 p-8 rounded-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-2xl font-bold text-purple-800 mb-6">
                Cultural Etiquette & Customs
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-purple-700 mb-3">Religious Sites</h5>
                  <ul className="space-y-2 text-purple-600">
                    <li>• Remove shoes before entering temples</li>
                    <li>• Dress modestly (cover shoulders and knees)</li>
                    <li>• Don't point feet towards deities</li>
                    <li>• Photography may be restricted</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-3">Social Interactions</h5>
                  <ul className="space-y-2 text-purple-600">
                    <li>• Use "Namaste" as a greeting</li>
                    <li>• Respect for elders is important</li>
                    <li>• Bargaining is common in markets</li>
                    <li>• Accept hospitality graciously</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <SEO
        title="India Travel Tips & Guide - Hivix Tour & Travel | Essential Travel Information"
        description="Complete travel guide for India including visa information, safety tips, cultural etiquette, and practical advice. Plan your perfect Indian adventure with expert tips."
        keywords="India travel tips, visa for India, travel safety, cultural etiquette India, travel guide, India travel advice"
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
            <div className="flex flex-wrap gap-4 justify-center">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Personalized Travel Advice?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our travel experts are here to provide personalized advice and help you plan the perfect Indian adventure. 
              Get in touch for customized recommendations based on your interests and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`https://wa.me/${siteContent.site.whatsappNumber}?text=Hi! I need travel advice for my India trip.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Get Expert Advice</span>
              </motion.a>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Tour Packages
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TravelTipsPage;