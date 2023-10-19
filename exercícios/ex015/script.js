function verificar(){
  let data = new Date
  let ano = data.getFullYear()
  let fano = document.getElementById('iano')
  let res = document.getElementById('res')

  if(fano.value.length == 0 || fano.value > ano){
    alert('Verifique e tente novamente!')
  }else{
    let fsex = document.getElementsByName('genero')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')

    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >=0 && idade < 10){
      img.setAttribute('src','imagens/foto-menino.jpg')
      res.innerHTML = `Identificamos um menino com ${idade} anos`
    }else if(idade < 21){
      img.setAttribute('src', 'imagens/foto-adolecentem.jpg')
      res.innerHTML = `Identificamos um adolecente com ${idade} anos`
    }else if(idade < 55){
       img.setAttribute('src', 'imagens/foto-homem.jpg')
       res.innerHTML = `Identificamos um homem com ${idade} anos`
    }else{
      img.setAttribute('src','imagens/foto-idoso.jpg')
      res.innerHTML = `Identificamos um idoso com ${idade} anos`
    }


  } else if(fsex[1].checked){
    genero = 'Mulher'
    if(idade >= 0 && idade <10){
      img.setAttribute('src','imagens/foto-menina.jpg')
      res.innerHTML = `Identificamos uma menina com ${idade} anos`
    }else if(idade < 21){
      img.setAttribute('src','imagens/foto-adolecentef.jpg')
      res.innerHTML = `Identificamos uma adolecente com ${idade} anos`
    }else if(idade < 55){
      img.setAttribute('src','imagens/foto-mulher.jpg')
      res.innerHTML = `Identificamos uma mulher com ${idade} anos`
    }else{
      img.setAttribute('src','imagens/foto-idosa.jpg')
      res.innerHTML = `Identificamos uma idosa com ${idade} anos`
    }
  }
  
 // res.innerHTML = `Identificamos ${genero} com ${idade} anos`
  res.appendChild(img)

} } 