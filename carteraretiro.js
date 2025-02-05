document.addEventListener("DOMContentLoaded", function () {
    const retiroForm = document.getElementById("retiroForm");
    const saldoDisponible = document.getElementById("saldoDisponible");
    const montoRetiro = document.getElementById("montoRetiro");
    const metodoPago = document.getElementById("metodoPago");
    const mensaje = document.getElementById("mensaje");

    let saldo = 1000; // Saldo inicial de prueba
    saldoDisponible.textContent = `$${saldo.toFixed(2)}`;

    retiroForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const monto = parseFloat(montoRetiro.value);
        const metodo = metodoPago.value;

        if (isNaN(monto) || monto <= 0) {
            mensaje.textContent = "Ingrese un monto válido.";
            mensaje.style.color = "red";
            return;
        }

        if (monto > saldo) {
            mensaje.textContent = "Saldo insuficiente.";
            mensaje.style.color = "red";
            return;
        }

        if (metodo === "") {
            mensaje.textContent = "Seleccione un método de pago.";
            mensaje.style.color = "red";
            return;
        }

        // Simulación de retiro exitoso
        saldo -= monto;
        saldoDisponible.textContent = `$${saldo.toFixed(2)}`;
        mensaje.textContent = `Retiro de $${monto.toFixed(2)} realizado con éxito a través de ${metodo}.`;
        mensaje.style.color = "green";
        retiroForm.reset();
    });
});
