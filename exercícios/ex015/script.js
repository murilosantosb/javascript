function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('iano')
  let res = document.getElementById('res')

  if(fano.value.length == 0 || fano.value > ano){
    alert('[ERRO] Verifique os Dados a seguir')
  }else{
    let fsex = document.getElementsByName('genero')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto') // É a mesma coisa de ir no HTML e criar um id='foto'
  

  if(fsex[0].checked){
    genero = 'Homem'
    if(idade >=0 && idade < 10){
      //Criança
      img.setAttribute('src', 'imagens/foto-menino.jpg')
    }else if (idade < 21){
      //Jovem
      img.setAttribute('src', 'imagens/foto-adolecentem.jpg')
    }else if (idade < 50){
      //Adulto
      img.setAttribute('src', 'imagens/foto-homem.jpg')
    }else{
      //Idoso
      img.setAttribute('src', 'imagens/foto-idoso.jpg')
    }

  }else if(fsex[1].checked){
    genero = 'Mulher'
    if(idade >=0 && idade < 10){
      img.setAttribute('src','imagens/foto-menina.jpg')
    }else if(idade < 21){
      img.setAttribute('src', 'imagens/foto-adolecentef.jpg')
    }else if(idade < 50){
      img.setAttribute('src', 'imagens/foto-mulher.jpg')
    }else{
      img.setAttribute('src', 'imagens/foto-idosa.jpg')
    }
  }
  res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
}} 