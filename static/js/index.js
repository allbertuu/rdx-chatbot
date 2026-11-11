let chat = document.querySelector("#chat");
let input = document.querySelector("#input");
let botaoEnviar = document.querySelector("#botao-enviar");

async function enviarMensagem() {
  if (input.value == "" || input.value == null) return;
  let mensagem = input.value;
  input.value = "";

  let novaBolha = criaBolhaUsuario();
  const mensagemSegura = DOMPurify.sanitize(mensagem);
  novaBolha.innerHTML = marked.parse(mensagemSegura);
  if (mensagemSegura == "") return;
  chat.appendChild(novaBolha);

  let novaBolhaBot = criaBolhaBot();
  chat.appendChild(novaBolhaBot);
  vaiParaFinalDoChat();
  novaBolhaBot.textContent = "Analisando ...";

  const resposta = await fetch("http://127.0.0.1:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ msg: mensagemSegura }),
  });

  const respostaMarkdown = await resposta.text();
  const rawHtml = marked.parse(respostaMarkdown.replace(/\n/g, "<br>"));
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  novaBolhaBot.innerHTML = cleanHtml;
  vaiParaFinalDoChat();
}

function criaBolhaUsuario() {
  let bolha = document.createElement("p");
  bolha.classList = "chat__bolha chat__bolha--usuario";
  return bolha;
}

function criaBolhaBot() {
  let bolha = document.createElement("p");
  bolha.classList = "chat__bolha chat__bolha--bot";
  return bolha;
}

function vaiParaFinalDoChat() {
  chat.scrollTop = chat.scrollHeight;
}

botaoEnviar.addEventListener("click", enviarMensagem);
input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    botaoEnviar.click();
  }
});
