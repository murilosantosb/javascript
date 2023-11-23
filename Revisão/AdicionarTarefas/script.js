let tarefa = document.querySelector('#itarefa')
let hora = document.querySelector('#ihora')
let btn_add = document.querySelector('#btn_add')
const TarefasAdicionadas = document.querySelector('#iselecao')




btn_add.addEventListener('click',(evt)=>{
  listaDeTarefas.adicionarTarefa()
})

const listaDeTarefas  = {
    Tarefa: tarefa ,
    Hora: hora ,
    adicionarTarefa(){
        let tarefas = document.createElement('option')
        tarefas.innerHTML = `Tarefa: ${listaDeTarefas.Tarefa.value} <br> Hora de Realizar: ${listaDeTarefas.Hora.value}`
        TarefasAdicionadas.appendChild(tarefas)
    }
    
}

