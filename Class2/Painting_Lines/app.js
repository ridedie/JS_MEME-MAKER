const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
canvas.width = 800;
canvas.height = 800;

context.lineWidth = 2;

//마우스가 움직일 때마다 그린다
const colors = [
    "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

function onClick(event) {
    context.beginPath();
    context.moveTo(400, 400);
    const color = colors[Math.floor(Math.random() * colors.length)];
    context.strokeStyle = color;
   context.lineTo(event.offsetX, event.offsetY);
   context.stroke();
}
canvas.addEventListener("mousemove", onClick);