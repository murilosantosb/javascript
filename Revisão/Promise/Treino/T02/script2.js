const promesa1 = new Promise((concluido,rejeitado)=>{
    const promesa = true
    setTimeout(()=>{
        if(promesa == true){
            concluido('P1 OK')
        }else{
            rejeitado('Falhar')
        }
    },2000)
})

const promesa2 = new Promise((concluido,rejeitado)=>{
    const ParImpar = [2,4,6,8,10]
    setTimeout(()=>{
        if(ParImpar.every((num)=> num % 2 === 0)){
            concluido('P2 OK')
        }else{
            rejeitado('Falhou')
        }
    },5000)
})

const promesa3 = new Promise((concluido,rejeitado)=>{
    const Positivo = [1,2,3,4,5,6,7,8,9,10]
    setTimeout(()=>{
        if(Positivo.every((num)=> num >= 0)){
            concluido('P3 OK')
        }else{
            rejeitado('Falhouu')
        }
    },7000)
})


const TodasPromessas = Promise.all([promesa1,promesa2,promesa3])

TodasPromessas
.then((el)=>{
    console.log('Todos foram concluidos com Sucesso',el)
})
.catch((err)=>{
    console.error('Pelo menos uma foi concluida com erro',err)
})

