import { Handler } from '@netlify/functions';
import { createTransporter } from '../../src/utils/email/config';
import { createEmailContent } from '../../src/utils/email/templates';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    if (!event.body) {
      throw new Error('No form data provided');
    }

    const formData = JSON.parse(event.body);
    const transporter = createTransporter();
    const emailContent = createEmailContent(formData);

    await transporter.sendMail({
      from: '"Zadach Design Website" <steve@zadachdesign.com>',
      to: 'steve@zadachdesign.com',
      subject: `New Design Consultation Request from ${formData.name}`,
      text: emailContent.text,
      html: emailContent.html
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};