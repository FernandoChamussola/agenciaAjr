"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
  buttons?: string[];
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Oi 👋 Sou o assistente da AJR. Como posso te ajudar hoje?",
      buttons: ["Planos e preços", "Serviços", "Contato"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, open]);

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    // Adiciona mensagem do usuário
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setIsTyping(true); // ativa o indicador de digitação

    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta: text }),
      });

      const data = await res.json();

      // Adiciona a resposta do bot
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.resposta, buttons: data.buttons },
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Desculpe, houve um problema ao processar sua mensagem. 😕",
        },
      ]);
    } finally {
      setIsTyping(false); // desativa o indicador de digitação
    }
  }

  return (
    <>
      {/* Bolinha de chat */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#ff7a00] px-4 py-3 text-white shadow-lg hover:opacity-90"
        >
          💬 <span className="hidden sm:inline">Precisa de ajuda?</span>
        </button>
      )}

      {/* Janela do chat */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[340px] flex-col rounded-xl bg-white shadow-xl sm:h-[520px] sm:w-[360px] max-sm:inset-0 max-sm:h-full max-sm:w-full">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-xl bg-[#ff7a00] px-4 py-3 text-white">
            <span className="font-semibold">Agência AJR</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  msg.from === "user"
                    ? "ml-auto bg-[#ff7a00] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}

                {msg.buttons && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {msg.buttons.map((b) => (
                      <button
                        key={b}
                        onClick={() => sendMessage(b)}
                        className="rounded-full border border-[#ff7a00] px-3 py-1 text-xs text-[#ff7a00] hover:bg-[#ff7a00] hover:text-white"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Indicador de digitação */}
            {isTyping && (
              <div className="max-w-[50%] rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-800 italic">
                Digitando...
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="border-t px-3 py-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="text-black flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:border-[#ff7a00]"
              />
              <button
                type="submit"
                className="rounded-md bg-[#ff7a00] px-4 text-white"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
