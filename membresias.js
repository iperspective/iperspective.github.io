const precioMensualBronce = 20;
const descuentoAnual = 0.1; 
const precioAnualBronce = (precioMensualBronce * 12) * (1 - descuentoAnual);
document.getElementById('precioAnualBronce').innerText = `$${precioAnualBronce}`;

const precioMensualPlata = 45;
const descuentoAnualPlata = 0.1; 
const precioAnualPlata = (precioMensualPlata * 12) * (1 - descuentoAnualPlata);
document.getElementById('precioAnualPlata').innerText = `$${precioAnualPlata}`;

const precioMensualOro = 80;
const descuentoAnualOro = 0.1; 
const precioAnualOro = (precioMensualOro * 12) * (1 - descuentoAnualOro);
document.getElementById('precioAnualOro').innerText = `$${precioAnualOro}`;

const precioMensualPlatino = 150;
const descuentoAnualPlatino = 0.1; 
const precioAnualPlatino = (precioMensualPlatino * 12) * (1 - descuentoAnualPlatino);
document.getElementById('precioAnualPlatino').innerText = `$${precioAnualPlatino}`;

function mostrarDetallesMembresia(membresia, detalles) {
    alert(`Detalles de la membresía ${membresia}: ${detalles}`);
    const confirmacion = confirm(`¿Deseas adquirir la membresía ${membresia}?`);
    if (confirmacion) {
        const nombreUsuario = prompt('Por favor, ingresa tu nombre:');
        const emailUsuario = prompt('Ingresa tu correo electrónico:');
        const telefonoUsuario = prompt('Ingresa tu número de teléfono:');
        
        const asunto = `Solicitud de adquisición de la membresía ${membresia}`;
        const cuerpo = `Hola equipo de Perspective App,\n\nEstoy interesado en adquirir la membresía ${membresia} y me gustaría obtener más información al respecto.\n\nDatos del interesado:\n\nNombre: ${nombreUsuario}\nCorreo electrónico: ${emailUsuario}\nTeléfono: ${telefonoUsuario}\n\nAgradezco su atención y espero su pronta respuesta.\n\nSaludos cordiales, ${nombreUsuario}`;
        
        window.location.href = `mailto:perspectiveappcontact@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        
        setTimeout(() => {
            alert('Has finalizado. Espera a que te contacte el equipo de Perspective App.');
        }, 3000);
    }
}

