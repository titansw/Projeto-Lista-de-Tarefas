const results = document.getElementById("result")
let tarefa = document.getElementById("tarefa")
let linhaP
let delet
let deletbtn
let resultDiv
let count = 0
let span

function addTarefa() {
    if (tarefa.value === "") return alert("Digite uma tarefa")

    count++;

    resultDiv = document.createElement("div")
    resultDiv.setAttribute('id', `div.${count}`)
    resultDiv.classList = "results"

    span = document.createElement("div")
    /* span.classList = "material-symbols-outlined"
    span.innerHTML = `circle` */
    span.classList = "notChecked"
    span.setAttribute('id', `icon`)
    span.innerHTML = `<span class="material-symbols-outlined">circle</span>`

    linhaP = document.createElement("p")
    linhaP.classList = "notChecked"

    linhaP.innerHTML = `${tarefa.value}`
    linhaP.setAttribute('id', `${count}`)
    resultDiv.setAttribute('onclick', `checked(${count})`)

    delet = document.createElement("div")
    delet.classList = "deletBtn"
    deletbtn = document.createElement("button")
    deletbtn.setAttribute('type', 'submit')
    deletbtn.setAttribute('onclick', `delTarefa(${count})`)
    deletbtn.innerHTML = `<span class="material-symbols-outlined">delete</span> Deletar`

    results.appendChild(resultDiv)
    resultDiv.appendChild(span)
    resultDiv.appendChild(linhaP)
    resultDiv.appendChild(delet)
    delet.appendChild(deletbtn)
    tarefa.value = ""
    tarefa.focus()
}

function delTarefa(id) {
    let del = document.getElementById(`div.${id}`)
    del.remove()
}

function checked(id) {
    let divItem = document.getElementById(`div.${id}`)
    let divSpan = divItem.querySelector('div')
    let span = divSpan.querySelector('span')
    let item = document.getElementById(`${id}`);
    let classe = item.getAttribute('class');

    if (classe == "notChecked") {
        item.classList = "checked"
        divSpan.classList = "checked"
        span.innerHTML = "check_circle"
    } else {
        item.classList = "notChecked"
        divSpan.classList = "notChecked"
        span.innerHTML = "circle"
    }
}