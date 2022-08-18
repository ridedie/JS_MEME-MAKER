const lineWidth = document.querySelector("#line-width");
const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
canvas.width = 800;
canvas.height = 800;

context.lineWidth = lineWidth.value;



//유저가 마우스를 클릭한 채로 움직일 때 그린다. 클릭한 곳에서 시작
//mousedown은 마우스가 누른채로 있는 것
let isPainting = false;


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

function onLineWidthChange(event) {
  console.log(event.target.value);
  context.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);


lineWidth.addEventListener("change", onLineWidthChange);