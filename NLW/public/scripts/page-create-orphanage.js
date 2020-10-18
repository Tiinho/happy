const map = L.map("mapid").setView([-12.6996726, -38.325868], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

function addPhotoField() {
  const container = document.querySelector("#images");

  const fieldsContainer = document.querySelectorAll(".new-upload");

  const newFieldConatiner = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldConatiner.children[0];
  if (input.value == "") {
    return alert("Insira algum link, por favor.");
  }

  newFieldConatiner.children[0].value = "";

  container.appendChild(newFieldConatiner);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }
  span.parentNode.remove();
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

  const button = event.currentTarget;
  button.classList.add('active');

  const input = document.querySelector('[name="open_on_weekends"]')
  input.value = button.dataset.value;
}   

