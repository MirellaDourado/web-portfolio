function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generator() {
  // Create Title
  let paletteTitle = document.createElement('h1')
  paletteTitle.innerHTML = 'Paleta de Cores'
  paletteTitle.id = 'title'
  document.body.appendChild(paletteTitle)

  // Create div-color-palette
  let palette = document.createElement('div')
  palette.id = 'color-palette'
  document.body.appendChild(palette)

  // Create input
  let divInput = document.createElement('div')
  divInput.className = 'divInput'

  let newInput = document.createElement('input')
  newInput.id = 'board-size'
  newInput.setAttribute('type', 'number')
  newInput.setAttribute('min', '1')
  newInput.setAttribute('placeholder', 'Mude a largura do quadro abaixo')
  newInput.style.width = '216px'

  // Create the input button
  let newBtn = document.createElement('button')
  newBtn.id = 'generate-board'
  newBtn.innerHTML = 'VQV!'

  document.querySelector('#color-palette').after(divInput)
  divInput.appendChild(newInput)
  newInput.after(newBtn)

  // Creat the Clear Butoon
  let divForBtn = document.createElement('div')
  divForBtn.className = 'divClear'
  let clearBtn = document.createElement('button')
  clearBtn.id = 'clear-board'
  clearBtn.innerText = 'Limpar'
  divInput.after(divForBtn)
  divForBtn.appendChild(clearBtn)
}
generator()

function colors() {
  let colorpalette = document.querySelector('#color-palette')
  for(let index = 0; index < 4; index += 1){
    let colors = document.createElement('div')
    colorpalette.appendChild(colors)
    colors.className = 'color'
    colors.style.border = '1px solid black'
    if(index === 0){
      colors.id = 'black'
      colors.classList = 'color selected'
    }
  }
}
colors()

function paletteColors() {
  let black = document.querySelector('#black')
  black.style.backgroundColor = 'black'

  let blue = black.nextElementSibling
  blue.id = 'blue'
  blue.style.backgroundColor = generateColor()

  let purple = blue.nextElementSibling
  purple.style.backgroundColor = generateColor()
  
  let pink = purple.nextElementSibling
  pink.style.backgroundColor = generateColor()
}
paletteColors()

function createPixels(pixels) {
  let divCenter = document.createElement('div')
  divCenter.id = 'center'
  document.body.appendChild(divCenter)


  let pixelBoard = document.createElement('div')
  pixelBoard.id = 'pixel-board'
  pixelBoard.style.width = ((pixels * 40)+(pixels*2))+ 'px'
  divCenter.appendChild(pixelBoard)
  function eachPixel() {
    for(let index = 0; index < (pixels * pixels); index += 1){
      let pixel = document.createElement('div')
      pixel.className = 'pixel'
      pixel.style.width = '40px'
      pixelBoard.appendChild(pixel)
      pixel.style.backgroundColor = 'white'
    }
  }
  eachPixel()
}
createPixels(5)

const vqvBtn = document.querySelector('#generate-board')
const boardSize = document.querySelector('#board-size')
function PixelSize(){
  let size = boardSize.value
  if (size == '') {
    alert('Board inválido!');
  } else if (size < 5) {
    if (document.querySelector('#pixel-board')) {
      document.querySelector('#pixel-board').remove();
    }
    createPixels(5);
    document.querySelector('#pixel-board').addEventListener('click', pixelColor)
  } else if (size > 50) {
    if (document.querySelector('#pixel-board')) {
      document.querySelector('#pixel-board').remove();
    }
    createPixels(50);
    document.querySelector('#pixel-board').addEventListener('click', pixelColor)
  } else {
    if (document.querySelector('#pixel-board')) {
      document.querySelector('#pixel-board').remove();
    }
    createPixels(size);
    document.querySelector('#pixel-board').addEventListener('click', pixelColor)
  }
}

vqvBtn.addEventListener('click', PixelSize)

const colorPalette = document.querySelector('#color-palette')
function changeColor(color){
  let colorSelected = document.querySelector('.selected')
  colorSelected.classList.toggle('selected')
  color.target.classList.add('selected')
}
colorPalette.addEventListener('click', changeColor)

const pixelBoard = document.querySelector('#pixel-board')
function pixelColor(pixelParam){
  let colorPicked = document.querySelector('.selected')
  if(pixelParam.target.className === 'pixel'){
    pixelParam.target.style.backgroundColor = colorPicked.style.backgroundColor
  }
}
pixelBoard.addEventListener('click', pixelColor)

const clearButton = document.querySelector('#clear-board')
function Clear() {
  let pixels = document.querySelectorAll('.pixel')
  for(let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white'
  }
}
clearButton.addEventListener('click', Clear)