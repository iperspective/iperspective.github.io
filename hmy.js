function openReport(url) {
  window.location.href = url;
}

// Inicializar el widget de TradingView para el gráfico de evolución del precio
new TradingView.widget({
  "container_id": "widget-hmy",
  "width": "100%",
  "height": 400,
  "symbol": "NYSE:HMY",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "1",
  "locale": "es",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "details": true,
  "hotlist": true,
  "calendar": true,
  "studies": []
});
