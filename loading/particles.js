const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1; // Tamaño de 1 a 3
        this.weight = Math.random() * 2 - 1; // Peso para la dirección de la partícula
        this.directionX = Math.random() * 2 - 1; // Dirección en el eje X
    }

    update() {
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 2 - 1;
            this.x = Math.random() * canvas.width * 1.3;
        }
        this.weight += 0.01; // Ajusta esto para cambiar la velocidad de caída
        this.y += this.weight;
        this.x += this.directionX;

        // Añadir una condición para restablecer las partículas que salen fuera del lienzo
        if (this.x < 0 || this.x > canvas.width) this.directionX *= -1;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    for (let i = 0; i < 350; i++) { // Menos partículas pero se puede ajustar
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

init();
animate();
