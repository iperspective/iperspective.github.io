const holders = [
    {
        name: 'Binance',
        wallet: '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo',
        asset: 'Bitcoin',
        amount: 0,
        value: 0
    },
    {
        name: 'U.S. Government',
        wallet: 'bc1qazcm763858nkj2dj986etajv6wquslv8uxwczt',
        asset: 'Bitcoin',
        amount: 0,
        value: 0
    },
    {
        name: 'Bitfinex',
        wallet: 'bc1qgdjqv0av3q56jvd82tkdjpy7gdp9ut8tlqmgrpmv24sq90ecnvqqjwvw97',
        asset: 'Bitcoin',
        amount: 0,
        value: 0
    },
    {
        name: 'Robinhood',
        wallet: 'bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2',
        asset: 'Bitcoin',
        amount: 0,
        value: 0
    },
    {
        name: 'Tether',
        wallet: 'bc1qjasf9z3h7w3jspkhtgatgpyvvzgpa2wwd2lr0eh5tx44reyn2k7sfc27a4',
        asset: 'Bitcoin',
        amount: 0,
        value: 0
    }
];

let chartInstance;

async function fetchCurrentValues() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    console.log('Precio de Bitcoin:', data);
    const bitcoinPrice = data.bitcoin.usd;

    await Promise.all(
        holders.map(async (holder) => {
            const walletResponse = await fetch(`https://api.blockchain.info/q/addressbalance/${holder.wallet}`);
            const walletData = await walletResponse.text();
            console.log(`Datos de la wallet de ${holder.name}:`, walletData);
            holder.amount = parseFloat(walletData) / 100000000; // Convertir satoshis a BTC
            holder.value = holder.amount * bitcoinPrice;
        })
    );

    displayHolders();
}

function displayHolders() {
    const tableBody = document.querySelector('#holders-table tbody');
    tableBody.innerHTML = '';

    holders.forEach(holder => {
        const row = `
            <tr onclick="showHolderData('${holder.wallet}')">
                <td>${holder.name}</td>
                <td>${shortenWallet(holder.wallet)}</td>
                <td>${holder.asset}</td>
                <td>${Math.floor(holder.amount)}</td>
                <td>$${holder.value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function showHolderData(wallet) {
    const holder = holders.find(h => h.wallet === wallet);
    if (holder) {
        renderChart(holder);
    }
}

function shortenWallet(wallet) {
    return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`;
}

function renderChart(holder) {
    const ctx = document.getElementById('holdersChart').getContext('2d');
    if (chartInstance) {
        chartInstance.destroy(); // Destruir el gráfico anterior
    }

    const data = [holder.amount, holder.value];

    chartInstance = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico
        data: {
            labels: ['Holding (BTC)', 'Valor (USD)'],
            datasets: [{
                label: holder.name,
                data: data,
                backgroundColor: [
                    'rgba(0, 255, 171, 0.5)', // Color para el holding
                    'rgba(255, 99, 132, 0.5)' // Color para el valor
                ],
                borderColor: [
                    'rgba(0, 255, 171, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Cantidad y Valor'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Holders'
                    }
                }
            },
            indexAxis: 'y', // Para hacer el gráfico horizontal
            animation: {
                duration: 500, // Duración de la animación
            }
        }
    });
}

// Inicia la función para obtener los valores
fetchCurrentValues();
