"use client";

import { useState } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function BotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Olá 👋 Sou o assistente da Agência AJR. Como posso ajudar?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Erro ao responder 😕" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl p-4">
      <h1 className="mb-4 text-center text-2xl font-semibold">
        Assistente AJR
      </h1>

      <div className="mb-4 h-[400px] overflow-y-auto rounded-lg border p-4 space-y-3 bg-white">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
              msg.from === "user"
                ? "ml-auto bg-primary text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-sm text-gray-400">Digitando...</div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Digite sua pergunta..."
          className="flex-1 rounded-lg border px-4 py-2"
        />
        <button
          onClick={sendMessage}
          className="rounded-lg bg-primary px-4 py-2 text-white"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
