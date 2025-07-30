import React from 'react';
import { FileText, Shield, Users, AlertTriangle, Mail, Scale } from 'lucide-react';

const TermsConditions: React.FC = () => {
  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: 'By accessing and using ServerNest services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use the service.'
    },
    {
      icon: Shield,
      title: 'Service Description',
      content: 'ServerNest provides web hosting, domain registration, SSL certificates, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or without notice.'
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information, including passwords. You agree to accept responsibility for all activities that occur under your account or password.'
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Uses',
      content: 'You may not use our services for any illegal or unauthorized purpose. You must not transmit any worms, viruses, or any code of a destructive nature. Violation of any terms will result in immediate termination of your account.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-16 w-16 text-blue-500 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gray-800 dark:text-white">Terms &</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these Terms and Conditions carefully before using ServerNest services. 
            These terms govern your use of our website and services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30"
            >
              <div className="flex items-center mb-6">
                <section.icon className="h-8 w-8 text-blue-500 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* Additional Terms */}
          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Payment Terms
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>• All fees are payable in advance and are non-refundable except as expressly stated in our refund policy.</p>
              <p>• Prices are subject to change with 30 days notice.</p>
              <p>• Failure to pay fees may result in suspension or termination of services.</p>
              <p>• All payments are processed securely through our payment partners.</p>
            </div>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Service Level Agreement
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>• We guarantee 99.9% uptime for all hosting services.</p>
              <p>• Scheduled maintenance will be announced in advance when possible.</p>
              <p>• Support is available 24/7 through multiple channels.</p>
              <p>• Service credits may be provided for extended outages as per our SLA.</p>
            </div>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Data Protection
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>• We implement industry-standard security measures to protect your data.</p>
              <p>• Regular backups are performed, but users are responsible for their own data backup.</p>
              <p>• We comply with applicable data protection regulations.</p>
              <p>• Data retention policies are outlined in our Privacy Policy.</p>
            </div>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              ServerNest shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
              resulting from your use of our services.
            </p>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms. 
              Upon termination, your right to use the service will cease immediately.
            </p>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
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
              Last updated: January 2024 • These terms are effective immediately upon posting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;