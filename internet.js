// Llama a la función para obtener datos cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Configura el evento change para el elemento select
    document.getElementById("internetSelect").addEventListener("change", updateIframe);

    // Llamada inicial para asegurarse de que se cargue algo al principio
    updateIframe();
});

function updateIframe() {
    // Obtiene el elemento select y el valor seleccionado
    const internetSelect = document.getElementById("internetSelect");
    const selectedOption = internetSelect.options[internetSelect.selectedIndex].value;

    // URL base del widget
    const baseURL = "https://datos.bancomundial.org/share/widget";

    // Definir las URLs específicas para cada indicador
    const internetUserURL = `${baseURL}?indicators=IT.NET.USER.ZS`;
    const internetMapURL = `${baseURL}?indicators=IT.NET.USER.ZS&view=map&year=2022`;
    const broadbandSubscriptionURL = `${baseURL}?end=2022&indicators=IT.NET.BBND&start=1998&type=shaded&view=chart`;
    const secureInternetServersURL = `${baseURL}?indicators=IT.NET.SECR.P6`;

    // Seleccionar la URL según la opción elegida
    let iframeURL;
    switch (selectedOption) {
        case "InternetUsers":
            iframeURL = internetUserURL;
            break;
        case "InternetMap":
            iframeURL = internetMapURL;
            break;
        case "BroadbandSubscription":
            iframeURL = broadbandSubscriptionURL;
            break;
        case "SecureInternetServers":
            iframeURL = secureInternetServersURL;
            break;
        default:
            // Si no coincide con ninguna opción, usa una URL predeterminada (puedes cambiarla)
            iframeURL = "https://www.ejemplo.com";
    }

    // Actualiza el src del iframe
    document.getElementById("internetIframe").src = iframeURL;
}
