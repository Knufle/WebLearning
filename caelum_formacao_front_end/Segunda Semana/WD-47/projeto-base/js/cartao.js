;(function() {
  const cartoes = document.querySelectorAll(".cartao");
  cartoes.forEach(cartao => {
    cartao.addEventListener("focusin", function() {
      this.classList.add("cartao--focado");
    });
    cartao.addEventListener("focusout", function() {
      this.classList.remove("cartao--focado");
    });
    cartao.addEventListener("mouseout", function() {
      this.classList.remove("cartao--focado");
    });
    cartao.addEventListener("change", function(event) {
      let isRadio = event.target.classList.contains("opcoesDoCartao-radioTipo");
      if (isRadio) {
        cartao.style.backgroundColor = event.target.value;
      }
    });
    cartao.addEventListener("keypress", function() {
      let isLabel = event.target.classList.contains("opcoesDoCartao-tipo");
      if (isLabel && (event.key === " " || event.key === "Enter")) {
        event.target.click();
      }
    });

    cartao.addEventListener("click", function(event) {
      let isBotaoExcluir = event.target.classList.contains(
        "opcoesDoCartao-remove"
      );
      if (isBotaoExcluir) {
        cartao.classList.add("cartao--some");
        cartao.addEventListener("transitionend", () => cartao.remove());
      }
    });
  });
})();
