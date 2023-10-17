function calcularMedia(listaDeNumeros) {
    // Verifica se a lista está vazia para evitar divisão por zero
    if (listaDeNumeros.length === 0) {
      return 0; // Retorna 0 se a lista estiver vazia
    }
  
    // Inicializa uma variável para armazenar a soma dos números
    let soma = 0;
  
    // Usa um loop para somar todos os números na lista
    for (let i = 0; i < listaDeNumeros.length; i++) {
      soma += listaDeNumeros[i];
    }
  
    // Calcula a média dividindo a soma pelo número total de elementos na lista
    const media = soma / listaDeNumeros.length;
  
    // Retorna a média
    return media;
  }
  
  // Teste a função com uma lista de números
  const numeros = [10, 20, 30, 40, 50];
  const mediaCalculada = calcularMedia(numeros);
  console.log(`A média dos números na lista é: ${mediaCalculada}`);