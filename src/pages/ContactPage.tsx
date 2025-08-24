import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      description: 'Have questions about your travel plans? Our expert team is here to help you create the perfect Indian adventure.',
      buttonText: 'Start Planning'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: siteContent.site.phone,
      description: 'Available 24/7 for your travel needs',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: siteContent.site.email,
      description: 'We respond within 24 hours',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: siteContent.site.address,
      description: 'Monday to Saturday, 9 AM - 6 PM',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: `+${siteContent.site.whatsappNumber}`,
      description: 'Quick responses and instant booking',
      color: 'text-green-600 bg-green-100'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create WhatsApp message
      const message = `New Contact Form Submission:
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}`;

      const whatsappUrl = `https://wa.me/${siteContent.site.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      alert('Thank you! Your message has been sent successfully.');
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <SEO
        title="Contact Us - Hivix Tour & Travel | Travel Experts India"
        description="Contact Hivix Tour & Travel for personalized travel planning. Call +91 9341436937 or email info@hivixtours.com. Expert travel consultation available 24/7."
        keywords="contact travel agency India, travel consultation, tour booking contact, India travel experts"
      />

      {/* Hero Section */}
      <HeroSlider slides={heroSlides} height="h-[60vh]" autoRotate={false} />

      {/* Contact Information Cards */}
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
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our travel experts are ready to assist you in planning your perfect Indian adventure. 
              Reach out to us through any of the convenient channels below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${info.color} rounded-full mb-6`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-800 font-semibold mb-2">
                  {info.info}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Tour Booking">Tour Booking</option>
                      <option value="Custom Package">Custom Package</option>
                      <option value="Car Rental">Car Rental</option>
                      <option value="Hotel Booking">Hotel Booking</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your travel plans or questions..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Office Hours */}
            <motion.div
              className="space-y-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Find Our Office
                </h3>
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl overflow-hidden">
                  {/* Placeholder map - In production, integrate Google Maps */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-600 font-semibold">
                        Interactive Map
                      </p>
                      <p className="text-sm text-gray-500">
                        123 Travel Street, Mumbai
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">Hivix Tours Office</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Directions
                </motion.button>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', status: 'Open' },
                    { day: 'Saturday', time: '10:00 AM - 4:00 PM', status: 'Open' },
                    { day: 'Sunday', time: 'Emergency Only', status: 'Closed' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-semibold text-gray-800">{schedule.day}</div>
                        <div className="text-sm text-gray-600">{schedule.time}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        schedule.status === 'Open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {schedule.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">24/7 Emergency Support</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-2">
                    Need urgent assistance during your trip? Call our emergency hotline: {siteContent.site.phone}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and travel packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How do I book a tour?',
                answer: 'You can book through our website, call us directly, or send a WhatsApp message. We\'ll help you choose the perfect package.'
              },
              {
                question: 'What is included in tour packages?',
                answer: 'Our packages typically include accommodation, meals, transportation, guide services, and entrance fees. Specific inclusions vary by package.'
              },
              {
                question: 'Can I customize my tour?',
                answer: 'Absolutely! We specialize in creating custom itineraries based on your preferences, budget, and travel dates.'
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'Cancellation terms vary by package. Generally, cancellations 30+ days before travel receive full refund minus processing fees.'
              },
              {
                question: 'Do you provide travel insurance?',
                answer: 'Yes, we offer comprehensive travel insurance covering medical emergencies, trip cancellation, and lost baggage.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept credit cards, debit cards, net banking, UPI, and cash payments. Online payment gateways are secure and encrypted.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our travel experts are waiting to help you plan the perfect Indian adventure. 
              Contact us today and let's make your travel dreams come true!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${siteContent.site.phone}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteContent.site.whatsappNumber}?text=Hi! I'm interested in planning a trip to India.`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;