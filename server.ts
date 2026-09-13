import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import 'dotenv/config';
import { immigrationStreams, costOfLiving, inDemandJobs, universities, faqs } from "./src/data.js";

// Initialize the Gemini SDK
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Construct the grounded context payload
const siteContext = `
معلومات الموقع المرجعية لعام 2026:

مسارات الهجرة:
${JSON.stringify(immigrationStreams, null, 2)}

برامج الترشيح الإقليمي (PNP) لعام 2026:
- المقاطعات تستهدف 110,000 مهاجر عبر هذا المسار.
- بريتش كولومبيا (BC): 3 أعمدة (CARE, BUILD, INNOVATE). 35% للمتقدمين خارج فانكوفر الكبرى.
- أونتاريو (OINP): 4 مسارات مدمجة (عرض العمل، الرعاية الصحية، رائد الأعمال، المواهب الاستثنائية).
- المسارات التقنية: BC PNP Tech يستهدف مهندسي البرمجيات (NOC 21231) والمبرمجين ومهندسي البيانات.
- الرعاية الصحية لها أولوية في جميع المقاطعات.
- الترشيح يضيف 600 نقطة لنظام الدخول السريع.

تصريح العمل ما بعد التخرج (PGWP) والدراسة:
- شروط اللغة (2024-2026): مطلوب CLB 7 في الإنجليزية أو NCLC 7 في الفرنسية كحد أدنى.
- الدرجات العلمية (بكالوريوس فأعلى): مؤهلون للتصريح بغض النظر عن التخصص.
- الدبلومات والشهادات (الكليات): يجب أن تكون في مجالات معتمدة (CIP code).
- مجالات دبلومات معتمدة في 2026: تكنولوجيا المعلومات، تمريض LPN/RPN، حرف نقابية، إدارة طهي (Co-op).
- مجالات مستبعدة: إدارة الأعمال العامة، التسويق، الفعاليات، المساعدين القانونيين.
- مدة التصريح: خريجو الماجستير يحصلون على 3 سنوات تلقائياً لبرنامج 8 أشهر أو أكثر. أقل من 8 أشهر لا يؤهل أبداً.

تكلفة المعيشة (بالدولار الكندي CAD):
${JSON.stringify(costOfLiving, null, 2)}

الوظائف والرواتب المطلوبة (بالدولار الكندي CAD):
${JSON.stringify(inDemandJobs, null, 2)}

الجامعات:
${JSON.stringify(universities, null, 2)}

الأسئلة الشائعة:
${JSON.stringify(faqs, null, 2)}

المصادر:
- تحديثات الربع الثالث لعام 2026.
- إدارة الهجرة (IRCC): سحوبات الدخول السريع وفئات المهن المطلوبة.
- هيئة الإحصاء الكندية (Statistics Canada): بيانات الرواتب وتوقعات تكلفة المعيشة.
`;

const systemPrompt = `
أنت مساعد ذكاء اصطناعي خبير ومباشر مدمج في دليل "الهجرة إلى كندا للمصريين 2026".
مهمتك الصارمة هي الإجابة على أسئلة المستخدمين *فقط* باستخدام البيانات والمعلومات الموجودة في السياق المرفق أدناه.

قواعد صارمة:
1. لا تستخدم أبداً معلوماتك العامة. إذا سأل المستخدم عن شيء غير موجود حرفياً في السياق (مثل مقاطعات أخرى، مهن غير مذكورة، تكاليف معيشة في مدن لم تذكر، أو إجراءات قانونية دقيقة)، يجب أن تجيب حصراً بـ: "عذراً، هذا الدليل لا يحتوي على معلومات محدثة عن [الموضوع]. يرجى مراجعة موقع الهجرة الكندية الرسمي (IRCC) للحصول على أحدث التفاصيل."
2. اذكر المصدر دائماً عند إعطاء أرقام أو تفاصيل (مثلاً: "حسب هيئة الإحصاء الكندية"، أو "وفقاً لتحديثات IRCC لعام 2026 المذكورة في الدليل").
3. أجب بأسلوب احترافي ومباشر باللغة العربية.
4. وضح دائماً أن الأرقام تقريبية وتعتمد على دليل الموقع لعام 2026.

السياق المتاح لك فقط:
${siteContext}
`;

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
          systemInstruction: systemPrompt,
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
