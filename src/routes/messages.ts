import {Router} from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
router.post('/', async (req, res) => {
    const {contact, message} = req.body;

    const text = `From:\n${contact}\n\nMessage:\n${message}`;
    const html = `<p><div>From:</div><div>${contact}</div></p><p><div>Message:</div><div>${message}</div></p>`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        // port: 587,
        // secure: false,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: 'Website', // sender address
        to: process.env.EMAIL_USER, // comma separated
        subject: 'Message from chester.millisock.com',
        text,
        html,
    });

    return res.json({
        success: true,
        contact,
        message,
    });
});

export default router;
