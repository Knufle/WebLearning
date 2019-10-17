const moduloMural = (function() {
  let numeroDoCartao = 0;
  const mural = document.querySelector(".mural");

  mural.addEventListener("change", function(event) {
    let isRadio = event.target.classList.contains("opcoesDoCartao-radioTipo");
    if (isRadio) {
      const cartao = event.target.parentElement.parentElement;
      cartao.style.backgroundColor = event.target.value;
      moduloSync.sincronizar();
    }
  });
  mural.addEventListener("keypress", function() {
    let isLabel = event.target.classList.contains("opcoesDoCartao-tipo");
    if (isLabel && (event.key === " " || event.key === "Enter")) {
      event.target.click();
    }
  });

  mural.addEventListener("click", function(event) {
    let isBotaoExcluir = event.target.classList.contains(
      "opcoesDoCartao-remove"
    );
    if (isBotaoExcluir) {
      const cartao = event.target.parentElement.parentElement;
      cartao.classList.add("cartao--some");
      cartao.addEventListener("transitionend", () => cartao.remove());
    }
  });

  function getCartoesMural() {
    const cartoes = mural.querySelectorAll(".cartao");
    console.log(cartoes); // NodeList de HTML, mas queremos um array
    console.log(Array.from(cartoes)); // Array HTML
    const listaCartoes = Array.from(cartoes).map(cartao => {
      return {
        conteudo: cartao.querySelector(".cartao-conteudo").textContent,
        cor: cartao.style.backgroundColor
      };
    });
    console.log(listaCartoes); // Agora sim um Array de HTML
    return listaCartoes;
  }

  function adicionarCartaoNoMural(objConteudo) {
    numeroDoCartao++;
    let conteudo = objConteudo.conteudo;
    const cartao = document.createElement("article");
    cartao.style.backgroundColor = objConteudo.cor;
    cartao.classList.add("cartao");
    cartao.tabIndex = 0;
    cartao.innerHTML = `
           <div class="opcoesDoCartao">
           <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
             <svg><use xlink:href="#iconeRemover"></use></svg>
           </button>
 
           <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
           <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
             Padrão
           </label>
 
           <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
           <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
             Importante
           </label>
 
           <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
           <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
             Tarefa
           </label>
 
           <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
           <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
             Inspiração
           </label>
         </div>
         <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
           `;
    mural.append(cartao);
    cartao.addEventListener("focusin", () =>
      cartao.classList.add("cartao--focado")
    );
    cartao.addEventListener("focusout", () =>
      cartao.classList.remove("cartao--focado")
    );
  }

  // carregar os cartões salvos no servidor
  $.ajax({
    type: "GET",
    url: "https://ceep.herokuapp.com/cartoes/carregar",
    data: { usuario: "knuflebr@gmail.com" },
    dataType: "jsonp"
  })

    .done(dadosJson => {
      console.log(dadosJson);
      dadosJson.cartoes.forEach(cartao => {
        adicionarCartaoNoMural(cartao);
      });
    })
    .fail(erro => {
      alert("Erro ao carregar os dados dos cartões!");
      console.log(erro);
    });

  return {
    // funcao ou propriedade publica: funcao ou propriedade privada
    getCartoes: getCartoesMural,
    adicionarCartao: adicionarCartaoNoMural
  };
})();
