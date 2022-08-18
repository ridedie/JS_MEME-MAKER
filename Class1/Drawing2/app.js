const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
canvas.width = 800;
canvas.height = 800;

//사람 형체 만들기

//팔과 몸통
context.fillRect(215 - 40, 200 - 26, 15, 100);
context.fillRect(350 - 40, 200 - 26, 15, 100);
context.fillRect(260 - 40, 200 - 26, 60, 200);

//머리
context.arc(250, 120, 50, 0, 2 * Math.PI);
context.fill();

//눈
context.beginPath();
context.fillStyle="green"
context.arc(265, 100, 8, 0, 2 * Math.PI);
context.arc(225, 100, 8, 0, 2 * Math.PI);
context.fill();