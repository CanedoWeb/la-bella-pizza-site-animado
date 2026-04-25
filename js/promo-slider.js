document.addEventListener('DOMContentLoaded', () => {
    // Promo Slider
    const promoSlides = document.querySelector('.promo-slides');
    const promoImages = document.querySelectorAll('.promo-slide');
    const prevBtn = document.querySelector('.promo-btn.prev');
    const nextBtn = document.querySelector('.promo-btn.next');
    
    if(promoSlides && promoImages.length > 0) {
        let currentPromoIndex = 0;
        let promoInterval;

        function updatePromoSlider() {
            promoSlides.style.transform = `translateX(-${currentPromoIndex * 100}%)`;
        }

        function nextPromo() {
            currentPromoIndex = (currentPromoIndex + 1) % promoImages.length;
            updatePromoSlider();
        }

        function prevPromo() {
            currentPromoIndex = (currentPromoIndex - 1 + promoImages.length) % promoImages.length;
            updatePromoSlider();
        }

        function startPromoAutoPlay() {
            promoInterval = setInterval(nextPromo, 4000);
        }

        function resetPromoAutoPlay() {
            clearInterval(promoInterval);
            startPromoAutoPlay();
        }

        nextBtn.addEventListener('click', () => {
            nextPromo();
            resetPromoAutoPlay();
        });

        prevBtn.addEventListener('click', () => {
            prevPromo();
            resetPromoAutoPlay();
        });

        startPromoAutoPlay();
    }
});
