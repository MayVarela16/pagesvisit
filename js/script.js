document.addEventListener('DOMContentLoaded', function () {
    const contadorElement = document.getElementById('contadorVisitas');
    const btnReestablecer = document.getElementById('btnReestablecer');

    function obtenerContador() {
        return parseInt(localStorage.getItem('contador')) || 0;
    }

  
    function actualizarContador(nuevoContador) {
        contadorElement.textContent = nuevoContador;
        localStorage.setItem('contador', nuevoContador);
    }


    function incrementarContador() {
        const contadorActual = obtenerContador();
        const nuevoContador = contadorActual + 1;
        actualizarContador(nuevoContador);
    }

   
    const contadorInicial = obtenerContador();
    actualizarContador(contadorInicial);

    
    btnReestablecer.addEventListener('click', function () {
        actualizarContador(0);
    });

   
    incrementarContador();
});