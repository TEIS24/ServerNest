import OpenAI from 'openai';
import knowledgeBase from '../utils/knowledgeBase';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const systemPrompt = `You are NestBot, the official AI assistant for ServerNest, India's premier web hosting provider. You are knowledgeable, professional, helpful, and friendly.

IMPORTANT GUIDELINES:
1. Always provide accurate information based on the knowledge base provided
2. Be conversational and helpful, not robotic
3. Include relevant links, pricing, and contact information when appropriate
4. Use emojis sparingly and professionally
5. If you don't know something specific, direct users to contact support
6. Always maintain a professional but friendly tone
7. Provide structured, easy-to-read responses
8. Include specific pricing, features, and links when discussing services
9. Be concise but comprehensive in your answers

KNOWLEDGE BASE:
${knowledgeBase}

Your primary role is to:
- Help customers understand ServerNest's hosting services
- Provide accurate pricing and feature information
- Guide users to the right hosting solutions
- Answer technical questions about hosting, domains, email, security
- Explain policies (refund, privacy, terms)
- Direct users to appropriate support channels
- Assist with pre-sales questions and technical inquiries

Always end responses with a helpful question or offer to assist further when appropriate.`;

export class OpenAIService {
  private conversationHistory: ChatMessage[] = [
    { role: 'system', content: systemPrompt }
  ];

  async generateResponse(userMessage: string): Promise<string> {
    try {
      // Add user message to conversation history
      this.conversationHistory.push({ role: 'user', content: userMessage });

      // Keep conversation history manageable (last 10 messages + system prompt)
      if (this.conversationHistory.length > 11) {
        this.conversationHistory = [
          this.conversationHistory[0], // Keep system prompt
          ...this.conversationHistory.slice(-10) // Keep last 10 messages
        ];
      }

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: this.conversationHistory,
        max_tokens: 1000,
        temperature: 0.7,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
      });

      const assistantResponse = completion.choices[0]?.message?.content || 
        "I apologize, but I'm having trouble processing your request right now. Please contact our support team at info@servernest.in or call +91 7972930243 for immediate assistance.";

      // Add assistant response to conversation history
      this.conversationHistory.push({ role: 'assistant', content: assistantResponse });

      return assistantResponse;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      
      // Fallback to knowledge-based responses for common queries
      return this.getFallbackResponse(userMessage);
    }
  }

  private getFallbackResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();
    
    // Common hosting queries
    if (message.includes('hosting') || message.includes('plan')) {
      return `I'd be happy to help with hosting plans! ServerNest offers:

🔹 **Linux Hosting** (₹59-₹299/month)
• Basic: ₹59/month - 5GB SSD, 2 mailboxes
• Standard: ₹119/month - 75GB SSD, 20 mailboxes
• Professional: ₹199/month - 150GB SSD, 50 mailboxes  
• Unlimited: ₹299/month - Unlimited SSD & mailboxes

🔹 **WordPress Hosting** (₹59-₹299/month)
• Optimized for WordPress with staging & cloning
• Pre-installed WordPress with auto-updates
• StackCache plugin for performance

🔹 **Cloud Hosting** (₹1,116/month)
• Choice of ServerNest, AWS, or Google Cloud
• 99.99% uptime guarantee

All plans include free SSL, malware protection, and 24/7 support.

Which type of hosting interests you? I can provide more specific details!`;
    }

    // Pricing queries
    if (message.includes('price') || message.includes('cost')) {
      return `Here's our hosting pricing:

💰 **Basic Plans**: ₹59/month
• Quarterly: ₹177 | Annually: ₹708

💰 **Standard Plans**: ₹119/month (Most Popular)
• Quarterly: ₹357 | Annually: ₹1,428

💰 **Professional Plans**: ₹199/month
• Quarterly: ₹597 | Annually: ₹2,388

💰 **Unlimited Plans**: ₹299/month
• Quarterly: ₹897 | Annually: ₹3,588

Save more with longer billing cycles! All plans include free SSL, malware protection, and unlimited bandwidth.

Need help choosing the right plan for your needs?`;
    }

    // Support queries
    if (message.includes('support') || message.includes('help') || message.includes('contact')) {
      return `I'm here to help! For additional support:

📧 **Email Support:**
• General: info@servernest.in
• Technical: support@servernest.in
• Sales: sales@servernest.in

📞 **Phone/WhatsApp**: +91 7972930243
💬 **Live Chat**: Available on our website
🎫 **Support Tickets**: Through StackCP control panel

🔗 **Resources:**
• Knowledge Base: https://cp.servernest.in/support-database
• Service Status: https://status.servernest.in

Our support team is available 24/7. How can I assist you today?`;
    }

    // Default response
    return `I'm NestBot, your ServerNest assistant! I can help with:

🔹 **Hosting Plans** - Linux, WordPress, Cloud, VPS
🔹 **Pricing & Billing** - All plan costs and cycles  
🔹 **Technical Support** - StackCP, email setup, migrations
🔹 **Policies** - Refunds, privacy, terms & conditions
🔹 **Features** - Security, performance, SSL, domains

For complex technical issues, our expert team is available 24/7:
📧 support@servernest.in | 📞 +91 7972930243

What would you like to know about ServerNest hosting?`;
  }

  clearHistory(): void {
    this.conversationHistory = [
      { role: 'system', content: systemPrompt }
    ];
  }
}

export const openaiService = new OpenAIService();