function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')
    
    if(num.value.length ==0){
        alert('Você não digitou nada!')
    }else{
        let n = Number(num.value)
        for(let c = 1;c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }

    }
}