document.addEventListener("DOMContentLoaded", function() {
    updateIframe();
});

function updateIframe() {
    const baseURL = "https://datos.bancomundial.org/share/widget?end=2022&indicators=IQ.CPA.ENVR.XQ&start=2005&view=chart";

    const iframe = document.getElementById("sostenibilidadIframe");
    if (iframe) {
        iframe.src = baseURL;
    }
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
