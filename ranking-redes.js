document.addEventListener("DOMContentLoaded", function () {
    const ctxBar = document.getElementById('rankingChart').getContext('2d');
    const labelsBar = [
        'Facebook', 'Youtube', 'Instagram', 'Whatsapp', 'TikTok', 'WeChat',
        'Facebook Messenger', 'Telegram', 'Snapchat', 'Douyin', 'Kuaishou',
        'Twitter', 'Weibo', 'QQ', 'Pinterest'
    ];
    const dataBar = [
        3065, 2504, 2000, 2000, 1582, 1343, 1010, 900, 800, 755, 700,
        611, 598, 554, 498
    ];

    const rankingBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: labelsBar,
            datasets: [{
                label: 'Usuarios en Millones',
                data: dataBar,
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color de las barras
                borderColor: 'rgba(54, 162, 235, 1)', // Borde de las barras
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Ranking de Redes Sociales por Usuarios (Abril 2024)'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    const ctxLine = document.getElementById('rankingLineChart').getContext('2d');
    const labelsLine = ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']; // Ajusta según los años que desees mostrar

    // Simulación de crecimiento progresivo de usuarios por año para cada red social
    const datasetsLine = [
        {
            label: 'Facebook',
            data: simulateProgress(2004, 3065),
            borderColor: 'blue',
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Youtube',
            data: simulateProgress(2005, 2504),
            borderColor: 'red',
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Instagram',
            data: simulateProgress(2010, 2000),
            borderColor: 'green',
            borderWidth: 2,
            fill: false
        },
    {
        label: 'Whatsapp',
        data: simulateProgress(2009, 2000),
        borderColor: 'purple',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'TikTok',
        data: simulateProgress(2016, 1582),
        borderColor: 'orange',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'WeChat',
        data: simulateProgress(2010, 1343),
        borderColor: 'pink',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Facebook Messenger',
        data: simulateProgress(2011, 1010),
        borderColor: 'brown',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Telegram',
        data: simulateProgress(2013, 900),
        borderColor: 'gray',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Snapchat',
        data: simulateProgress(2011, 800),
        borderColor: 'cyan',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Douyin',
        data: simulateProgress(2016, 755),
        borderColor: 'magenta',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Kuaishou',
        data: simulateProgress(2011, 700),
        borderColor: 'lime',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Twitter',
        data: simulateProgress(2006, 611),
        borderColor: 'olive',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Weibo',
        data: simulateProgress(2009, 598),
        borderColor: 'teal',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'QQ',
        data: simulateProgress(1998, 554),
        borderColor: 'navy',
        borderWidth: 2,
        fill: false
    },
    {
        label: 'Pinterest',
        data: simulateProgress(2010, 498),
        borderColor: 'maroon',
        borderWidth: 2,
        fill: false
    },
    ];

    const rankingLineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labelsLine,
            datasets: datasetsLine
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Evolución de Usuarios por Red Social'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

function simulateProgress(startYear, currentValue) {
    const data = [];
    let value = 0;
    for (let year = 2004; year <= 2024; year++) {
        if (year >= startYear) {
            value += Math.floor(Math.random() * 100); // Simulación de crecimiento aleatorio
            data.push(value);
        } else {
            data.push(0);
        }
    }
    data[data.length - 1] = currentValue; // Establecer el valor actual en el último año
    return data;
}

function goToTop() {
    window.scrollTo(0, 0);
}
