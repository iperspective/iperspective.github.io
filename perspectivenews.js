const API_KEY = "pub_828050e087803e1bc8ad671e224716fdad8c1";
const API_BASE = "https://newsdata.io/api/1/news";

async function fetchNews(query) {
  const url = `${API_BASE}?apikey=${API_KEY}&q=${query}&language=es`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.results) throw new Error("Sin resultados");
    return data.results.slice(0, 3);
  } catch (error) {
    console.error("Error al cargar noticias:", error);
    return [];
  }
}

function createNewsCard(article) {
  const description = article.description ? article.description.slice(0, 160) : "Sin descripción disponible.";
  return `
    <div class="news-card">
      <h2>${article.title}</h2>
      <p>${description}...</p>
      <button onclick='showPopup(${JSON.stringify(article).replace(/'/g, "\\'")})'>Leer más</button>
    </div>
  `;
}

function showPopup(article) {
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");

  const imageHtml = article.image_url ? `<img src="${article.image_url}" alt="imagen noticia"/>` : '';
  popupContent.innerHTML = `
    <h2>${article.title}</h2>
    ${imageHtml}
    <p>${article.description || "Sin descripción completa."}</p>
    <a href="${article.link}" target="_blank">Ver noticia completa</a>
    <button onclick="closePopup()">Cerrar</button>
  `;

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function createSection(query, articles) {
  const section = document.createElement("div");
  section.innerHTML = `
    <div class="section-title">Noticias sobre ${query}</div>
    <div class="news-section">
      ${articles.map(createNewsCard).join("")}
    </div>
  `;
  return section;
}

async function renderNews() {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  const cacheKey = "cached-news";
  const cacheTimeKey = "cached-news-time";
  const now = Date.now();
  const cacheTime = localStorage.getItem(cacheTimeKey);

  // Verifica si los datos están en caché y si es válido para mostrar
  if (cacheTime && now - cacheTime < 5 * 60 * 1000) {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    cached.forEach(section => {
      container.appendChild(createSection(section.query, section.articles));
    });
    return;
  }

  const queries = ["economía", "deportes", "tecnología"];
  const cachedSections = [];

  for (const query of queries) {
    const articles = await fetchNews(query);
    cachedSections.push({ query, articles });
    container.appendChild(createSection(query, articles));
  }

  localStorage.setItem(cacheKey, JSON.stringify(cachedSections));
  localStorage.setItem(cacheTimeKey, now.toString());

  // Animación de actualización de noticias
  container.classList.add("fade-in");
  setTimeout(() => {
    container.classList.remove("fade-in");
  }, 500);
}

// Actualiza las noticias cada 5 minutos
setInterval(renderNews, 5 * 60 * 1000);

document.addEventListener("DOMContentLoaded", renderNews);
