const router = require("express").Router();
const pool = require("../db");

// get all user messages
router.get("/", async (req, res) => {
  try {
    const allMessages = await pool.query(
      "SELECT * FROM messages WHERE messages.receipient_id = $1",
      [req.user.id]
    );
    res.json(allMessages.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
  }
});

// get a message
router.get("/:id", async (req, res) => {
  try {
    const { messageId } = req.params;
    const message = await pool.query(
      "SELECT * FROM messages WHERE message_id = $1",
      [messageId]
    );
    res.json(message.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// insert a message
router.post("/", async (req, res) => {
  try {
    const { receipientId, messageTitle, messageText, senderUsername } =
      req.body;
    const newMessage = await pool.query(
      "INSERT INTO messages (sender_id, receipient_id, message_title, message_text, sender_username) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [req.user.id, receipientId, messageTitle, messageText, senderUsername]
    );
    res.json(newMessage.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
  }
});

//update a message
router.put("/:id", async (req, res) => {
  try {
    const { messageId } = req.params;
    const { message } = req.body;
    const updateMessage = await pool.query(
      "UPDATE messages SET message_text = $1 WHERE message_id=$2 AND user_id = $3",
      [message, messageId, req.user.id]
    );

    if (updateMessage.rows.length === 0) {
      return res.json("This message is not yours");
    }
    res.json(" message updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
  }
});

//delete a message

router.delete("/:id", async (req, res) => {
  try {
    const { messageId } = req.params;
    const { message } = req.body;
    const deleteMessage = await pool.query(
      "DELETE FROM messages WHERE message_id = $1 AND user_id = $2 RETURNING *",
      [messageId, req.user.id]
    );

    if (deleteMessage.rows.length === 0) {
      return res.json("This message is not yours");
    }
    res.json("deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
