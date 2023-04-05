const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      req.user.id,
    ]);
    console.log(user);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/mentors", async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_id, username from users where user_role='mentor'"
    );

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// select one mentor
router.get("/mentors/:id", async (req, res) => {
  try {
    const { mentorId } = req.params;
    const mentor = await pool.query(
      "SELECT * FROM users WHERE user_id = $1 and user_role='mentor'",
      [mentorId]
    );
    res.json(mentor.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// checking password that is entered is the same as the existing one
router.post("/validPword", async (req, res) => {
  try {
    const { enteredPwd, hashedPwd } = req.body;
    let matches = await bcrypt.compare(enteredPwd, hashedPwd);
    if (matches) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    console.error(err.message);
  }
});

router.use("/drafts", require("./drafts"));

router.use("/messages", require("./messages"));

module.exports = router;
