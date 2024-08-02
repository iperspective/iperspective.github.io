window.onload = function() {
    function showLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var trafficFrame = document.getElementById('trafficFrame');
                trafficFrame.src = "https://embed.waze.com/iframe?zoom=14&lat=" + lat + "&lon=" + lon + "&pin=1&desc=1";
            }, function(error) {
                alert("Error al obtener la ubicación: " + error.message);
            });
        } else {
            alert("Geolocalización no compatible con este navegador.");
        }
    }

    showLocation();

    document.getElementById('locateMeBtn').addEventListener('click', showLocation);

    var warningPopup = document.getElementById('warningPopup');
    var closePopup = document.getElementById('closePopup');

    warningPopup.style.display = 'block';

    closePopup.addEventListener('click', function() {
        warningPopup.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == warningPopup) {
            warningPopup.style.display = 'none';
        }
    };
};
