let colorName = document.getElementById("color-name");
function changeHex() {
    let randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16)
    console.log(randomHex)
    document.body.style.backgroundColor = randomHex
    colorName.textContent = randomHex
}


