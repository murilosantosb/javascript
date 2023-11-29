function Relogio(){
    let Hora_agora = new Date()
    let horas = Atualizar(Hora_agora.getHours())
    let minutos = Atualizar(Hora_agora.getMinutes())
    let segundos = Atualizar(Hora_agora.getSeconds())

    let p = document.querySelector('#horass')
    
    let hora_atualizada = horas+':'+minutos+':'+segundos

    p.innerHTML = hora_atualizada

  
}

function Atualizar(numeros){
    return numeros< 10 ?'0' + numeros:numeros
}

setInterval(Relogio,1000)
Relogio()
