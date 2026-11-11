<div align="center">

# 🛡️ RDX AI Chatbot

### Inteligência artificial conversacional com arquitetura defensiva, engenharia de prompt e proteção contra ataques de injeção em tempo real.

[![Python](https://img.shields.io/badge/Python-3.15.2-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.1.3-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Google Gemini](https://img.shields.io/badge/Gemini_AI_SDK-GenAI-8E75B5?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

## 🎯 O Problema

Um chatbot corporativo precisa agilizar a vida do usuário e, ao mesmo tempo, servir como um **escudo para o seu negócio**. No entanto, equilibrar uma experiência conversacional fluida com uma camada sólida de proteção costuma ser um caos técnico:

- ❌ **Prompt Injection & Engenharia Social**: Usuários forçam o modelo a ignorar instruções de sistema, agir de forma sem filtro ou vazar comportamentos internos.
- ❌ **Desvio de Escopo**: Modelos generalistas gastam recursos e expõem a marca respondendo a assuntos aleatórios (como receitas de bolo ou conselhos pessoais).
- ❌ **Injeção de Códigos Maliciosos**: Scripts mal-intencionados enviados nas mensagens podem tentar capturar dados ou quebrar a renderização do frontend.


## ✨ A Solução

Desenvolvido para a plataforma de cursos **RDX**, este projeto demonstra como construir uma solução de IA robusta e segura sem complicar a arquitetura além do necessário.

Combinando **segurança na camada de aplicação** e **engenharia de prompt defensiva**, o sistema entrega respostas limpas e estritamente alinhadas ao domínio do negócio:

- 🛡️ **Sanitização Dupla (Input/Output)**: Tratamento e validação de mensagens na entrada e na saída para impedir execução de código malicioso.
- 🎯 **Engenharia de Prompt Precisa**: Instruções de sistema refinadas para manter o assistente estritamente focado no escopo da plataforma RDX.
- 🎛️ **Controle Fino de Temperatura**: Ajuste de hiperparâmetros no **Gemini AI SDK** para reduzir alucinações e manter respostas diretas e previsíveis.
- 💬 **Interface Limpa & Formatada**: Frontend leve focado em renderizar Markdown e manter uma conversa fluida.

## 💡 Veja em Ação

O sistema foi submetido a testes de estresse defensivo ("Red Teaming" simulado):

- **Teste 1 (Desvio de Escopo)**: Solicitada uma receita de bolo de cenoura 🥕 -> Recusado de forma educada, mantendo o escopo nos cursos RDX.
- **Teste 2 (Injeção de Código)**: Envio de scripts maliciosos tentando capturar dados -> Sanitizado e neutralizado.
- **Teste 3 (Engenharia Social & Chantagem)**: Pedidos para ignorar instruções e atuar sem filtro -> Instruções primárias mantidas intocadas.

### Demonstração do Chatbot RDX
![Demonstração do Chatbot RDX](https://github.com/user-attachments/assets/7963fd25-6173-441d-a271-2611fadd8994)

## 🚀 Começo Rápido

### Pré-requisitos

- Python 3.15.2
- Chave de API do Google Gemini (`GEMINI_API_KEY`)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/allbertuu/rdx-chatbot.git
```

```bash
# 2. Acesse a pasta do projeto
cd rdx-chatbot
```

```bash
# 3. Crie e ative o ambiente virtual
python -m venv venv-gemini-2
# No Linux/Mac: source venv-gemini-2/bin/activate
# No Windows: venv-gemini-2\Scripts\activate
```

```bash
# 4. Instale as dependências
pip install -r requirements.txt
```

```bash
# 5. Configure a chave de API
cp .env.example .env
# Adicione sua GEMINI_API_KEY no arquivo .env
```

```bash
# 6. Inicie a aplicação
python app.py
# Acesse a interface no seu navegador em http://127.0.0.1:5000
```

## 🛠️ Tech Stack

- Backend: Python, Flask, Gemini AI SDK (google-genai)
- Frontend: HTML5, CSS3, JavaScript (Vanilla ES6+)
- Segurança & LLM Ops: Prompt System Defensivo, Sanitização RegEx/HTML escape, Temperature Tuning

## 📬 Vamos Conversar?

Estou aberto a oportunidades de desenvolvimento em **Sistemas de IA, Mobile e Front-End**. Se você precisa transformar complexidade técnica em soluções seguras e eficientes:

- 📧 **Email**: <albertovinicius3@gmail.com>
- 💼 **LinkedIn**: [linkedin.com/in/albertov-albuquerque](https://linkedin.com/in/albertov-albuquerque)
