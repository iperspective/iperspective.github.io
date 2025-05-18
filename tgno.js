function openReport(url) {
    window.location.href = url;
  }
  
  function crearWidgetsTradingView() {
    new TradingView.widget({
      container_id: "widget-ars",
      autosize: true,
      symbol: "BCBA:TGNO4", // TGNO en ARS
      interval: "D",
      timezone: "America/Argentina/Buenos_Aires",
      theme: "light",
      style: "1",
      locale: "es",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      save_image: false
    });
  
    new TradingView.widget({
      container_id: "widget-usd",
      autosize: true,
      symbol: "BCRA:TGNOF", // Supuesto ticker en USD, puede cambiar
      interval: "D",
      timezone: "America/Argentina/Buenos_Aires",
      theme: "light",
      style: "1",
      locale: "es",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      save_image: false
    });
  }
  
  function crearWidgetPrecioSimple(containerId, symbol) {
    new TradingView.MiniWidget({
      container_id: containerId,
      symbol: symbol,
      locale: "es",
      width: "100%",
      height: 30,
      showSymbolLogo: false,
      showChange: false,
      showFloatingTooltip: false,
      colorTheme: "light",
    });
  }
  
  function inicializarWidgets() {
    crearWidgetPrecioSimple("widget-precio-ars", "BCBA:TGNO4");
    crearWidgetPrecioSimple("widget-precio-usd", "OTC:TGNOF");
  }
  
  window.onload = inicializarWidgets;
  
  window.addEventListener('load', () => {
    if (typeof TradingView !== 'undefined') {
      crearWidgetsTradingView();
    } else {
      console.error("El script de TradingView no se cargó.");
    }
  });
  