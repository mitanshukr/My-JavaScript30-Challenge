const controllerDiv = document.getElementById("controller");
const colorPicker = document.getElementById("colorpicker");
const DefaultcolorBtn = document.getElementById("defaultColorBtn");
const eraseBtn = document.querySelector("#eraseBtn");

const canvas = document.getElementById("draw");
//console.dir(canvas); //Run this command to get all the properties and methods.
//Our main focus in this section is going to be on getContext('2d') property.
//To-Do Task: Learn about the getContext() prooperty of Canvas element.
const ctx = canvas.getContext("2d");
//console.log(ctx); //Run this command and Must watch the properties and methods we have in getContext('2d') method object.

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

const toggleColorPicker = () => {
  if (DefaultcolorBtn.checked) {
    colorPicker.disabled = true;
    colorPicker.style.transform = `translateY(50px)`;
  } else {
    colorPicker.disabled = false;
    colorPicker.style.transform = `translateY(0px)`;
  }
};

const getPenColor = () => {
  let color;
  if (DefaultcolorBtn.checked) {
    hue >= 360 ? (hue = 0) : hue++;
    color = `hsl(${hue}, 100%, 50%)`; //hsl(hue, saturation, lightness)
  } else {
    color = colorPicker.value;
  }
  return color;
};

function erase(e) {
  if (!eraseBtn.checked) return;
  DefaultcolorBtn.checked = false;
  if (!isDrawing) return;
  const eraserWidth = 15; //set the eraser width.
  ctx.clearRect(e.offsetX, e.offsetY, eraserWidth, eraserWidth);
}

function clearAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(e) {
  if (eraseBtn.checked) return;
  if (!isDrawing) return;
  //console.log(e);
  ctx.beginPath();
  ctx.strokeStyle = getPenColor();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", (e) => {
  draw(e);
  erase(e);
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

colorPicker.addEventListener("change", () => (isDrawing = false));
DefaultcolorBtn.addEventListener("change", toggleColorPicker);
eraseBtn.addEventListener("change", erase);
