import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'steve@zadachdesign.com',
    pass: process.env.GOOGLE_APP_PASSWORD // You'll need to generate an App Password in Google Account settings
  }
});

export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const emailContent = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
  `;

  return transporter.sendMail({
    from: '"Zadach Design Website" <steve@zadachdesign.com>',
    to: 'steve@zadachdesign.com',
    subject: `Design Consultation Request from ${data.name}`,
    text: emailContent,
  });
};