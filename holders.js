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
    const bitcoinPrice = data.bitcoin.usd;

    await Promise.all(
        holders.map(async (holder) => {
            const walletResponse = await fetch(`https://api.blockchain.info/q/addressbalance/${holder.wallet}`);
            const walletData = await walletResponse.text();
            holder.amount = parseFloat(walletData) / 100000000;
            holder.value = holder.amount * bitcoinPrice;
        })
    );

    displayHolders();
    renderChart();
}

function displayHolders() {
    const tableBody = document.querySelector('#holders-table tbody');
    tableBody.innerHTML = '';

    holders.forEach(holder => {
        const row = `
            <tr>
                <td>${holder.name}</td>
                <td>${shortenWallet(holder.wallet)}</td>
                <td>${holder.asset}</td>
                <td>${holder.amount.toFixed(8)}</td>
                <td>$${holder.value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function shortenWallet(wallet) {
    return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`;
}

function formatLargeNumbers(number) {
    if (number >= 1e6) {
        return (number / 1e6).toFixed(2) + 'M';
    }
    if (number >= 1e3) {
        return (number / 1e3).toFixed(2) + 'K';
    }
    return number.toFixed(2);
}

function renderChart() {
    const ctx = document.getElementById('holdersChart').getContext('2d');
    if (chartInstance) {
        chartInstance.destroy();
    }

    const labels = holders.map(holder => holder.name);
    const amounts = holders.map(holder => holder.amount);
    const values = holders.map(holder => holder.value);

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Valor (USD)',
                    data: values.map(value => parseFloat((value / 1e6).toFixed(2))), // Convertir a millones
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Holders'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cantidad (BTC) / Valor (USD en M)'
                    },
                    ticks: {
                        callback: function(value) {
                            return formatLargeNumbers(value * 1e6); // Mostrar en M
                        }
                    }
                }
            },
            animation: {
                duration: 500
            }
        }
    });
}

fetchCurrentValues();