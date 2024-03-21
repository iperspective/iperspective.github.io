// Llama a la función para obtener datos cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Configura los iframes u otros elementos necesarios
    loadIframe("pobrezaIframe", "https://datos.bancomundial.org/share/widget?end=2015&indicators=SI.POV.DDAY&locations=1W&start=1981&view=chart");
});

document.addEventListener("DOMContentLoaded", function() {
    // Configura los iframes u otros elementos necesarios
    loadIframe("extremePoverty", "https://ourworldindata.org/grapher/number-of-people-living-in-extreme-poverty-by-region-cbn");
});

function loadIframe(iframeId, src) {
    const iframe = document.getElementById(iframeId);
    iframe.src = src;
}

// Función para desplazar la página hasta una sección específica y centrarla verticalmente
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}