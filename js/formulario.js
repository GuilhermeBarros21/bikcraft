const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok){
    formulario.innerHTML = 
    "<p class='font-2-1' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background:#f7f7f7; '><span styler='color': #317A00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 23 horas.</p>";
  }else {
    formulario.innerHTML = 
    "<p class='font-2-1' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background:#f7f7f7; '><span styler='color': #E00000;'>Erro no envio</span>Erro no envio, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>"
  }
}
function enviarFomulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disable = true;
  botao.innerText = "Enviando...";
}

formulario.addEventListener("submit", enviarFomulario);