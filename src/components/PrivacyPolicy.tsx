import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Globe } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Users,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We may collect personal details such as your name, email address, phone number, and billing information when you sign up for our services or contact us.'
        },
        {
          subtitle: 'Non-Personal Information',
          text: 'This includes technical data such as your IP address, browser type, and access times, which helps us improve our services.'
        }
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'To Provide Services',
          text: 'We use your information to deliver and manage our hosting services and respond to your inquiries.'
        },
        {
          subtitle: 'To Improve User Experience',
          text: 'Non-personal data helps us optimize the website and services to better meet user needs.'
        },
        {
          subtitle: 'Marketing',
          text: 'We may use your contact information to send newsletters, special offers, or other information that may interest you. You can opt out at any time.'
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection and Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement strong security measures to protect your data, including encryption and secure access protocols. However, no online transmission is 100% secure, and we cannot guarantee absolute security.'
        }
      ]
    },
    {
      icon: Globe,
      title: 'Sharing Your Information',
      content: [
        {
          subtitle: 'Third-Party Services',
          text: 'We do not sell, trade, or otherwise transfer your personal information to outside parties, except when necessary for third-party services that assist us in operating our business (e.g., payment processors). These third parties are obligated to maintain your information securely and confidentially.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-500 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gray-800 dark:text-white">Privacy</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us at ServerNest. This Privacy Policy explains how we collect, 
            use, and protect your personal information when you visit our website or use our services.
          </p>
        </div>

        {/* Policy Sections */}
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
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Sections */}
          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We use cookies to enhance your browsing experience and collect information on how you use our site. 
              You can adjust your browser settings to refuse cookies, but this may limit some functionalities of our website.
            </p>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Third-Party Links
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our website may include links to third-party sites. We are not responsible for the content or privacy 
              practices of these sites. We encourage you to review their privacy policies when visiting.
            </p>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              You have the right to access, modify, or delete your personal data. To exercise these rights, 
              contact us at <a href="mailto:info@servernest.in" className="text-blue-500 hover:text-blue-400">info@servernest.in</a>.
            </p>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, 
              and significant changes will be communicated via email or site notification.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Questions About Our Privacy Policy?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions or concerns regarding this Privacy Policy, please contact us:
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
              Support Available 24/7 • By using our site and services, you consent to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;