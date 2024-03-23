// crypto_movements.js

// Reemplaza 'TU_CLAVE_API_AQUI' con tu clave de API de CoinGecko
const apiKey = 'CG-tKxxkWmZCtYVwCvfVk3Pu23B';

// Configuración de parámetros de la solicitud
const params = {
  vs_currency: 'usd',
  order: 'market_cap_desc',
  per_page: 10,
  page: 1,
  sparkline: false,
  price_change_percentage: '1h,24h,7d',
};

// URL de la solicitud
const apiUrl = `https://api.coingecko.com/api/v3/coins/markets`;

// Realizar la solicitud a la API de CoinGecko usando fetch
fetch(`${apiUrl}?${new URLSearchParams(params)}`, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
  },
})
  .then(response => response.json())
  .then(data => {
    // Manejar los datos y actualizar la página con la información
    mostrarInformacionEnPagina(data);

    // Crear un gráfico de barras para representar los volúmenes
    crearGraficoBarras(data);
  })
  .catch(error => {
    console.error('Error al obtener datos del mercado:', error);
  });

// Función para mostrar la información en la página
function mostrarInformacionEnPagina(data) {
  // Obtener el contenedor donde se mostrará la información
  const marketInfoContainer = document.getElementById("market-info-container");

  // Iterar sobre los resultados y crear elementos HTML para mostrar la información
  data.forEach(criptomoneda => {
    const criptomonedaInfo = document.createElement("div");
    criptomonedaInfo.classList.add("criptomoneda-info");

    // Puedes personalizar cómo se muestra la información según tus necesidades
    criptomonedaInfo.innerHTML = `
      <h2>${criptomoneda.name}</h2>
      <p>Precio: ${criptomoneda.current_price} USD</p>
      <p>Capitalización de mercado: ${criptomoneda.market_cap} USD</p>
      <p>Volumen de 24 horas: ${criptomoneda.total_volume} USD</p>
      <p>Cambio de precio en 1 hora: ${criptomoneda.price_change_percentage_1h_in_currency}%</p>
      <p>Cambio de precio en 24 horas: ${criptomoneda.price_change_percentage_24h_in_currency}%</p>
      <!-- Agrega más detalles según tus necesidades -->
    `;

    // Agregar el elemento al contenedor principal
    marketInfoContainer.appendChild(criptomonedaInfo);
  });
}

// Función para crear un gráfico de barras con Chart.js
function crearGraficoBarras(data) {
  // Obtener los nombres de las criptomonedas y sus volúmenes
  const nombresCriptomonedas = data.map(criptomoneda => criptomoneda.name);
  const volumenesCriptomonedas = data.map(criptomoneda => criptomoneda.total_volume);

  // Obtener el contexto del canvas
  const canvas = document.getElementById("volumeChart");
  const ctx = canvas.getContext("2d");

  // Crear el gráfico de barras
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nombresCriptomonedas,
      datasets: [{
        label: 'Volumen de 24 horas (USD)',
        data: volumenesCriptomonedas,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
