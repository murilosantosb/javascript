function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')

    if(num.value.length ==0 ){
        alert('Você não digitou nada!')
    }else{
        let n = Number(num.value)
        let c = 1
        while(c <= 10){
           let item = document.createElement('option') // Adicionado um Elemento filho com JS
           item.text = `${n} x ${c} = ${n * c}`
           tab.appendChild(item) // Adicionando creatElement dentro da tabuada
           c++
        }
    }
}