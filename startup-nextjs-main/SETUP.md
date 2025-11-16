# Configuração do Site Agencia AJR

## Funcionalidades Implementadas

### 1. Planos de Serviço
- 4 planos disponíveis: INICIANTE, CRESCIMENTO, PREMIUM e PERSONALIZADO
- Botão "Solicitar Orçamento" em cada plano
- Modal com formulário para solicitar orçamento
- Campo de descrição obrigatório para plano PERSONALIZADO

### 2. Sistema de Emails
- Formulário de contato funcional com envio de emails
- Formulário de orçamento com envio de emails
- Todos os emails são enviados para: **contato@agenciaajr.com**
- Sistema de feedback visual (sucesso/erro)

### 3. Seção de Parceiros
- Substituída por carrossel animado com "Agencia AJR"
- Animação automática de scroll infinito

## Configuração de Email (Resend)

### ✅ STATUS: CONFIGURADO E FUNCIONANDO

A API key do Resend já está configurada no arquivo `.env.local`.

**API Key configurada:** `re_RqeEqyue_A46qhmRCzmiqRwmeEEb5i3PW`

### Observações Importantes sobre o Resend

1. **Domínio de Envio:**
   - Atualmente usando: `onboarding@resend.dev` (domínio de teste do Resend)
   - Para produção, você deve verificar seu domínio personalizado (agenciaajr.com) no painel do Resend
   - Após verificar seu domínio, atualize os arquivos:
     - `src/app/api/send-contact/route.ts` (linha 71)
     - `src/app/api/send-quote/route.ts` (linha 73)
   - Substitua `onboarding@resend.dev` por `noreply@agenciaajr.com`

2. **Limites do Plano Gratuito:**
   - 100 emails por dia
   - 3,000 emails por mês
   - Apenas 1 domínio verificado

3. **Como Verificar seu Domínio no Resend:**
   - Acesse: https://resend.com/domains
   - Clique em "Add Domain"
   - Digite: agenciaajr.com
   - Adicione os registros DNS fornecidos nas configurações do seu domínio
   - Aguarde a verificação (pode levar até 72 horas)

### Reiniciar o Servidor (se necessário)
```bash
npm run dev
```

## Status do Sistema de Emails

✅ **Sistema de emails está ATIVO e FUNCIONANDO**

Os formulários agora enviam emails reais para: **contato@agenciaajr.com**

### O que acontece quando alguém preenche um formulário:
1. Os dados são validados
2. Um email HTML bonito é criado
3. O email é enviado via Resend para contato@agenciaajr.com
4. O usuário recebe confirmação de sucesso
5. Você pode responder diretamente ao cliente (reply-to está configurado)

## Estrutura dos Emails

### Email de Orçamento
- **Para:** contato@agenciaajr.com
- **Reply-to:** Email do cliente
- **Assunto:** Novo Orçamento - Plano [NOME_DO_PLANO]
- **Conteúdo:** Nome, Email, Telefone, Empresa, Plano, Descrição (se personalizado)

### Email de Contato
- **Para:** contato@agenciaajr.com
- **Reply-to:** Email do cliente
- **Assunto:** Nova Mensagem de [NOME]
- **Conteúdo:** Nome, Email, Mensagem

## Arquivos Criados/Modificados

### Novos Arquivos:
- `src/types/pricing.ts` - Tipos TypeScript para planos
- `src/components/Pricing/QuoteModal.tsx` - Modal de orçamento
- `src/app/api/send-quote/route.ts` - API para envio de orçamentos
- `src/app/api/send-contact/route.ts` - API para envio de contatos
- `.env.example` - Exemplo de variáveis de ambiente

### Arquivos Modificados:
- `src/components/Pricing/index.tsx` - Atualizado com planos reais e modal
- `src/components/Pricing/PricingBox.tsx` - Adicionado suporte a modal e badge "Mais Popular"
- `src/components/Contact/index.tsx` - Adicionado envio real de emails
- `src/components/Brands/index.tsx` - Substituído por carrossel Agencia AJR

## Testando

### Testar Formulário de Contato
1. Acesse a página principal
2. Role até a seção "Entre em Contato Conosco"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique o console do servidor ou o email

### Testar Formulário de Orçamento
1. Acesse a seção de Planos
2. Clique em "Solicitar Orçamento" em qualquer plano
3. Preencha o formulário modal
4. Para o plano PERSONALIZADO, a descrição é obrigatória
5. Clique em "Enviar Solicitação"
6. Verifique o console do servidor ou o email

## Troubleshooting

### Emails não estão sendo enviados
- Verifique se o arquivo `.env.local` existe
- Confirme que a `RESEND_API_KEY` está correta
- Reinicie o servidor de desenvolvimento
- Verifique o console do servidor para ver os logs

### Modal não abre
- Verifique o console do navegador para erros
- Certifique-se de que o JavaScript está habilitado

### Carrossel não está animando
- Verifique se o JavaScript está habilitado
- Limpe o cache do navegador
- Recarregue a página

## Suporte

Para questões técnicas ou problemas, consulte:
- Documentação do Next.js: https://nextjs.org/docs
- Documentação do Resend: https://resend.com/docs
