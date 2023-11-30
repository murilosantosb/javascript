const PromessaBasica = new Promise((concluida,rejeitada)=>{
    const promessaConcluida = true
    setTimeout(()=>{
        if(promessaConcluida == true){
            concluida('Sucesso!')
        }else{
            rejeitada('Falhou!')
        }
    },5000)
})

const PromessaRejeitada = new Promise((concluida,rejeitada)=>{
    const promessaRejeitada = false
    setTimeout(()=>{
        if(promessaRejeitada == true){
            concluida('Sucesso!')
        }else{
            rejeitada('Falhou!')
        }
    },5000)
})

//Encadeamento Simplificado 
PromessaBasica
.then((res1)=>{
    console.log('Resultado 1 :' , res1)
    return PromessaRejeitada
})
.then((res2)=>{
    console.log('Resultado 2: ' , res2)
})
.catch((erro)=>{
    console.error('Error: ' , erro)
})