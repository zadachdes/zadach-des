import nodemailer from 'nodemailer';

export const createTransporter = () => {
  if (!process.env.GOOGLE_APP_PASSWORD) {
    throw new Error('GOOGLE_APP_PASSWORD environment variable is not set');
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'steve@zadachdesign.com',
      pass: process.env.GOOGLE_APP_PASSWORD
    }
  });
};