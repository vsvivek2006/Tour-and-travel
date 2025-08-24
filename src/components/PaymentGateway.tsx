import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Lock, CheckCircle } from 'lucide-react';

interface PaymentDetails {
  tourName: string;
  amount: number;
  currency: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

interface PaymentGatewayProps {
  paymentDetails: PaymentDetails;
  onSuccess: (paymentId: string) => void;
  onError: (error: string) => void;
  onCancel: () => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  paymentDetails,
  onSuccess,
  onError,
  onCancel
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Success

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // In a real implementation, you would integrate with Razorpay/Stripe
      // For demo purposes, we'll simulate a successful payment
      const paymentId = `pay_${Date.now()}`;
      
      setStep(3);
      setTimeout(() => {
        onSuccess(paymentId);
      }, 2000);
      
    } catch (error) {
      onError('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    
    if (!isScriptLoaded) {
      onError('Razorpay SDK failed to load');
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY || 'rzp_test_your_key_here',
      amount: paymentDetails.amount * 100, // Amount in paise
      currency: paymentDetails.currency,
      name: 'Hivix Tour & Travel',
      description: paymentDetails.tourName,
      image: '/logo192.png',
      handler: function (response: any) {
        onSuccess(response.razorpay_payment_id);
      },
      prefill: {
        name: paymentDetails.customerInfo.name,
        email: paymentDetails.customerInfo.email,
        contact: paymentDetails.customerInfo.phone,
      },
      theme: {
        color: '#3B82F6',
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response: any) {
      onError(response.error.description);
    });
  };

  if (step === 3) {
    return (
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Your booking has been confirmed. You will receive a confirmation email shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <CreditCard className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Secure Payment
        </h2>
        <p className="text-gray-600">
          Complete your booking for {paymentDetails.tourName}
        </p>
      </div>

      {/* Payment Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Tour Package:</span>
          <span className="font-semibold">{paymentDetails.tourName}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Customer:</span>
          <span className="font-semibold">{paymentDetails.customerInfo.name}</span>
        </div>
        <div className="border-t pt-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">Total Amount:</span>
            <span className="text-2xl font-bold text-blue-600">
              {paymentDetails.currency} {paymentDetails.amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Shield className="h-4 w-4" />
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center space-x-1">
          <Lock className="h-4 w-4" />
          <span>256-bit Encrypted</span>
        </div>
      </div>

      {/* Payment Buttons */}
      <div className="space-y-4">
        <motion.button
          onClick={handleRazorpayPayment}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <CreditCard className="h-5 w-5" />
              <span>Pay with Razorpay</span>
            </>
          )}
        </motion.button>

        <motion.button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isProcessing}
        >
          Pay with Stripe
        </motion.button>

        <button
          onClick={onCancel}
          className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          disabled={isProcessing}
        >
          Cancel
        </button>
      </div>

      {/* Payment Methods */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 mb-3">We accept</p>
        <div className="flex justify-center space-x-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-6" />
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentGateway;