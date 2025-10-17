const nodemailer = require("nodemailer");

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Hello from Node.js",
    text: "This is a test email sent from Node.js!",
  });

  console.log("Email sent:", info.response);
}

sendEmail().catch(console.error);
