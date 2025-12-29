// src/app/api/bot/route.ts
import { NextResponse } from "next/server";
import { GoogleGenAI, createUserContent } from "@google/genai";

// --- Respostas de fallback aprimoradas ---
const fallbackResponses: Record<string, string[]> = {
  "saudacao": [
    "Oi! 👋 Como posso te ajudar hoje?",
    "Olá! 😊 Estou à disposição para responder suas dúvidas.",
    "Olá! Que bom te ver aqui. Posso ajudar com planos, serviços ou contato."
  ],
  "planos": [
    "Temos três planos principais:\n" +
    "1️⃣ Básico: Gestão de redes sociais e consultoria inicial.\n" +
    "2️⃣ Intermediário: Gestão completa de marketing digital, incluindo anúncios e análise de resultados.\n" +
    "3️⃣ Premium: Todos os serviços anteriores, mais criação de conteúdo personalizado e acompanhamento contínuo.\n" +
    "Para mais detalhes ou contratar, acesse: https://agenciaajr.com/planos"
  ],
  "contato": [
    "Você pode entrar em contato conosco pelo email: contato@agenciaajr.com\n" +
    "Respondo rápido! 😄"
  ],
  "localizacao": [
    "Estamos localizados em Moçambique.\n" +
    "Para mais informações, visite nosso site: https://agenciaajr.com"
  ],
  "servicos": [
    "Oferecemos os seguintes serviços:\n" +
    "- Consultoria de marketing digital\n" +
    "- Gestão de redes sociais\n" +
    "- Criação de conteúdo\n" +
    "- Planejamento estratégico\n" +
    "Para contratar ou conhecer detalhes, acesse: https://agenciaajr.com/planos"
  ],
  "desconhecido": [
    "Desculpe, não sei a resposta exata. Por favor entre em contato pelo email contato@agenciaajr.com."
  ]
};

// --- Normaliza o texto para comparação ---
function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// --- Função para escolher resposta aleatória do fallback ---
function chooseFallback(category: string) {
  const options = fallbackResponses[category] || fallbackResponses["desconhecido"];
  return options[Math.floor(Math.random() * options.length)];
}

export async function POST(req: Request) {
  try {
    const { pergunta } = await req.json();
    const normalized = normalizeText(pergunta || "");

    // --- Tenta Gemini ---
    try {
      const ai = new GoogleGenAI({});
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: createUserContent([
          `Você é um assistente amigável da Agência AJR.

          Informações básicas da AJR:
          - Localização: Moçambique
          - Email: contato@agenciaajr.com
          - Site: https://agenciaajr.com
          - Serviços: consultoria, gestão de redes sociais, criação de conteúdo, planejamento estratégico
          - Planos e preços:
            1. Básico: Gestão de redes sociais e consultoria inicial
            2. Intermediário: Gestão completa de marketing digital, incluindo anúncios e análise de resultados
            3. Premium: Todos os serviços anteriores, mais criação de conteúdo personalizado e acompanhamento contínuo

          Regras:
          1. Para saudações ou perguntas triviais como "oi", "olá", responda naturalmente e curto.
          2. Para perguntas sobre planos, preços, serviços ou contato, use apenas as informações acima.
          3. Nunca invente informações que não estejam acima.
          4. Se não houver resposta clara, diga: "Desculpe, não sei a resposta exata. Por favor entre em contato pelo email contato@agenciaajr.com".
          5. Seja direto e objetivo, mas educado.

          Pergunta do usuário: "${normalized}"`
        ]),
        config: {
          temperature: 0.1,
          maxOutputTokens: 2000,
          systemInstruction: "Você é um assistente amigável da Agência AJR. Sempre forneça informações reais. Responda naturalmente."
        }
      });

      const geminiReply =
        response.text?.trim() || 
        response.candidates?.[0]?.content?.text?.trim() || 
        "";

      if (geminiReply) {
        console.log("✅ Resposta Gemini:", geminiReply);
        return NextResponse.json({ resposta: geminiReply });
      }

      throw new Error("Gemini não retornou resposta");
    } catch (geminiError) {
      console.error("❌ Gemini erro, usando fallback:", geminiError);

      // --- Fallback inteligente ---
      let resposta = fallbackResponses["desconhecido"][0];

      if (/oi|ola|olá|bom dia|boa tarde|boa noite/.test(normalized)) {
        resposta = chooseFallback("saudacao");
      } else if (/plano|valor|preço|preços/.test(normalized)) {
        resposta = chooseFallback("planos");
      } else if (/contato|email|telefone/.test(normalized)) {
        resposta = chooseFallback("contato");
      } else if (/localização|endereço|onde/.test(normalized)) {
        resposta = chooseFallback("localizacao");
      } else if (/serviço|servicos|o que faz/.test(normalized)) {
        resposta = chooseFallback("servicos");
      }

      return NextResponse.json({ resposta });
    }
  } catch (err) {
    console.error("Erro na API do bot:", err);
    return NextResponse.json(
      { resposta: "Desculpe, algo deu errado." },
      { status: 500 }
    );
  }
}
