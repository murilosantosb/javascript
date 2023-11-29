class FormaGeometrica {
    calcularArea() {
        // Implementação genérica para formas geométricas
        return 0;
    }
}

class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}

class Losango extends FormaGeometrica{
    constructor(diagonal_maior,diagonal_menor){
        super();
        this.Di = diagonal_maior;
        this.d = diagonal_menor;
    }
    calcularArea(){
        return (this.Di * this.d) / 2
    }
}

const quadrado = new Quadrado(4);
const circulo = new Circulo(3);
const losango = new Losango(12,8);

console.log(quadrado.calcularArea());  
console.log(circulo.calcularArea());   
console.log(losango.calcularArea()); 

/*
function calcular(a,b){
    if(arguments.length === 2){
        return a + b
    }else if(arguments.length === 1){
        return a * 2
    }else{
        return 0
    }
}
calcular(20,40)
console.log(calcular(200,100)) */