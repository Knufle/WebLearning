(function() {
  const btnAjuda = document.querySelector("#btnAjuda");
  btnAjuda.addEventListener("click", () => {
    //const msgAjuda = ["Bem-vindo ao Ceep!","Clique no botão linhas para mudar o layout"];
    //acima tinhamos uma lista pois era apenas o parametro 'msg', agora vamos informar 'msg' e 'conteudo', portanto teremos um array de objetos
    fetch("https://ceep.herokuapp.com/cartoes/instrucoes")
      .then(respostaServidor => respostaServidor.json())
      .then(dadosJson => {
        console.log(dadosJson);
        const mensagens = dadosJson.instrucoes;
        mensagens.forEach(msg => {
          moduloMural.adicionarCartao(msg);
        });
      });
    // const msgAjuda = [
    //   { conteudo: "Bem-vindo ao ceep!", cor: "#f05450" },
    //   { conteudo: "Clique no botão linhas para mudar o layout", cor: "#92c4e3" }
    // ];
    // msgAjuda.forEach(msg => {
    //   moduloMural.adicionarCartao(msg);
    // });
  });
  btnAjuda.classList.remove("no-js");
})();
