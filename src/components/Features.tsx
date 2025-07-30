import React from 'react';
import { 
  Zap, Shield, HardDrive, Globe, Headphones, 
  Clock, Database, Smartphone, Lock, BarChart 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'LiteSpeed Servers',
      description: 'Experience up to 9x faster loading times with enterprise LiteSpeed web servers.'
    },
    {
      icon: HardDrive,
      title: 'Pure SSD Storage',
      description: 'Lightning-fast NVMe SSD storage ensures your website loads at blazing speeds.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Free SSL, malware scanner, DDoS protection, and daily security monitoring.'
    },
    {
      icon: Globe,
      title: 'India Data Centers',
      description: 'Strategically located servers across India for optimal performance and compliance.'
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Get instant help from our India-based technical experts via chat, email, or phone.'
    },
    {
      icon: Clock,
      title: '99.9% Uptime SLA',
      description: 'Industry-leading uptime guarantee backed by redundant infrastructure.'
    },
    {
      icon: Database,
      title: 'Free Daily Backups',
      description: 'Automated daily backups with easy one-click restore functionality.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Optimized cPanel',
      description: 'Manage your hosting account easily from any device with our modern control panel.'
    },
    {
      icon: Lock,
      title: 'Free SSL Certificates',
      description: 'Secure your website with free SSL certificates and improve SEO rankings.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time monitoring and detailed analytics to track your website performance.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">Built for Performance</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every hosting plan comes packed with enterprise-grade features designed 
            to make your website faster, more secure, and easier to manage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 dark:border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="relative inline-flex">
                    <feature.icon className="h-12 w-12 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-blue-500/20">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white dark:border-gray-900"></div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800 dark:text-white">
                Join 10,000+ satisfied customers
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Trusted by businesses across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;