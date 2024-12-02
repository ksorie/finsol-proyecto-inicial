/*Cerrar sesion*/ 
function cerrarSesion() {
    // Mostrar el spinner de carga
    document.getElementById("loading").style.display = 'flex';  // Muestra el mensaje de carga
    document.querySelector('main').style.display = 'none';  // Oculta el  main
    document.querySelector('.container').style.display = 'none'; // Oculta la barra lateral y el contenedor

    // Después de 3 segundos se redirige al login
    setTimeout(function() {
        window.location.href = '/index.html'; 
    }, 3000); // 3 segundos
}


