const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
canvas.width = 800;
canvas.height = 800;


//집 만들기
context.fillRect(200, 200, 50, 200);
context.fillRect(400, 200, 50, 200);
context.lineWidth = 2;
context.fillRect(300, 300, 50, 100);
context.fillRect(200, 200, 200, 20);
context.moveTo(200, 200);
context.lineTo(325, 100);
context.lineTo(450, 200);
context.fill();

