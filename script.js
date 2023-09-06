let tarefas = []
let linha
let delet
let result
let tarefa = document.getElementById("tarefa")
const results = document.getElementById("result")

function addTarefa() {
    if (tarefa.value === "") return alert("Digite uma tarefa")

    tarefas.push(tarefa.value)

    result = document.createElement("div")
    result.classList = "results"

    linha = document.createElement("p")
    linha.classList = "notChecked"

    delet = document.createElement("button")
    delet.setAttribute('type', 'submit')

    tarefas.forEach((el, index) => {
        linha.innerHTML = `<span class="material-symbols-outlined">circle</span> ${el}`
        linha.setAttribute('id', `tarefa.${index}`)
        linha.setAttribute('onclick', `checked(${index})`)

        result.setAttribute('id', `div-tarefa.${index}`)

        delet.setAttribute('onclick', `delTarefa(${index})`)
    })

    delet.innerHTML = `<span class="material-symbols-outlined">delete</span> Deletar`

    results.appendChild(result)
    result.appendChild(linha)
    result.appendChild(delet)
    tarefa.value = ""
}

function delTarefa(index) {
    //result = document.getElementById(`div-tarefa.${index}`)
    document.querySelectorAll('.results').forEach(el => el.remove())

    //result.remove()
    tarefas.splice(index, 1)
    
    tarefas.forEach((el, index) => {
        result = document.createElement("div")
        result.classList = "results"

        linha = document.createElement("p")
        linha.classList = "notChecked"

        delet = document.createElement("button")
        delet.setAttribute('type', 'submit')

        linha.innerHTML = `<span class="material-symbols-outlined">circle</span> ${el}`
        linha.setAttribute('id', `tarefa.${index}`)
        linha.setAttribute('onclick', `checked(${index})`)

        result.setAttribute('id', `div-tarefa.${index}`)

        delet.setAttribute('onclick', `delTarefa(${index})`)

        delet.innerHTML = `<span class="material-symbols-outlined">delete</span> Deletar`

        results.appendChild(result)
        result.appendChild(linha)
        result.appendChild(delet)
    })
}

function checked(index) {
    linha = document.getElementById(`tarefa.${index}`)

    if (linha.className === 'notChecked') {
        linha.classList = "checked"
        linha.innerHTML = `<span class="material-symbols-outlined">check_circle</span> ${tarefas[index]}`
    } else {
        linha.classList = "notChecked"
        linha.innerHTML = `<span class="material-symbols-outlined">circle</span> ${tarefas[index]}`
    }
}

function editTarefa() {


}