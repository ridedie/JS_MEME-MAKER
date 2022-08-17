const canvas = document.querySelector("canvas");

//브러쉬
const context = canvas.getContext("2d");

//CSS뿐만 아니라 js에서도 컨버스 사이즈를 선언해주어야한다.
canvas.width = 800;
canvas.height = 800;

//좌표 0.0은 맨 위쪽, 왼쪽에서 시작된다. 
//fillRect() 사각형 단색으로 꽉 채워 그려준다. x, y, w, h를 적어줄 것
//context.fillRect(50, 50, 100, 200);

//직사각형 선 만들기 fill로 색을 꼭 채워야지만 된다.
context.rect(50, 50, 100, 100);
context.rect(150, 150, 100, 100);
context.rect(250, 250, 100, 100);
//3개의 경로에 있는 사각형 모두 같은 스타일을 적용한다.
context.fill();


//전에 그렸던 경로를 끊고 다시 시작된다.
context.beginPath();
context.rect(300, 300, 100, 100);
context.fillStyle = "green";
context.fill();