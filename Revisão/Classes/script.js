class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    informacoesLivro() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log('<---------------------------------------->')
    }
}

// Criando instâncias da classe Livro
const livro1 = new Livro("Aventuras nas Colinas", "Maria Silva", 2010);
const livro2 = new Livro("O Mistério do Relógio Quebrado", "Carlos Oliveira", 2015);
const livro3 = new Livro("Além das Estrelas", "Ana Santos", 2018);
const livro4 = new Livro("Código Secreto", "Pedro Costa", 2022);

// Exibindo as informações dos livros no console
livro1.informacoesLivro();
livro2.informacoesLivro();
livro3.informacoesLivro();
livro4.informacoesLivro();







































/*class Livro{
    constructor(titulo,autor,Ano_de_publicacao){
        this.titulo = titulo
        this.autor = autor
        this.Ano_de_publicacao = Ano_de_publicacao
    }
    informacoesLivro(){
        console.log(`Título: [${this.titulo}]`)
        console.log(`Autor: [${this.autor}]`)
        console.log(`Ano de Publicação: [${this.Ano_de_publicacao}]`)         
    }
}

class Livro1 extends Livro{
    constructor(titulo,autor,Ano_de_publicacao){
        super(titulo,autor,Ano_de_publicacao)
        this.titulo = 'Aventuras nas Colinas'
        this.autor = 'Maria Silva'
        this.Ano_de_publicacao = 2010
    }
    informacoesLivro(){
        
    }
   }    


class Livro2 extends Livro{
    constructor(titulo,autor,Ano_de_publicacao){
        super(titulo,autor,Ano_de_publicacao)
        this.titulo = 'O Mistério do Relogio Quebrado'
        this.autor = 'Carlos Oliveira'
        this.Ano_de_publicacao = 2015

    }
}   

class Livro3 extends Livro{
    constructor(titulo,autor,Ano_de_publicacao){
        super(titulo,autor,Ano_de_publicacao)
        this.titulo = 'Além das Estrelas'
        this.autor = 'Ana Santos'
        this.Ano_de_publicacao = 2018
    }
}

const BaseLivro = new Livro()
const PrimeiroLivro = new Livro1()
const SegundoLivro = new Livro2()
const TerceiroLivro = new Livro3()


console.log(PrimeiroLivro)
console.log(SegundoLivro)
console.log(TerceiroLivro)
*/



