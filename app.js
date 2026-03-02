function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  if (pageId === 'mapa') {
    setTimeout(initMap, 200);
  }
}

let mapInitialized = false;

function initMap() {
  if (mapInitialized) return;

  const map = L.map('map').setView([-25.095, -50.163], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([-25.095, -50.163])
    .addTo(map)
    .bindPopup("Centro - Ponta Grossa")
    .openPopup();

  mapInitialized = true;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
