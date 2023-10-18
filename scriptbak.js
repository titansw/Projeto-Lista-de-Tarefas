let tarefasbak = []
let tarefas
let linhaP
let delet
let result-div
let tarefa = document.getElementById("tarefa")
const results = document.getElementById("result")

function addTarefabak() {
    if (tarefa.value === "") return alert("Digite uma tarefa")

    tarefas.push(tarefa.value)

    result-div = document.createElement("div")
    result-div.classList = "results"

    linhaP = document.createElement("p")
    linhaP.classList = "notChecked"

    deletbtn = document.createElement("button")
    deletbtn.setAttribute('type', 'submit')

    tarefas.forEach((el, index) => {
        linhaP.innerHTML = `<span class="material-symbols-outlined">circle</span> ${el}`
        linhaP.setAttribute('id', `tarefa.${index}`)
        linhaP.setAttribute('onclick', `checked(${index})`)

        result-div.setAttribute('id', `div-tarefa.${index}`)

        deletbtn.setAttribute('onclick', `delTarefa(${index})`)
    })

    deletbtn.innerHTML = `<span class="material-symbols-outlined">delete</span> Deletar`

    results.appendChild(result-div)
    result-div.appendChild(linhaP)
    result-div.appendChild(deletbtn)
    tarefa.value = ""
}

function delTarefa(index) {
    //result = document.getElementById(`div-tarefa.${index}`)
    document.querySelectorAll('.results').forEach(el => el.remove())

    //result.remove()
    tarefas.splice(index, 1)

    tarefas.forEach((el, index) => {
        result-div = document.createElement("div")
        result-div.classList = "results"

        linhaP = document.createElement("p")
        linhaP.classList = "notChecked"

        deletbtn = document.createElement("button")
        deletbtn.setAttribute('type', 'submit')

        linhaP.innerHTML = `<span class="material-symbols-outlined">circle</span> ${el}`
        linhaP.setAttribute('id', `tarefa.${index}`)
        linhaP.setAttribute('onclick', `checked(${index})`)

        result-div.setAttribute('id', `div-tarefa.${index}`)

        deletbtn.setAttribute('onclick', `delTarefa(${index})`)

        deletbtn.innerHTML = `<span class="material-symbols-outlined">delete</span> Deletar`

        results.appendChild(result-div)
        result-div.appendChild(linhaP)
        result-div.appendChild(deletbtn)
    })
}

function checked(index) {
    linhaP = document.getElementById(`tarefa.${index}`)

    if (linhaP.className === 'notChecked') {
        linhaP.classList = "checked"
        linhaP.innerHTML = `<span class="material-symbols-outlined">check_circle</span> ${tarefas[index]}`
    } else {
        linhaP.classList = "notChecked"
        linhaP.innerHTML = `<span class="material-symbols-outlined">circle</span> ${tarefas[index]}`
    }
}

function editTarefa() {
}