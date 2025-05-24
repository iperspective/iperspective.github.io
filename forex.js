document.addEventListener('DOMContentLoaded', () => {
  // Heatmap Widget
  const heatmapScript = document.createElement('script');
  heatmapScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
  heatmapScript.async = true;
  heatmapScript.innerHTML = JSON.stringify({
    width: "100%",
    height: "500",
    currencies: [
      "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY",
      "TRY", "SEK", "NOK", "DKK", "ZAR", "HKD", "SGD", "THB", "MXN",
      "IDR", "KRW", "PLN", "ISK", "KWD", "PHP", "MYR", "INR", "TWD",
      "SAR", "AED", "RUB", "ILS", "ARS", "CLP", "COP", "PEN", "UYU"
    ],
    isTransparent: false,
    colorTheme: "light",
    locale: "es",
    backgroundColor: "#ffffff"
  });
  document.getElementById('heatmap-widget').appendChild(heatmapScript);

  // Crossrates Widget
  const crossratesScript = document.createElement('script');
  crossratesScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
  crossratesScript.async = true;
  crossratesScript.innerHTML = JSON.stringify({
    width: "100%",
    height: "500",
    currencies: [
      "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY",
      "TRY", "SEK", "NOK", "DKK", "ZAR", "HKD", "SGD", "THB", "MXN",
      "IDR", "KRW", "PLN", "ISK", "KWD", "PHP", "MYR", "INR", "TWD",
      "SAR", "AED", "RUB", "ILS", "ARS", "CLP", "COP", "PEN", "UYU"
    ],
    isTransparent: false,
    colorTheme: "light",
    locale: "es",
    backgroundColor: "#ffffff"
  });
  document.getElementById('crossrates-widget').appendChild(crossratesScript);
});
