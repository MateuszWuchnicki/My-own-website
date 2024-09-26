document.addEventListener('DOMContentLoaded', function () {
    // Znajdujemy wszystkie przyciski przewijania w modalach
    const scrollButtons = document.querySelectorAll('.scroll-top');

    scrollButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            console.log(`Przycisk ${index + 1} kliknięty`);

            // Pobieramy modal na podstawie nadrzędnego elementu
            const modal = button.closest('.modal').querySelector('.modal-content');

            if (modal) {
                console.log('Przewijanie do góry modalnego okna...');

                // Przewijanie do góry modalnego okna
                modal.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                console.log('Obecna pozycja modalnego okna:', modal.scrollTop);
            } else {
                console.log('Nie znaleziono modalnego okna dla przycisku', index + 1);
            }
        });
    });
});
