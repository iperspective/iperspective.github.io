function openReport(url) {
  window.location.href = url;
}

function crearWidgetsTradingView() {
  new TradingView.widget({
    container_id: "widget-usd",
    autosize: true,
    symbol: "NYSE:CAAP",
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

document.addEventListener("DOMContentLoaded", crearWidgetsTradingView);
