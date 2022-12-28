const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

//all feedbacks and name
router.get("/", authorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT users.username, feedbacks.feedback_id, feedbacks.feedback FROM users LEFT JOIN feedbacks ON users.user_id = feedbacks.user_id WHERE users.user_id = $1",
      [req.user.id]
    );

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

//create a feedback

router.post("/feedbacks", authorization, async (req, res) => {
  try {
    console.log(req.body);
    const { feedback } = req.body;
    const newFeedback = await pool.query(
      "INSERT INTO feedbacks (user_id, feedback) VALUES ($1, $2) RETURNING *",
      [req.user.id, feedback]
    );

    res.json(newFeedback.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// // get a feedback

// router.get("/feedbacks/:id", authorization, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const feedback = await pool.query(
//       "SELECT * FROM feedbacks WHERE feedback_id = $1",
//       [id]
//     );
//     res.json(feedback.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//update a feedback

router.put("/feedbacks/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { feedback } = req.body;
    const updateFeedback = await pool.query(
      "UPDATE feedbacks SET feedback = $1 WHERE feedback_id = $2 AND user_id = $3 RETURNING *",
      [feedback, id, req.user.id]
    );

    if (updateFeedback.rows.length === 0) {
      return res.json("This feedback is not yours");
    }

    res.json("Feedback was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// //delete a feedback

router.delete("/feedbacks/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFeedback = await pool.query(
      "DELETE FROM feedbacks WHERE feedback_id = $1 AND user_id = $2 RETURNING *",
      [id, req.user.id]
    );

    if (deleteFeedback.rows.length === 0) {
      return res.json("This Feedback is not yours");
    }

    res.json("Feedback was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
