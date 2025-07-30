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
      text: "Hi! I'm NestBot, your ServerNest assistant. How can I help you today?",
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

  // AI Knowledge Base from the provided content
  const knowledgeBase = {
    hosting: {
      keywords: ['hosting', 'web hosting', 'shared hosting', 'wordpress hosting', 'linux hosting', 'cloud hosting', 'vps', 'server'],
      responses: [
        "ServerNest offers various hosting solutions:\n\n🔹 **Linux Hosting** (₹59-₹299/month)\n🔹 **WordPress Hosting** (₹59-₹299/month)\n🔹 **Managed Cloud Hosting** (₹1,116/month)\n🔹 **VPS Servers** (₹1,499/month)\n\nAll plans include free SSL, malware scanning, and DDoS protection. Which type interests you?",
        "Our hosting features include:\n\n✅ Autoscaling cloud infrastructure\n✅ 100% SSD storage with RAID 10\n✅ Free SSL certificates\n✅ Daily malware scanning\n✅ 99.99% uptime guarantee\n✅ 24/7 expert support\n\nWould you like details about a specific plan?"
      ]
    },
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'plans', 'billing', 'payment'],
      responses: [
        "Our hosting plans start from ₹59/month:\n\n🔹 **Basic Plan**: ₹59/month (5GB SSD, 2 mailboxes)\n🔹 **Standard Plan**: ₹119/month (75GB SSD, 20 mailboxes)\n🔹 **Professional Plan**: ₹199/month (150GB SSD, 50 mailboxes)\n🔹 **Unlimited Plan**: ₹299/month (Unlimited resources)\n\nWe offer quarterly, semi-annual, annual, and multi-year billing cycles with discounts!"
      ]
    },
    support: {
      keywords: ['support', 'help', 'contact', 'assistance', 'ticket'],
      responses: [
        "We provide 24/7 support through multiple channels:\n\n📧 **General**: info@servernest.in\n📧 **Technical**: support@servernest.in\n📧 **Sales**: sales@servernest.in\n📞 **Phone**: +91 7972930243\n💬 **Live Chat**: Available on our website\n🎫 **Support Tickets**: Through your control panel\n\nHow can I assist you today?"
      ]
    },
    features: {
      keywords: ['features', 'ssl', 'security', 'backup', 'cdn', 'malware', 'ddos'],
      responses: [
        "ServerNest includes premium features:\n\n🔒 **Security**: Free SSL, malware scanning, DDoS protection, WAF\n⚡ **Performance**: Global CDN, SSD storage, autoscaling\n🛠️ **Management**: StackCP control panel, one-click installs\n📧 **Email**: Business-class email with spam protection\n💾 **Backups**: Daily automated backups\n\nAll included at no extra cost!"
      ]
    },
    refund: {
      keywords: ['refund', 'money back', 'guarantee', 'return', 'cancel'],
      responses: [
        "Our refund policy:\n\n✅ **30-day money-back guarantee** on annual plans\n❌ **No refunds** on monthly plans\n💰 **Refund calculation**: Full amount minus 1 month usage fee\n📋 **GST is non-refundable** as per regulations\n\nTo request a refund, contact info@servernest.in within 30 days of purchase."
      ]
    },
    migration: {
      keywords: ['migration', 'transfer', 'move', 'migrate'],
      responses: [
        "Free website migration included:\n\n✅ **Zero downtime** migration process\n✅ **Free and automatic** - no action required from you\n✅ **Complete transfer**: websites, emails, databases\n⏱️ **Duration**: 20 minutes to 4 hours (average 30-40 minutes)\n🔄 **DNS propagation**: Up to 72 hours\n\nWe handle everything for you!"
      ]
    },
    stackcp: {
      keywords: ['stackcp', 'control panel', 'cpanel', 'dashboard'],
      responses: [
        "StackCP is our powerful control panel featuring:\n\n🖥️ **Multi-site management**\n📧 **Email account creation**\n🔧 **DNS & domain management**\n📁 **File manager with SSH/SFTP**\n🔄 **Git deployment & staging**\n📊 **Analytics & monitoring**\n\nTry our demo: https://cp.servernest.in/services/d894440726c80acc/service-overview"
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

    // Default responses for unmatched queries
    const defaultResponses = [
      "I'd be happy to help! For specific technical questions, please contact our support team at support@servernest.in or call +91 7972930243.",
      "That's a great question! Our expert support team at info@servernest.in can provide detailed assistance. You can also check our knowledge base at https://cp.servernest.in/support-database",
      "For the most accurate information about that topic, I recommend contacting our sales team at sales@servernest.in or visiting https://servernest.in",
      "I'm here to help with general ServerNest questions! For detailed technical support, please reach out to support@servernest.in or use our live chat."
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
                placeholder="Ask me about ServerNest hosting..."
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