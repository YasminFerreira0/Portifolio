const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const dino = {
    x: 50,
    y: 120,
    width: 30,
    height: 30,
    speed: 5,
};

function drawDino() {
    ctx.fillStyle = "#666";
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDino();

    dino.x += dino.speed;

    if (dino.x > canvas.width) {
        dino.x = -dino.width;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
