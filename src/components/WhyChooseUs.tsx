import React from 'react';
import { Wifi, MessageCircle, TrendingUp, Award, Users, MapPin } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Wifi,
      title: 'Unlimited Bandwidth',
      description: 'No traffic limits or bandwidth restrictions. Handle unlimited visitors without extra charges.',
      stats: 'Truly Unlimited'
    },
    {
      icon: MessageCircle,
      title: 'Lightning Fast Support',
      description: 'Get instant help from our India-based experts. Average response time under 2 minutes.',
      stats: '< 2 min response'
    },
    {
      icon: TrendingUp,
      title: '99.9% Uptime Guarantee',
      description: 'Industry-leading uptime backed by SLA. Your website stays online when it matters most.',
      stats: '99.9% SLA'
    },
    {
      icon: Award,
      title: 'Award-Winning Hosting',
      description: 'Recognized as India\'s fastest growing hosting provider with multiple industry awards.',
      stats: '5+ Awards'
    },
    {
      icon: Users,
      title: '10,000+ Happy Customers',
      description: 'Trusted by startups, SMEs, and enterprises across India for reliable hosting solutions.',
      stats: '10K+ Clients'
    },
    {
      icon: MapPin,
      title: 'Made in India',
      description: 'Proudly Indian company with data centers in India. Your data stays local and secure.',
      stats: '100% Indian'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ServerNest?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another hosting provider. We're your reliable technology partner 
            committed to your online success with best-in-class infrastructure and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon with Animation */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="relative">
                    <reason.icon className="h-12 w-12 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {reason.stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/30">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Uptime Achieved</p>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                2 min
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Avg. Response Time</p>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Years of Excellence</p>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;