const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const nodemailer = require("nodemailer");

// function creates 
const mailer = async (email) => {
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

    const message = {
      from: '"dev_planner" <dev_planner@example.com>',
      to: email,
      subject: "Test email", // Subject line
      text: "Hello john", // plain text body
      html: "<b>Hello john</b>", // html body
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
    const getEmail = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    if (getEmail.rows.length === 1) {
      mailer(email);
    }
    return res.json({ rows: getEmail.rows.length });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
