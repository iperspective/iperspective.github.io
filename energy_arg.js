// JavaScript en el documento principal

const iframe = document.getElementById('edenor-iframe');

window.addEventListener('message', function (event) {
    // Verifica que el mensaje provenga del iframe esperado
    if (event.source === iframe.contentWindow) {
        const data = event.data;

        // Actualiza los elementos en la página con los nuevos valores
        document.getElementById('current-value-edenor').textContent = `Valor actual: ${data.currentValue} MW`;
        document.getElementById('value-today-edenor').textContent = `Hoy: ${data.valueToday} MW`;
        document.getElementById('value-yesterday-edenor').textContent = `Ayer: ${data.valueYesterday} MW`;
        document.getElementById('value-last-week-edenor').textContent = `Semana pasada: ${data.valueLastWeek} MW`;
    }
});

function updateValuesFromIframe() {
    iframe.contentWindow.postMessage('getData', '*');
}

setInterval(updateValuesFromIframe, 5000);

// JavaScript en el contenido del iframe

window.addEventListener('message', function (event) {
    if (event.data === 'getData') {
        // Obtén los datos del gráfico dentro del iframe
        const graphData = getGraphData();

        // Envía los datos al documento principal
        window.parent.postMessage(graphData, '*');
    }
});

function getGraphData() {
    // Ejemplo: Simulación de datos del gráfico
    const currentValue = Math.random() * 100; // Valor actual simulado
    const valueToday = Math.random() * 100; // Valor de hoy simulado
    const valueYesterday = Math.random() * 100; // Valor de ayer simulado
    const valueLastWeek = Math.random() * 100; // Valor de la semana pasada simulado

    return {
        currentValue: currentValue.toFixed(2),
        valueToday: valueToday.toFixed(2),
        valueYesterday: valueYesterday.toFixed(2),
        valueLastWeek: valueLastWeek.toFixed(2),
    };
}
