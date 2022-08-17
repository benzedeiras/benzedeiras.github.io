var corner1 = L.latLng(-25.5872, -53.3101), corner2 = L.latLng(-25.9044, -52.8309), bounds = L.latLngBounds(corner1, corner2);

var map = L.map('map', { maxBounds: bounds, minZoom: 10.5, wheelPxPerZoomLevel: 100000, zoomControl: false }).setView([-25.75, -53.0569], 12);

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

var Genoveva = L.marker([-25.75702182674423, -53.051080969872885]).addTo(fGroup);
Genoveva.name = "Genoveva";

var Elza = L.marker([-25.73034122683554, -53.073711958179814]).addTo(fGroup);
Elza.name = "Elza";

var Nair = L.marker([-25.73092706338662, -53.07193991962869]).addTo(fGroup);
Nair.name = "Nair";

var Silvalina = L.marker([-25.801404666946134, -53.10397578119276]).addTo(fGroup);
Silvalina.name = "Silvalina";

var Dorvalina = L.marker([-25.847403917054493, -53.10496825863532]).addTo(fGroup);
Dorvalina.name = "Dorvalina";

var Juvelina = L.marker([-25.73180890028589, -53.070171666991705]).addTo(fGroup);
Juvelina.name = "Juvelina";

var Catarina = L.marker([-25.727446231362457, -53.06123354651443]).addTo(fGroup);
Catarina.name = "Catarina";

var MariaFer = L.marker([-25.75901752773647, -53.05842282641475]).addTo(fGroup);
MariaFer.name = "MariaFer";

var Juraci = L.marker([-25.739324625100124, -53.057880093500536]).addTo(fGroup);
Juraci.name = "Juraci";

var Terezinha = L.marker([-25.75577386880672, -53.07061785260513]).addTo(fGroup);
Terezinha.name = "Terezinha";

var Oracildo = L.marker([-25.751251244765324, -53.064060932400245]).addTo(fGroup);
Oracildo.name = "Oracildo";

var Marizete = L.marker([-25.757005537763792, -53.059038333026315]).addTo(fGroup);
Marizete.name = "Marizete";

var Isa = L.marker([-25.800798063020654, -53.10429993535713]).addTo(fGroup);
Isa.name = "Isa";

var Josefa = L.marker([-25.74003103164176, -53.05241770674142]).addTo(fGroup);
Josefa.name = "Josefa";

var Josefina = L.marker([-25.712744365303855, -53.20587419367199]).addTo(fGroup);
Josefina.name = "Josefina";

var Sueli = L.marker([-25.71828768487749, -53.183994324043354]).addTo(fGroup);
Sueli.name = "Sueli";

var Soeli = L.marker([-25.718005744770643, -53.183003803710285]).addTo(fGroup);
Soeli.name = "Soeli";

var Mcarmo = L.marker([-25.763949251018815, -53.07319151067303]).addTo(fGroup);
Mcarmo.name = "Mcarmo";

var Marizete2 = L.marker([-25.749120925494182, -53.0712225881222]).addTo(fGroup);
Marizete2.name = "Marizete2";

var Idilia = L.marker([-25.755504359189583, -53.063450645044774]).addTo(fGroup);
Idilia.name = "Idilia";

var Marli = L.marker([-25.765253219177662, -53.0639293034225]).addTo(fGroup);
Marli.name = "Marli";

var Nelci = L.marker([-25.75642667195912, -53.063816333202865]).addTo(fGroup);
Nelci.name = "Nelci";

var Margarida = L.marker([-25.751127824636704, -53.10218031510588]).addTo(fGroup);
Margarida.name = "Margarida";

var Elizia = L.marker([-25.803446866543027, -53.10773671995548]).addTo(fGroup);
Elizia.name = "Elizia";

var popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent(e.latlng.toString())
//     .openOn(map);
// }

// map.on('click', onMapClick);
