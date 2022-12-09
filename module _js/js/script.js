const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
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
    const btn = document.createElement('button')
    li.className = "li"
    li.textContent = value

    
    btn.className = "btn"
    btn.textContent = 'delete'
    li.appendChild(btn)
    btn.addEventListener('click', e => {
        i--
        total.textContent = i
        result.removeChild(li)
        
    })
    li.addEventListener('click', e => {
        li.classList.toggle("li-active")
    })
    total.textContent = i
    result.appendChild(li)
}