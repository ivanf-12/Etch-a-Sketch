const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'rgb(0, 0, 0)';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = 1; //1:colorMode, 2:rainbowMode, 3:eraserMode
let currentRainbow = false;
let currentMouse = false;
let currentEraser = false;

const grid = document.getElementById("grid");
const sizeButton = document.getElementById("size-button");
const colorButtonContainer = document.getElementById("color-button-container");
const colorButton = document.getElementById("color-button");
const rainbowButton = document.getElementById("rainbow-button");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const colorModeButton = document.getElementById("color-mode-button");

sizeButton.onclick = ()=>{resizeGrid()};
colorButtonContainer.onclick = ()=>{colorButton.click()};
colorButton.onchange = (e)=>{setColor(e.target.value)};
clearButton.onclick = ()=>{clearGrid()};
colorModeButton.onclick = ()=>{setMode(1)};
rainbowButton.onclick = ()=>{setMode(2)};
eraserButton.onclick = ()=>{setMode(3)};

function setColor(newColor) {
  colorButtonContainer.style.backgroundColor = newColor;
  currentColor = newColor;
}

function setMode(value) {
  currentMode = value;
  if(value===1) {
    colorModeButton.classList.add("active-button");
    rainbowButton.classList.remove("active-button");
    eraserButton.classList.remove("active-button");
  }
  else if(value===2) {
    rainbowButton.classList.add("active-button");
    colorModeButton.classList.remove("active-button");
    eraserButton.classList.remove("active-button");
  }
  else {
    eraserButton.classList.add("active-button");
    colorModeButton.classList.remove("active-button");
    rainbowButton.classList.remove("active-button");
  }
}

function mouseDown() {
  currentMouse = true;
}

function mouseUp() {
  currentMouse = false;
}

function hold(e) {
  if(!currentMouse){ //mouse isn't hold
    return;
  }
  if(currentMode===1) {
    e.target.style.backgroundColor = currentColor;
  }
  else if(currentMode===2) {
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
  else{
    e.target.style.backgroundColor = 'white';
  }
}

function clicks(e) {
  if(currentMode===1) {
    e.target.style.backgroundColor = currentColor;
  }
  else if(currentMode===2) {
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
  else{
    e.target.style.backgroundColor = 'white';
  }
}

function setupGrid(currentSize) {
  grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
  for(let i=0; i<currentSize*currentSize; ++i) {
    const gridElement = document.createElement('div');
    gridElement.classList.add("grid-element");
    gridElement.addEventListener('click', clicks);
    gridElement.addEventListener('mouseover', hold);
    gridElement.addEventListener('mousedown', mouseDown);
    gridElement.addEventListener('mouseup', mouseUp);
    gridElement.style.backgroundColor = 'white';
    grid.appendChild(gridElement);
  }
}

function resizeGrid() {
  grid.innerHTML = '';
  currentSize = prompt("", 16);
  setupGrid(currentSize);
}

function clearGrid() {
  const grids = document.querySelectorAll('.grid-element');
  grids.forEach((grid) => {
    grid.style.backgroundColor = 'white';
  });
}

setupGrid(currentSize);