const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const pool = require("./database");

//middleware

app.use(express.json()); //req.body
app.use(cors());

//ROUTES//

// //test
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// get all feedbacks

app.get("/feedbacks", async (req, res) => {
  try {
    const allFeedbacks = await pool.query("SELECT * FROM feedbacks");
    res.json(allFeedbacks.rows);
  } catch (err) {
    console.error(err.message.rows);
  }
});

// get a feedback

app.get("/feedbacks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await pool.query(
      "SELECT * FROM feedbacks WHERE feedback_id = $1",
      [id]
    );
    res.json(feedback.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a feedback

app.put("/feedbacks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { feedback } = req.body;
    const updateFeedback = await pool.query(
      "UPDATE feedbacks SET feedback = $1 WHERE feedback_id = $2",
      [feedback, id]
    );
    res.json("Feedback was updated");
  } catch (err) {
    console.error(err.message);
  }
});
// create an entry

app.post("/feedbacks", async (req, res) => {
  try {
    // res.json(req.body);
    const { feedback } = req.body;
    const newFeedback = await pool.query(
      "INSERT INTO feedbacks (feedback) VALUES ($1) RETURNING *",
      [feedback]
    );

    res.json(newFeedback.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/feedbacks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFeedback = await pool.query(
      "DELETE FROM feedbacks WHERE feedback_id = $1",
      [id]
    );

    res.json("Feedback was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

//register route

app.use("/auth", require("./routes/jwtAuth"));

//dashboard route

app.use("/dashboard", require("./routes/dashboard"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
