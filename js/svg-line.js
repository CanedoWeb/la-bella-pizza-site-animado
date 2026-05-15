gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // MOBILE — Anima o minhoquinha
        const pathMob = document.getElementById("stroke-path-mob");
        if (!pathMob) return;

        const Lm = pathMob.getTotalLength();
        pathMob.style.strokeDasharray = Lm;
        pathMob.style.strokeDashoffset = Lm;

        const tlMob = gsap.timeline({
            scrollTrigger: {
                trigger: ".content-wrapper",
                start: "top 80%",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        tlMob.to(pathMob, { strokeDashoffset: Lm * 0.90, ease: "none", duration: 18 })  // Conceito
             .to(pathMob, { strokeDashoffset: Lm * 0.85, ease: "none", duration: 8 }) // Momento
             .to(pathMob, { strokeDashoffset: Lm * 0.65, ease: "none", duration: 5 })  // Cardápio
             .to(pathMob, { strokeDashoffset: Lm * 0.50, ease: "none", duration: 10 })  // Descida
             .to(pathMob, { strokeDashoffset: Lm * 0.35, ease: "none", duration: 21 }) // Promoção
             .to(pathMob, { strokeDashoffset: Lm * 0.18, ease: "none", duration: 20 }) // Sobre
             .to(pathMob, { strokeDashoffset: 0,          ease: "none", duration: 11 });// Final

    } else {
        // DESKTOP — Anima o minhocão original
        const path = document.getElementById("stroke-path");
        if (!path) return;

        const L = path.getTotalLength(); // 16221.87px
        path.style.strokeDasharray = L;
        path.style.strokeDashoffset = L;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".content-wrapper",
                start: "top 80%",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        tl.to(path, { strokeDashoffset: L * 0.90, ease: "none", duration: 10 }) // Conceito (Reto)
            .to(path, { strokeDashoffset: L * 0.80, ease: "none", duration: 18 }) // Início (Médio)
            .to(path, { strokeDashoffset: L * 0.70, ease: "none", duration: 4 })  // Cardápio (Rápido)
            .to(path, { strokeDashoffset: L * 0.60, ease: "none", duration: 5 })  // Descida (Médio)
            .to(path, { strokeDashoffset: L * 0.40, ease: "none", duration: 20 }) // Promoção (Rápido)
            .to(path, { strokeDashoffset: L * 0.20, ease: "none", duration: 22 }) // Sobre (Médio)
            .to(path, { strokeDashoffset: 0,         ease: "none", duration: 12 });// Final
    }
});