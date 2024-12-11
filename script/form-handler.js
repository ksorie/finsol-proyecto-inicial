// Manejo del evento submit del formulario
document.getElementById('solicitudForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío estándar del formulario

    // Capturar datos del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const ciudad = document.getElementById('ciudad').value;
    const monto = document.getElementById('monto').value;
    const tipoPrestamo = document.querySelector('.select').value;
    const observaciones = document.querySelector('.textarea').value;

    // Validar si todos los campos están completos
    if (!nombre || !telefono || !email || !ciudad || !monto || !tipoPrestamo || !observaciones) {
        alert('Por favor, complete todos los campos antes de enviar la solicitud.');
        return;
    }

    // Guardar datos en Local Storage para la redirección temporal
    const datosFormulario = {
        nombre,
        telefono,
        email,
        ciudad,
        monto,
        tipoPrestamo,
        observaciones
    };

    console.log("Datos del formulario:", datosFormulario);
    localStorage.setItem('solicitudDatos', JSON.stringify(datosFormulario));

    // Redirigir automáticamente a la página de agradecimiento
    window.location.href = '/html/graciasPrestamos.html';
});
