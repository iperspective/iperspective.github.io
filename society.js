document.addEventListener("DOMContentLoaded", function() {
    cargarIframe("humanRightToVoteIframe", "https://ourworldindata.org/grapher/countries-with-universal-right-to-vote-lexical?time=earliest..2022&facet=entity");
});

document.addEventListener("DOMContentLoaded", function() {
    cargarIframe("politicalLibertiesIframe", "https://ourworldindata.org/grapher/political-civil-liberties-index?time=2009");
});

document.addEventListener("DOMContentLoaded", function() {
    cargarIframe("sameSexActsLegalIframe", "https://ourworldindata.org/grapher/number-of-countries-in-which-same-sex-sexual-acts-are-legal");
});

document.addEventListener("DOMContentLoaded", function() {
    cargarIframe("deathsInWarsIframe", "https://ourworldindata.org/grapher/deaths-in-wars-correlates-of-war");
});

document.addEventListener("DOMContentLoaded", function() {
    cargarIframe("basicStatisticalInstitutionsIframe", "https://ourworldindata.org/grapher/number-of-countries-with-basic-statistical-institutions");
});

function cargarIframe(idIframe, src) {
    const iframe = document.getElementById(idIframe);
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

