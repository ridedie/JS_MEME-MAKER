const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
canvas.width = 800;
canvas.height = 800;

context.moveTo(50, 50);
context.lineTo(150, 50);
context.lineTo(150, 150);
context.lineTo(50, 150);
context.lineTo(50, 50);
context.fill();