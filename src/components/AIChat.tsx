import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm NestBot, your ServerNest assistant. I can help you with hosting plans, pricing, technical questions, policies, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced AI Knowledge Base with all provided content
  const knowledgeBase = {
    hosting: {
      keywords: ['hosting', 'web hosting', 'shared hosting', 'wordpress hosting', 'linux hosting', 'cloud hosting', 'vps', 'server', 'plan', 'plans'],
      responses: [
        "ServerNest offers comprehensive hosting solutions:\n\n🔹 **Linux Hosting** (₹59-₹299/month)\n• 5GB to Unlimited SSD storage\n• Unlimited bandwidth\n• Website builder included\n\n🔹 **WordPress Hosting** (₹59-₹299/month)\n• Pre-installed WordPress\n• Staging & cloning tools\n• Auto-updates included\n\n🔹 **Managed Cloud Hosting** (₹1,116/month)\n• Choice of AWS, Google Cloud, or ServerNest Cloud\n• 99.99% uptime guarantee\n• Enterprise-level security\n\n🔹 **VPS Servers** (₹1,499/month)\n• Up to 16GB DDR4 RAM\n• Up to 8 Core CPU\n• 200GB SSD storage\n\nAll plans include free SSL, malware scanning, and DDoS protection. Which type interests you?",
        
        "Our hosting platform features:\n\n✅ **Autoscaling Cloud Infrastructure** - Dynamically adjusts resources\n✅ **100% SSD Storage** with RAID 10 configuration\n✅ **LiteSpeed Servers** - Up to 9x faster than Apache\n✅ **Global CDN** - Free premium CDN included\n✅ **StackCP Control Panel** - User-friendly management\n✅ **80+ One-Click Installs** - WordPress, Joomla, Magento, etc.\n✅ **24/7 Expert Support** - India-based technical team\n✅ **99.9% Uptime SLA** - Industry-leading reliability\n\nWould you like details about a specific plan?"
      ]
    },
    
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'plans', 'billing', 'payment', 'money', 'fee', 'charge'],
      responses: [
        "ServerNest hosting plans with flexible billing:\n\n🔹 **Basic Plan** (₹59/month)\n• Monthly: ₹59 | Quarterly: ₹177 | Annually: ₹708\n\n🔹 **Standard Plan** (₹119/month) - *Most Popular*\n• Monthly: ₹119 | Quarterly: ₹357 | Annually: ₹1,428\n\n🔹 **Professional Plan** (₹199/month)\n• Monthly: ₹199 | Quarterly: ₹597 | Annually: ₹2,388\n\n🔹 **Unlimited Plan** (₹299/month)\n• Monthly: ₹299 | Quarterly: ₹897 | Annually: ₹3,588\n\n💰 **Save more with longer terms!** We offer quarterly, semi-annual, annual, bi-annual, and tri-annual billing cycles with increasing discounts."
      ]
    },
    
    support: {
      keywords: ['support', 'help', 'contact', 'assistance', 'ticket', 'phone', 'email', 'chat'],
      responses: [
        "We provide comprehensive 24/7 support:\n\n📧 **Email Support:**\n• General: info@servernest.in\n• Technical: support@servernest.in\n• Sales: sales@servernest.in\n\n📞 **Phone Support:** +91 7972930243\n💬 **Live Chat:** Available on our website\n🎫 **Support Tickets:** Through StackCP control panel\n💬 **WhatsApp:** +91 7972930243\n\n🔗 **Resources:**\n• Knowledge Base: https://cp.servernest.in/support-database\n• Service Status: https://status.servernest.in\n• CP Demo: https://cp.servernest.in/services/d894440726c80acc/service-overview\n\nHow can I help you today?"
      ]
    },
    
    features: {
      keywords: ['features', 'ssl', 'security', 'backup', 'cdn', 'malware', 'ddos', 'stackcp', 'control panel'],
      responses: [
        "ServerNest premium features included:\n\n🔒 **Security Features:**\n• Free Wildcard SSL certificates\n• Daily malware scanning\n• DDoS protection (up to 1 Tbps)\n• Web Application Firewall (WAF)\n• Two-factor authentication\n• Brute-force login protection\n\n⚡ **Performance Features:**\n• Global CDN with edge caching\n• 100% SSD storage (RAID 10)\n• Autoscaling PHP workers\n• Image optimization & minification\n• HTTP/2 and IPv6 support\n\n🛠️ **Management Features:**\n• StackCP control panel\n• 80+ one-click installs\n• Git integration\n• Staging environments\n• Daily automated backups\n\nAll included at no extra cost!"
      ]
    },
    
    refund: {
      keywords: ['refund', 'money back', 'guarantee', 'return', 'cancel', 'policy'],
      responses: [
        "ServerNest Refund Policy:\n\n✅ **30-day money-back guarantee** on annual+ plans\n❌ **No refunds** on monthly plans\n\n📋 **Refund Process:**\n1. Contact info@servernest.in within 30 days\n2. Include order details and reason\n3. Review within 3-5 business days\n4. Refund processed to original payment method\n\n💰 **Refund Calculation:**\n• Full amount minus 1 month usage fee\n• GST is non-refundable (as per regulations)\n• Processing time: 5-10 business days\n\n⚠️ **Important:** Upon refund approval, hosting services are cancelled immediately.\n\nNeed help with a refund request?"
      ]
    },
    
    migration: {
      keywords: ['migration', 'transfer', 'move', 'migrate', 'switch'],
      responses: [
        "Free website migration included:\n\n✅ **Completely Free & Automatic**\n• Zero downtime migration process\n• No action required from you\n• We handle everything!\n\n📦 **What We Migrate:**\n• Complete websites & databases\n• Email accounts & settings\n• DNS configurations\n• SSL certificates\n\n⏱️ **Timeline:**\n• Duration: 20 minutes to 4 hours (avg 30-40 min)\n• DNS propagation: Up to 72 hours\n• You'll be notified upon completion\n\n🔄 **During Migration:**\n• Your site stays online\n• Check both old & new mailboxes temporarily\n• Login details remain the same\n\nReady to migrate to ServerNest?"
      ]
    },
    
    stackcp: {
      keywords: ['stackcp', 'control panel', 'cpanel', 'dashboard', 'management'],
      responses: [
        "StackCP - Our powerful control panel:\n\n🖥️ **Multi-Site Management:**\n• Deploy, pause, or launch websites\n• Bulk script installations\n• DNS record management\n\n📧 **Email Management:**\n• Create unlimited mailboxes\n• SMTP, POP3, IMAP support\n• Webmail access (Roundcube, SquirrelMail)\n• Multi-level spam/virus scanning\n\n🔧 **Developer Tools:**\n• Git manager for direct deployments\n• Full PHP version control\n• Unlimited cron jobs\n• SSH/SFTP access\n• File permission scanner\n\n🛡️ **Security & Backups:**\n• Two-factor authentication\n• SSL certificate management\n• Backup/restore functionality\n• Malware reports\n\n📊 **Analytics & Reports:**\n• Bandwidth & disk usage stats\n• Access/error logs\n• AWStats integration\n\n🧭 **Try Demo:** https://cp.servernest.in/services/d894440726c80acc/service-overview"
      ]
    },
    
    domains: {
      keywords: ['domain', 'domains', 'registration', 'dns', 'nameserver'],
      responses: [
        "Domain services at ServerNest:\n\n🌐 **Domain Registration:**\n• 100s of top-level domains available\n• Starting at ₹907.67/year\n• Quick transfers from other providers\n• No hidden fees or price hikes\n\n🔧 **Management Features:**\n• Full DNS control\n• Web forwarding options\n• WHOIS privacy protection\n• Bulk domain management\n• Free Nominet tag changes\n\n📧 **Email Features:**\n• Unlimited email forwarding\n• Catch-all email setup\n• Professional email addresses\n\n🔗 **Name Servers:**\n• ns1.stackdns.com\n• ns2.stackdns.com\n• ns3.stackdns.com\n• ns4.stackdns.com\n\n🔍 **Search Domains:** https://cp.servernest.in/domain-search\n\nWhat domain are you looking for?"
      ]
    },
    
    ssl: {
      keywords: ['ssl', 'certificate', 'https', 'security', 'encryption'],
      responses: [
        "SSL Certificates at ServerNest:\n\n🆓 **Free SSL Options:**\n• Let's Encrypt certificates\n• Wildcard SSL included\n• Automatic installation\n• Covers all subdomains\n\n💎 **Premium SSL Options:**\n• GeoTrust certificates\n• Extended validation available\n• $1.5 million warranty\n• Starting at ₹3,299/year\n\n✅ **Benefits:**\n• Data encryption & protection\n• Improved SEO rankings\n• Browser trust indicators\n• Padlock & 'https' URL\n\n🔧 **Features:**\n• Easy installation process\n• 256-bit encryption\n• Mobile & desktop compatibility\n• 24/7 technical support\n\n🛒 **Order SSL:** https://cp.servernest.in/order-ssl\n\nNeed help choosing the right SSL certificate?"
      ]
    },
    
    email: {
      keywords: ['email', 'mail', 'mailbox', 'webmail', 'smtp', 'imap', 'pop3'],
      responses: [
        "Professional email hosting:\n\n📧 **Business-Class Email:**\n• Scalable storage: 10GB to 100GB+\n• SMTP, POP3, IMAP support\n• Advanced security features\n\n🌐 **Access Options:**\n• Webmail: https://webmail.servernest.in\n• Outlook, Apple Mail, Thunderbird\n• Mobile apps supported\n\n🔒 **Security Features:**\n• SPF & DKIM authentication\n• Multi-layer spam filtering\n• Virus & malware scanning\n• Global email deny-lists\n\n⚙️ **Configuration:**\n• Incoming: mail.yourdomain.com (IMAP: 993, POP3: 995)\n• Outgoing: mail.yourdomain.com (SMTP: 465)\n• SSL encryption enabled\n\n✨ **Premium Features:**\n• Contact/Calendar sync\n• 50GB storage quota\n• Enhanced webmail interface\n• Auto-responses & signatures\n\n📱 **Separate Storage:** Email doesn't affect web hosting storage\n\nNeed help setting up your email?"
      ]
    },
    
    wordpress: {
      keywords: ['wordpress', 'wp', 'cms', 'blog', 'staging'],
      responses: [
        "WordPress Hosting optimized for performance:\n\n🚀 **WordPress-Specific Features:**\n• Pre-installed WordPress\n• Automatic core updates\n• StackCache plugin for edge caching\n• Staging & cloning environments\n• One-click WordPress reinstallation\n\n🛡️ **Enhanced Security:**\n• WordPress checksum reports\n• Malware scanning & removal\n• Brute-force protection\n• File permission monitoring\n\n⚡ **Performance Optimization:**\n• High-frequency CPUs (up to 4.20 GHz)\n• Autoscaling platform\n• No LVE limits\n• Global CDN integration\n• Image & code optimization\n\n🔧 **Management Tools:**\n• Theme & plugin management\n• User management system\n• Database optimization\n• Backup & restore\n\n💚 **100% Green Hosting:** Powered by renewable energy\n\n📦 **Plans Available:**\n• Basic: ₹59/month (5GB)\n• Standard: ₹119/month (75GB)\n• Professional: ₹199/month (150GB)\n• Unlimited: ₹299/month\n\nPerfect for unlimited traffic with enterprise-grade performance!"
      ]
    },
    
    vps: {
      keywords: ['vps', 'virtual private server', 'dedicated', 'root access'],
      responses: [
        "Next Generation VPS Servers:\n\n💪 **Hardware Specifications:**\n• Up to 16GB DDR4 RAM\n• Up to 8 Core CPU\n• Up to 200GB SSD storage\n• Unlimited bandwidth\n• 1 Tbps Anti-DDoS protection\n\n🖥️ **Operating Systems:**\n• Alma Linux 8, CentOS 7\n• Debian 10-11, Ubuntu (various)\n• Fedora 31-34, Oracle Linux 8\n• Windows Server 2012 R2 & 2016\n• FreeBSD, OpenBSD options\n\n🔧 **Management Options:**\n• Self-managed or fully managed\n• cPanel/WHM available\n• Root/Administrator access\n• Custom configurations\n\n📦 **Pre-installed Software:**\n• 70+ one-click applications\n• CMS, eCommerce, forums\n• Development frameworks\n• Business applications\n\n🏗️ **Infrastructure:**\n• Dell enterprise servers\n• Dual Intel Xeon processors\n• Samsung enterprise SSDs\n• 20Gbps network connectivity\n\n💰 **Starting at ₹1,499/month**\n🛒 **Order VPS:** https://cp.servernest.in/order-vps\n\nNeed help choosing VPS specifications?"
      ]
    },
    
    cloud: {
      keywords: ['cloud', 'aws', 'google cloud', 'gcp', 'managed cloud'],
      responses: [
        "Managed Cloud Hosting Solutions:\n\n☁️ **Provider Options:**\n• ServerNest Cloud (100% renewable energy)\n• Amazon Web Services (AWS)\n• Google Cloud Platform (GCP)\n\n🎯 **Perfect For:**\n• Business-critical websites\n• Growing e-commerce stores\n• Digital agencies\n• High-traffic applications\n\n✨ **Included Services:**\n• 99.99% uptime guarantee\n• Expert 24/7 support\n• Unlimited 10GB mailboxes\n• Unlimited databases\n• Free daily backups (Timeline Backups)\n• Free SSL certificates\n• Unlimited free migrations\n\n🛡️ **Enterprise Security:**\n• DDoS protection (up to 1 Tbps)\n• Web Application Firewall\n• PCI compliant hosting\n• Daily malware scans\n• Two-factor authentication\n\n🚀 **Performance Features:**\n• Optimized PHP-FPM\n• Unlimited PHP workers\n• Redis & Elasticsearch (for Magento)\n• Global CDN integration\n\n🏢 **Data Centers:**\n• UK & USA locations\n• ISO/IEC 27001 certified\n• 24/7 manned facilities\n• Redundant infrastructure\n\n💰 **Starting at ₹1,116.06/month**\n🏗️ **Build Server:** https://cp.servernest.in/build-server"
      ]
    },
    
    security: {
      keywords: ['security', 'protection', 'firewall', 'malware', 'ddos', 'hack', 'safe'],
      responses: [
        "Enterprise-Grade Security Features:\n\n🛡️ **DDoS Protection:**\n• Up to 1 Tbps capacity\n• Layer 3-7 protection\n• Real-time threat detection\n• Automatic mitigation\n\n🔒 **SSL & Encryption:**\n• Free Wildcard SSL certificates\n• 256-bit encryption\n• Let's Encrypt & GeoTrust options\n• Automatic installation\n\n🦠 **Malware Protection:**\n• Daily automatic scans\n• Real-time monitoring\n• Quarantine & removal\n• WordPress checksum reports\n\n🔥 **Web Application Firewall:**\n• Blocks SQL injection\n• Prevents XSS attacks\n• Filters malicious traffic\n• Custom rule sets\n\n🔐 **Access Security:**\n• Two-factor authentication\n• Brute-force protection (StackProtect)\n• SSH key management\n• IP & geo-blocking\n\n🏢 **Data Center Security:**\n• ISO/IEC 27001 certified\n• 24/7 CCTV monitoring\n• Biometric access controls\n• Redundant power systems\n\n📧 **Email Security:**\n• DKIM authentication\n• SPF records\n• Multi-layer spam filtering\n• Virus scanning\n\nYour data and websites are protected by multiple security layers!"
      ]
    },
    
    performance: {
      keywords: ['speed', 'performance', 'fast', 'slow', 'optimization', 'cdn', 'cache'],
      responses: [
        "Performance & Speed Optimization:\n\n⚡ **LiteSpeed Technology:**\n• Up to 9x faster than Apache\n• Built-in caching\n• HTTP/2 & HTTP/3 support\n• Efficient resource handling\n\n💾 **Storage & Hardware:**\n• 100% NVMe SSD storage\n• RAID 10 configuration\n• Intel Xeon processors\n• Up to 48 logical cores\n• DDR4 3200MHz RAM\n\n🌐 **Global CDN:**\n• 6 continents coverage\n• Edge caching\n• Image optimization\n• WebP conversion\n• Code minification\n• Lazy loading\n\n🔄 **Autoscaling Platform:**\n• Dynamic resource allocation\n• No LVE limits\n• Unlimited PHP workers\n• Load balancing\n• Zero downtime scaling\n\n📊 **Optimization Features:**\n• StackCache for WordPress\n• OCSP stapling\n• Gzip compression\n• Browser caching\n• Database optimization\n\n🌱 **Green Performance:**\n• 100% renewable energy\n• PUE as low as 1.12\n• Energy-efficient scaling\n\n📈 **Monitoring:**\n• Real-time performance metrics\n• Uptime monitoring\n• Resource usage analytics\n• Performance reports\n\nExperience lightning-fast hosting with ServerNest!"
      ]
    },
    
    privacy: {
      keywords: ['privacy', 'policy', 'data', 'gdpr', 'personal information'],
      responses: [
        "Privacy & Data Protection:\n\n🔒 **Data Collection:**\n• Personal info: Name, email, phone, billing details\n• Technical data: IP address, browser type, access times\n• Only collected when necessary for services\n\n🎯 **How We Use Data:**\n• Service delivery & management\n• Customer support & inquiries\n• Website & service improvements\n• Marketing (with opt-out option)\n\n🛡️ **Data Protection:**\n• Strong encryption protocols\n• Secure access controls\n• Regular security audits\n• ISO/IEC 27001 compliance\n\n🤝 **Data Sharing:**\n• We don't sell your data\n• Third-party processors (payment, etc.) bound by confidentiality\n• Only shared when legally required\n\n🍪 **Cookies:**\n• Used to enhance browsing experience\n• Can be disabled in browser settings\n• May limit some website functionality\n\n✅ **Your Rights:**\n• Access your personal data\n• Modify or delete information\n• Opt-out of marketing\n• Data portability\n\n📧 **Contact:** info@servernest.in for privacy concerns\n\nYour privacy is our priority!"
      ]
    },
    
    terms: {
      keywords: ['terms', 'conditions', 'agreement', 'legal', 'contract'],
      responses: [
        "Terms & Conditions Summary:\n\n📋 **Service Agreement:**\n• By using ServerNest, you agree to our terms\n• Services may be modified with notice\n• Account security is your responsibility\n\n💰 **Payment Terms:**\n• Fees payable in advance\n• Non-refundable except per refund policy\n• Prices subject to change with notice\n• Failure to pay may result in suspension\n\n🚫 **Prohibited Uses:**\n• No illegal or unauthorized activities\n• No malware, viruses, or harmful code\n• No spam or mass marketing emails\n• Violation results in account termination\n\n📊 **Service Level:**\n• 99.9% uptime guarantee\n• 24/7 support availability\n• Scheduled maintenance with notice\n• Service credits for extended outages\n\n🔒 **Data & Security:**\n• Industry-standard security measures\n• Regular backups (user responsible for own backups)\n• Data protection compliance\n• Retention policies in Privacy Policy\n\n⚖️ **Liability:**\n• Limited liability for service interruptions\n• No liability for indirect damages\n• User responsible for data backup\n\n📧 **Questions:** info@servernest.in\n\nFull terms available on our website."
      ]
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check each category for keyword matches
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => message.includes(keyword))) {
        const responses = data.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }

    // Enhanced default responses with more helpful information
    const defaultResponses = [
      "I'd be happy to help! I can assist with:\n\n🔹 **Hosting Plans** - Linux, WordPress, Cloud, VPS\n🔹 **Pricing & Billing** - All plan costs and cycles\n🔹 **Technical Support** - StackCP, email setup, migrations\n🔹 **Policies** - Refunds, privacy, terms & conditions\n🔹 **Features** - Security, performance, SSL, domains\n\nWhat specific topic would you like to know about?",
      
      "I'm here to help with all ServerNest questions! You can ask me about:\n\n• Hosting plans and features\n• Pricing and payment options\n• Technical specifications\n• Migration services\n• Support and contact information\n• Policies and terms\n\nFor complex technical issues, our expert team is available 24/7:\n📧 support@servernest.in\n📞 +91 7972930243\n💬 Live chat on our website\n\nWhat would you like to know?",
      
      "That's a great question! While I have extensive knowledge about ServerNest services, for the most detailed and up-to-date information, I recommend:\n\n🔗 **Resources:**\n• Knowledge Base: https://cp.servernest.in/support-database\n• Service Status: https://status.servernest.in\n• Live Chat: Available on our website\n\n📧 **Direct Contact:**\n• General: info@servernest.in\n• Technical: support@servernest.in\n• Sales: sales@servernest.in\n\nIs there anything specific about our hosting services I can help clarify?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with NestBot
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bot className="h-8 w-8" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-semibold">NestBot</h3>
            <p className="text-xs opacity-80">ServerNest AI Assistant</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                }`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  
                  <div className={`px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isBot ? 'text-gray-500 dark:text-gray-400' : 'text-blue-100'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about hosting, pricing, features..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Powered by ServerNest AI • For complex queries, contact support@servernest.in
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChat;