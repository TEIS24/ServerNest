import React from 'react';
import { Target, Users, Globe, Award, TrendingUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize web hosting in India by providing world-class infrastructure at affordable prices.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make is centered around delivering exceptional value to our customers.'
    },
    {
      icon: Globe,
      title: 'Made in India',
      description: 'Proudly Indian company supporting local businesses with data sovereignty and compliance.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of service quality and technical innovation.'
    }
  ];

  const milestones = [
    { year: '2019', event: 'ServerNest Founded', description: 'Started with a vision to revolutionize Indian web hosting' },
    { year: '2020', event: 'First Data Center', description: 'Launched our first state-of-the-art facility in Mumbai' },
    { year: '2021', event: '1,000 Customers', description: 'Reached our first thousand satisfied customers' },
    { year: '2022', event: 'LiteSpeed Partnership', description: 'Became official LiteSpeed partner for enhanced performance' },
    { year: '2023', event: '5,000+ Customers', description: 'Expanded to serve over 5,000 businesses across India' },
    { year: '2024', event: '10,000+ Milestone', description: 'Celebrating 10,000+ customers and multiple awards' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">About</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ServerNest
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            India's premier web hosting provider, committed to delivering 
            lightning-fast, secure, and scalable hosting solutions for businesses of all sizes.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 dark:border-gray-700/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Founded in 2019, ServerNest emerged from a simple belief: every Indian business 
                    deserves access to world-class web hosting without breaking the bank.
                  </p>
                  <p>
                    Starting as a small team of passionate technologists, we've grown into India's 
                    fastest-growing hosting provider, serving over 10,000 customers across the nation.
                  </p>
                  <p>
                    Today, we're proud to offer enterprise-grade infrastructure, 24/7 expert support, 
                    and innovative solutions that help businesses thrive in the digital economy.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">500%</div>
                      <div className="text-sm opacity-80">Growth Rate</div>
                    </div>
                    <div className="text-center">
                      <Heart className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">4.9/5</div>
                      <div className="text-sm opacity-80">Customer Rating</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-sm opacity-80">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <Globe className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-80">Uptime SLA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <value.icon className="h-12 w-12 text-blue-500 mx-auto group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-xl p-6 border border-white/20 dark:border-gray-700/30">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the ServerNest difference with enterprise-grade hosting 
              that scales with your business dreams.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;