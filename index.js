const express = require("express");
const nodemailer = require('nodemailer')
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    try {
        console.log(`Server has been started on: http://localhost:${PORT}`)
    } catch (error) {
        console.log(`Server Error: ${error.message}`)
    }
})

const tranporter = nodemailer.createTransport({
  service: "YOUR SERVICE", 
  auth: {
    user: process.env.Email,
    pass: process.env.Password,
  },
});

const MailOptions = {
    from: process.env.Email,
    to: 'EMAIL TO SEND',
    subject: 'NodeMailer',
    text: 'Hello NodeMailer'
}

tranporter.sendMail(MailOptions, () => {
    try {
        console.log('Mail will sent')
    } catch (error) {
        console.log(`Mail Error: ${error.message}`)
    }
})