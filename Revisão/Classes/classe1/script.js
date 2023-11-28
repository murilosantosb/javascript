class Biblioteca{
    constructor(livro,quantidade){
        this.livro = livro
        this.quantidade = quantidade
    }
    Emprestar(){
        if(this.quantidade > 0){
            return 'Sim'
        }else{
            return 'O livro está esgotado!'
        }
    }

    InfoBiblioteca(){
        console.log(`Nome do Livro: ${this.livro} `)
        console.log(`Quantidade disponivel: ${this.quantidade}`)
        console.log(`Autor : ${this.autor}`)
        console.log(`Posso pegar emprestado ? ${this.Emprestar()}`)
        console.log('<--------------------------------------------->')
    }
}

class Livro1 extends Biblioteca {
    constructor(livro,quantidade,autor){
        super(livro,quantidade)
        this.livro = livro
        this.quantidade = quantidade
        this.autor = autor

    }
    getAutor(){
        console.log(this.autor)
    }
    
    
}

class Livro2 extends Biblioteca{
    constructor(livro,quantidade,autor){
        super(livro,quantidade)
        this.autor = autor
    }
    setQuantidade(){
        return ++this.quantidade
    }
}


const livro1 = new Livro1('O poder do Hábito',50,'Charles Duhigg')
const livro2 = new Livro2('A Revolta de Atlas',0,'Ayn Rand')

console.log(livro1.InfoBiblioteca())
console.log(livro2.InfoBiblioteca())
//console.log(livro1.getAutor())
//console.log(livro2.setQuantidade())