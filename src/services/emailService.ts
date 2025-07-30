interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class EmailService {
  private static instance: EmailService;
  
  private constructor() {}
  
  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendEmail(emailData: EmailData): Promise<{ success: boolean; message: string }> {
    try {
      // Create the email content
      const emailContent = {
        to: 'info@servernest.in',
        cc: 'servernest24@gmail.com',
        subject: `Contact Form: ${emailData.subject || 'General Inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #3b82f6; margin: 0;">ServerNest Contact Form</h1>
              <p style="color: #666; margin: 5px 0;">New message from website</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e40af; margin-top: 0;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${emailData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${emailData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${emailData.subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #1e40af; margin-top: 0;">Message:</h3>
              <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${emailData.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 14px;">
              <p>This message was sent from the ServerNest website contact form.</p>
              <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        `,
        text: `
Contact Form Submission - ServerNest

Name: ${emailData.name}
Email: ${emailData.email}
Subject: ${emailData.subject}

Message:
${emailData.message}

---
Sent from ServerNest Contact Form
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        `
      };

      // Use EmailJS or similar service for client-side email sending
      // For now, we'll use a simple fetch to a serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent)
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Email sent successfully! We will get back to you within 24 hours.'
        };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      
      // Fallback to mailto as backup
      const subject = encodeURIComponent(`Contact Form: ${emailData.subject || 'General Inquiry'}`);
      const body = encodeURIComponent(`
Name: ${emailData.name}
Email: ${emailData.email}
Subject: ${emailData.subject}

Message:
${emailData.message}

---
Sent from ServerNest Contact Form
      `);
      
      const mailtoLink = `mailto:info@servernest.in,servernest24@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      return {
        success: false,
        message: 'Opening your email client to send the message. Please send the email to complete your inquiry.'
      };
    }
  }
}

export const emailService = EmailService.getInstance();