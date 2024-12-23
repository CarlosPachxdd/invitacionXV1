// Establece la fecha del evento (Reemplaza con la fecha de tu evento)
const fechaEvento = new Date('Feb 08, 2025 14:00:00').getTime();

const actualizarCuentaRegresiva = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    // Cálculos de tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra los resultados
    document.getElementById('diasTiempo').innerText = dias;
    document.getElementById('horasTiempo').innerText = horas;
    document.getElementById('minutosTiempo').innerText = minutos;
    document.getElementById('segundosTiempo').innerText = segundos;

    // Si la cuenta regresiva ha terminado
    if (distancia < 0) {
        clearInterval(actualizarCuentaRegresiva);
        document.querySelector('.cuenta-regresiva').innerHTML = '<h2>¡El gran día ha llegado!</h2>';
    }
}, 1000);

// Validación del formulario de confirmación
(function () {
    'use strict';
    let forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

