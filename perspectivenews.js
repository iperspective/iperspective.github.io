const API_KEY = "pub_828050e087803e1bc8ad671e224716fdad8c1";
const API_BASE = "https://newsdata.io/api/1/news";

const YOUTUBE_API_KEY = "AIzaSyB3tWv-sYEq1-eGkHT3_0k27j9qWOntl24";
const YOUTUBE_CHANNEL_ID = "UCFx8XyAgtoHyS38fXh1LI1g";

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
  const card = document.createElement("div");
  card.className = "news-card";
  card.innerHTML = `
    <h2>${article.title}</h2>
    <p>${description}...</p>
    <button>Leer más</button>
  `;
  card.querySelector("button").addEventListener("click", () => showPopup(article));
  return card;
}

function showPopup(article) {
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");

  const imageHtml = article.image_url ? `<img src="${article.image_url}" alt="imagen noticia"/>` : '';
  popupContent.innerHTML = `
    <span class="close-modal" onclick="closePopup()">&times;</span>
    <h2>${article.title}</h2>
    ${imageHtml}
    <p>${article.description || "Sin descripción completa."}</p>
    <a href="${article.link}" target="_blank" rel="noopener">Ver noticia completa</a>
  `;

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("popup").addEventListener("click", (e) => {
  if (e.target.id === "popup") closePopup();
});

function createSection(query, articles) {
  const section = document.createElement("div");
  section.classList.add("news-section-container");

  const title = document.createElement("div");
  title.className = "section-title";
  title.textContent = `Noticias sobre ${query}`;
  section.appendChild(title);

  const newsSection = document.createElement("div");
  newsSection.className = "news-section";

  articles.forEach(article => {
    newsSection.appendChild(createNewsCard(article));
  });

  section.appendChild(newsSection);
  return section;
}

async function fetchYouTubeVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.items) throw new Error("No se encontraron videos");
    return data.items;
  } catch (error) {
    console.error("Error al cargar videos de YouTube:", error);
    return [];
  }
}

function createVideoCard(video) {
  const videoId = video.id.videoId;
  const title = video.snippet.title;
  const thumbnail = video.snippet.thumbnails.medium.url;

  const card = document.createElement("div");
  card.className = "video-card";
  card.innerHTML = `
    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">
      <img src="${thumbnail}" alt="Miniatura video"/>
      <h3>${title}</h3>
    </a>
  `;
  return card;
}

async function renderNewsAndVideos() {
  // Noticias
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  const queries = ["economía", "deportes", "tecnología"];
  for (const query of queries) {
    const articles = await fetchNews(query);
    if (articles.length) {
      newsContainer.appendChild(createSection(query, articles));
    }
  }

  // Videos
  const videosContainer = document.getElementById("videos-container");
  videosContainer.innerHTML = "";  // Limpiar para evitar duplicados
  const videos = await fetchYouTubeVideos();
  if (videos.length > 0) {
    videos.forEach(video => {
      videosContainer.appendChild(createVideoCard(video));
    });
  }
}

// Recarga cada 5 minutos
setInterval(renderNewsAndVideos, 5 * 60 * 1000);

// Al cargar DOM
document.addEventListener("DOMContentLoaded", renderNewsAndVideos);
