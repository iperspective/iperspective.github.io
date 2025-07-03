async function fetchNoticias() {
  const container = document.getElementById('newsList');
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=' +
    encodeURIComponent('https://news.google.com/rss/search?q=demografía+OR+población+mundial+OR+fertilidad&hl=es');

  try {
    const res = await fetch(url);
    const data = await res.json();

    container.innerHTML = '';
    data.items.slice(0, 6).forEach(item => {
      const el = document.createElement('div');
      el.className = 'newsItem';
      el.innerHTML = `
        <h4><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a></h4>
        <p>${new Date(item.pubDate).toLocaleDateString()}</p>
      `;
      container.appendChild(el);
    });
  } catch (err) {
    container.innerHTML = '<p>Error al cargar noticias.</p>';
    console.error('Error al obtener noticias:', err);
  }
}

document.addEventListener('DOMContentLoaded', fetchNoticias);
