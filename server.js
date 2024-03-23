const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.get('/api/coingecko', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en');
        const bitcoinData = response.data.find(coin => coin.id === 'bitcoin');
        const ethereumData = response.data.find(coin => coin.id === 'ethereum');
        res.json({ bitcoin: bitcoinData, ethereum: ethereumData });
    } catch (error) {
        console.error('Error fetching data from CoinGecko:', error);
        res.status(500).json({ error: 'Error fetching data from CoinGecko' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
