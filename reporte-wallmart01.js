document.addEventListener('DOMContentLoaded', () => {
  const barCtx = document.getElementById('barChart').getContext('2d');
  const pieCtx = document.getElementById('pieChart').getContext('2d');

  const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['1T25', '1T26'],
      datasets: [
        {
          label: 'Ingresos Totales (USD billones)',
          data: [161.7, 165.6],
          backgroundColor: '#0071ce'
        },
        {
          label: 'Crecimiento E-commerce (%)',
          data: [0, 22],
          backgroundColor: '#004080'
        },
        {
          label: 'Ingresos por Membresía (%)',
          data: [0, 14.8],
          backgroundColor: '#00aaff'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Comparación 1T25 vs 1T26'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Ventas Retail', 'Ventas E-commerce', 'Otros'],
      datasets: [{
        data: [60, 30, 10],
        backgroundColor: ['#0071ce', '#00aaff', '#004080'],
        hoverOffset: 20
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: {
          display: true,
          text: 'Distribución de Ventas 1T26'
        }
      }
    }
  });
});


function openReport(url) {
    window.location.href = url;
  }
  
  function crearWidgetsTradingView() {
    new TradingView.widget({
      container_id: "widget-usd",
      autosize: true,
      symbol: "NYSE:WMT",
      interval: "D",
      timezone: "America/New_York",
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
    crearWidgetPrecioSimple("widget-precio-usd", "NYSE:WMT");
  }
  
  window.onload = inicializarWidgets;
  
  window.addEventListener('load', () => {
    if (typeof TradingView !== 'undefined') {
      crearWidgetsTradingView();
    } else {
      console.error("El script de TradingView no se cargó.");
    }
  });
  