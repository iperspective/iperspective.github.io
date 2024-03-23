// Llama a la función para obtener datos cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Configura el evento change para el elemento select
    document.getElementById("literacyIframe").addEventListener("load", function() {
        updateInfo("literacyIframe", "Información sobre la Tasa de Matriculación en Educación Primaria", "Aquí puedes encontrar datos sobre la tasa de matriculación en educación primaria proporcionados por fuentes confiables. El gráfico muestra la tasa de matriculación a lo largo del tiempo. La información se actualiza regularmente para reflejar cambios en la educación primaria a nivel mundial.");
    });

    // Configura eventos de carga para los otros iframes
    document.getElementById("perseveranceIframe").addEventListener("load", function() {
        updateInfo("perseveranceIframe", "Perseverancia en la Escuela Primaria", "Este gráfico muestra el porcentaje de estudiantes que perseveran en la escuela hasta el último grado del nivel primario. Los datos son proporcionados por el Instituto de Estadística de la UNESCO.");
    });

    document.getElementById("teachersIframe").addEventListener("load", function() {
        updateInfo("teachersIframe", "Maestros Capacitados en Educación Primaria", "Este gráfico muestra el porcentaje de maestros capacitados en educación de nivel primario con respecto al total de maestros. Los datos son proporcionados por el Instituto de Estadística de la UNESCO.");
    });

    // Cargar iframes
    document.getElementById("literacyIframe").src = "https://datos.bancomundial.org/share/widget?indicators=SE.PRM.ENRR";
    document.getElementById("perseveranceIframe").src = "https://datos.bancomundial.org/share/widget?indicators=SE.PRM.PRSL.ZS&view=chart";
    document.getElementById("teachersIframe").src = "https://datos.bancomundial.org/share/widget?indicators=SE.PRM.TCAQ.ZS&view=chart";
});

function updateInfo(iframeId, title, description) {
    // Obtiene el elemento iframe
    const iframe = document.getElementById(iframeId);

    // Contenido dentro del iframe
    const iframeContent = iframe.contentDocument;

    console.log("Contenido del iframe cargado:", iframeContent);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const h2 = document.createElement("h2");
    h2.textContent = title;
    infoContainer.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = description;
    infoContainer.appendChild(p);

    // Inserta el contenedor de información antes del iframe en el DOM
    iframe.parentNode.insertBefore(infoContainer, iframe);
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
