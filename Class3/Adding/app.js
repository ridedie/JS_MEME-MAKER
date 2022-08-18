const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
//Array.from 객체를 복사해 새로운 배열을 만든다
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const modeBtn = document.getElementById("mode-btn");
const resetBtn = document.getElementById('reset-btn');
const eraserBtn = document.getElementById('eraser-btn');
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

context.lineWidth = lineWidth.value;
context.lineCap = "round"; //브러쉬 끝을 둥글게



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

//이미지
function onFlieChange(event) {
  //파일이 배열인 이유는 multiple(파일을 여러 개 업로드) 할 수 있다.
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function() {
    //x, y좌표, width, height 값 지정
    context.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //파일은 비움으로써 한장 올리고 다른 파일 업로드가 가능하다
    fileInput.value = null;
  }
}

//더블클릭
function onDoubleClick(event) {
  const text = textInput.value;
  if(text !=="") {
    context.save(); //현재 상태, 색, 스타일 등 모든 것을 저장
    context.lineWidth = 1;
    context.font = "48px serif";
    context.fillText(text, event.offsetX, event.offsetY);
    context.restore(); //save 했던 상태로 돌아가기
  }
}

//그림 저장하기
//그린 그림은 url로 변환, a태그를 생성해 가짜 링크를 만든 다음 저장한다.
function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "Drawing.jpg";
  a.click();
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

fileInput.addEventListener("change", onFlieChange);
canvas.addEventListener("dblclick", onDoubleClick);
saveBtn.addEventListener("click", onSaveClick);