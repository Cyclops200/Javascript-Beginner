const button = document.querySelector('button')
const body = document.querySelector('body')
const text = document.querySelector('p')
const colors = ['#505050', '#fff', '#abcdef']
const colors2 = ['#6d9cf2', '#6df299', 'fff']

body.style.backgroundColor = '#24252A'
button.addEventListener('click', changeBackground)

text.style.color = "#fff"
button.addEventListener('click', changeColor)

function changeColor() {
    const colorIndex = parseInt(Math.random() * colors2.length)
    text.style.color = colors2[colorIndex]
}

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}