
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const path = document.getElementById("stroke-path");
    if (!path) return;

    const L = path.getTotalLength(); // 16221.87px

    path.style.strokeDasharray = L;
    path.style.strokeDashoffset = L;

    // Cada segmento define ATÉ onde a linha está desenhada (dashoffset restante)
    // e quanto scroll ele consome (duration).
    // Regra: caminho íngreme pra baixo = duration alto (cobra "corre" no SVG)
    //        caminho horizontal         = duration baixo (cobra anda devagar)
    //
    // Turning points medidos: 17%, 33%, 50%, 72%, 86%
    //
    // Ratio dy/dx medido por trecho:
    //  0-20%: 1.25 → 0.11   (achata) → duration 2
    // 20-33%: 3.43           (íngreme) → duration 4
    // 33-50%: 0.43 → 7.85   (plano → extremamente íngreme) → duration 5
    // 50-72%: 0.28 → 1.03   (horizontal → 45°) → duration 2
    // 72-86%: 0.56           (moderado) → duration 1.5
    // 86-100%: 0.12          (quase plano) → duration 1

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".content-wrapper",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
        }
    });

    // PESOS DE VELOCIDADE:
    // Pense nesses números como "tempo de tela".
    // Se um trecho está rápido demais, aumente o número dele (ex: de 20 para 50).
    
    tl.to(path, { strokeDashoffset: L * 0.80, ease: "none", duration: 20 }) // Início (Momento)
      .to(path, { strokeDashoffset: L * 0.70, ease: "none", duration: 13 }) // Cardápio
      .to(path, { strokeDashoffset: L * 0.60, ease: "none", duration: 23 }) // Descida íngreme
      .to(path, { strokeDashoffset: L * 0.40, ease: "none", duration: 50 }) // Promoção (MUITO LENTO)
      .to(path, { strokeDashoffset: L * 0.20, ease: "none", duration: 20 }) // Sobre
      .to(path, { strokeDashoffset: 0,        ease: "none", duration: 10 });// Final

});
