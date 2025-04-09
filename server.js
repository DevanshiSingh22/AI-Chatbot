const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Simple AI Logic
function getBotReply(msg) {
    const text = msg.toLowerCase();
  
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) return "Hey, it's Bob here! 👋";
    if (text.includes("how are you")) return "I'm Bob and I'm doing great, thanks for asking!";
    if (text.includes("bye")) return "Goodbye from Bob! Have a great day! 👋";
    
    return "I'm Bob, still learning... Can you rephrase that?";
  }
  

app.post("/api/chat", (req, res) => {
  const userMsg = req.body.message;
  const reply = getBotReply(userMsg);
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
