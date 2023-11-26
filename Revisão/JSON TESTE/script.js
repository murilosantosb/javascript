let StringJSON = 
    {
        "nome": "Murilo",
        "idade": 30 ,
        "esta_trabalhando": true ,
        "detalher_profissao":{
            "profissao": "Programador",
            "empresa": "Empresa X"
        } ,
        "hobbies":[] 
    }
    

 let obj = {
    nome: 'Murilo',
    idade: 17 ,
    profissao: 'Programador'
 }   

let Objeto = JSON.stringify(obj)

let novoJSON = JSON.parse(Objeto)

console.log(novoJSON)
    
    