// Animowane tło
const canvas = document.getElementById('bgCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const dots = [];
    for (let i = 0; i < 80; i++) {
        dots.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            color: Math.random() < 0.5 ? '#00f0ff' : '#FF69B4'
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (const d of dots) {
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
            ctx.fillStyle = d.color;
            ctx.shadowColor = d.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            d.x += d.dx;
            d.y += d.dy;
            if (d.x < 0 || d.x > width) d.dx *= -1;
            if (d.y < 0 || d.y > height) d.dy *= -1;
        }
        requestAnimationFrame(animate);
    }
    animate();
}
