document.addEventListener("DOMContentLoaded", function () {
    // Llama a la función para cargar los datos al cargar la página
    loadData();

    // Programa una actualización cada cierto intervalo de tiempo (por ejemplo, cada 5 minutos)
    setInterval(loadData, 5 * 60 * 1000); // 5 minutos en milisegundos
});

function loadData() {
    // Llama a la API para obtener datos en tiempo real
    fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => {
            // Procesa los datos y actualiza la página
            updateData(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Carga el iframe con la fuente especificada
    const iframe = document.getElementById('covidIframe');
    iframe.src = "https://ourworldindata.org/grapher/total-cases-covid-19?tab=map";
}

function updateData(data) {
    // Actualiza los elementos HTML con los nuevos datos
    updateTotalCases(data.totalCases);
    updateTotalDeaths(data.totalDeaths);
    updateTotalRecovered(data.totalRecovered);
}

function updateTotalCases(totalCases) {
    const totalCasesElement = document.getElementById('totalCases').getElementsByTagName('span')[0];
    totalCasesElement.textContent = formatNumber(totalCases);
}

function updateTotalDeaths(totalDeaths) {
    const totalDeathsElement = document.getElementById('totalDeaths').getElementsByTagName('span')[0];
    totalDeathsElement.textContent = formatNumber(totalDeaths);
}

function updateTotalRecovered(totalRecovered) {
    const totalRecoveredElement = document.getElementById('totalRecovered').getElementsByTagName('span')[0];
    totalRecoveredElement.textContent = formatNumber(totalRecovered);
}

function formatNumber(number) {
    // Esta función puede personalizarse según el formato de números que desees
    return new Intl.NumberFormat().format(number);
}

document.addEventListener("DOMContentLoaded", function () {
    // Llama a la función para cargar los datos y gráficos al cargar la página
    loadData();
    loadGraphs();

    // Programa una actualización cada cierto intervalo de tiempo (por ejemplo, cada 5 minutos)
    setInterval(function () {
        loadData();
        loadGraphs();
    }, 5 * 60 * 1000); // 5 minutos en milisegundos
});

function loadGraphs() {
    // Actualiza el src del primer iframe con el enlace proporcionado
    document.getElementById('deathsGraph').src = "https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA";

    // Actualiza el src del segundo iframe con el enlace proporcionado
    document.getElementById('confirmedCasesGraph').src = "https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case?country=USA+ESP+ITA+KOR+TWN+GBR+NOR";
}
