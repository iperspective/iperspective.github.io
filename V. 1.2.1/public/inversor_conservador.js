document.addEventListener("DOMContentLoaded", function() {
    // Datos de ejemplo para el gráfico
    var data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            label: "Rendimiento",
            data: [0, 7, 14, 20, 25, 35], // Datos de rendimiento en tiempo real
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2 // Ancho de la línea del gráfico
        }]
    };

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true // Comienza el eje y desde el 0
                }
            },
            plugins: {
                legend: {
                    display: false // Oculta la leyenda del gráfico
                },
                tooltip: {

                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Cambia el color de fondo del tooltip
                    borderColor: 'rgba(255, 255, 255, 0.5)', // Cambia el color del borde del tooltip
                    borderWidth: 1, // Ajusta el ancho del borde del tooltip
                    displayColors: false, // Oculta los colores en el tooltip
                    callbacks: {
                        label: function(context) {
                            return ' Rendimiento: ' + context.parsed.y + '%'; // Personaliza el texto del tooltip
                        }
                    }
                }
            }
        }
    });
});