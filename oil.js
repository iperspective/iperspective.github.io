// oil.js
console.log('Página de Petróleo cargada correctamente.');

document.addEventListener("DOMContentLoaded", () => {
  // Futuras funcionalidades JS se pueden agregar aquí
});

const newsList = document.getElementById('newsList');

async function fetchNews() {
  try {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://news.google.com/rss/search?q=petroleo&hl=es&gl=ES&ceid=ES:es');
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al obtener noticias');
    const data = await response.json();

    newsList.innerHTML = '';

    data.items.slice(0, 5).forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('newsItem');
      newsItem.innerHTML = `
        <h4><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h4>
        <p>${item.pubDate ? new Date(item.pubDate).toLocaleDateString() : ''}</p>
        <p>${item.description || ''}</p>
      `;
      newsList.appendChild(newsItem);
    });
  } catch (error) {
    newsList.innerHTML = `<p>Error cargando noticias.</p>`;
    console.error(error);
  }
}

fetchNews();
setInterval(fetchNews, 2 * 60 * 1000);
