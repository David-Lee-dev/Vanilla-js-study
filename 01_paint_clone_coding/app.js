const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")

canvas.width = 500
canvas.height = 700
ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5

let painting = false

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
}

function handleRangeChange(event) {
  const val = event.target.value
  ctx.lineWidth = val
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPaing)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
if (colors) {
  Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))
}
if (range) {
  range.addEventListener("input", handleRangeChange)
}
// Array.from 메서드는 객체로부터 배열을 만든다