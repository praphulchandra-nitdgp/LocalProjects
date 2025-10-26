"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      if (result.success) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-4 p-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm text-muted font-normal leading-normal">
          I'm always open to discussing new projects, creative ideas, or just a
          friendly chat. Feel free to reach out, and I'll get back to you as
          soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 p-4">
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-secondary border-none text-white placeholder:text-muted h-14"
        />

        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-secondary border-none text-white placeholder:text-muted h-14"
        />

        <Input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-secondary border-none text-white placeholder:text-muted h-14"
        />

        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-secondary border-none text-white placeholder:text-muted min-h-36 resize-none"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-3 rounded-lg"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
