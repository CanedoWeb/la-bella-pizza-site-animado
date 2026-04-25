let intersectingCards = [];
let animTimeout = null;

const cardObserver = new IntersectionObserver((entries) => {
    let triggered = false;

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!entry.target.classList.contains('visible')) {
                entry.target.classList.add('visible');
                intersectingCards.push(entry.target);
                triggered = true;
            }
        } else {
            // Saiu da tela: reseta o estado para poder animar de novo
            entry.target.classList.remove('visible');
            gsap.set(entry.target, { scale: 0.4, opacity: 0, overwrite: "auto" });
            
            // Remove do array caso tenha saído antes da animação tocar
            intersectingCards = intersectingCards.filter(c => c !== entry.target);
        }
    });

    if (triggered) {
        if (animTimeout) clearTimeout(animTimeout);
        animTimeout = setTimeout(() => {
            if (intersectingCards.length > 0) {
                gsap.fromTo(intersectingCards, 
                    { scale: 0.4, opacity: 0 }, 
                    { 
                        scale: 1, 
                        opacity: 1, 
                        duration: 0.8, 
                        ease: "elastic.out(1, 0.75)", // Mais suave que o 0.4 original
                        stagger: 0.15, // Efeito cascata (stagger)
                        overwrite: "auto" 
                    }
                );
                intersectingCards = [];
            }
        }, 50);
    }
}, { threshold: 0.15 });

// Função global para observar cards gerados dinamicamente
window.observeCard = function(card) {
    cardObserver.observe(card);
}

// Observar cards hardcoded quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        cardObserver.observe(card);
    });
});
