let colorAray = ['Red', 'Green', 'Blue', '#ff00ff', 'White']
let currentColor = document
let colorText = document.getElementById('color-name')
function changeColor() {
    let randomColor = colorAray[Math.floor(Math.random() * colorAray.length)]
    console.log(randomColor)
    document.body.style.backgroundColor = randomColor
    colorText.innerText = randomColor
}
