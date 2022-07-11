var corner1 = L.latLng(-25.587216, -53.310178), corner2 = L.latLng(-25.904497, -52.830942), bounds = L.latLngBounds(corner1, corner2);

var map = L.map('map', { maxBounds: bounds, minZoom: 10.5, wheelPxPerZoomLevel: 100000, zoomControl: false }).setView([-25.75, -53.056944444444], 12);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);

var zoom = L.control.zoom({ "position": 'topright' }).addTo(map);

var city = L.geoJSON(dv, { "style": { "fillOpacity": 0 } }).addTo(map);

function click(event) {
  openBenze(event.layer.name);
}

var fGroup = L.featureGroup().addTo(map).on("click", click);

var Genoveva = L.marker([-25.757614, -53.050725]).addTo(fGroup);
Genoveva.name = "Genoveva";

var Elza = L.marker([-25.729627, -53.072821]).addTo(fGroup);
Elza.name = "Elza";

var Nair = L.marker([-25.729792, -53.071775]).addTo(fGroup);
Nair.name = "Nair"

var Silvalina = L.marker([-25.802002, -53.103876]).addTo(fGroup);
Silvalina.name = "Silvalina"

var Dorvalina = L.marker([-25.847174, -53.104749]).addTo(fGroup);
Dorvalina.name = "Dorvalina"

var Juvelina = L.marker([-25.730633, -53.070428]).addTo(fGroup);
Juvelina.name = "Juvelina"

var Catarina = L.marker([-25.727921, -53.061422]).addTo(fGroup);
Catarina.name = "Catarina"

var MariaFer = L.marker([-25.759721, -53.05838]).addTo(fGroup);
MariaFer.name = "MariaFer"

var Juraci = L.marker([-25.740403, -53.057698]).addTo(fGroup);
Juraci.name = "Juraci"

var Terezinha = L.marker([-25.755165, -53.071475]).addTo(fGroup);
Terezinha.name = "Terezinha"

var Oracildo = L.marker([-25.750623, -53.064017]).addTo(fGroup);
Oracildo.name = "Oracildo"

var Marizete = L.marker([-25.758054, -53.059544]).addTo(fGroup);
Marizete.name = "Marizete"

var Isa = L.marker([-25.801456, -53.105232]).addTo(fGroup);
Isa.name = "Isa"

var Josefa = L.marker([-25.741253, -53.053562]).addTo(fGroup);
Josefa.name = "Josefa"

var Josefina = L.marker([-25.7133180000000, -53.2064809722222]).addTo(fGroup);
Josefina.name = "Josefina"

var Sueli = L.marker([-25.7182670000000, -53.1831579722222]).addTo(fGroup);
Sueli.name = "Sueli"

var Soeli = L.marker([-25.7182279722222, -53.1826689722222]).addTo(fGroup);
Soeli.name = "Soeli"

var Mcarmo = L.marker([-25.7626039722222, -53.0732980000000]).addTo(fGroup);
Mcarmo.name = "Mcarmo"

var Marizete2 = L.marker([-25.7487800000000, -53.071212]).addTo(fGroup);
Marizete2.name = "Marizete2"

var Idilia = L.marker([-25.756111, -53.063611]).addTo(fGroup);
Idilia.name = "Idília"

var Marli = L.marker([-25.765638, -53.063364]).addTo(fGroup);
Marli.name = "Marli"

var Nelci = L.marker([-25.756712, -53.063706]).addTo(fGroup);
Nelci.name = "Nelci"

var popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent(e.latlng.toString())
//     .openOn(map);
// }

// map.on('click', onMapClick);
