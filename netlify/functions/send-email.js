const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { to, cc, subject, html, text } = JSON.parse(event.body);

    // Create transporter using ServerNest SMTP
    const transporter = nodemailer.createTransporter({
      host: 'smtp.servernest.in',
      port: 587,
      secure: false,
      auth: {
        user: 'mail@servernest.in',
        pass: 'Mail_Sn@2025$$'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: '"ServerNest Website" <mail@servernest.in>',
      to: to,
      cc: cc,
      subject: subject,
      html: html,
      text: text,
      replyTo: 'info@servernest.in'
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully! We will get back to you within 24 hours.',
        messageId: info.messageId
      })
    };
  } catch (error) {
    console.error('Email sending error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: false,
        error: 'Failed to send email. Please try again or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
};