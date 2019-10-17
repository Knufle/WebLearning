const moduloNotificacao = (function() {
  const divMensagem = document.createElement("div");
  divMensagem.classList.add("formNovoCartao-msg");
  function mostrarNotificacao(mensagem) {
    divMensagem.innerText = mensagem;
    document.body.append(divMensagem);
    divMensagem.addEventListener("animationend", () => divMensagem.remove());
  }
  return {
    notificar: mostrarNotificacao
  };
})();
