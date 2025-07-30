import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      role: 'Founder & CEO',
      content: 'ServerNest has been instrumental in our growth. Their hosting is incredibly fast and reliable. The support team is always there when we need them.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Sharma',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'The uptime guarantee is real! Our website has been running smoothly for over 2 years. Best hosting decision we ever made.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Amit Patel',
      company: 'E-commerce Hub',
      role: 'Technical Lead',
      content: 'LiteSpeed servers make a huge difference. Our e-commerce site loads lightning fast, and customers love the experience.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sneha Gupta',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'Migration was seamless, and the performance improvement was immediate. ServerNest truly understands what businesses need.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Vikram Singh',
      company: 'Startup Incubator',
      role: 'CTO',
      content: 'Affordable pricing without compromising on quality. Perfect for startups looking to scale without breaking the bank.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Kavya Reddy',
      company: 'Blog Network',
      role: 'Content Manager',
      content: 'Managing multiple websites is so easy with their control panel. The one-click WordPress installation saved us hours of work.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust ServerNest for their hosting needs. 
            Here's what they have to say about our services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Uptime Achieved</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Years of Service</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/5 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 dark:border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-500/50 group-hover:text-blue-400/70 transition-colors duration-300" />
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500/20"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-blue-500 dark:text-blue-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Experience the ServerNest difference with our premium hosting solutions. 
              Start your journey today with our 30-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300">
                View All Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;