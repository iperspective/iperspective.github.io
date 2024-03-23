// Función para mostrar la información detallada de la membresía seleccionada
function mostrarDetallesMembresia(membresia) {
    // Aquí puedes implementar la lógica para mostrar los detalles de la membresía
    // Por ejemplo, podrías abrir un modal con la información detallada.
    alert(`Detalles de la membresía ${membresia}`);
}

// Obtener todas las tarjetas de membresía
const membresiaCards = document.querySelectorAll('.membresia-card');

// Agregar un evento de clic a cada tarjeta de membresía
membresiaCards.forEach(card => {
    card.addEventListener('click', () => {
        // Obtener el nombre de la membresía de la tarjeta clicada
        const membresia = card.querySelector('h2').innerText;
        // Mostrar los detalles de la membresía
        mostrarDetallesMembresia(membresia);
    });
});
