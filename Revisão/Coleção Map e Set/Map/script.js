const Contatos = new Map()

let todosContatos = [
    Contatos.set('Murilo','11 97704-7866'),
    Contatos.set('João','11 98247-3215'),
    Contatos.set('Maria','11 85365-7464')
]

console.log(Contatos.get('Maria'))

console.log(Contatos)