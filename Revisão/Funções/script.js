function Carro(marca,modelo,ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano

    this.exibirDetalhes = function(){
        console.log('Marca do carro: ' + this.marca)
        console.log(`Modelo do carro : ${this.modelo}`)
        console.log(`Ano do carro : ${this.ano}`)
        console.log('----------------------------------')
    }
}


let Carro1 = new Carro('Toyota','Corolla',2022)
let Carro2 = new Carro('Ford','Mustang',2021)
let Carro3 = new Carro('Honda','Civic',2023)

console.log(Carro1.exibirDetalhes())
console.log(Carro2.exibirDetalhes())
console.log(Carro3.exibirDetalhes())