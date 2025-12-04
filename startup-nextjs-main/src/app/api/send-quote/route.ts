import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, description, planName } = body;

    // Validação básica
    if (!name || !email || !phone || !planName) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Se for plano personalizado, descrição é obrigatória
    if (planName === "PERSONALIZADO" && !description) {
      return NextResponse.json(
        { error: "Descrição é obrigatória para plano personalizado" },
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
    .plan-badge { background-color: #fff; color: #ff7a00; padding: 5px 15px; border-radius: 20px; display: inline-block; font-weight: bold; margin-top: 10px; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #ff7a00; }
    .description-box { background-color: white; padding: 15px; border-left: 4px solid #ff7a00; margin-top: 10px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova Solicitação de Orçamento</h1>
      <div class="plan-badge">${planName}</div>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nome:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> ${email}
      </div>
      <div class="field">
        <span class="label">Telefone:</span> ${phone}
      </div>
      ${company ? `<div class="field"><span class="label">Empresa:</span> ${company}</div>` : ""}
      ${description ? `<div class="field"><span class="label">Descrição:</span><div class="description-box">${description.replace(/\n/g, "<br>")}</div></div>` : ""}
      <div class="footer">
        Email enviado através do formulário de orçamento do site Agência AJR.
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
      to: ["contato@agenciaajr.com"],
      replyTo: email,
      subject: `Novo Orçamento - Plano ${planName}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar orçamento" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Orçamento enviado com sucesso!",
      data,
    });
  } catch (error) {
    console.error("Erro ao processar orçamento:", error);

    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
