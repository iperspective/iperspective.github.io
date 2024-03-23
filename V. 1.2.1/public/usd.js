function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
