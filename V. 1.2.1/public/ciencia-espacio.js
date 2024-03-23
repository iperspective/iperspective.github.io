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