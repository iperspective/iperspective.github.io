// reporte-amd01.js

// Gráfico de comparación AMD vs SPY y QQQ
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('stockChart').getContext('2d');

    const data = {
        labels: ['Ene-25', 'Feb-25', 'Mar-25', 'Abr-25', 'May-25'],
        datasets: [
            {
                label: 'AMD',
                data: [100, 110, 115, 120, 118],
                borderColor: '#d04437',
                backgroundColor: 'rgba(208, 68, 55, 0.2)',
                tension: 0.3,
                fill: true,
                pointRadius: 4,
            },
            {
                label: 'QQQ',
                data: [100, 105, 108, 110, 115],
                borderColor: '#4a90e2',
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                tension: 0.3,
                fill: true,
                pointRadius: 4,
            },
            {
                label: 'SPY',
                data: [100, 102, 105, 107, 110],
                borderColor: '#9b9b9b',
                backgroundColor: 'rgba(155, 155, 155, 0.2)',
                tension: 0.3,
                fill: true,
                pointRadius: 4,
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false,
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        stepSize: 10
                    },
                    title: {
                        display: true,
                        text: 'Índice base 100 (1-ene-2025)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Meses 2025'
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});



