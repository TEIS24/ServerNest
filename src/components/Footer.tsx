import React from 'react';
import { Server, Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Hosting Plans', page: 'hosting' },
    { name: 'Features', page: 'features' },
    { name: 'Services', page: 'services' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' }
  ];

  const services = [
    { name: 'Web Hosting', link: 'https://cp.servernest.in/order-hosting' },
    { name: 'WordPress Hosting', link: 'https://cp.servernest.in/domain-required?p=246611&t=1' },
    { name: 'Linux Hosting', link: 'https://cp.servernest.in/domain-required?p=245569&t=1' },
    { name: 'Cloud Hosting', link: 'https://cp.servernest.in/build-server' },
    { name: 'VPS Servers', link: 'https://cp.servernest.in/order-vps' },
    { name: 'Domain Registration', link: 'https://cp.servernest.in/domain-search' },
    { name: 'SSL Certificates', link: 'https://cp.servernest.in/order-ssl' }
  ];

  const support = [
    { name: 'Service Status', link: 'https://status.servernest.in/', external: true },
    { name: 'Knowledge Base', link: 'https://cp.servernest.in/support-database', external: true },
    { name: 'CP Demo', link: 'https://cp.servernest.in/services/d894440726c80acc/service-overview', external: true },
    { name: 'Live Chat Support', link: 'https://tawk.to/chat/6788f045825083258e065141/1ihnel4bf', external: true },
    { name: 'Support Ticket System', link: 'https://cp.servernest.in/customer-support', external: true },
    { name: 'Phone Support', link: 'tel:+917972930243', external: false },
    { name: 'WhatsApp Support', link: 'https://wa.me/917972930243', external: true }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/ServerNest', name: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/ServerNestHost', name: 'X (Twitter)' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/server_nest', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/src/assets/ServerNest_Logo.png" 
                alt="ServerNest Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'flex items-center space-x-2';
                  fallback.innerHTML = `
                    <div class="relative">
                      <svg class="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                      </svg>
                      <div class="absolute -inset-1 bg-blue-500/20 rounded-full blur-sm"></div>
                    </div>
                    <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      ServerNest
                    </span>
                  `;
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's premier web hosting provider offering lightning-fast, secure, 
              and scalable hosting solutions. Trusted by 10,000+ businesses across India.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@servernest.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 7972930243</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">support@servernest.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">sales@servernest.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <a
                href="https://cp.servernest.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <span>Client Portal</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <a 
                  href="https://wa.me/917972930243" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  WhatsApp: +91 7972930243
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 ServerNest. All rights reserved. | Made with ❤️ in India
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button
                onClick={() => setCurrentPage('privacy-policy')}
                className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setCurrentPage('terms-conditions')}
                className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setCurrentPage('refund-policy')}
                className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;