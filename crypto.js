document.addEventListener("DOMContentLoaded", function () {
    getDataAndUpdateCharts();
    setInterval(getDataAndUpdateCharts, 5000);
});

async function getDataAndUpdateCharts() {
    try {
        const data = await fetchDataFromCoinGecko();
        updateCharts(data);
    } catch (error) {
        console.error('Error al obtener datos de CoinGecko:', error);
    }
}

async function fetchDataFromCoinGecko() {
    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`Error al obtener datos de CoinGecko: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

function updateCharts(data) {
    updateTotalMarketCapChart(data);
    updateTransactionVolumeChart(data);
    updateBitcoinCharts(data);
    updateEthereumCharts(data);
}

function updateTotalMarketCapChart(data) {
    const ctx = document.getElementById('totalMarketCapChart').getContext('2d');
    const labels = data.map(entry => entry.name);
    const marketCaps = data.map(entry => entry.market_cap);
    createChart(ctx, 'bar', labels, marketCaps, 'Market Cap');
}

function updateTransactionVolumeChart(data) {
    const ctx = document.getElementById('transactionVolumeChart').getContext('2d');
    const labels = data.map(entry => entry.name);
    const volumes = data.map(entry => entry.total_volume);
    createChart(ctx, 'bar', labels, volumes, 'Volumen de Transacciones');
}

function updateBitcoinCharts(data) {
    if (data && data.bitcoin && data.bitcoin.prices && data.bitcoin.market_caps) {
        updateBitcoinPriceChart(data.bitcoin);
        updateBitcoinMarketCapChart(data.bitcoin);
    } else {
        console.error('Datos de Bitcoin no disponibles o incompletos.');
    }
}

function updateEthereumCharts(data) {
    if (data && data.ethereum && data.ethereum.prices && data.ethereum.market_caps) {
        updateEthereumPriceChart(data.ethereum);
        updateEthereumMarketCapChart(data.ethereum);
    } else {
        console.error('Datos de Ethereum no disponibles o incompletos.');
    }
}

function createChart(ctx, type, labels, data, label) {
    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'category', // Cambiado a 'category' para datos no numéricos en el eje x
                    position: 'bottom'
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateBitcoinPriceChart(data) {
    const ctx = document.getElementById('bitcoinPriceChart').getContext('2d');
    const labels = data.prices.map(entry => new Date(entry[0]).toLocaleDateString());
    const prices = data.prices.map(entry => entry[1]);
    createChart(ctx, 'line', labels, prices, 'Precio de Bitcoin (USD)');
}

function updateBitcoinMarketCapChart(data) {
    const ctx = document.getElementById('bitcoinMarketCapChart').getContext('2d');
    const labels = data.market_caps.map(entry => new Date(entry[0]).toLocaleDateString());
    const marketCaps = data.market_caps.map(entry => entry[1]);
    createChart(ctx, 'line', labels, marketCaps, 'Capitalización de Mercado de Bitcoin (USD)');
}

function updateEthereumPriceChart(data) {
    const ctx = document.getElementById('ethereumPriceChart').getContext('2d');
    const labels = data.prices.map(entry => new Date(entry[0]).toLocaleDateString());
    const prices = data.prices.map(entry => entry[1]);
    createChart(ctx, 'line', labels, prices, 'Precio de Ethereum (USD)');
}

function updateEthereumMarketCapChart(data) {
    const ctx = document.getElementById('ethereumMarketCapChart').getContext('2d');
    const labels = data.market_caps.map(entry => new Date(entry[0]).toLocaleDateString());
    const marketCaps = data.market_caps.map(entry => entry[1]);
    createChart(ctx, 'line', labels, marketCaps, 'Capitalización de Mercado de Ethereum (USD)');
}


function updateTransactionVolumeCharts(data1, data2) {
    const ctx1 = document.getElementById('transactionVolumeChart1').getContext('2d');
    const ctx2 = document.getElementById('transactionVolumeChart2').getContext('2d');
    
    const labels = data1.map(entry => entry.name);
    
    const volumes1 = data1.map(entry => entry.total_volume);
    const volumes2 = data2.map(entry => entry.total_volume);
    
    createLineChart(ctx1, labels, volumes1, 'Volumen de Transacciones - Gráfico 1');
    createLineChart(ctx2, labels, volumes2, 'Volumen de Transacciones - Gráfico 2');
}

function createLineChart(ctx, labels, data, label) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'transparent',
                borderColor: getRandomColor(),
                borderWidth: 2,
                pointRadius: 0
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

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
