function Promessa1(){
    return new Promise((resolver)=>{
        setTimeout(()=>{
            resolver('Passo 1')
        },1000)
    })
}

function Promessa2(){
    return new Promise((resolver)=>{
        setTimeout(()=>{
            resolver('Passo 2')
        },1000)
    })
}

function Promessa3(){
    return new Promise((resolver)=>{
       setTimeout(()=>{
        resolver('Passo 3')
        
       },1000) 
    })
}

function TodasPromessas(){
    return Promessa1()
    .then((res1)=>{
        console.log(res1)
        return Promessa2(res1)
    })
    .then((res2)=>{
        console.log(res2)
        return Promessa3(res2)
    })
    .then((res3)=>{
        console.log(res3)
        return "Concluido"
    })
}

TodasPromessas()
.then((resFinal)=>{
  console.log('Resultado Final:',resFinal)
})
.catch((erro)=>{
    console.error('Erro durante a corrente assíncrona!')
})


/*function encadearPromessas(encadear){
    return new Promise((sucesso,error)=>{

    })
}



/*minhaPromise()
.then((res1)=>{
    console.log('Passo 1:', res1)
    return 'Próximo passo'
})
.then((res2)=>{
   console.log('Passo 2:',res2)
   return 'Próximo passo'
})
.then((res3)=>{
    console.log('Passo 3:',res3)
})
.catch((error)=>{
    console.log('Operação falhou',error)
}) */