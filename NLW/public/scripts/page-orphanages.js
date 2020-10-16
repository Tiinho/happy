//tipo de daados
//String ""
// Numberr 01
// Objetct {}
// Boolean true or false
// Array []

const map = L.map("mapid").setView([-12.6996726, -38.325868], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


function addMarker({id, name, lat, lng}) {

  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>`
  );
  
  L
  .marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup);
  
}