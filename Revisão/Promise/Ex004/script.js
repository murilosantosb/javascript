function correnteAssincrona() {
    // Operação Assíncrona 1
    return operacaoAssincrona1()
      .then((resultado1) => {
        console.log(resultado1);
        // Operação Assíncrona 2
        return operacaoAssincrona2(resultado1);
      })
      .then((resultado2) => {
        console.log(resultado2);
        // Operação Assíncrona 3
        return operacaoAssincrona3(resultado2);
      })
      .then((resultadoFinal) => {
        console.log(resultadoFinal);
        // Resolução da Promise com o valor final
        return "Concluído";
      })
      .catch((erro) => {
        // Lidar com erros em qualquer ponto da corrente
        console.error("Erro na corrente assíncrona:", erro);
        throw erro; // Propagar o erro para que a Promise seja rejeitada
      });
  }
  
  // Funções assíncronas simuladas para ilustração
  function operacaoAssincrona1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Passo 1"), 1000);
    });
  }
  
  function operacaoAssincrona2(resultado) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Passo 2 recebendo ${resultado}`), 3000);
    });
  }
  
  function operacaoAssincrona3(resultado) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Passo 3 recebendo ${resultado}`), 5000);
    });
  }
  
  // Exemplo de uso
  correnteAssincrona()
    .then((resultadoFinal) => {
      console.log("Resultado Final:", resultadoFinal);
    })
    .catch((erro) => {
      console.error("Erro durante a corrente assíncrona:", erro);
    });
  