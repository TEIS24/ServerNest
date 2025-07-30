import React, { useState } from 'react';
import { Check, Star, Zap, ExternalLink, Cloud, Server, Globe, Shield } from 'lucide-react';

const HostingPlans: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('web-hosting');

  const categories = [
    { id: 'wordpress', label: 'WordPress Hosting', icon: Globe },
    { id: 'linux', label: 'Linux Hosting', icon: Server },
    { id: 'cloud', label: 'Cloud Hosting', icon: Cloud },
    { id: 'vps', label: 'VPS Servers', icon: Server },
    { id: 'domains', label: 'Domain Names', icon: Globe },
    { id: 'ssl', label: 'SSL Certificates', icon: Shield },
    { id: 'web-hosting', label: 'Web Hosting', icon: Server }
  ];

  const webHostingPlans = [
    {
      name: 'Web Hosting',
      description: 'Powerful market-leading technology with user-friendly control panel',
      price: '₹59.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/order-hosting',
      features: [
        'Powerful market-leading technology',
        'User-friendly control panel with 70+ one-click install apps',
        'Secure, state-of-the-art UK data centre',
        'Choice of Windows or Linux hosting',
        'Friendly UK support',
        'Great value for money'
      ]
    }
  ];

  const wordpressPlans = [
    {
      name: 'WordPress Basic',
      description: 'Perfect for personal WordPress websites',
      price: '₹59.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/domain-required?p=246611&t=1',
      features: [
        '5000MB SSD Web Space',
        'Unlimited Bandwidth',
        '2 x 1024MB Mailboxes',
        'Free Wildcard SSL Certificates',
        '1 × MySQL Database',
        'Malware Scanning',
        'DDoS Protection'
      ]
    },
    {
      name: 'WordPress Standard',
      description: 'Great for growing WordPress sites',
      price: '₹119.00',
      period: 'per month',
      popular: true,
      buyLink: 'https://cp.servernest.in/domain-required?p=250802&t=1',
      features: [
        '75000MB SSD Web Space',
        'Unlimited Bandwidth',
        '20 x 3072MB Mailboxes',
        'Free Wildcard SSL Certificates',
        '1 × MySQL Database',
        'Malware Scanning',
        'DDoS Protection'
      ]
    },
    {
      name: 'WordPress Professional',
      description: 'Advanced features for professional WordPress sites',
      price: '₹199.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/domain-required?p=250964&t=1',
      features: [
        '150000MB SSD Web Space',
        'Unlimited Bandwidth',
        '50 x 5120MB Mailboxes',
        'Free Wildcard SSL Certificates',
        '1 × MySQL Database',
        'Malware Scanning',
        'DDoS Protection',
        'Website Builder'
      ]
    },
    {
      name: 'WordPress Unlimited',
      description: 'Unlimited resources for enterprise WordPress sites',
      price: '₹299.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/domain-required?p=243949-INF-dfw&t=1',
      features: [
        'Unlimited SSD Web Space',
        'Unlimited Bandwidth',
        'Unlimited x 10240MB Mailboxes',
        'Free Wildcard SSL Certificates',
        '1 × MySQL Database',
        'Malware Scanning',
        'DDoS Protection'
      ]
    }
  ];

  const linuxPlans = [
    {
      name: 'Linux Basic',
      description: 'Perfect for personal Linux websites',
      price: '₹59.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/domain-required?p=245569&t=1',
      features: [
        '5000MB SSD Web Space',
        'Unlimited Bandwidth',
        '2 x 1024MB Mailboxes',
        'Free Wildcard SSL Certificates',
        '2 × MySQL Database',
        'Malware Scanning',
        'DDoS Protection',
        'Website Builder'
      ]
    },
    {
      name: 'Linux Standard',
      description: 'Great for growing Linux applications',
      price: '₹119.00',
      period: 'per month',
      popular: true,
      buyLink: 'https://cp.servernest.in/domain-required?p=250800&t=1',
      features: [
        '75000MB SSD Web Space',
        'Unlimited Bandwidth',
        '20 x 3072MB Mailboxes',
        'Free Wildcard SSL Certificates',
        '10 × MySQL Database',
        'Malware Scanning',
        'DDoS Protection',
        'Website Builder'
      ]
    },
    {
      name: 'Linux Professional',
      description: 'Advanced features for professional Linux hosting',
      price: '₹199.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/domain-required?p=250962&t=1',
      features: [
        '150000MB SSD Web Space',
        'Unlimited Bandwidth',
        '50 x 5120MB Mailboxes',
        'Free Wildcard SSL Certificates',
        'Malware Scanning',
        'DDoS Protection',
        'Website Builder'
      ]
    },
    {
      name: 'Linux Unlimited',
      description: 'Unlimited resources for enterprise Linux hosting',
      price: '₹299.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/domain-required?p=243943-INF-dfw&t=1',
      features: [
        'Unlimited SSD Web Space',
        'Unlimited Bandwidth',
        'Unlimited x 10240MB Mailboxes',
        'Free Wildcard SSL Certificates',
        'Malware Scanning',
        'DDoS Protection',
        'Website Builder'
      ]
    }
  ];

  const cloudPlans = [
    {
      name: 'Managed Cloud Hosting',
      description: 'Cloud Hosting optimized for maximum speed & reliability',
      price: '₹1,116.06',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/build-server',
      features: [
        'Cloud Hosting optimized for maximum speed & reliability',
        'Powerful, yet simple server/site management tools',
        'Choice of cloud provider, including AWS & Google Cloud',
        'Over 60 Global Data Center Locations',
        'Google-based DNS Servers',
        'Advanced DDoS Protection',
        'Free SSL Certificates'
      ]
    }
  ];

  const vpsPlans = [
    {
      name: 'Virtual Private Servers',
      description: 'High-performance VPS with dedicated resources',
      price: '₹1,499.00',
      period: 'per month',
      buyLink: 'https://cp.servernest.in/order-vps',
      features: [
        'Up to 16 GB DDR4 RAM',
        'Up to 8 Core CPU',
        'Up to 200 GB SSD Storage',
        'Unlimited Bandwidth',
        '1 Tbps Anti-DDoS'
      ]
    }
  ];

  const domainPlans = [
    {
      name: 'Domain Names',
      description: 'Find your perfect domain with privacy options',
      price: '₹907.67',
      period: 'a year',
      buyLink: 'https://cp.servernest.in/domain-search',
      features: [
        'Find your perfect domain',
        '100s of top-level domains',
        'Buy or transfer',
        'Privacy options',
        'Great value',
        'Simple control panel'
      ]
    }
  ];

  const sslPlans = [
    {
      name: 'SSL Certificates',
      description: 'Secure your site and improve search performance',
      price: '₹3,299.00',
      period: 'a year',
      buyLink: 'https://cp.servernest.in/order-ssl',
      features: [
        'Secure your site',
        'Improve search performance',
        'Padlock and \'https\' URL',
        'Free SSL certificates',
        'Simple SSL certificates',
        'Extended SSL certificates'
      ]
    }
  ];

  const getCurrentPlans = () => {
    switch (activeCategory) {
      case 'web-hosting': return webHostingPlans;
      case 'wordpress': return wordpressPlans;
      case 'linux': return linuxPlans;
      case 'cloud': return cloudPlans;
      case 'vps': return vpsPlans;
      case 'domains': return domainPlans;
      case 'ssl': return sslPlans;
      default: return webHostingPlans;
    }
  };

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'web-hosting': return 'Web Hosting Plans';
      case 'wordpress': return 'WordPress Hosting Plans';
      case 'linux': return 'Linux Hosting Plans';
      case 'cloud': return 'Managed Cloud Hosting';
      case 'vps': return 'Virtual Private Servers';
      case 'domains': return 'Domain Registration';
      case 'ssl': return 'SSL Certificates';
      default: return 'Hosting Plans';
    }
  };

  return (
    <section id="hosting-plans" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ServerNest
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">Hosting Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive range of hosting solutions designed to meet 
            every business need with enterprise-grade performance and security.
          </p>
        </div>

        {/* Category Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-2 border border-white/20 dark:border-gray-700/30 max-w-6xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            {getCategoryTitle()}
          </h3>
        </div>

        {/* Plans Grid */}
        <div className={`grid gap-8 max-w-7xl mx-auto mb-16 ${
          getCurrentPlans().length === 1 ? 'md:grid-cols-1 max-w-2xl' :
          getCurrentPlans().length === 2 ? 'md:grid-cols-2 max-w-4xl' :
          getCurrentPlans().length === 3 ? 'md:grid-cols-3 max-w-6xl' :
          'md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {getCurrentPlans().map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? 'transform scale-105 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`h-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                  : 'border-white/20 dark:border-gray-700/30'
              } p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-end justify-center mb-2">
                      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={plan.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg'
                      : 'bg-white/20 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-600/40'
                  }`}
                >
                  {plan.popular && <Zap className="h-4 w-4" />}
                  <span>Buy Now</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Need Help Choosing the Right Plan?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our hosting experts are here to help you find the perfect solution for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://tawk.to/chat/6788f045825083258e065141/1ihnel4bf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Live Chat Support</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <a
              href="mailto:support@servernest.in"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300"
            >
              <span>support@servernest.in</span>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans come with a 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <span>• No Setup Fees</span>
            <span>• Free Migration</span>
            <span>• 99.9% Uptime SLA</span>
            <span>• India-based Support</span>
            <span>• LiteSpeed Servers</span>
            <span>• Free SSL Certificate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;