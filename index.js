const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    console.log(`Server has been started on: http://localhost:${PORT}`);
  } catch (error) {
    console.log(`Server Error: ${error.message}`);
  }
});

const { email } = req.body;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.Email,
    pass: process.env.Password,
  },
});

const MailOpt = {
  to: email,
  subject: "Your subject",
  text: `Your Message`,
};

transporter.sendMail(MailOpt, () => {
  try {
    console.log("Mail will sent!");
    res.status(200).send("Mail will sent!");
  } catch (error) {
    console.error(`Mail Error: ${error}`);
    res.status(400).send(`Mail error: ${error}`);
  }
});
