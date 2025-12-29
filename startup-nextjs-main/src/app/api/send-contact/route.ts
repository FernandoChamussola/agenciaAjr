import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Criar conteúdo do email em HTML
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #ff7a00; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #ff7a00; }
    .message-box { background-color: white; padding: 15px; border-left: 4px solid #ff7a00; margin-top: 10px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova Mensagem de Contato</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nome:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> ${email}
      </div>
      <div class="field">
        <span class="label">Mensagem:</span>
        <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        Email enviado através do formulário de contato do site Agência AJR.
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Enviar email usando Resend
    // NOTA: Temporariamente enviando para fernandochamussola@gmail.com
    // Quando o domínio for verificado, altere para contato@agenciaajr.com
    const { data, error } = await resend.emails.send({
      from: "Agência AJR Website <noreply@agenciaajr.com>",
      to: ["contacto@agenciaajr.com"],
      replyTo: email,
      subject: `Nova Mensagem de ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar mensagem" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
      data,
    });
  } catch (error) {
    console.error("Erro ao processar mensagem:", error);

    return NextResponse.json(
      { error: "Erro ao processar mensagem" },
      { status: 500 }
    );
  }
}
