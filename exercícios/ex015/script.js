function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('genero')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

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

       }else if (fsex[1].checked){
          genero = 'Mulher'
          if(idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'imagens/foto-menina.jpg')
          }else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'imagens/foto-adolecentef.jpg')
          }else if (idade < 50){
            //Adulta
            img.setAttribute('src', 'imagens/foto-mulher.jpg')
          }else{
            //Idosa
            img.setAttribute('src', 'imagens/foto-idosa.jpg')
          }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)

    }
}