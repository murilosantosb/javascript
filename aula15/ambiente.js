let num = [5, 2 ,3, 6, 9, 8, 1, 3, 4, 7]
num.sort()
//num.sort()
/*for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */


for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}