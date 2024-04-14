const regions = {
    atlanticoNorte: { lat: 35.4498, lon: -32.044 },
    atlanticoSur: { lat: -28.7379, lon: -32.044 },
    pacificoNorte: { lat: 35.4498, lon: -123.186 },
    pacificoSur: { lat: -28.7379, lon: -123.186 },
    indico: { lat: -15.5088, lon: 74.1318 },
    mediterraneo: { lat: 35.7179, lon: 18.0078 },
    marCoral: { lat: -14.3036, lon: 147.6073 },
    marRojo: { lat: 22.1169, lon: 38.1499 },
    marNegro: { lat: 43.7245, lon: 32.8035 },
    marBaltico: { lat: 59.9406, lon: 23.8779 },
    marCaspio: { lat: 41.6401, lon: 50.8371 },
    marArabigo: { lat: 15.0000, lon: 63.0000 },
    marCeltico: { lat: 51.5029, lon: -10.0930 },
    marCaspian: { lat: 40.3929, lon: 50.5176 },
    marCaribe: { lat: 14.6726, lon: -75.7434 },
    marOceanoIndico: { lat: -22.9576, lon: 77.0480 },
    marOceanoArtico: { lat: 82.4793, lon: -133.1384 },
    marOceanoAntartico: { lat: -76.4544, lon: -110.4011 }
    // Agrega más regiones según sea necesario
};

function showRegions(region) {
    const regionList = document.getElementById('regionListItems');
    const regionContainer = document.getElementById('regionList');

    if (regions.hasOwnProperty(region)) {
        const regionCoords = regions[region];
        loadRegionWeather(regionCoords);
        regionContainer.classList.remove('hidden');
    } else {
        regionContainer.classList.add('hidden');
    }
}

function loadRegionWeather(regionCoords) {
    const baseURL = 'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=3&overlay=currents&product=cmems&level=surface';
    const weatherFrame = document.getElementById('mareasFrame');
    const regionURL = `${baseURL}&lat=${regionCoords.lat}&lon=${regionCoords.lon}`;
    weatherFrame.src = regionURL;
}

document.addEventListener('DOMContentLoaded', function () {
    const regionButtons = document.querySelectorAll('.region-btn');

    regionButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        const region = this.dataset.region;
        showRegions(region);
        });
    });
});
