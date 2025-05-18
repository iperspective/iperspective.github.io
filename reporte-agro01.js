document.addEventListener('DOMContentLoaded', () => {
  const detallesSection = document.querySelector('.detalles');
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Mostrar / Ocultar detalles';
  toggleBtn.style.marginBottom = '15px';
  toggleBtn.style.padding = '8px 12px';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.backgroundColor = '#2a7a2a';
  toggleBtn.style.color = 'white';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '4px';
  
  detallesSection.parentNode.insertBefore(toggleBtn, detallesSection);
  
  toggleBtn.addEventListener('click', () => {
    if (detallesSection.style.display === 'none') {
      detallesSection.style.display = 'block';
    } else {
      detallesSection.style.display = 'none';
    }
  });

  // Inicialmente ocultamos la sección detalles para que se vea solo el resumen
  detallesSection.style.display = 'none';
});

function openReport(url) {
    window.location.href = url;
  }
  
  function crearWidgetsTradingView() {
    new TradingView.widget({
      container_id: "widget-ars",
      autosize: true,
      symbol: "BCBA:AGRO", // Agrometal en ARS
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
      symbol: "BCBA:AGRO", // Si no cotiza en USD, usar el mismo símbolo
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
      colorTheme: "light"
    });
  }
  
  function inicializarWidgets() {
    crearWidgetPrecioSimple("widget-precio-ars", "BCBA:AGRO");
    crearWidgetPrecioSimple("widget-precio-usd", "BCBA:AGRO");
  }
  
  window.onload = inicializarWidgets;
  
  window.addEventListener('load', () => {
    if (typeof TradingView !== 'undefined') {
      crearWidgetsTradingView();
    } else {
      console.error("El script de TradingView no se cargó.");
    }
  });
  