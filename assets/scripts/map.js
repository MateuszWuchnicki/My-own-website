        // Inicjalizacja mapy
        var map = L.map('map').setView([50.070267, 19.938301], 12);

        // Dodanie warstwy kafelków do mapy
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Tworzenie niestandardowej ikony
        var customIcon = L.icon({
            iconUrl: 'assets/images/icons/marker.png',
            iconSize: [60, 60], // Rozmiar ikony
            iconAnchor: [30, 60], // Punkt kotwiczenia ikony (środek dolnej krawędzi)
            popupAnchor: [0, -60] // Punkt kotwiczenia popupu
        });

        // Dodanie znacznika na mapie z niestandardową ikoną
        var marker = L.marker([50.085773, 19.896459], {
                icon: customIcon
            }).addTo(map)
            .openPopup();
