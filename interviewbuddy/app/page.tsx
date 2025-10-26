"use client";

import Image from "next/image";
import Logo from "./assets/Logo.png";
import { useState } from "react";
import Bubble from "./components/Bubble";
import PromptSuggestionRow from "./components/PromptSuggestionRow";
import LoadingBubble from "./components/LoadingBubble";

const Home = () => {
  const [messages, setMessages] = useState<{ id: string; role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const noMessages = messages.length === 0;

  const handlePrompt = (promptText: string) => {
    const newMsg = { id: crypto.randomUUID(), role: "user", content: promptText };
    setMessages([...messages, newMsg]);
    fetchGeminiResponse(promptText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: crypto.randomUUID(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    fetchGeminiResponse(input);
    setInput("");
  };

  const fetchGeminiResponse = async (userPrompt: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userPrompt }],
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok && data.content) {
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "assistant", content: data.content },
        ]);
      } else {
        console.error("API error:", data.error || "Unknown error");
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Image src={Logo} width={250} alt="Logo" />
      <section className={noMessages ? "" : "populated"}>
        {noMessages ? (
          <>
            <p className="starter-text">
              Ultimate place for career enthusiasts!!
              <br />
              <br />
              Interview Buddy is a smart AI-powered chatbot designed to help you prepare for tech
              interviews with ease. Ask anything about DSA, interview prep, resumes, or projects.
              Whether you're aiming for FAANG or your first internship — we’ve got you covered.
            </p>
            <br />
            <PromptSuggestionRow onPromptClick={handlePrompt} />
          </>
        ) : (
          <>
            {messages.map((message, index) => (
              <Bubble key={`message-${index}`} message={message} />
            ))}
            {loading && <LoadingBubble />}
          </>
        )}
      </section>

      <form onSubmit={handleSubmit} className="your-form-class">
        <input
          className="question-box"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Ask me something!"
        />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
};

export default Home;
