
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("waterIframe").addEventListener("load", updateInfo);
});

function updateInfo() {
    const waterIframe = document.getElementById("waterIframe");

    
    const iframeContent = waterIframe.contentDocument;

    console.log("Contenido del iframe cargado:", iframeContent);

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