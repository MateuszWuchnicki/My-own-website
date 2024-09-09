//// Initialize the map and set its view
//var map = L.map('map').setView([51.505, -0.09], 13);

//// Add a tile layer to the map (this is a basic OpenStreetMap layer)
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//// Add a marker to the map at a specific location
//var marker = L.marker([51.5, -0.09]).addTo(map);

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
var marker = L.marker([50.062757408316024, 19.936777774127684], {
        icon: customIcon
    }).addTo(map)
    .openPopup();


//// Add a popup to the marker
//marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
