# Guia de Deploy no GitHub Pages

## Passo 1: Criar um repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New"** para criar um novo repositório
3. Nomeie como: **portfolio**
4. Deixe como **Public**
5. NÃO inicialize com README (pois já temos um)
6. Clique em **"Create repository"**

## Passo 2: Inicializar Git localmente

Na pasta do projeto, execute:

```bash
cd /Users/matheuspegoraro/Development/portfolio

# Inicializar git
git init

# Adicionar o repositório remoto (substitua seu-usuario pelo seu username)
git remote add origin https://github.com/seu-usuario/portfolio.git

# Ou com SSH (se preferir):
# git remote add origin git@github.com:seu-usuario/portfolio.git
```

## Passo 3: Instalar dependências e gh-pages

```bash
npm install
```

O `gh-pages` já está no `package.json`, então será instalado automaticamente.

## Passo 4: Fazer o commit inicial

```bash
git add .
git commit -m "Initial commit: React portfolio refactored"
git branch -M main
git push -u origin main
```

## Passo 5: Deploy no GitHub Pages

```bash
npm run deploy
```

Este comando:
- Faz o build da aplicação (`npm run build`)
- Cria uma branch `gh-pages`
- Faz deploy do conteúdo de `build/` para GitHub Pages

## Passo 6: Configurar GitHub Pages (opcional, geralmente automático)

1. No repositório do GitHub, vá em **Settings**
2. Procure por **Pages** (ou vá direto em `github.com/seu-usuario/portfolio/settings/pages`)
3. Verifique se a fonte está configurada como **Deploy from a branch**
4. Selecione a branch **gh-pages** e pasta **/root**
5. Clique em **Save**

## Acessar o site

Seu portfólio estará disponível em:

```
https://seu-usuario.github.io/portfolio
```

Substitua `seu-usuario` pelo seu username do GitHub.

---

## Próximas atualizações

Sempre que precisar atualizar o site:

```bash
# Fazer alterações nos arquivos...

# Fazer commit
git add .
git commit -m "Descrição da mudança"
git push origin main

# Deploy
npm run deploy
```

## Dúvidas comuns

**P: Como mudar a URL?**  
R: Se você criar um repositório chamado `seu-usuario.github.io`, o site será acessível direto em `https://seu-usuario.github.io`

**P: Como usar domínio personalizado?**  
R: Vá em Settings > Pages > Custom domain e adicione seu domínio

**P: O site não atualiza após fazer deploy?**  
R: Aguarde 1-2 minutos e limpe o cache do navegador (Ctrl+Shift+Delete ou Cmd+Shift+Delete)
