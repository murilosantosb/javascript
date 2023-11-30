// Promise Concluida
const NovaPromessa = new Promise((concluida,rejeitada)=>{
    const promessa = true
    setTimeout(()=>{
        if(promessa == true){
        concluida('Sucesso!')
    }else{
        rejeitada('Falhou!')
    }
    },5000)
})

 NovaPromessa
 .then((res)=>{
    console.log('A operação foi Concluida com : ', res)
 })
 .catch((erro)=>{
    console.log('Operação :' , erro)
 }) 

 //Operação Rejeitada

/*const rejeitarPromessa = new Promise((concluida,rejeitada)=>{
    const falharPromessa = false
    setTimeout(()=>{
        if(falharPromessa == true){
            concluida('Sucesso!')
        }else{
            rejeitada('Falhou')
        }
    },5000)
}) 

rejeitarPromessa
.then((res)=>{
    console.log('Operação Foi concluida com: ' , res)
})
.catch((erro)=>{
    console.error('Operação foi Rejeitada: ' , erro)
})
    
 */
 
  