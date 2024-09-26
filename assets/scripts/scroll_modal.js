document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    const modal = document.getElementById('modal-scroll');

    scrollToTopButton.addEventListener('click', function () {
        console.log('Przewijanie do góry modalnego okna...');
        
        // Przewijanie do góry modalnego okna
        modal.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        console.log('Obecna pozycja modalnego okna:', modal.scrollTop);
    });
});
