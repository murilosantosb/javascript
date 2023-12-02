function p1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(5)
            
        },2000)
})}

function p2(calc1){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(calc1 * 2)
        },2000)
    })
}

 function p3(calc2){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Resultado final:',calc2)
            resolve(`Concluido com ${calc2}`)
            
        },2000)
})
} 

function correnteAssincronaMelhorada(){
    return p1()
    .then((calc1)=>{
       console.log('Passo 1: Número inicial:',calc1)
       return p2(calc1)
    })
    .then((calc2)=>{
        console.log('Passo 2: O Dobro do Primeiro:',calc2)
        return p3(calc2)
    })
    .catch((erro)=>{
        console.log('Operação deu Errada',erro)
    })   
    
}
    


correnteAssincronaMelhorada() 

.then((resFinal)=>{
    console.log(resFinal)
})

.catch((error)=>{
    console.error(error)
})

