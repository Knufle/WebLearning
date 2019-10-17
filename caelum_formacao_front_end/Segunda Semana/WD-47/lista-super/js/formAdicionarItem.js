import * as moduloTabela from './tabela.js'

const form = document.querySelector('#formAdicionarItem');
const alertaForm = document.querySelector('#alertaFormulario');

form.addEventListener('submit', event => {
    event.preventDefault();
    const campoTexto = form.querySelector('#nomeItem');
    if (campoTexto.value.trim() === "") {
        alertaForm.classList.remove('d-none');
        campoTexto.focus();
    }
    else {
        alertaForm.classList.add('d-none');
        let conteudo = campoTexto.value;
        campoTexto.value = '';
        moduloTabela.adicionarLinha(conteudo);
    }
})