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

    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log('To Admin: ssureshkxmar@gmail.com');
    console.log('From:', data.name, `<${data.email}>`);
    console.log('Phone:', data.phone);
    console.log('Project:', data.subject, '|', data.budget, '|', data.timeline);
    console.log('Message:', data.message);

    // 1. EMAIL SENDING LOGIC (Nodemailer)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Set this in .env.local
            pass: process.env.GMAIL_APP_PASSWORD, // Set this in .env.local
        },
    });

    const mailOptions = {
        from: `"${data.name}" <${process.env.GMAIL_USER}>`, // Gmail requires 'from' to be the auth user or alias
        to: 'ssureshkxmar@gmail.com',
        replyTo: data.email, // Reply to the user's email
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
            console.log('✅ Email sent successfully via Nodemailer');
        } else {
            console.warn('⚠️ GMAIL_USER or GMAIL_APP_PASSWORD not set. Email not sent (Logged above).');
        }
    } catch (error) {
        console.error('❌ Failed to send email:', error);
        // We don't throw calculation error to client, we just log it. Client sees success.
    }

    // 2. SMS SENDING LOGIC (Python Bridge)
    // This executes the python script we created in src/scripts/send_sms.py
    // Ensure you have: npm install python-shell or just use exec
    const { exec } = require('child_process');
    const path = require('path');

    // Construct message for SMS (keep it short)
    const smsMessage = `New Inq:\n${data.name}\n${data.phone}\nSub: ${data.subject}\nBdgt: ${data.budget}`;
    const adminPhone = '8925427760'; // The number you wanted

    const scriptPath = path.join(process.cwd(), 'src', 'scripts', 'send_sms.py');

    // Need to verify python command exists (python or python3)
    const pythonCommand = 'python';

    exec(`${pythonCommand} "${scriptPath}" "${adminPhone}" "${smsMessage}"`, (error: any, stdout: string, stderr: string) => {
        if (error) {
            console.error(`❌ Python SMS Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`⚠️ Python SMS Stderr: ${stderr}`);
            return;
        }
        console.log(`✅ Python SMS Output: ${stdout.trim()}`);
    });

    console.log('-----------------------------------');

    return { success: true };
}
