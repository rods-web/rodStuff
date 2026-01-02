// About & Contact toggle
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Dark mode toggle
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀ Light Mode"
    : "🌙 Dark Mode";
});
// CHATBOT
const toggleBtn = document.querySelector(".chat-toggle");
const chatWindow = document.querySelector(".chat-window");
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

toggleBtn.addEventListener("click", () => {
  chatWindow.style.display =
    chatWindow.style.display === "flex" ? "none" : "flex";
});

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  chatInput.value = "";

  setTimeout(() => {
    botReply(msg.toLowerCase());
  }, 600);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = sender;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(msg) {
  let reply = "I'm still learning 🤖";

  if (msg.includes("name")) reply = "This is Rods' portfolio!";
  else if (msg.includes("skills")) reply = "HTML, CSS, JavaScript, C++";
  else if (msg.includes("projects")) reply = "Flutter app & Arduino attendance system.";
  else if (msg.includes("contact")) reply = "Email: example@email.com";

  addMessage(reply, "bot");
}

