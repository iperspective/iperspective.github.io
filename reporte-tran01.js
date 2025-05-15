document.addEventListener('DOMContentLoaded', () => {
    const canvasBar = document.getElementById('barChart');
    canvasBar.style.width = '700px';
    canvasBar.style.height = '450px';
  
    const ctxBar = canvasBar.getContext('2d');
    const ctxPie = document.getElementById('pieChart').getContext('2d');
  
    const barChart = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Ventas', 'Costos', 'EBIT', 'EBITDA', 'Resultado Neto'],
        datasets: [
          {
            label: '1T25',
            data: [94.5, 54.8, 39.7, 49.2, 28.5],
            backgroundColor: 'rgba(0, 64, 128, 0.7)'
          },
          {
            label: '1T24',
            data: [61.1, 44.8, 16.3, 23.7, 12.0],
            backgroundColor: 'rgba(0, 102, 204, 0.5)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Comparativo de Indicadores Financieros (USD millones)'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10
            }
          }
        }
      }
    });
  
    const pieChart = new Chart(ctxPie, {
      type: 'doughnut',
      data: {
        labels: ['1T25', '1T24'],
        datasets: [{
          label: 'Margen EBITDA',
          data: [52.1, 38.9],
          backgroundColor: ['#004080', '#66a3ff'],
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: 'Margen EBITDA (%)'
          }
        }
      }
    });
  });
  