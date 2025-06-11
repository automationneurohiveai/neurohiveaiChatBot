const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();

// Исправленные CORS настройки
const allowedOrigins = [
  'https://www.neurohiveai.agency',
  'https://neurohiveai.agency',
  'http://localhost:3000', // для разработки
  'http://localhost:3001'  // для разработки
];

app.use(cors({
  origin: function (origin, callback) {
    // Разрешаем запросы без origin (например, мобильные приложения)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.use(cookieParser());
app.use(express.json());

app.post("/api/message", async (req, res) => {
  const userData = req.body;
  try {
    const response = await fetch(
      "https://n8n.neurohiveai.agency/webhook/chat-webhook",
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

app.post("/api/email-footer", async (req, res) => {
  const userData = req.body;
  try {
    const response = await fetch(
      "https://n8n.neurohiveai.agency/webhook/26082c14-eaba-4951-b4e1-76e7a08449d0",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    const result = await response.json();
    res.status(200).json(result);
  } catch (err) {
    console.error("Error sending to n8n:", err);
  }
});

app.post("/api/urlai", async (req, res) => {
  const userData = req.body;
  try {
    const response = await fetch(
      "https://n8n.neurohiveai.agency/webhook/send_to_analyze",
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

app.post("/api/contact-form", async (req, res) => {
  const contactFormData = req.body;
  try {
    const response = await fetch(
      "https://n8n.neurohiveai.agency/webhook/26082c14-eaba-4951-b4e1-76e7a08449d0",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactFormData),
      }
    );
    const result = await response.json();
    console.log("200 OK – Відповідь надіслана", result);
    res.status(200).json(result);
  } catch (err) {
    console.error("Error sending to contact form:", err);
    res.status(500).json({ error: "Failed to send contact form data" });
  }
});

app.get("/api/status", async (req, res) => {
  const { sessionId } = req.query;
  try {
    const response = await fetch(`https://n8n.neurohiveai.agency/webhook/get_status?sessionId=${sessionId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    console.log("Status check result for sessionId", sessionId, ":", result);
    res.json(result);
  } catch (err) {
    console.error("Error checking status:", err);
    res.status(500).json({ error: "Failed to check status", status: "error" });
  }
});

app.get("/init-session", (req, res) => {
  let sessionId = req.cookies.sessionId;
  if (!sessionId) {
    sessionId = uuidv4();
    res.cookie("sessionId", sessionId, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 дней
      secure: true,
      sameSite: 'none' 
    });
    console.log("🆕 New session:", sessionId);
  } else {
    console.log("✅ Existing session:", sessionId);
  }
  res.json({ sessionId });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
