document.addEventListener("DOMContentLoaded", function() {
    
    var data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
            label: "Rendimiento",
            data: [0, 2, 3, 5, , , , , , , , 10], 
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2 
        }]
    };

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true

                }
            },
            plugins: {
                legend: {
                    display: false 
                },
                tooltip: {

                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    borderColor: 'rgba(255, 255, 255, 0.5)', 
                    borderWidth: 1, 
                    displayColors: false, 
                    callbacks: {
                        label: function(context) {
                            return ' Rendimiento: ' + context.parsed.y + '%'; 
                        }
                    }
                }
            }
        }
    });
});