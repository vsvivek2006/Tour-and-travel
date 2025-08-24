import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Calendar, Star, Tag, Phone } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import PaymentGateway from '../components/PaymentGateway';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const SpecialOffersPage = () => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    date: ''
  });

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg',
      title: 'Special Offers',
      subtitle: 'Limited Time Deals',
      description: 'Discover incredible savings on our most popular tour packages. Book now and save up to 30% on your dream vacation.',
      buttonText: 'Browse Deals'
    }
  ];

  const handleBookNow = (tour: any) => {
    setSelectedTour(tour);
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTour) return;

    const paymentDetails = {
      tourName: selectedTour.name,
      amount: parseInt(selectedTour.price.replace('₹', '').replace(',', '')),
      currency: '₹',
      customerInfo: bookingForm
    };

    // For demo, we'll show WhatsApp integration
    const message = `Hi! I want to book "${selectedTour.name}" for ${bookingForm.travelers} travelers on ${bookingForm.date}. 
    
Customer Details:
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
    
Please confirm availability and payment details.`;

    const whatsappUrl = `https://wa.me/${siteContent.site.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePaymentSuccess = (paymentId: string) => {
    alert(`Payment successful! Payment ID: ${paymentId}`);
    setShowPayment(false);
    setSelectedTour(null);
    setBookingForm({ name: '', email: '', phone: '', travelers: 1, date: '' });
  };

  const handlePaymentError = (error: string) => {
    alert(`Payment failed: ${error}`);
    setShowPayment(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <SEO
        title="Special Offers - Hivix Tour & Travel | Best Travel Deals India"
        description="Exclusive travel deals and special offers on India tour packages. Save up to 30% on Rajasthan, Kerala, Kashmir, and Ladakh tours. Limited time offers!"
        keywords="India travel deals, tour package offers, discounted travel packages, Rajasthan tour offers, Kerala tour deals"
      />

      {/* Hero Section */}
      <HeroSlider slides={heroSlides} height="h-[60vh]" autoRotate={false} />

      {/* Special Offers Grid */}
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
              Limited Time Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on these exclusive deals! Save big on your dream vacation with our special promotional packages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {siteContent.tours.specialOffers.map((tour, index) => (
              <motion.div
                key={tour.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Tour Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-full font-bold">
                    {tour.discount}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {tour.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Tour Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Max 20 people</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight: string) => (
                        <span
                          key={highlight}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-sm text-gray-500 line-through">
                        {tour.originalPrice}
                      </span>
                      <div className="text-3xl font-bold text-blue-600">
                        {tour.price}
                      </div>
                      <span className="text-sm text-gray-500">per person</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-semibold">
                        You save: ₹{parseInt(tour.originalPrice.replace('₹', '').replace(',', '')) - parseInt(tour.price.replace('₹', '').replace(',', ''))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => handleBookNow(tour)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Tag className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Detailed Itinerary */}
                <div className="px-8 pb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Detailed Itinerary:</h4>
                  <div className="space-y-2">
                    {tour.itinerary.map((day: string, dayIndex: number) => (
                      <div key={dayIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {dayIndex + 1}
                        </div>
                        <span className="text-gray-600 text-sm">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {selectedTour && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Book Your Tour: {selectedTour.name}
              </h3>
              <p className="text-gray-600 mb-8">
                Fill in your details to confirm your booking. We'll contact you within 24 hours.
              </p>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="md:col-span-2">
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
                </div>

                {/* Total Amount */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      Total Amount ({bookingForm.travelers} travelers):
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{(parseInt(selectedTour.price.replace('₹', '').replace(',', '')) * bookingForm.travelers).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="h-5 w-5" />
                    <span>Book via WhatsApp</span>
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={() => setShowPayment(true)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Pay Online Now
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Payment Gateway Modal */}
      {showPayment && selectedTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <PaymentGateway
            paymentDetails={{
              tourName: selectedTour.name,
              amount: parseInt(selectedTour.price.replace('₹', '').replace(',', '')) * bookingForm.travelers,
              currency: '₹',
              customerInfo: bookingForm
            }}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            onCancel={() => setShowPayment(false)}
          />
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
              Limited Time Offers!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              These special deals won't last long. Book your dream vacation today and save big on your Indian adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                WhatsApp Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SpecialOffersPage;