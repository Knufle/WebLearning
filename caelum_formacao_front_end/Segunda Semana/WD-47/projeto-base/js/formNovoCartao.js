(function() {
  const form = document.querySelector(".formNovoCartao");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // bloqueia o recarregamento da pagina
    const caixaTexto = document.querySelector(".formNovoCartao-conteudo");
    if (caixaTexto.value.trim() === "") {
      // a caixa esta vazia
      //    const divMensagem = document.createElement('div');
      //    divMensagem.classList.add('formNovoCartao-msg');
      moduloNotificacao.notificar("Por favor, preencha o campo com um valor válido!");
    } else {
      // o cara preencheu o texto
      let conteudo = caixaTexto.value;
      caixaTexto.value = "";
      moduloMural.adicionarCartao({ conteudo: conteudo });
      moduloSync.sincronizar();
    }
  });
  form.classList.remove("no-js");
})();
