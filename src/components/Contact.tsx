import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import { emailService } from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const result = await emailService.sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly at info@servernest.in'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      content: 'info@servernest.in',
      description: 'Get help via email - we respond within 2 hours'
    },
    {
      icon: Mail,
      title: 'Technical Support',
      content: 'support@servernest.in',
      description: 'Technical assistance and troubleshooting'
    },
    {
      icon: Mail,
      title: 'Sales Inquiries',
      content: 'sales@servernest.in',
      description: 'Questions about plans and pricing'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      content: '+91 7972930243',
      description: '24/7 phone support for urgent issues'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      content: '+91 7972930243',
      description: 'Quick support via WhatsApp messenger'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Mumbai, Maharashtra',
      description: 'Our headquarters in the heart of India'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM IST' },
    { day: 'Sunday', hours: '24/7 Emergency Support' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">Get in</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Need help? Our expert support team is here 24/7 to assist you with 
            any questions about our hosting services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send us a Message
            </h2>
            
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-xl border ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
              }`}>
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Questions</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center space-x-2 w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <info.icon className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Hours */}
            <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-6 w-6 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Support Hours
                </h3>
              </div>
              
              <div className="space-y-3">
                {supportHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      {schedule.day}
                    </span>
                    <span className="text-gray-800 dark:text-white font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a
                href="https://cp.servernest.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold text-center hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Access Client Portal
              </a>
              
              <button className="w-full py-3 px-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300">
                <a 
                  href="https://wa.me/917972930243" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  Chat on WhatsApp
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Emergency Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For critical server issues that need immediate attention, 
              call our emergency hotline available 24/7.
            </p>
            <a
              href="tel:+917972930243"
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300"
            >
              Emergency Hotline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;