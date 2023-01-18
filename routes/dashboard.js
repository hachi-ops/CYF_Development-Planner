const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT username FROM users WHERE user_id = $1",
      [req.user]
    );

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// // mentor dashboard: get all feedbacks
// router.get("/", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const userName = await pool.query(
//       "SELECT * FROM users WHERE user_id = $1",
//       [userId]
//     );
//     res.json(userName.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json("server error");
//   }
// });

router.use("/feedbacks", require("./feedbacks"));

router.use("/messages", require("./messages"));

module.exports = router;
