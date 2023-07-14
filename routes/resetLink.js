const express = require("express");
const router = express.Router();
const pool = require("../db");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

// function creates smtp transporter object, message object and uses the sendMail method to send the mail/message.
const mailer = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // creates a jwt token
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_EMAIL_SECRET, {
      expiresIn: "1h",
    });

    // creates an html template
    const emailTemplateFile = fs.readFileSync(
      path.join(__dirname, "./../templates/template.hbs"),
      "utf-8"
    );
    const template = handlebars.compile(emailTemplateFile);
    const html_message = template({
      email: user.user_email,
      link: `http://localhost:3000/password-reset?token=${token}`,
    });

    // sends token in message
    const message = {
      from: '"dev_planner" <dev_planner@example.com>',
      to: user.user_email,
      subject: "Reset Password",

      html: html_message
    };

    const response = await transporter.sendMail(message);

    console.log("Message sent: %s", response.messageId);
  } catch (err) {
    console.error(err.message);
  }
};

// checking that email is in the database and calling mailer function with email parameter
router.post("/checkEmail", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length === 1) {
      mailer(user.rows[0]);
    }
    return res.json({ rows: user.rows.length });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
