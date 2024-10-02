// Funkcja otwierająca nową stronę
function openNewPage(url) {
    window.location.href = url; // Przekierowuje do URL przekazanego jako argument
}


// Funkcja otwierająca okno modalne i wyświetlająca szczegóły zdjęcia
function openModal(title, imageUrl) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalTitle = document.getElementById('modalTitle');

    modal.style.display = 'block';
    modalImage.src = imageUrl;
    modalTitle.textContent = title;
}

// Funkcja zamykająca okno modalne
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Funkcja do filtrowania galerii
function filterElement(category) {
    var items = document.getElementsByClassName('portfolio-item');
    for (var i = 0; i < items.length; i++) {
        if (category === 'all') {
            items[i].style.display = 'grid';
        } else {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'grid';
            } else {
                items[i].style.display = 'none';
            }
        }
    }

    // Ustawienie aktywnej klasy na przycisku filtrującym
    var buttons = document.querySelectorAll('.filter-options button');
    buttons.forEach(button => {
        if (button.getAttribute('data-category') === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Zaktualizowanie koloru licznika dla każdego przycisku
    var counts = document.querySelectorAll('.filter-options .category-count');
    counts.forEach(count => {
        if (count.parentElement.getAttribute('data-category') === category) {
            count.style.color = '#FF451B'; // Ustawia kolor tekstu licznika na aktywnym przycisku
        } else {
            count.style.color = ''; // Przywraca domyślny kolor tekstu licznika
        }
    });
}

// Inicjalizacja galerii pokazująca wszystkie elementy domyślnie
filterElement('all');