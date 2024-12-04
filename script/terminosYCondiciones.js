document.addEventListener("DOMContentLoaded", ()=> {
    // Evento cuando el usuario hace clic en "Leer y aceptar los Términos y Condiciones"
    document.getElementById("open-modal").addEventListener("click", ()=> {
        // Redirige a la página de términos y condiciones
        window.location.href = "/html/terminosYCondiciones.html";
    });
});
    // Evento cuando el usuario hace clic en "Acepto y Continuar" en la página de términos
    document.getElementById("accept-btn").addEventListener("click", ()=> {
        // Guarda en localStorage la aceptación de los términos
        localStorage.setItem("acceptedTerms", "true");
        // Redirige a la página de solicitud de préstamo
        window.location.href = "/html/prestamos.html";
    });

    // Cuando se carga la página de solicitud de préstamo, habilita el checkbox si se han aceptado los términos
document.addEventListener("DOMContentLoaded", function() {
        if (localStorage.getItem("acceptedTerms") === "true") {
            let checkbox = document.getElementById("accept-terms");
            checkbox.disabled = false;
            checkbox.checked = true;
        }
    });


