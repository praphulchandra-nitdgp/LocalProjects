import { getGeminiResponse } from "@/lib/gemini"; // make sure path is correct

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latest = messages?.[messages.length - 1]?.content;

    if (!latest) {
      return new Response(JSON.stringify({ error: "No prompt provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ Get Gemini response
    const result = await getGeminiResponse(latest);

    return new Response(JSON.stringify({ content: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("API /chat error:", err.message || err);
    return new Response(JSON.stringify({ error: "Gemini failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
