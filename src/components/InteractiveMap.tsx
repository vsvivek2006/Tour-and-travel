import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

interface MapLocation {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  image?: string;
}

interface InteractiveMapProps {
  locations: MapLocation[];
  center?: [number, number];
  zoom?: number;
  height?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  locations,
  center = [20.5937, 78.9629], // India center
  zoom = 5,
  height = 'h-96'
}) => {
  const [selectedLocation, setSelectedLocation] = React.useState<MapLocation | null>(null);

  // For demo purposes, we'll create a visual map representation
  // In a real implementation, you'd integrate with Google Maps API or similar
  return (
    <div className={`relative ${height} bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden`}>
      {/* Map Background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          {/* India outline (simplified) */}
          <path
            d="M200,100 L300,120 L350,80 L400,90 L450,70 L500,85 L550,95 L600,110 L650,130 L680,160 L700,200 L690,250 L670,290 L640,320 L600,340 L550,350 L500,360 L450,350 L400,340 L350,330 L300,320 L250,300 L200,280 L170,250 L150,200 L160,150 Z"
            fill="url(#mapGradient)"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Location Pins */}
      {locations.map((location, index) => (
        <motion.div
          key={location.id}
          className="absolute cursor-pointer"
          style={{
            left: `${20 + (index * 15) % 60}%`,
            top: `${30 + (index * 12) % 40}%`
          }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setSelectedLocation(location)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <div className="relative group">
            <div className="bg-red-500 text-white p-2 rounded-full shadow-lg">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                {location.name}
              </div>
              <div className="w-3 h-3 bg-gray-800 transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Location Details Panel */}
      {selectedLocation && (
        <motion.div
          className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedLocation.name}
              </h3>
              <p className="text-gray-600">
                {selectedLocation.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          <div className="flex space-x-3">
            <motion.button
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation className="h-4 w-4" />
              <span>Get Directions</span>
            </motion.button>
            <motion.button
              className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="h-4 w-4" />
              <span>Book Tour</span>
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2">
        <div className="flex flex-col space-y-2">
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;