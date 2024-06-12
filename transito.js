window.onload = function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var trafficFrame = document.getElementById('trafficFrame');
            trafficFrame.src = "https://embed.waze.com/iframe?zoom=14&lat=" + lat + "&lon=" + lon + "&pin=1&desc=1";
        });
    } else {
        alert("Geolocalización no compatible con este navegador.");
    }
};
