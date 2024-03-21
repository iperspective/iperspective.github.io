// Llama a la función para obtener datos cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Llamada inicial para asegurarse de que se cargue algo al principio
    updateIframe();
});

function updateIframe() {
    // URL base del widget para sostenibilidad ambiental
    const baseURL = "https://datos.bancomundial.org/share/widget?end=2022&indicators=IQ.CPA.ENVR.XQ&start=2005&view=chart";

    // Actualiza el src del iframe
    const iframe = document.getElementById("sostenibilidadIframe");
    if (iframe) {
        iframe.src = baseURL;
    }
}
