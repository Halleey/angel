// Confetti efeito
const startConfetti = () => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
    document.body.appendChild(script);
    script.onload = () => {
        setInterval(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 3000); // confete aparece a cada 3 segundos
    };
};

startConfetti();
