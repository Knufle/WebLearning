(function() {
  const form = document.querySelector(".formNovoCartao");
  const divMensagem = document.createElement("div");
  divMensagem.classList.add("formNovoCartao-msg");
  divMensagem.innerText = "Por favor, preencha o campo com um valor válido!";

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // bloqueia o recarregamento da pagina
    const caixaTexto = document.querySelector(".formNovoCartao-conteudo");
    if (caixaTexto.value.trim() === "") {
      // a caixa esta vazia
      //    const divMensagem = document.createElement('div');
      //    divMensagem.classList.add('formNovoCartao-msg');
      form.append(divMensagem);
      divMensagem.addEventListener("animationend", () => divMensagem.remove());
    } else {
      // o cara preencheu o texto
      let conteudo = caixaTexto.value;
      caixaTexto.value = "";
      moduloMural.adicionarCartao({ conteudo: conteudo });
    }
  });
  form.classList.remove("no-js");
})();
