const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  addMessage("You", userMessage, "user");
  userInput.value = "";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage }),
  });

  const data = await res.json();
  addMessage("Bot", data.reply, "bot");
});

function addMessage(sender, message, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerText = `${sender}: ${message}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
window.addEventListener("load", () => {
  addMessage("Bob", "Hey, it's Bob here! 👋", "bot");
});

