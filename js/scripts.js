/* scripts.js */

/* Espera a que el DOM se cargue completamente */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Scripts cargados correctamente.");
  });
  
  /* Gestión del formulario de reserva */
  const reservaForm = document.getElementById('reservaForm');
  if (reservaForm) {
    reservaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Aquí se podría integrar la API de pago real (por ejemplo, Stripe o PayPal)
      alert('Reserva y pago procesados correctamente');
      reservaForm.reset();
    });
  }
  
  /* Funcionalidad para el chat con IA */
  const chatForm = document.getElementById('chatForm');
  const chatBox = document.getElementById('chatBox');
  if (chatForm && chatBox) {
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const mensajeInput = document.getElementById('mensajeInput');
      if (mensajeInput.value.trim() === "") return;
      
      agregarMensaje('usuario', mensajeInput.value);
      chatForm.reset();
  
      // Simulación de respuesta de la IA (aquí se integraría la API de IA real)
      setTimeout(() => {
        const respuesta = "Esta es una respuesta simulada. Te recomiendo visitar la Giralda, el Alcázar y disfrutar de la gastronomía local.";
        agregarMensaje('ia', respuesta);
      }, 1000);
    });
  }
  
  /* Función para agregar mensajes al chat */
  function agregarMensaje(remitente, texto) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add('mensaje', remitente);
    mensajeDiv.textContent = texto;
    chatBox.appendChild(mensajeDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  