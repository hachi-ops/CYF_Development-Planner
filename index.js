const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const pool = require("./db.js");

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Does the user have any plans?
// Ordered from the newest to the oldest
app.get("/plans/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const thePlans = await pool.query(
      `SELECT * FROM plans 
              WHERE username = $1
              ORDER BY amended_timestamp DESC`,
      [id]
    );
    res.json(thePlans.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error: " + err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
