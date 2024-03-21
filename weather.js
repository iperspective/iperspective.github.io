document.addEventListener("DOMContentLoaded", function () {
    const weatherContainer = document.getElementById("weather-data");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showWeather, handleLocationError);
        } else {
            weatherContainer.innerHTML = "<p>La geolocalización no es compatible en este navegador.</p>";
        }
    }

    function handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                weatherContainer.innerHTML = "<p>La solicitud de geolocalización fue denegada por el usuario.</p>";
                break;
            case error.POSITION_UNAVAILABLE:
                weatherContainer.innerHTML = "<p>La información de ubicación no está disponible.</p>";
                break;
            case error.TIMEOUT:
                weatherContainer.innerHTML = "<p>La solicitud de geolocalización ha caducado.</p>";
                break;
            case error.UNKNOWN_ERROR:
                weatherContainer.innerHTML = "<p>Se ha producido un error desconocido al obtener la ubicación.</p>";
                break;
        }
    }

    var weatherDataDiv = document.createElement("div");
    weatherDataDiv.id = "ww_54960cf73631d";
    weatherDataDiv.setAttribute("v", "1.3");
    weatherDataDiv.setAttribute("loc", "auto");
    weatherDataDiv.setAttribute("a", '{"t":"horizontal","lang":"es","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#C2185B","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#FFFFFF","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FFFFFF"}');

    var link = document.createElement("a");
    link.href = "https://oneweather.org/es/buenos_aires/25_days/";
    link.id = "ww_54960cf73631d_u";
    link.target = "_blank";
    link.textContent = "Tiempo extendido en Buenos Aires 25 dias";

    weatherDataDiv.appendChild(document.createTextNode("Más previsiones: "));
    weatherDataDiv.appendChild(link);

    document.getElementById("weather-data").appendChild(weatherDataDiv);

    var weatherDataScript = document.createElement("script");
    weatherDataScript.src = "https://app2.weatherwidget.org/js/?id=ww_54960cf73631d";
    weatherDataScript.async = true;

    document.getElementById("weather-data").appendChild(weatherDataScript);
});
