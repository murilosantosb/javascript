function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Você não digitou nada!')
    }else{
        let n = Number(num.value)
        let c = 1
        while(c <= 10){
         let numero =  document.createElement('option')
         numero.text = `${n} x ${c} = ${n * c}`
          tab.appendChild(numero)
          c++
        }
    }
}