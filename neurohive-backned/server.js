const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.post("/api/message", async (req, res) => {
  const userData = req.body;

  try {
    const response = await fetch(
      "https://n8n.ki-tech.app/webhook/chat-webhook",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const result = await response.json();
    console.log("Response from n8n:", result.output);
    res.json(result);
  } catch (err) {
    console.error("Error sending to n8n:", err);
    res.status(500).json({ error: "Failed to send data to n8n" });
  }
});

app.post("/api/urlai", async (req, res) => {
  const userData = req.body;

  try {
    const response = await fetch(
      "https://n8n.ki-tech.app/webhook/send_to_analyze",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const result = await response.json();
    console.log("200 OK – Відповідь надіслана", result);
    res.status(200).json(result);
  } catch (err) {
    console.error("❌ 500 Internal Server Error – Помилка:", err);
    res.status(500).json({ error: "Failed to send data to n8n" });
  }
});

app.get("/init-session", (req, res) => {
  let sessionId = req.cookies.sessionId;

  if (!sessionId) {
    sessionId = uuidv4();
    res.cookie("sessionId", sessionId, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    console.log("🆕 New session:", sessionId);
  } else {
    console.log("✅ Existing session:", sessionId);
  }

  res.json({ sessionId });
});

app.listen(4000, () => console.log("Server running at http://localhost:4000"));
