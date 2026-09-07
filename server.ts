import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import 'dotenv/config';

// Initialize the Gemini SDK
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Chat API route for Gemini
  app.post("/api/chat", async (req, res) => {
    try {
      const { contents } = req.body;
      
      if (!contents || !Array.isArray(contents)) {
        return res.status(400).json({ error: "Invalid contents payload." });
      }

      // Use gemini-3.5-flash for general tasks as requested (aliased in API if needed)
      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: "أنت مساعد ذكاء اصطناعي خبير في الهجرة إلى كندا للمصريين. يجب أن تجيب باللغة العربية، بأسلوب احترافي ومباشر. قدم معلومات دقيقة عن المسارات وتكلفة المعيشة والرواتب في كندا للمصريين بناءً على سياق الموقع. دائماً وضح أن هذه المعلومات تقريبية وليست بديلاً عن استشارة قانونية رسمية أو موقع IRCC.",
        }
      });

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      for await (const chunk of responseStream) {
        if (chunk.text) {
          // Send back simple Server-Sent Events (SSE) data format
          res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
        }
      }
      res.end();
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "فشل في معالجة طلبك عبر الذكاء الاصطناعي." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
