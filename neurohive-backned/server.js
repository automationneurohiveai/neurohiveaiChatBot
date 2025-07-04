// const express = require("express");
// const cors = require("cors");
// const fetch = require("node-fetch");
// const cookieParser = require("cookie-parser");
// const { v4: uuidv4 } = require("uuid");

// const app = express();

// // Исправленные CORS настройки
// const allowedOrigins = [
//   'https://neurohiveaichatbot.onrender.com',

// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Разрешаем запросы без origin (например, мобильные приложения)
//     if (!origin) return callback(null, true);
    
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.log('CORS blocked origin:', origin);
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
// }));

// app.use(cookieParser());
// app.use(express.json());

// app.post("/api/urlai", async (req, res) => {
//   const sessionId = req.cookies.sessionId; // ✅ з cookie
//   const userData = req.body;

//   if (!sessionId) {
//     return res.status(401).json({ error: "Session ID is missing" });
//   }

//   try {
//     const response = await fetch(
//       "https://n8n.neurohiveai.agency/webhook/send_to_analyze",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...userData,
//           sessionId, 
//         }),
//       }
//     );

//     const result = await response.json();
//     console.log("urlai – Відповідь від n8n:", result);
//     res.status(200).json(result);
//   } catch (err) {
//     console.error("/urlai – Помилка:", err);
//     res.status(500).json({ error: "Failed to send data to n8n" });
//   }
// });






// app.post("/api/contact-form", async (req, res) => {
//   const contactFormData = req.body;
//   // const { sessionId } = req.query;
//   try {
//     const response = await fetch(
//       "https://n8n.neurohiveai.agency/webhook/26082c14-eaba-4951-b4e1-76e7a08449d0",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(contactFormData),
//       }
//     );
//     const result = await response.json();
//     console.log("200 OK – Відповідь надіслана", result);
//     res.status(200).json(result);
//   } catch (err) {
//     console.error("Error sending to contact form:", err);
//     res.status(500).json({ error: "Failed to send contact form data" });
//   }
// });

// app.get("/api/status", async (req, res) => {
//   const sessionId = req.cookies.sessionId;

//   if (!sessionId) {
//     return res.status(401).json({ error: "Session ID not found in cookies" });
//   }

//   try {
//     const response = await fetch(
//       `https://n8n.neurohiveai.agency/webhook/get_status?sessionId=${sessionId}`, // ✅ передаємо sessionId до n8n
//       {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     const result = await response.json();
//     console.log("Status check result for sessionId", sessionId, ":", result);
//     res.json(result);
//   } catch (err) {
//     console.error("Error checking status:", err);
//     res.status(500).json({ error: "Failed to check status", status: "error" });
//   }
// });

// app.post("/init-session", (req, res) => {
//   let sessionId = req.cookies.sessionId;
//   if (!sessionId) {
//     sessionId = uuidv4();
//     res.cookie("sessionId", sessionId, {
//       httpOnly: true,
//       maxAge: 1000 * 60 * 60 * 24 * 7, 
//       secure: true,
//       sameSite: "None",
//     });
//     console.log("New session:", sessionId);
//   } else {
//     console.log("Existing session:", sessionId);
//   }
//   res.json({ sessionId });
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
// Исправленные CORS настройки
const allowedOrigins = [
   'https://neurohiveaichatbot.onrender.com',
  'http://localhost:3000',
 
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
app.post("/api/urlai", async (req, res) => {
  const sessionId = req.cookies.sessionId; 
  const userData = req.body;
  if (!sessionId) {
    return res.status(401).json({ error: "Session ID is missing" });
  }
  try {
    const response = await fetch(
      "https://n8n.neurohiveai.agency/webhook/send_to_analyze",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userData,
          sessionId, 
        }),
      }
    );
    const result = await response.json();
    console.log("✅ /urlai – Відповідь від n8n:", result);
    res.status(200).json(result);
  } catch (err) {
    console.error("❌ /urlai – Помилка:", err);
    res.status(500).json({ error: "Failed to send data to n8n" });
  }
});

app.post("/api/contact-form", async (req, res) => {
  const contactFormData = req.body;
  // const { sessionId } = req.query;
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
  const sessionId = req.cookies.sessionId;
  console.log("sessionId", sessionId);
  if (!sessionId) {
    return res.status(401).json({ error: "Session ID not found in cookies" });
  }
  try {
    
    const response = await fetch(
      `https://n8n.neurohiveai.agency/webhook/get_status?sessionId=${sessionId}`, // ✅ передаємо sessionId до n8n
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const result = await response.json();
    console.log("Status check result for sessionId", sessionId, ":", result);
    res.json(result);
  } catch (err) {
    console.error("Error checking status:", err);
    res.status(500).json({ error: "Failed to check status", status: "error" });
  }
});


app.post("/api/message", async (req, res) => {
  const chatWebhookData = req.body;
  const sessionId = req.cookies.sessionId;
  if (!sessionId) {
    return res.status(401).json({ error: "Session ID not found in cookies" });
  }
 try {
  const response = await fetch(
    "https://n8n.neurohiveai.agency/webhook/chat-webhook",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...chatWebhookData, session_id: sessionId }),
    }
  );
  
  const result = await response.json();
  console.log("Chat webhook received", result);
  res.status(200).json(result);
} catch (err) {
  console.error("Error sending to chat webhook:", err);
  res.status(500).json({ error: "Failed to send chat webhook data" });
}
});

app.post("/init-session", (req, res) => {
  let sessionId = req.cookies.sessionId;
  if (!sessionId) {
    sessionId = uuidv4();
    res.cookie("sessionId", sessionId, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, 
      secure: true,
      sameSite: "None",
    });
    console.log("New session:", sessionId);
  } else {
    console.log("Existing session:", sessionId);
  }
  res.json({ sessionId });
});


app.get("/check-session", (req, res) => {
  const sessionId = req.cookies.sessionId;
  if (!sessionId) {
    return res.status(401).json({hasSession: false});
  }
  
    res.status(200).json({hasSession: true});
  
});
app.post("/destroy-session", (req, res) => {
  res.clearCookie("sessionId",{
    httpOnly: true,
    secure: process.env.BACKEND_PROD === "production",
    sameSite: process.env.BACKEND_PROD === "production" ? "None" : "Lax",
  });
  res.status(200).json({ message: "Session destroyed" });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));