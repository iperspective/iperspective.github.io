document.addEventListener("DOMContentLoaded", function() {
    // Configura los iframes
    loadIframe("lifeExpectancyIframe", "https://datos.bancomundial.org/share/widget?indicators=SP.DYN.LE00.IN&year=2022");
    loadIframe("maternalDeathsIframe", "https://datos.bancomundial.org/share/widget?indicators=SH.MMR.DTHS&year=2022");
    loadIframe("drinkingWaterIframe", "https://datos.bancomundial.org/share/widget?indicators=SH.H2O.SMDW.ZS&year=2022");
});

function loadIframe(iframeId, src) {
    const iframe = document.getElementById(iframeId);
    iframe.src = src;
}

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