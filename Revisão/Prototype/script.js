function Animal(nome){
   this.nome = nome
}

Animal.prototype.SomDoAnimal = function(){
    console.log('Woh Woh!')
}

const Cachorro = new Animal('Bob')


console.log(Cachorro.nome)
console.log(Cachorro.SomDoAnimal()) 