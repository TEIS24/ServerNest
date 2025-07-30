import React from 'react';
import { RefreshCw, Calendar, DollarSign, AlertCircle, Mail, CheckCircle } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  const policyPoints = [
    {
      icon: Calendar,
      title: '30-Day Money-Back Guarantee',
      description: 'We offer a 30-day money-back guarantee for all hosting packages purchased for a duration of one year or more.',
      highlight: true
    },
    {
      icon: AlertCircle,
      title: 'Monthly Plans Exclusion',
      description: 'No refunds will be provided for packages purchased with a duration of one month.',
      highlight: false
    },
    {
      icon: DollarSign,
      title: 'Refund Calculation',
      description: 'One month\'s hosting fee will be deducted from the refund amount as a usage fee. GST and applicable taxes are non-refundable.',
      highlight: false
    },
    {
      icon: CheckCircle,
      title: 'Processing Time',
      description: 'Refunds typically take 5-10 business days to reflect in your account, depending on your bank or payment provider.',
      highlight: false
    }
  ];

  const refundSteps = [
    {
      step: '1',
      title: 'Contact Support',
      description: 'Email our customer support at info@servernest.in with your order details and reason for refund.'
    },
    {
      step: '2',
      title: 'Review Process',
      description: 'Our team will review your request and confirm your eligibility within 3-5 business days.'
    },
    {
      step: '3',
      title: 'Refund Processing',
      description: 'Once approved, the refund will be processed back to your original payment method.'
    },
    {
      step: '4',
      title: 'Service Cancellation',
      description: 'Upon processing a refund, the hosting package and associated services will be cancelled immediately.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <RefreshCw className="h-16 w-16 text-blue-500 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gray-800 dark:text-white">Refund &</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Returns Policy
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At ServerNest, we value our customers and strive to provide the best hosting experience. 
            Please read our refund and return policy carefully before making a purchase.
          </p>
        </div>

        {/* Policy Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {policyPoints.map((point, index) => (
            <div
              key={index}
              className={`bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 ${
                point.highlight 
                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                  : 'border-white/20 dark:border-gray-700/30'
              }`}
            >
              <div className="flex items-center mb-4">
                <point.icon className={`h-8 w-8 mr-4 ${
                  point.highlight ? 'text-blue-400' : 'text-blue-500'
                }`} />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Refund Process */}
        <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            How to Request a Refund
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {refundSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Important Points to Note
          </h2>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>No Refund on Monthly Plans:</strong> Customers who purchase one-month packages will not be eligible for a refund.</p>
            </div>
            
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>Cancellation:</strong> Upon processing a refund, the hosting package and any associated services will be cancelled immediately, and access to the services will be revoked.</p>
            </div>
            
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>Refund Method:</strong> Refunds will be processed back to the original payment method used during the purchase.</p>
            </div>
            
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
              <p><strong>Processing Time:</strong> Refunds typically take 5-10 business days to reflect in your account, depending on your bank or payment provider.</p>
            </div>
          </div>
        </div>

        {/* Non-Refundable Charges */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Non-Refundable Charges
          </h2>
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>GST and Taxes:</strong> As per the regulations, GST and any applicable taxes collected during the purchase will not be refunded.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Need Help with Refunds?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions or concerns regarding this refund and returns policy, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@servernest.in"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>info@servernest.in</span>
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Support Available 24/7 • ServerNest aims to ensure customer satisfaction and appreciates your understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;