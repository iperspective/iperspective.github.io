// Objeto con información de temblores (para uso simulado)
const earthquakes = [
    { location: 'California', magnitude: 5.3 },
    { location: 'Japan', magnitude: 4.7 },
    { location: 'Mexico', magnitude: 6.1 },
    { location: 'Indonesia', magnitude: 5.8 },
    { location: 'Italy', magnitude: 4.4 }
    // Agrega más temblores según necesites
];

// Función para mostrar los temblores recientes
function showRecentEarthquakes() {
    const quakeList = document.getElementById('quakeListItems');
    const quakeContainer = document.getElementById('quakeList');

    quakeList.innerHTML = ''; // Limpiamos la lista antes de agregar elementos

    earthquakes.forEach(quake => {
        const li = document.createElement('li');
        li.textContent = `Ubicación: ${quake.location}, Magnitud: ${quake.magnitude}`;
        quakeList.appendChild(li);
    });

    quakeContainer.classList.remove('hidden');
}

// Cargar los temblores recientes al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    showRecentEarthquakes();
});

// Función para volver al inicio de la página
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
