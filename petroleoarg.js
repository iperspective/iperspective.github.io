const produccion2025 = {
    total: 18.1,
    convencional: 7.38,
    shale: 10.6
  };
  
  function fadeIn(element, duration = 600) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    void element.offsetWidth;
    element.style.opacity = 1;
  }
  
  function mostrarProduccion() {
    const prodTotalEl = document.getElementById('prodTotal');
    const prodConvEl = document.getElementById('prodConvencional');
    const prodShaleEl = document.getElementById('prodShale');
  
    prodTotalEl.textContent = `${produccion2025.total}M m³`;
    prodConvEl.textContent = `${produccion2025.convencional}M m³`;
    prodShaleEl.textContent = `${produccion2025.shale}M m³`;
  
    const cards = document.querySelectorAll('.stat-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 200 * index); // delay para efecto secuencial
    });
  }
  
  
  async function fetchNoticias() {
    const newsEl = document.getElementById('newsList');
    const newsUrl =
      'https://api.rss2json.com/v1/api.json?rss_url=' +
      encodeURIComponent('https://news.google.com/rss/search?q=Argentina+energía+petroleo&hl=es');
  
    try {
      const res = await fetch(newsUrl);
      const data = await res.json();
      if (!newsEl) return;
  
      newsEl.innerHTML = '';
      data.items.slice(0, 5).forEach((item) => {
        const div = document.createElement('div');
        div.className = 'newsItem';
        div.innerHTML = `
          <h4><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a></h4>
          <p>${new Date(item.pubDate).toLocaleDateString()}</p>
        `;
        newsEl.appendChild(div);
      });
    } catch (error) {
      console.error('Error al cargar noticias:', error);
      if (newsEl) {
        newsEl.innerHTML = '<p>Error al cargar noticias</p>';
      }
    }
  }
  
  function cargarDatos() {
    mostrarProduccion();
    fetchNoticias();
    setInterval(fetchNoticias, 10 * 60 * 1000); // cada 10 minutos
  }
  
  document.addEventListener('DOMContentLoaded', cargarDatos);
  