// Gráfico 1: ROE vs Costo por Usuario Activo
const ctxRoeCosto = document.getElementById('roeCostoChart').getContext('2d');
new Chart(ctxRoeCosto, {
  type: 'line',
  data: {
    labels: ['1T24', '4T24', '1T25'],
    datasets: [
      {
        label: 'ROE (%)',
        data: [18.6, 22.0, 25.0],
        borderColor: '#6a1b9a',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#6a1b9a'
      },
      {
        label: 'Costo por Usuario (USD)',
        data: [0.9, 0.85, 0.8],
        borderColor: '#43a047',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#43a047'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Evolución ROE vs Costo por Usuario Activo'
      }
    }
  }
});

// Gráfico 2: Usuarios por país
const ctxUsuarios = document.getElementById('usuariosPaisChart').getContext('2d');
new Chart(ctxUsuarios, {
  type: 'bar',
  data: {
    labels: ['Brasil', 'México', 'Colombia'],
    datasets: [{
      label: 'Millones de Usuarios',
      data: [105, 11, 3],
      backgroundColor: ['#1e88e5', '#43a047', '#fb8c00']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Crecimiento de Usuarios por País'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + 'M';
          }
        }
      }
    }
  }
});
