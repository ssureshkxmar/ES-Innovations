'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    budget: string;
    timeline: string;
    message: string;
}

export async function submitContactForm(data: ContactFormData) {
    // Simulate network delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 1. EMAIL SENDING LOGIC (Nodemailer)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${data.name}" <${process.env.GMAIL_USER}>`,
        to: 'ssureshkxmar@gmail.com',
        replyTo: data.email,
        subject: `New Inquiry: ${data.subject}`,
        text: `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Subject: ${data.subject}
      Budget: ${data.budget}
      Timeline: ${data.timeline}
      
      Message:
      ${data.message}
    `,
        html: `
      <h3>New Inquiry from Website</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <hr>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
      <p><strong>Timeline:</strong> ${data.timeline}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
    };

    try {
        if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
            await transporter.sendMail(mailOptions);
        }
    } catch (error) {
        // Silently handle error to not disrupt client experience
    }

    // 2. SMS SENDING LOGIC (Python Bridge)
    const { exec } = require('child_process');
    const path = require('path');

    // Construct message for SMS
    const smsMessage = `New Inq:\n${data.name}\n${data.phone}\nSub: ${data.subject}\nBdgt: ${data.budget}`;
    const adminPhone = '8925427760';

    const scriptPath = path.join(process.cwd(), 'src', 'scripts', 'send_sms.py');
    const pythonCommand = 'python';

    exec(`${pythonCommand} "${scriptPath}" "${adminPhone}" "${smsMessage}"`, (error: any, stdout: string, stderr: string) => {
        // SMS sending happens in background
    });

    return { success: true };
}
