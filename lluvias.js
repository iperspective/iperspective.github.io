// Función para mostrar los nombres de los países de cada continente
function showCountries(continent) {
    // Objeto con nombres de países por continente
    const countries = {
        america: ['Argentina', 'Brasil', 'Canadá', 'Estados Unidos', 'México'],
        europa: ['España', 'Francia', 'Italia', 'Alemania', 'Reino Unido'],
        asia: ['China', 'India', 'Japón', 'Corea del Sur', 'Singapur'],
        africa: ['Egipto', 'Nigeria', 'Sudáfrica', 'Kenia', 'Marruecos'],
        oceania: ['Australia', 'Nueva Zelanda', 'Fiyi', 'Papúa Nueva Guinea', 'Samoa']
    };

    // Obtener la lista de países y el contenedor
    const countryList = document.getElementById('countryListItems');
    const countryContainer = document.getElementById('countryList');

    // Limpiar la lista de países
    countryList.innerHTML = '';

    // Verificar si el continente existe en el objeto
    if (countries.hasOwnProperty(continent)) {
        // Mostrar la lista de países del continente
        countries[continent].forEach(country => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = country;
            a.onclick = function() {
                loadCountryWeather(country);
                return false; // Prevenir la acción predeterminada del enlace
            };
            li.appendChild(a);
            countryList.appendChild(li);
        });

        // Mostrar el contenedor de países
        countryContainer.classList.remove('hidden');
    } else {
        // Ocultar el contenedor si no hay países para el continente
        countryContainer.classList.add('hidden');
    }
}

// Función para cargar el clima del país seleccionado
function loadCountryWeather(country) {
    // URL base del clima por país
    const baseURL = 'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=3&overlay=rain&product=ecmwf&level=surface';
    
    // Coordenadas de ejemplo para algunos países
    const coordinates = {
        Argentina: { lat: -38.4161, lon: -63.6167 },
        Brasil: { lat: -14.2350, lon: -51.9253 },
        Canadá: { lat: 56.1304, lon: -106.3468 },
        'Estados Unidos': { lat: 37.0902, lon: -95.7129 },
        México: { lat: 23.6345, lon: -102.5528 },
        España: { lat: 40.4637, lon: -3.7492 },
        Francia: { lat: 46.6033, lon: 1.8883 },
        Italia: { lat: 41.8719, lon: 12.5674 },
        Alemania: { lat: 51.1657, lon: 10.4515 },
        'Reino Unido': { lat: 55.3781, lon: -3.4360 },
        China: { lat: 35.8617, lon: 104.1954 },
        India: { lat: 20.5937, lon: 78.9629 },
        Japón: { lat: 36.2048, lon: 138.2529 },
        'Corea del Sur': { lat: 35.9078, lon: 127.7669 },
        Singapur: { lat: 1.3521, lon: 103.8198 },
        Egipto: { lat: 26.8206, lon: 30.8025 },
        Nigeria: { lat: 9.0820, lon: 8.6753 },
        Sudáfrica: { lat: -30.5595, lon: 22.9375 },
        Kenia: { lat: -0.0236, lon: 37.9062 },
        Marruecos: { lat: 31.7917, lon: -7.0926 },
        Australia: { lat: -25.2744, lon: 133.7751 },
        'Nueva Zelanda': { lat: -40.9006, lon: 174.8859 },
        Fiyi: { lat: -17.7134, lon: 178.0650 },
        'Papúa Nueva Guinea': { lat: -6.314993, lon: 143.955550 },
        Samoa: { lat: -13.7590, lon: -172.1046 }
        // Agrega más países según sea necesario
    };

    // Obtener las coordenadas del país seleccionado
    const countryCoords = coordinates[country];

    // Verificar si las coordenadas están disponibles para el país
    if (countryCoords) {
        const weatherFrame = document.getElementById('weatherFrame');
        const countryURL = `${baseURL}&lat=${countryCoords.lat}&lon=${countryCoords.lon}&message=true`;

        // Cargar el iframe con la URL del país
        weatherFrame.src = countryURL;
    } else {
        alert('Coordenadas no disponibles para este país');
    }
}

// Función para ocultar la lista de países al volver arriba
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
