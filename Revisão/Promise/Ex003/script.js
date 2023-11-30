function esperarPorTodas(promessas){
    return Promise.all(promessas)
}

const promise1 = Promise.resolve('Primeira Promise')
const promise2 = new Promise((resolve)=> setTimeout(()=> resolve('Segunda Promise'),5000))
const promise3 =  Promise.reject('Terceira Promise falhou!')

esperarPorTodas([promise1,promise2,promise3])
.then((res)=>{
    console.log('Todas as Promises foram resolvidas:', res)
})
.catch((erro)=>{
    console.error('Pelo menos uma Promise falhou:', erro)
})































/*const promise1 = new Promise((concluida,rejeitada)=>{
    setTimeout(()=>{
         concluida('sucesso')
         rejeitada('rejeitado')
    },5000)
})

const promise2 = new Promise((concluida,rejeitada)=>{
    setTimeout(()=>{
         concluida('sucesso')
         rejeitada('rejeitado')
    },5000)
})

const todasAsPromessas = Promise.all([promise1,promise2])

todasAsPromessas
.then((res)=>{
    console.log('Todas as Promises foram concluidas:', res)
})
.catch((erro)=>{
    console.error('Pelo menso uma Promise falhou:', erro)
}) */