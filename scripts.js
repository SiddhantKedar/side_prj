function startExperience() {
    const heartContainer = document.querySelector('.heart-container');
    const message = document.querySelector('.message');
    const audio = document.getElementById('heartbeat');
    
    // Animate heart container
    heartContainer.style.transform = 'scale(2)';
    heartContainer.style.opacity = '0';
    
    // Create break effect
    createParticles();
    
    // Show message
    setTimeout(() => {
        message.classList.remove('hidden');
        audio.pause();
    }, 1000);
    
    // Play heartbeat sound
    audio.play();
}

function createParticles() {
    const particles = document.querySelector('.particles');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '💖';
        particle.style.position = 'absolute';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${2 + Math.random() * 3}s infinite`;
        particles.appendChild(particle);
    }
}

function moveButton() {
    const btn = document.querySelector('.no-btn');
    btn.style.transform = `translate(
        ${Math.random() * 100 - 50}px,
        ${Math.random() * 100 - 50}px
    )`;
    btn.innerHTML = ['Maybe? 😏', 'Try Again! 😉', 'Yes! 😍'][Math.floor(Math.random()*3)];
}

function celebrate() {
    // Add celebration effects
    const message = document.querySelector('.message');
    message.innerHTML = `
        <h1>Yay! 😍<br>You've Made Me So Happy!</h1>
        <div class="confetti"></div>
    `;
    
    // Add confetti animation
    createConfetti();
}

function createConfetti() {
    // Add confetti creation logic
}
