document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.carousel-indicator');

    let currentIndex = 0;
    const maxIndex = 7; // 10 elements minus 3 visible = 7

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarouselPosition();
        }
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.getAttribute('data-index'));
            updateCarouselPosition();
        });
    });

    function updateCarouselPosition() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}px)`; // Move by 100px (width of one item)
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    updateIndicators();
});
