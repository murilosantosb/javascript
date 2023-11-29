class Produto{
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco

    }
    calcularDesconto(){
        throw new Error("Método abstrato 'calcularDesconto' deve ser implementado nas subclasses.")
    }
}

class ProdutoEletronico extends Produto{
    constructor(nome,preco){
        super(nome,preco)
        
    }
    calcularDesconto(){
        return (this.preco * 20) / 100
    }
}

class ProdutoAlimenticio extends Produto{
    constructor(nome,preco){
        super(nome,preco)
        
    }
    calcularDesconto(){
        return (this.preco * 10) / 100 
    }
}

const Eletronico = new ProdutoEletronico('TV',2800)
const Alimento = new ProdutoAlimenticio('Contra-Filé',100)

console.log(`Você obteve ${Eletronico.calcularDesconto()} Reais  de Desconto`)
console.log(`Você ganhou 10% de Desconto : ${Alimento.calcularDesconto()} Reais`)

