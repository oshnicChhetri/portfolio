
const canva = document.querySelector("#canvas");
console.log(canva)

const ctx = canva.getContext("2d");

let particleDecider = 100000;

canva.width = window.innerWidth;
canva.height = window.innerHeight;

let particlesArray = [];

let mouse = {
  x: null,
  y: null,
  radius: (canva.height / 80) * (canva.width / 80),
};

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fill();
  }

  update() {
    if (this.x > canva.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canva.height || this.y < 0) {
      this.directionY = -this.directionY;
    }


    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
  }
}

function init() {
  let numberOfParticles = (canva.height * canva.width) / particleDecider;

  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * (window.innerWidth - size * 4) + size;
    let y = Math.random() * (window.innerHeight - size * 4) + size;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = "rgba(255,255,255,0.5)";

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

function connect() {
  for (let i = 0; i < particlesArray.length; i++) {
    for (let j = i + 1; j < particlesArray.length; j++) {
      let distance =
        (particlesArray[i].x - particlesArray[j].x) *
          (particlesArray[i].x - particlesArray[j].x) +
        (particlesArray[i].y - particlesArray[j].y) *
          (particlesArray[i].y - particlesArray[j].y);

      if (distance < (canva.width / 5) * (canva.height / 5)) {
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canva.width, canva.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

window.addEventListener("click", function (e) {
  let x = e.x;
  let y = e.y;
  let size = Math.random() * 5 + 1; // Random size for the new particle
  let directionX = Math.random() * 5 - 2.5; // Random direction X
  let directionY = Math.random() * 5 - 2.5; // Random direction Y
  let color = "white"; // Color for the particle (can be dynamic if needed)

  // Push the new particle into the particlesArray
  particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
});

let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;
    mouse.radius = (canva.height / 80) * (canva.width / 80);
    particlesArray = [];
    init();
  }, 500);
});

window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});
init();
animate();





