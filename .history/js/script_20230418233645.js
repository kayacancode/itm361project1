function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 35.117500, lng: -89.9711078 },
    });
  }
  
  window.initMap = initMap;