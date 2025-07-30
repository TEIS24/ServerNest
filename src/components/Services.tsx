import React from 'react';
import { 
  Server, Globe, Shield, Database, Smartphone, 
  Cloud, Code, Headphones, Zap, Lock 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Web Hosting',
      description: 'Powerful market-leading technology with user-friendly control panel and 70+ one-click install apps.',
      features: ['70+ One-Click Apps', 'UK Data Centre', 'Windows/Linux Choice', 'Friendly Support'],
      price: 'Starting at ₹59/month',
      link: 'https://cp.servernest.in/order-hosting'
    },
    {
      icon: Database,
      title: 'VPS Hosting',
      description: 'High-performance virtual private servers with up to 16GB RAM and dedicated resources.',
      features: ['Up to 16GB DDR4 RAM', 'Up to 8 Core CPU', '200GB SSD Storage', '1 Tbps Anti-DDoS'],
      price: 'Starting at ₹1,499/month',
      link: 'https://cp.servernest.in/order-vps'
    },
    {
      icon: Cloud,
      title: 'Cloud Hosting',
      description: 'Managed cloud hosting optimized for maximum speed & reliability with choice of providers.',
      features: ['AWS & Google Cloud', '60+ Global Locations', 'Advanced DDoS Protection', 'Free SSL'],
      price: 'Starting at ₹1,116/month',
      link: 'https://cp.servernest.in/build-server'
    },
    {
      icon: Globe,
      title: 'Domain Registration',
      description: 'Find your perfect domain with 100s of top-level domains and privacy options.',
      features: ['100s of TLDs', 'Privacy Options', 'DNS Management', 'Simple Control Panel'],
      price: 'Starting at ₹907/year',
      link: 'https://cp.servernest.in/domain-search'
    },
    {
      icon: Shield,
      title: 'SSL Certificates',
      description: 'Secure your site and improve search performance with padlock and HTTPS URL.',
      features: ['Free SSL Available', 'Extended SSL Options', 'Improve SEO', 'Easy Installation'],
      price: 'Starting at ₹3,299/year',
      link: 'https://cp.servernest.in/order-ssl'
    },
    {
      icon: Code,
      title: 'WordPress Hosting',
      description: 'Optimized WordPress hosting with staging, auto-updates, and enhanced security.',
      features: ['Pre-installed WordPress', 'Staging & Cloning', 'Auto Updates', 'Enhanced Security'],
      price: 'Starting at ₹59/month',
      link: 'https://cp.servernest.in/domain-required?p=246611&t=1'
    },
    {
      icon: Smartphone,
      title: 'Linux Hosting',
      description: 'Reliable Linux hosting with SSD storage, unlimited bandwidth, and website builder.',
      features: ['SSD Storage', 'Unlimited Bandwidth', 'Website Builder', 'MySQL Databases'],
      price: 'Starting at ₹59/month',
      link: 'https://cp.servernest.in/domain-required?p=245569&t=1'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert support available round the clock via multiple channels for all your needs.',
      features: ['Live Chat', 'Email Support', 'Phone Support', 'Knowledge Base'],
      price: 'Always Free',
      link: 'https://tawk.to/chat/6788f045825083258e065141/1ihnel4bf'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">Our</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive hosting and web solutions designed to power your online presence 
            with enterprise-grade infrastructure and expert support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="relative inline-flex">
                  <service.icon className="h-12 w-12 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                {service.price}
              </div>

              {/* CTA Button */}
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our expert team can design and implement tailored hosting solutions 
              that perfectly match your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@servernest.in"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </a>
              <a
                href="https://tawk.to/chat/6788f045825083258e065141/1ihnel4bf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;