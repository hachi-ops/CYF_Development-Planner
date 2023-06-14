const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

//authorize

router.post("/register", validInfo, async (req, res) => {
  const { fname, lname, username, email, password, role } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(
      "INSERT INTO users (user_fname, user_lname, username, user_email, user_password, user_role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [fname, lname, username, email, bcryptPassword, role]
    );
    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", validInfo, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);

    console.log({ jwtToken, role: user.rows[0].user_role });
    return res.json({ jwtToken, role: user.rows[0].user_role });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/verify", authorize, (req, res) => {
  try {
    // If the authorize function runs without issue, next() will run this code after. This is logged as parsedRes on the client side.
    res.json({ status: 200, verification: true });
  } catch (err) {
    // How could the above code fail? When would this catch get invoked?
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/validUser", async (req, res) => {
  const { username, email } = req.body;
  const userObj = { name: true, e_mail: true };
  try {
    const getName = await pool.query(
      "SELECT username FROM users WHERE LOWER(username)=LOWER($1)",
      [username]
    );
    const getEmail = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    if (getName.rows.length > 0) { userObj.name = false };
    if (getEmail.rows.length > 0) { userObj.e_mail = false };
    return res.json(userObj);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
