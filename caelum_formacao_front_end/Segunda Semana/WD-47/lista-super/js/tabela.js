const tabela = document.querySelector('#tabela');

export function adicionarLinha(conteudo) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${conteudo}</td>
    <td>
        <button class="btn btn-danger btn-remove">
            <i class="fas fa-trash"></i>
        </button>     
    </td>
    `;
    tabela.querySelector('tbody').append(tr);
}