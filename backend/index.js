import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import axios from 'axios';
import NodeCache from 'node-cache';
import { fetchLeetCode, fetchCodeforces, fetchCodeChef, fetchGitHub } from './services.js';
import Message from './models/Message.js';

dotenv.config();

const app = express();
const cache = new NodeCache({ stdTTL: 86400 });

app.use(cors());
app.use(express.json());

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: { error: 'Too many requests from this IP, please try again after 15 minutes' }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Transporter for Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// --- API Endpoints ---

// 1. Coding Profiles (Existing)
app.get('/api/coding-profiles', async (req, res) => {
  const cachedData = cache.get('coding-profiles');
  if (cachedData) return res.json(cachedData);

  const username = 'ruthvik0811';
  const githubUsername = 'RUTHVIKMATURU';

  try {
    const [leetcode, codeforces, codechef, github] = await Promise.all([
      fetchLeetCode(username),
      fetchCodeforces(username),
      fetchCodeChef(username),
      fetchGitHub(githubUsername)
    ]);

    const data = { leetcode, codeforces, codechef, github, lastUpdated: new Date().toISOString() };
    cache.set('coding-profiles', data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coding profile data' });
  }
});

// 2. Contact Form Submission
app.post('/api/contact', contactLimiter, [
  body('name').trim().notEmpty().withMessage('Name is required').escape(),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('subject').trim().notEmpty().withMessage('Subject is required').escape(),
  body('message').trim().notEmpty().withMessage('Message is required').escape(),
  body('recaptchaToken').notEmpty().withMessage('reCAPTCHA is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message, recaptchaToken } = req.body;

  try {
    // Verify reCAPTCHA
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }

    // Save to MongoDB
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // Send notification email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send auto-reply to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting me. I have received your message regarding "<strong>${subject}</strong>" and will get back to you as soon as possible.</p>
        <br>
        <p>Best regards,</p>
        <p>Ruthvik Maturu</p>
      `
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
});

// 3. Admin: Get Messages
app.get('/api/admin/messages', async (req, res) => {
  try {
    // In a real app, add authentication middleware here!
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// 4. Admin: Update Message Status
app.patch('/api/admin/messages/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const updated = await Message.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update message status' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
