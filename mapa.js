function initMap() {
    var ubicacion1 = [20.762900477486927, -103.3918856980058]; // Nueva York
    var ubicacion2 = [20.69992623576344,-103.29101072283156]; // Los Ángeles
  //20.762900477486927,-103.3918856980058
  //20.69992623576344,-103.29101072283156
    var map = L.map('map').setView(ubicacion1, 10);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    L.marker(ubicacion1).addTo(map)
      .bindPopup('El mundo de las llaves');
  
    L.marker(ubicacion2).addTo(map)
      .bindPopup('Sucursal Oblatos');
  }
  
  document.addEventListener('DOMContentLoaded', initMap);