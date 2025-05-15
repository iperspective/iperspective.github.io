function openReport(url) {
    window.location.href = url;
  }
  
function crearWidgetsTradingView() {
    new TradingView.widget({
      container_id: "widget-ars",
      autosize: true,
      symbol: "BCBA:TRAN", 
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
        symbol: "NASDAQ:TRAN",  
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
          // Configuraciones para ocultar todo menos el precio
          showSymbolLogo: false,
          showChange: false,
          showFloatingTooltip: false,
          colorTheme: "light",
          // más configs si hace falta
        });
      }
      
      function inicializarWidgets() {
        crearWidgetPrecioSimple("widget-precio-ars", "BCBA:TRAN");
        crearWidgetPrecioSimple("widget-precio-usd", "NASDAQ:TRAN");
      }
      
      window.onload = inicializarWidgets;
      
  
  // Ejecutar cuando el DOM esté listo y el script de TradingView cargado
  window.addEventListener('load', () => {
    if (typeof TradingView !== 'undefined') {
      crearWidgetsTradingView();
    } else {
      console.error("El script de TradingView no se cargó.");
    }
  });
  