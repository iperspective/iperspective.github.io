// Simulando datos de inversión y oportunidades (puedes ajustar según necesites)
const inversionesData = [
  { tipo: 'Casa', imagen: 'casa.jpg', descripcion: 'Descripción de la casa.' },
  { tipo: 'Apartamento', imagen: 'apartamento.jpg', descripcion: 'Descripción del apartamento.' },
  { tipo: 'Barrio Privado', imagen: 'barrio.jpg', descripcion: 'Descripción del barrio privado.' },
  // Agrega más datos según necesites
];

const oportunidadesData = [
  { titulo: 'Oportunidad 1', descripcion: 'Descripción de la oportunidad 1.' },
  { titulo: 'Oportunidad 2', descripcion: 'Descripción de la oportunidad 2.' },
  { titulo: 'Oportunidad 3', descripcion: 'Descripción de la oportunidad 3.' },
  // Agrega más datos según necesites
];

// Función para crear tarjetas de inversión dinámicamente
function crearTarjetasInversiones() {
  const tarjetasContainer = document.querySelector('.tarjetas-container');

  inversionesData.forEach((inversion) => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    tarjeta.innerHTML = `
      <img src="${inversion.imagen}" alt="${inversion.tipo}">
      <h3>${inversion.tipo}</h3>
      <p>${inversion.descripcion}</p>
    `;

    tarjetasContainer.appendChild(tarjeta);
  });
}

// Función para mostrar oportunidades de inversión dinámicamente
function mostrarOportunidades() {
  const oportunidadesContainer = document.querySelector('.oportunidades-container');

  oportunidadesData.forEach((oportunidad) => {
    const card = document.createElement('div');
    card.classList.add('oportunidad-card');

    card.innerHTML = `
      <h3>${oportunidad.titulo}</h3>
      <p>${oportunidad.descripcion}</p>
    `;

    oportunidadesContainer.appendChild(card);
  });
}

// Importar jQuery y Slick Carousel desde una CDN
document.addEventListener('DOMContentLoaded', () => {
  // Llamamos a las funciones para crear tarjetas de inversión y mostrar oportunidades
  crearTarjetasInversiones();
  mostrarOportunidades();

  // Inicializar el carrusel de oportunidades utilizando Slick Carousel
  $('.oportunidades-container').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1, // Mostrar solo una tarjeta a la vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

