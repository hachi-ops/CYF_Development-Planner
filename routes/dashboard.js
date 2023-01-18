const router = require("express").Router();
const authorize = require("../middleware/authorize");

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT username FROM users WHERE user_id = $1",
      [req.user.id]
    );

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.use("/feedbacks", require("./feedbacks"));

router.use("/messages", require("./messages"));

module.exports = router;
