        function initMap() {
            // Inicjalizacja mapy
            var krakow = { lat: 50.0705, lng: 19.9332 };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: krakow
            });

            // Tworzenie niestandardowej ikony
            var customIcon = {
                url: 'img/navigator.png', // URL do obrazka
                scaledSize: new google.maps.Size(50, 50), // Rozmiar ikony
                origin: new google.maps.Point(0, 0), // Początek obrazu
                anchor: new google.maps.Point(25, 50) // Punkt kotwiczenia ikony (środek dolnej krawędzi)
            };

            // Dodanie znacznika na mapie z niestandardową ikoną
            var marker = new google.maps.Marker({
                position: krakow,
                map: map,
                icon: customIcon,
                title: 'Kraków, ul. Radzikowskiego'
            });

            var infowindow = new google.maps.InfoWindow({
                content: 'Kraków'
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });

            // Automatycznie otwiera popup
            infowindow.open(map, marker);
        }