;(function() {

    $('#busca').on('input', function () {
        let termoBuscado = $(this).val().trim();

        if (termoBuscado !== "") {
            $('.cartao').hide().filter(function() {
                return $(this).find('.cartao-conteudo').text().match(new RegExp(termoBuscado, 'i'));
            }).show();
        }
        else {
            $('.cartao').show();
        }
    });

    $('#busca').removeClass('no-js');

})();