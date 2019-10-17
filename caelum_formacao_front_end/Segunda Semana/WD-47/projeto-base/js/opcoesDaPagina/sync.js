const moduloSync = (function() {
  const btnSync = document.querySelector("#btnSync");

  btnSync.addEventListener("click", async () => {
    btnSync.classList.replace(
      "botaoSync--sincronizado",
      "botaoSync--esperando"
    );
    const infoUsuario = {
      usuario: "knuflebr@gmail.com",
      cartoes: moduloMural.getCartoes()
    };

    let url = "https://ceep.herokuapp.com/cartoes/salvar";
    const configuracaoFetch = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(infoUsuario)
    };

    try {
        const respostaServidor = await fetch(url, configuracaoFetch);
        const dadosJson = await respostaServidor.json();
        // Dados retornados pela API
        console.log(dadosJson);
        // alert(dadosJson.quantidade + " cartões salvos para o usuário " + dadosJson.usuario);
        moduloNotificacao.notificar(dadosJson.quantidade + " cartões salvos para o usuário " + dadosJson.usuario);
    }
    catch(erro) {
        alert('Erro ao salvar informações no banco de dados!');
        console.log(erro);
    }
    finally {
        btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
    }
  });

  return {
      sincronizar : () => btnSync.click()
  }

  btnSync.classList.remove("no-js");
})();
