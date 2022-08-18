const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");

//Array.from 객체를 복사해 새로운 배열을 만든다
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const modeBtn = document.getElementById("mode-btn");
const resetBtn = document.getElementById('reset-btn');
const eraserBtn = document.getElementById('eraser-btn');
const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

context.lineWidth = lineWidth.value;



//유저가 마우스를 클릭한 채로 움직일 때 그린다. 클릭한 곳에서 시작
//mousedown은 마우스가 누른채로 있는 것
let isPainting = false;
let isFilling = false;


function onMove(event) {
  if(isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    return;
  }
    context.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  context.beginPath();
}

//선 width 바꾸기
function onLineWidthChange(event) {
  context.lineWidth = event.target.value;
}

//색 바꾸기
function onColorChange(event) {
  context.strokeStyle = event.target.value;
  context.fillStyle = event.target.value;
}


//지정한 색 바꾸기
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  context.strokeStyle = colorValue;
  context.fillStyle = colorValue;
  color.value = colorValue;
  console.dir(event.target.dataset.color);
}

//모드 바꾸기
function onModeClick() {
  if(isFilling){
    isFilling = false;
    modeBtn.innerText = "Fill";
  }else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

//색 채우기
function onCanvaseClick() {
  if(isFilling){
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

//리셋
function onDestroyClick() {
  context.fillStyle = "white";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

//지우개
function onEraserClick() {
  context.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvaseClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
resetBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);