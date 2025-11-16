# Guia de Deploy na Netlify - Agência AJR

## 📋 Pré-requisitos

- Conta no GitHub (com o repositório do projeto)
- Conta na Netlify (gratuita): https://app.netlify.com/signup
- API Key do Resend (para envio de emails): https://resend.com/api-keys

## 🚀 Passos para Deploy

### 1. Preparar o Repositório

Certifique-se de que todos os arquivos estejam commitados no Git:

```bash
cd startup-nextjs-main
git add .
git commit -m "Preparar para deploy na Netlify"
git push origin main
```

### 2. Conectar com Netlify

1. Acesse https://app.netlify.com/
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Escolha **"Deploy with GitHub"**
4. Autorize o Netlify a acessar seu GitHub
5. Selecione o repositório **agenciaAjr**

### 3. Configurar Build Settings

A Netlify detectará automaticamente que é um projeto Next.js. Verifique se as configurações estão corretas:

- **Base directory:** `startup-nextjs-main`
- **Build command:** `npm run build`
- **Publish directory:** `.next`

**Nota:** O arquivo `netlify.toml` já está configurado com essas definições.

### 4. Configurar Variáveis de Ambiente

⚠️ **IMPORTANTE:** Não faça commit do arquivo `.env.local`!

Na interface da Netlify, antes de fazer o deploy:

1. Vá em **"Site configuration"** > **"Environment variables"**
2. Adicione a variável de ambiente:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_RqeEqyue_A46qhmRCzmiqRwmeEEb5i3PW` (ou sua chave da Resend)

### 5. Instalar Plugin Next.js

O plugin `@netlify/plugin-nextjs` será instalado automaticamente graças à configuração no `netlify.toml`.

Este plugin garante que:
- As rotas do Next.js funcionem corretamente
- As API Routes sejam transformadas em Netlify Functions
- O ISR (Incremental Static Regeneration) funcione
- As imagens otimizadas sejam servidas corretamente

### 6. Fazer o Deploy

1. Clique em **"Deploy site"**
2. Aguarde o build ser concluído (geralmente 2-5 minutos)
3. Seu site estará disponível em um domínio temporário: `https://nome-aleatorio.netlify.app`

### 7. Configurar Domínio Personalizado (Opcional)

1. Vá em **"Site configuration"** > **"Domain management"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio (ex: `agenciaajr.com`)
4. Siga as instruções para configurar os DNS:
   - Se usar Netlify DNS: será automático
   - Se usar outro provedor: adicione um registro CNAME ou A apontando para o Netlify

### 8. Configurar HTTPS

O Netlify fornece certificado SSL gratuito via Let's Encrypt:
- É ativado automaticamente após configurar o domínio
- Renovação automática

## 🔍 Verificações Pós-Deploy

Teste as seguintes funcionalidades:

- [ ] Página inicial carrega corretamente
- [ ] Navegação entre páginas funciona
- [ ] Imagens são carregadas (Unsplash e outras)
- [ ] Tema claro/escuro funciona
- [ ] Formulário de contato envia emails
- [ ] Responsividade em mobile
- [ ] Performance (use https://pagespeed.web.dev/)

## 🛠️ Comandos Úteis

### Testar Build Localmente

Antes de fazer deploy, teste se o build funciona:

```bash
npm run build
npm run start
```

Acesse http://localhost:3000 e verifique se tudo funciona.

### Limpar Cache do Netlify

Se encontrar problemas após um deploy:

1. Vá em **"Deploys"**
2. Clique em **"Trigger deploy"** > **"Clear cache and deploy site"**

## ⚙️ Configurações Avançadas

### Configurar Redirects

O arquivo `netlify.toml` já inclui configurações para SPAs Next.js.

### Headers de Segurança

Headers de segurança já estão configurados no `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

### Build Hooks (Webhooks)

Para rebuilds automáticos:
1. Vá em **"Site configuration"** > **"Build & deploy"** > **"Build hooks"**
2. Crie um novo hook
3. Use a URL fornecida em integrações (CMS, etc.)

## 🐛 Troubleshooting

### Build Falha

**Erro:** `Command failed with exit code 1`
- Verifique os logs de build na Netlify
- Teste `npm run build` localmente
- Verifique se todas as dependências estão no `package.json`

### Imagens Não Carregam

**Erro:** `Image optimization failed`
- Verifique se os domínios estão no `next.config.js` > `remotePatterns`
- Para Netlify, as imagens são otimizadas automaticamente com o plugin

### Formulário Não Envia Emails

**Erro:** `RESEND_API_KEY not found`
- Verifique se a variável de ambiente está configurada corretamente
- Vá em **"Site configuration"** > **"Environment variables"**
- Faça um novo deploy após adicionar/corrigir

### 404 ao Recarregar Página

Já configurado no `netlify.toml` com redirects. Se persistir:
- Verifique se o plugin `@netlify/plugin-nextjs` está ativo
- Limpe o cache e faça novo deploy

## 📊 Monitoramento

### Analytics

Ative o Netlify Analytics (pago) ou use:
- Google Analytics
- Vercel Analytics (gratuito)
- Plausible (privacidade-first)

### Logs

Acesse os logs em tempo real:
1. **"Functions"** tab - para API routes
2. **"Deploys"** tab - para logs de build

## 🔄 Atualizações Contínuas

Cada push para a branch `main` no GitHub acionará automaticamente um novo deploy.

Para controlar isso:
1. **"Site configuration"** > **"Build & deploy"** > **"Continuous deployment"**
2. Configure branches de produção/staging

## 📞 Suporte

- Documentação Netlify: https://docs.netlify.com/
- Documentação Next.js: https://nextjs.org/docs
- Suporte Netlify: https://www.netlify.com/support/

---

**© 2025 Agência AJR - Todos os Direitos Reservados**
