// Llama a la función para obtener datos cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Llamada inicial para asegurarse de que se cargue algo al principio
    updateIframe();
});

function updateIframe() {
    // URL base del widget
    const baseURL = "https://datos.bancomundial.org/share/widget?indicators=SP.POP.TOTL";

    // Actualiza el src del iframe
    document.getElementById("populationIframe").src = baseURL;
}
