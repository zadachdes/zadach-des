import { Request, Response } from 'express';
import { sendEmail } from '../utils/email';

export const handleContactSubmission = async (req: Request, res: Response) => {
  try {
    await sendEmail(req.body);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};