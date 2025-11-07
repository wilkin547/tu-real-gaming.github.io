// Función para cambiar el modo oscuro/claro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Cargar la preferencia del modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
});

// Modal functionality
const miModal = document.getElementById('miModalDeEjemplo');
const modalTitulo = miModal.querySelector('.modal-title');
const modalCuerpo = miModal.querySelector('.modal-body');

miModal.addEventListener('show.bs.modal', function (event) {
    // El 'relatedTarget' es el botón que fue presionado (en este caso, el botón 'curiosidad')
    const botonDisparador = event.relatedTarget; 

    modalTitulo.textContent = '¡Información Extra sobre el Desarrollo!'; 

    // Cambiar el contenido del Cuerpo
    modalCuerpo.innerHTML = `
        <p>LOS CREADORES DE DARKwood fueron de polonia, en la epoca sovietica, almenos el juego en principio</p>
        
    `;

    // Nota: Usar innerHTML te permite inyectar HTML como <p> o <strong>
});