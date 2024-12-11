document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Credenciales válidas
    const validEmail = "kensysoriano22@gmail.com";
    const validPassword = "123456789";

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        const email = document.getElementById('email').value;
        const password = document.getElementById('Password').value;

        // Validación de credenciales
        if (email === validEmail && password === validPassword) {
            //alert("Inicio de sesión exitoso");
            window.location.href = "/html/dashboard.html"; // Redirige al dashboard
        } else {
            alert("Correo o contraseña incorrectos");
        }
    });
});
