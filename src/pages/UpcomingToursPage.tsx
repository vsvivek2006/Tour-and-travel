import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Filter, Search, Tag, Phone } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const UpcomingToursPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1
  });

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      title: 'Upcoming Tours',
      subtitle: 'Join Our Group Adventures',
      description: 'Book your spot on our scheduled group tours and make new friends while exploring incredible destinations across India.',
      buttonText: 'View Tours'
    }
  ];

  const months = [
    { value: 'all', label: 'All Months' },
    { value: '2024-03', label: 'March 2024' },
    { value: '2024-04', label: 'April 2024' },
    { value: '2024-05', label: 'May 2024' },
    { value: '2024-06', label: 'June 2024' },
  ];

  const destinations = [
    { value: 'all', label: 'All Destinations' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'kashmir', label: 'Kashmir' },
    { value: 'goa', label: 'Goa' },
    { value: 'ladakh', label: 'Ladakh' }
  ];

  const filteredTours = siteContent.tours.upcoming.filter(tour => {
    const matchesMonth = selectedMonth === 'all' || tour.date.startsWith(selectedMonth);
    const matchesDestination = selectedDestination === 'all' || 
      tour.destination.toLowerCase().includes(selectedDestination);
    const matchesSearch = searchTerm === '' || 
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesMonth && matchesDestination && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBookTour = (tour: any) => {
    setSelectedTour(tour);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTour) return;

    const message = `Hi! I want to book "${selectedTour.name}" scheduled on ${formatDate(selectedTour.date)} for ${bookingForm.travelers} travelers.
    
Customer Details:
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
    
Please confirm availability and send payment details.`;

    const whatsappUrl = `https://wa.me/${siteContent.site.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getAvailabilityColor = (seatsLeft: number, totalSeats: number) => {
    const percentage = (seatsLeft / totalSeats) * 100;
    if (percentage > 50) return 'text-green-600 bg-green-100';
    if (percentage > 20) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <SEO
        title="Upcoming Tours - Hivix Tour & Travel | Group Tour Packages India"
        description="Join our scheduled group tours across India. Fixed departure dates for Rajasthan, Kerala, Kashmir, Ladakh, and Goa tours. Book your spot today!"
        keywords="group tours India, fixed departure tours, scheduled tours, group travel packages, upcoming tours India"
      />

      {/* Hero Section */}
      <HeroSlider slides={heroSlides} height="h-[60vh]" autoRotate={false} />

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <Filter className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">Filter Tours</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Month Filter */}
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {months.map(month => (
                  <option key={month.value} value={month.value}>{month.label}</option>
                ))}
              </select>

              {/* Destination Filter */}
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {destinations.map(dest => (
                  <option key={dest.value} value={dest.value}>{dest.label}</option>
                ))}
              </select>

              {/* Clear Filters */}
              <motion.button
                onClick={() => {
                  setSelectedMonth('all');
                  setSelectedDestination('all');
                  setSearchTerm('');
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Clear All
              </motion.button>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredTours.length} tours
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
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
              Upcoming Group Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join fellow travelers on our carefully planned group tours with fixed departure dates. 
              All tours include accommodation, meals, transportation, and guided sightseeing.
            </p>
          </motion.div>

          {filteredTours.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Tours Found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Tour Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Availability Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getAvailabilityColor(tour.seatsLeft, tour.totalSeats)}`}>
                      {tour.seatsLeft} seats left
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-2 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(tour.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {tour.name}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{tour.destination}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Max {tour.totalSeats} people</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Booking Progress</span>
                        <span>{tour.totalSeats - tour.seatsLeft}/{tour.totalSeats} booked</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((tour.totalSeats - tour.seatsLeft) / tour.totalSeats) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-3xl font-bold text-blue-600">
                          {tour.price}
                        </div>
                        <span className="text-sm text-gray-500">per person</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Includes:</div>
                        <div className="text-xs text-gray-400">
                          Hotels • Meals • Transport
                        </div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <motion.button
                      onClick={() => handleBookTour(tour)}
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        tour.seatsLeft > 0 
                          ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:from-blue-700 hover:to-orange-600' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      whileHover={tour.seatsLeft > 0 ? { scale: 1.02 } : {}}
                      whileTap={tour.seatsLeft > 0 ? { scale: 0.98 } : {}}
                      disabled={tour.seatsLeft === 0}
                    >
                      {tour.seatsLeft > 0 ? 'Book This Tour' : 'Fully Booked'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {selectedTour && (
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
                    Book Tour
                  </h3>
                  <p className="text-gray-600">{selectedTour.name}</p>
                  <p className="text-sm text-gray-500">
                    Departure: {formatDate(selectedTour.date)}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTour(null)}
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
                    {Array.from({ length: Math.min(selectedTour.seatsLeft, 8) }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                {/* Total Amount */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      Total Amount ({bookingForm.travelers} travelers):
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      ₹{(parseInt(selectedTour.price.replace('₹', '').replace(',', '')) * bookingForm.travelers).toLocaleString()}
                    </span>
                  </div>
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
              Don't Miss Out!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Seats are filling up fast. Book your spot on our upcoming group tours and create memories that will last a lifetime.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now: {siteContent.site.phone}
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Tour
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default UpcomingToursPage;