import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass, MapPin, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Travel Illustration */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="relative inline-block">
            {/* Mountain backdrop */}
            <div className="w-80 h-40 mx-auto mb-8">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <defs>
                  <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
                    <stop offset="100%" style={{stopColor: '#1E40AF', stopOpacity: 0.6}} />
                  </linearGradient>
                </defs>
                <polygon 
                  points="0,200 80,50 160,80 240,40 320,70 400,30 400,200" 
                  fill="url(#mountainGradient)"
                  className="drop-shadow-lg"
                />
                <polygon 
                  points="50,200 120,70 190,90 270,50 350,80 400,60 400,200" 
                  fill="url(#mountainGradient)"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Floating compass */}
            <motion.div
              className="absolute top-4 right-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="bg-white rounded-full p-3 shadow-lg">
                <Compass className="h-8 w-8 text-blue-600" />
              </div>
            </motion.div>

            {/* Floating location pins */}
            <motion.div
              className="absolute top-16 left-8"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="bg-orange-500 text-white p-2 rounded-full shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 404 Number */}
        <motion.div
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 leading-none">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Lost Your Way?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Looks like you've wandered off the beaten path!
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Don't worry, even the best explorers sometimes take a wrong turn. 
            Let's get you back on track to discover India's incredible destinations.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link to="/">
            <motion.button
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="h-6 w-6" />
              <span>Back to Home</span>
            </motion.button>
          </Link>

          <Link to="/destinations">
            <motion.button
              className="flex items-center space-x-3 bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="h-6 w-6" />
              <span>Explore Destinations</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Fun Travel Facts */}
        <motion.div
          className="mt-16 bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Did You Know?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <p className="text-gray-600">Amazing Tours</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">29</div>
              <p className="text-gray-600">States Covered</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">5000+</div>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
          </div>
        </motion.div>

        {/* Breadcrumb Trail */}
        <motion.div
          className="mt-8 flex items-center justify-center space-x-2 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>•</span>
          <ArrowLeft className="h-4 w-4 rotate-180" />
          <span>404 - Page Not Found</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;