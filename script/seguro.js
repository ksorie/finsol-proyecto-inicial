document.getElementById('btn-submit').addEventListener('click', function(event) {
    // Verificar si se seleccionó una opción
    const selectedInsurance = document.querySelector('input[name="insurance"]:checked');
    
    if (!selectedInsurance) {
        alert('Debe seleccionar un seguro antes de enviar la solicitud.');
        return;
    }

    // Guardar la selección (para futura base de datos)
    const insuranceValue = selectedInsurance.value;
    localStorage.setItem('selectedInsurance', insuranceValue); //  localStorage (info para la base de datos)

    window.location.href = '/html/graciasSeguros.html';
});

document.getElementById('btn-cancel').addEventListener('click', function(event) {
    window.location.href = '/html/dashboard.html';
});
