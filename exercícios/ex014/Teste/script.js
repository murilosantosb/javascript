function carregar(){
    let msg = document.getElementById('msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 11

    msg.innerHTML = `Agora são ${hora} horas `

    if(hora >= 0 && hora < 12){
        img.src = '../imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora <18){
        img.src = '../imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = '../imagens/noite.jpg'
        document.body.style.background  = '#515154'

    }


    
}