const minhaPromesa1 = new Promise((concluido, rejeitado) => {
    const c = [2, 4, 6, 8, 10];
    setTimeout(() => {
        if (c.every((num)=> num % 2 === 0)) {
            concluido('Sucesso');
        } else {
            rejeitado('Nem todos são Pares');
        }
    }, 2000);
});

minhaPromesa1
    .then((el) => {
        console.log('Todos são Pares, Operação concluída com:', el);
    })
    .catch((erro) => {
        console.error(erro);
    });
