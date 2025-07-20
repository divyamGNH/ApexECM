import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const senderMail = process.env.EMAIL_USER;
const receiverMail = process.env.CLIENT_EMAIL;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// POST /api/send-enquiry
app.post("/api/send-enquiry", async (req, res) => {
  const { name, company, email, phone, productTags, quantity, message } = req.body;

  // Basic validation
  if (!name || !company || !email || !phone || !productTags || !quantity) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  const mailContent = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.CLIENT_EMAIL,
    replyTo: email,
    subject: `New Bulk Order Enquiry from ${name}`,
    html: `
      <h2>New Bulk Order Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Product Codes:</strong> ${productTags}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : "—"}</p>
      <hr>
      <p>Reply directly to <a href="mailto:${email}">${email}</a></p>
    `,
  };

  try {
    await transporter.sendMail(mailContent);
    console.log("Succesfully sent the enquiry email");
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
