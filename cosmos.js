function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCelestialBody(body) {
    const iframe = document.getElementById('spaceFrame');
    switch(body) {
        case 'sun':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/sun";
            break;
        case 'mercury':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/mercury";
            break;
        case 'venus':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/venus";
            break;
        case 'earth':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/earth";
            break;
        case 'mars':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/mars";
            break;
        case 'jupiter':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/jupiter";
            break;
        case 'saturn':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/saturn";
            break;
        case 'uranus':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/uranus";
            break;
        case 'neptune':
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/neptune";
            break;
        default:
            iframe.src = "https://eyes.nasa.gov/apps/solar-system/#/home";
            break;
    }
}
