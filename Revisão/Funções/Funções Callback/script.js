function obterPrevisaoTempo(cidade,previsao,callbackPrevisao){
    console.log('Obtendo a previsão do tempo de' , cidade  )
    setTimeout(function(){
        console.log('Previsão do tempo!')
        callbackPrevisao(null,previsao)
    },5000)
}


function exibirPrevisao(err,cidade){
    if(err){
        console.error('Algo de errado!')
    }else{
        console.log('Previsão adicionada : ' , cidade)
    }
}

obterPrevisaoTempo('Embu das Artes','Chuva' , exibirPrevisao)
obterPrevisaoTempo('Taboão da Serra','Tempestade', exibirPrevisao)
obterPrevisaoTempo('Praia Grande','35 Graus', exibirPrevisao)






















/*function adicionarTarefa(tarefa,callback){
    console.log('Adicionando tarefa:' , tarefa)
    setTimeout(function(){
        console.log('Tarefa Adicionada!')
        callback(null,tarefa)
        
    },5000)
}

function callbackTarefaAdicionada(err,tarefa){
    if(err){
        console.error('Error ao adicionar tarefa:',err)
    }else{
        console.log('Tarefa adicionada:', tarefa)
    }
}

adicionarTarefa('Ler Livro', callbackTarefaAdicionada) */





