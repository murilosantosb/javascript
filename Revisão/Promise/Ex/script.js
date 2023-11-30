const myPromise = new Promise((resolver,rejeitar)=>{

    const nome = 'Murilo'

    setTimeout(()=>{
        if(nome == 'Murilo'){
            resolver('Usuário Murilo encontrado!')
        }else{
            rejeitar('O usuário Murilo não foi encontrado')
        }
    },3000)
})

myPromise
.then((res)=>{
    console.log(res)
})
.catch((erro)=>{
    console.error(erro)
})

// Encadeamento de then's

    const myPromise2 = new Promise((resolver,rejeitar)=>{

    const nome = 'Murilo'

    setTimeout(()=>{
        if(nome == 'Murilo'){
            resolver('Usuário Murilo encontrado!')
        }else{
            rejeitar('O usuário Murilo não foi encontrado')
        }
    },3000)
    })

myPromise2
.then((res2)=>{
    return res2.toUpperCase()
}).then((stringModificada)=>{
    console.log(stringModificada)
})

// Retorno do catch:

const myPromise3 = new Promise((resolver,rejeitar)=>{

    const nome = 'João'

    setTimeout(()=>{
        if(nome == 'Murilo'){
            resolver('Usuário João encontrado!')
        }else{
            rejeitar('O usuário João não foi encontrado')
        }
    },3000)
    })

myPromise3
.then((res)=>{
    console.log(res)
})
.catch((erro)=>{
    console.error(erro)
})

// Resolver várias promessas : ALL == Uma espera a outra

const p1 = new Promise((resolver,rejeitar)=>{
    setTimeout(()=>{
        resolver('P1 ok!')
    rejeitar('Falhar!')
    },10000)
})

const p2 = new Promise((resolver,rejeitar)=>{
    setTimeout(()=>{
        resolver('P2 ok!')
        rejeitar('Falhar!')
    },5000)
})

const p3 = new Promise((resolver,rejeitar)=>{
    resolver('P3 ok!')
    rejeitar('Falhar!')
})

const TodasPromessas = Promise.all([p1,p2,p3])

TodasPromessas
.then((res)=>{
    console.log('Todas Promessas foram concluidas')
})
.catch((erro)=>{
    console.error(erro)
})

// Resolvendo várias promessas com race == Corrida , quando as promessas forem concluindo vão mostrando na tela