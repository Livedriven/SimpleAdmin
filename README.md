
2,66<div align="center">

# 📋 SimpleAdmin

**Gerenciamento de cadastros simples, rápido e direto no navegador.**

Desenvolvido por [Richard Henrique](https://github.com/richardhenrique) · Desafio de Formulários — [Alura](https://www.alura.com.br)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

</div>

---

## 🎯 Sobre o Projeto

O **Cadastro de Pessoas** é uma aplicação web client-side para gerenciamento de registros com nome e data de nascimento. Sem banco de dados, sem backend — tudo funciona diretamente no navegador com `localStorage`, tornando a experiência leve e imediata.

O projeto foi criado como parte do desafio de formulários da Alura, com foco em manipulação dinâmica do DOM, validação de dados e uma interface fluida para o usuário.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Cadastro** | Formulário com validação para nome (letras e espaços) e seleção de data |
| **Persistência Local** | Dados salvos automaticamente no `localStorage` do navegador |
| **Edição Inline** | Edite nome ou data de nascimento com um duplo clique direto na tabela |
| **Exclusão Individual** | Remoção de registros com confirmação de segurança |
| **Limpeza Total** | Apaga todos os registros de uma só vez |
| **Layout Responsivo** | Design estruturado com CSS Grid e tipografia Poppins |

---

## 🚀 Tecnologias

Este projeto foi construído com um stack moderno de ferramentas front-end:

- **[Vite](https://vitejs.dev/)** — Bundler e servidor de desenvolvimento ultrarrápido
- **[PostCSS](https://postcss.org/)** — Transformação de estilos com plugins JS
- **[Lightning CSS](https://lightningcss.dev/)** — Parser e minificador de CSS escrito em Rust
- **[Rolldown](https://rolldown.rs/)** — Bundler interno baseado em Rust, compatível com a API do Rollup
- **[Nano ID](https://github.com/ai/nanoid)** — Geração de identificadores únicos e seguros
- **[fdir](https://github.com/thecodrr/fdir)** + **[picomatch](https://github.com/micromatch/picomatch)** — Utilitários de sistema de arquivos

---

## 🛠️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/richardhenrique/cadastro-de-pessoas.git

# 2. Acesse a pasta do projeto
cd cadastro-de-pessoas

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

> A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 📁 Estrutura do Projeto

```
cadastro-de-pessoas/
├── src/
│   ├── index.html
│   ├── style.css
│   └── main.js
├── package.json
├── vite.config.js
└── README.md
```

---

## 👤 Autor

Feito com 💙 por **Richard Henrique**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Livedriven)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/richard-henrique-06b945293/)

---

<div align="center">
  <sub>Projeto desenvolvido como parte do desafio de formulários da <strong>Alura</strong></sub>
</div>
