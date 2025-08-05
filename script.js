const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart() {
  const size = Math.random() * 20 + 10;
  hearts.push({
    x: Math.random() * canvas.width,
    y: -size,
    size: size,
    speed: Math.random() * 2 + 1,
    opacity: Math.random(),
  });
}

function drawHeart(heart) {
  ctx.save();
  ctx.globalAlpha = heart.opacity;
  ctx.translate(heart.x, heart.y);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -heart.size / 2, -heart.size, -heart.size / 2, -heart.size, 0);
  ctx.bezierCurveTo(-heart.size, heart.size / 2, 0, heart.size, 0, heart.size * 1.5);
  ctx.bezierCurveTo(0, heart.size, heart.size, heart.size / 2, heart.size, 0);
  ctx.bezierCurveTo(heart.size, -heart.size / 2, 0, -heart.size / 2, 0, 0);
  ctx.fillStyle = "rgba(255, 0, 100, 1)";
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.1) {
    createHeart();
  }

  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    heart.y += heart.speed;
    drawHeart(heart);

    if (heart.y > canvas.height + heart.size) {
      hearts.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function showLove() {
  alert("Aku sayang kamu lebih dari apapun 💞");
}
