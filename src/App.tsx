import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import SpecialOffersPage from './pages/SpecialOffersPage';
import UpcomingToursPage from './pages/UpcomingToursPage';
import CarHotelBookingPage from './pages/CarHotelBookingPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CustomerServicesPage from './pages/CustomerServicesPage';
import TravelTipsPage from './pages/TravelTipsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:region" element={<DestinationDetailPage />} />
            <Route path="/special-offers" element={<SpecialOffersPage />} />
            <Route path="/upcoming-tours" element={<UpcomingToursPage />} />
            <Route path="/car-hotel-booking" element={<CarHotelBookingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/customer-services" element={<CustomerServicesPage />} />
            <Route path="/travel-tips" element={<TravelTipsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;