const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");



// checking that email is in the database
router.post("/checkEmail", async (req, res) => {
  try {
    const { email } = req.body;
    const getEmail = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    return res.json({ rows: getEmail.rows.length });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
