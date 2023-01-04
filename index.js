
let button = document.querySelector('.colorButton')
let buttonBox = document.querySelector('.colorButtonContainer')
let boxFont = document.querySelector('.buttonText')

function colorValue() {
    return Math.floor(Math.random() * 256)    
}

function colorChange() {
    return 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')'
}
function changeColor() {
  button.style.backgroundColor = colorChange()   
  buttonBox.style.backgroundColor = colorChange()
  boxFont.style.color = 'white';
}

button.addEventListener('click',changeColor)