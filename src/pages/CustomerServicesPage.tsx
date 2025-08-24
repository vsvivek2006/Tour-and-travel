import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, FileText, AlertCircle, Check, X, Phone, Mail } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const CustomerServicesPage = () => {
  const [activeSection, setActiveSection] = useState('cancellation');

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      title: 'Customer Services',
      subtitle: 'Your Peace of Mind Matters',
      description: 'Comprehensive policies and support to ensure your travel experience is worry-free and enjoyable.',
      buttonText: 'Learn More'
    }
  ];

  const sections = [
    { id: 'cancellation', label: 'Cancellation & Refund Policy', icon: X },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText }
  ];

  const cancellationPolicy = {
    title: 'Cancellation & Refund Policy',
    content: [
      {
        category: 'Domestic Tours',
        rules: [
          { period: '30+ days before travel', refund: '100% refund (minus processing fee)' },
          { period: '15-29 days before travel', refund: '75% refund' },
          { period: '7-14 days before travel', refund: '50% refund' },
          { period: '3-6 days before travel', refund: '25% refund' },
          { period: 'Less than 3 days', refund: 'No refund' }
        ]
      },
      {
        category: 'International Tours',
        rules: [
          { period: '45+ days before travel', refund: '100% refund (minus processing fee)' },
          { period: '30-44 days before travel', refund: '75% refund' },
          { period: '15-29 days before travel', refund: '50% refund' },
          { period: '7-14 days before travel', refund: '25% refund' },
          { period: 'Less than 7 days', refund: 'No refund' }
        ]
      }
    ],
    additional: [
      'Processing fee: ₹500 for domestic tours, ₹1,500 for international tours',
      'Refunds will be processed within 7-10 business days',
      'Cancellations due to visa rejection: 90% refund (with proper documentation)',
      'Force majeure events (natural disasters, political unrest): Full refund or reschedule option'
    ]
  };

  const paymentMethods = {
    title: 'Payment Methods & Security',
    online: [
      { method: 'Credit Cards', details: 'Visa, MasterCard, American Express accepted', secure: true },
      { method: 'Debit Cards', details: 'All major Indian banks supported', secure: true },
      { method: 'Net Banking', details: 'Direct bank transfers from 50+ banks', secure: true },
      { method: 'UPI', details: 'Google Pay, PhonePe, Paytm, and other UPI apps', secure: true },
      { method: 'Digital Wallets', details: 'Paytm, Mobikwik, and other e-wallets', secure: true }
    ],
    offline: [
      { method: 'Bank Transfer', details: 'Direct transfer to our business account' },
      { method: 'Cash Payment', details: 'At our office with proper receipt' },
      { method: 'Cheque/DD', details: 'In favor of "Hivix Tour & Travel"' }
    ],
    security: [
      'All online transactions are secured with 256-bit SSL encryption',
      'We are PCI DSS compliant for credit card processing',
      'Your payment information is never stored on our servers',
      'Secure payment gateways: Razorpay and Stripe'
    ]
  };

  const privacyPolicy = {
    title: 'Privacy Policy & Data Protection',
    sections: [
      {
        heading: 'Information We Collect',
        content: [
          'Personal details: Name, email, phone, address for booking purposes',
          'Travel preferences: Destinations, dates, accommodation preferences',
          'Payment information: Processed securely through certified payment gateways',
          'Website usage: Cookies and analytics for improving user experience'
        ]
      },
      {
        heading: 'How We Use Your Information',
        content: [
          'Processing bookings and travel arrangements',
          'Communicating important travel updates and confirmations',
          'Providing customer support and assistance',
          'Improving our services and website functionality',
          'Marketing communications (with your consent)'
        ]
      },
      {
        heading: 'Information Protection',
        content: [
          'Data encryption and secure storage systems',
          'Access restricted to authorized personnel only',
          'Regular security audits and updates',
          'Compliance with Indian data protection laws',
          'No sharing with third parties without consent'
        ]
      },
      {
        heading: 'Your Rights',
        content: [
          'Access your personal data anytime',
          'Request corrections to inaccurate information',
          'Delete your account and associated data',
          'Opt-out of marketing communications',
          'Receive data in portable format'
        ]
      }
    ]
  };

  const termsConditions = {
    title: 'Terms & Conditions',
    sections: [
      {
        heading: 'Booking Terms',
        content: [
          'All bookings are subject to availability and confirmation',
          'Prices are subject to change until booking is confirmed',
          'Valid government ID required for all domestic travel',
          'Passport and visa requirements for international travel',
          'Travel insurance is recommended for all tours'
        ]
      },
      {
        heading: 'Tour Inclusions & Exclusions',
        content: [
          'Inclusions clearly mentioned in each package description',
          'Personal expenses not included unless specified',
          'Entry fees to monuments/attractions as per itinerary',
          'Meals as per package (breakfast, lunch, dinner)',
          'Transportation and accommodation as described'
        ]
      },
      {
        heading: 'Traveler Responsibilities',
        content: [
          'Arrive at pickup points on time',
          'Carry necessary documents and identification',
          'Follow local laws and customs',
          'Respect accommodation and transport facilities',
          'Inform us of any medical conditions or dietary requirements'
        ]
      },
      {
        heading: 'Limitation of Liability',
        content: [
          'Hivix Tours acts as an intermediary between travelers and service providers',
          'We are not liable for services provided by third parties',
          'Travel insurance covers unforeseen circumstances',
          'Force majeure events beyond our control',
          'Maximum liability limited to the tour package cost'
        ]
      }
    ]
  };

  const renderPolicyContent = () => {
    switch (activeSection) {
      case 'cancellation':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {cancellationPolicy.title}
              </h3>
              
              {cancellationPolicy.content.map((category, index) => (
                <div key={index} className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    {category.category}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left">
                            Cancellation Period
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-left">
                            Refund Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.rules.map((rule, ruleIndex) => (
                          <tr key={ruleIndex} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">
                              {rule.period}
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              {rule.refund}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">
                  Additional Terms:
                </h4>
                <ul className="space-y-2">
                  {cancellationPolicy.additional.map((term, index) => (
                    <li key={index} className="flex items-start space-x-2 text-blue-700">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {paymentMethods.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-4">
                  Online Payment Methods
                </h4>
                <div className="space-y-4">
                  {paymentMethods.online.map((method, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-gray-800">{method.method}</h5>
                          <p className="text-sm text-gray-600">{method.details}</p>
                        </div>
                        {method.secure && (
                          <Shield className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Offline Payment Methods
                </h4>
                <div className="space-y-4">
                  {paymentMethods.offline.map((method, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800">{method.method}</h5>
                      <p className="text-sm text-gray-600">{method.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-4">
                Security Measures:
              </h4>
              <ul className="space-y-2">
                {paymentMethods.security.map((measure, index) => (
                  <li key={index} className="flex items-start space-x-2 text-green-700">
                    <Shield className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {privacyPolicy.title}
            </h3>
            
            {privacyPolicy.sections.map((section, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">
                  {section.heading}
                </h4>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {termsConditions.title}
            </h3>
            
            {termsConditions.sections.map((section, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-600 mb-4">
                  {section.heading}
                </h4>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
        title="Customer Services - Hivix Tour & Travel | Policies & Support"
        description="Comprehensive customer service policies including cancellation, refund, privacy policy, and terms & conditions. Your satisfaction is our priority."
        keywords="customer service, cancellation policy, refund policy, privacy policy, terms conditions, travel support"
      />

      {/* Hero Section */}
      <HeroSlider slides={heroSlides} height="h-[60vh]" autoRotate={false} />

      {/* Navigation Tabs */}
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
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <section.icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{section.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeSection}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPolicyContent()}
          </motion.div>
        </div>
      </section>

      {/* Support Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Need Additional Support?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our customer service team is here to help you with any questions or concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our support team
              </p>
              <a
                href={`tel:${siteContent.site.phone}`}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                {siteContent.site.phone}
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 mb-4">
                Send us your queries and concerns
              </p>
              <a
                href={`mailto:${siteContent.site.email}`}
                className="text-orange-600 font-semibold hover:text-orange-800"
              >
                {siteContent.site.email}
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-600 mb-4">
                Quick responses via WhatsApp
              </p>
              <a
                href={`https://wa.me/${siteContent.site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:text-green-800"
              >
                Chat with us
              </a>
            </motion.div>
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
              Travel with Confidence
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our comprehensive policies and dedicated support team ensure you have a worry-free travel experience. 
              Book with confidence knowing we're here for you every step of the way.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Planning Your Trip
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CustomerServicesPage;