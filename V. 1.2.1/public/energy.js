// Llama a la función para obtener datos cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Configura los eventos change para los elementos select
    document.getElementById("energySelect").addEventListener("change", updateEnergyIframe);
    document.getElementById("electricitySelect").addEventListener("change", updateElectricityIframe);
    document.getElementById("electricityMapSelect").addEventListener("change", updateElectricityMapIframe);

    // Configura el evento click para los botones de país
    document.getElementById("btnWorld").addEventListener("click", function () {
        updateCountry("world");
    });
    document.getElementById("btnArgentina").addEventListener("click", function () {
        updateCountry("argentina");
    });

    // Llamadas iniciales para asegurarse de que se cargue algo al principio
    updateEnergyIframe();
    updateElectricityIframe();
    updateElectricityMapIframe();
});

function updateEnergyIframe() {
    // URL base del widget de consumo de energía
    const energyBaseURL = "https://datos.bancomundial.org/share/widget?indicators=EG.USE.COMM.CL.ZS";

    // Actualiza el src del iframe de consumo de energía
    document.getElementById("energyIframe").src = energyBaseURL;
}

function updateElectricityIframe() {
    // URL base del widget de acceso a la electricidad
    const electricityBaseURL = "https://datos.bancomundial.org/share/widget?end=2023&indicators=EG.ELC.ACCS.ZS&start=2000";

    // Actualiza el src del iframe de acceso a la electricidad
    document.getElementById("electricityIframe").src = electricityBaseURL;
}

function updateElectricityMapIframe() {
    // URL base del widget de mapa de acceso a la electricidad
    const electricityMapBaseURL = "https://datos.bancomundial.org/share/widget?end=2021&indicators=EG.ELC.ACCS.ZS&start=2021&view=map";

    // Actualiza el src del iframe del mapa de acceso a la electricidad
    document.getElementById("electricityMapIframe").src = electricityMapBaseURL;
}
