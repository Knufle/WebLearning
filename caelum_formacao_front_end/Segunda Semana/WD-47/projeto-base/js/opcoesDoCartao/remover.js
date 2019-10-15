(function() {
  // Pega todos os botoes de remocao de cartao
  const btns = document.querySelectorAll(".opcoesDoCartao-remove");
  // percorre a lista de botoes
  btns.forEach(btn => {
    // para cada botao adiciona o evento click
    btn.addEventListener("click", function() {
      // remove o elemento avô do botao clicado (cartao)
      const cartao = this.parentElement.parentElement;
      //this.parentElement.parentElement.remove();
      cartao.classList.add('cartao--some');
      cartao.addEventListener('transitionend', () => {
        cartao.remove();
      });
    });
  });
})();
