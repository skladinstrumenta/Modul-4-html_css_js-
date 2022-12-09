const requestUrl = "https://jsonplaceholder.typicode.com/todos"

const xhr = new XMLHttpRequest()
xhr.open("GET", requestUrl)
xhr.send()

const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
const submit = document.querySelector('#submit')


let i = 0

btn.addEventListener('click', (e) => {
    if (input.value ==="") return 
    // result.innerHTML += `<li>${input.value}</li>`
    createDeleteElement(input.value)
    input.value = ""
})

function createDeleteElement(value) {
    i++
    console.log(input.value)

    const li = document.createElement('li')
    const checkbox = document.createElement("input")
    const inp = document.createElement("input")
    const btn = document.createElement('button')
    const redact = document.createElement("button")
    
    li.className = "li"

    checkbox.className = 'checkbox'
    checkbox.type = 'checkbox'


    inp.className = "inp"
    inp.value = value
    inp.disabled = "true"
    // inp.style.border = "5px solid #fff"


    redact.className = "btnred"
    redact.innerHTML = '&#128393'
        
    btn.className = "btndel"
    btn.textContent = 'X'

    li.appendChild(checkbox)
    li.appendChild(inp)
    li.appendChild(redact)
    li.appendChild(btn)
    btn.addEventListener('click', e => {
        i--
        total.textContent = i
        result.removeChild(li)
        
    })

    total.textContent = i
    result.appendChild(li)
    
    redact.addEventListener("click", () =>{
        inp.disabled = false
        checkbox.checked = false
        inp.style.textDecoration = "none";
    } )
    inp.addEventListener('focusout', () =>{
        inp.disabled = true
    })

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            inp.style.textDecoration = "line-through";
            inp.disabled = true
        } 
        else {
            inp.style.textDecoration = "none";
        }
    })
    
    
}
submit.addEventListener('click', () =>{
    console.log("clicked on submit")
    let liss = document.querySelectorAll(".li")
    for (item of liss){
        item.remove()
    }
    i = 0
    total.textContent = i
})