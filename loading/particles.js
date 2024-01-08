const particleContainer = document.getElementById('particle-container');

for (let i = 0; i < 1000; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * -20;
    
    particle.style.setProperty('--x', `${Math.random() * 100 - 50}vw`);
    particle.style.setProperty('--y', `${Math.random() * 100 - 50}vh`);
    
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particleContainer.appendChild(particle);
}
