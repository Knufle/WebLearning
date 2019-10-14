const moduloSync = (function() {

    'use strict';

    // INSTRUÇÃO 1

    const getItens = async () => {
        const res = await fetch('api/sync.php?acao=get-itens');
        const json = await res.json();
        if (json.status == 1) {
            // INSTRUÇÃO 2
            // INSTRUÇÃO 3
        }
    }

    const sync = async () => {
        // INSTRUÇÃO 4
        // INSTRUÇÃO 5
        let params = `acao=salvar-itens&itens=${JSON.stringify(linhas)}`;

        const configReq = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/x-www-form-urlencoded',
            },
            body: params,
        }

        const res = await fetch(`api/sync.php`, configReq);
        const json = await res.json();
        // INSTRUÇÃO 6
        // INSTRUÇÃO 7
    };


    // getItens(); // INSTRUÇÃO 8

    return {
        sincronizar : sync
    }

})();