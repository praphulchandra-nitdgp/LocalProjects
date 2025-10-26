import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function getGeminiResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });
    const result = await model.generateContent([prompt]);
    const response = result.response;
    const text = await response.text();
    return text;
  } catch (err) {
    console.error("Gemini error:", err);
    return "Sorry, something went wrong with Gemini.";
  }
}

