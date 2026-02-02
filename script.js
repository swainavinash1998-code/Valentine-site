const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
    alert('Yay! I knew you would say yes! Meet me soon? 💕');
});

noBtn.addEventListener('click', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * 90 + '%';
    noBtn.style.top = Math.random() * 90 + '%';
    noBtn.textContent = ['Think again! 💖', 'Are you sure? 😏', 'No way!'][Math.floor(Math.random() * 3)];
    yesBtn.style.transform = 'scale(1.5)';
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);
