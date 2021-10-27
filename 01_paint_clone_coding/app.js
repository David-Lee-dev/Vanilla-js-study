const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const INITIAL_COLOR = "#2c2c2c"

canvas.width = 500
canvas.height = 700
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 2.5

let painting = false
let filling = false

function startPaing() {
  painting = true
}

function stopPainting() {
  painting = false
}

function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
  if (!painting) {
    ctx.beginPath()
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke();
  }
}

function onMouseUp(event) {
  stopPainting()
}

function onMouseLeave(event) {}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor
  ctx.strokeStyle = color
  ctx.fillStyle = color
}

function handleRangeChange(event) {
  const val = event.target.value
  ctx.lineWidth = val
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false
    mode.innerText = "Fill"
  } else {
    filling = true
    mode.innerText = "Paint"
  }
}

function handleCanvasClick() {
  if (filling === true) {
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPaing)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('click', handleCanvasClick)
}
if (colors) {
  Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))
}
if (range) {
  range.addEventListener("input", handleRangeChange)
}

if (mode) {
  mode.addEventListener("click", handleModeClick)
}
// Array.from 메서드는 객체로부터 배열을 만든다