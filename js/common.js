// Función para inicializar el chat de soporte
function initChat() {
    // Crear el contenedor del chat si no existe
    if (!document.querySelector('.chat-soporte-container')) {
      const chatHTML = `
        <div class="chat-soporte-container">
          <div class="chat-header">
            <h3>Chat de Soporte</h3>
            <button class="chat-toggle" onclick="toggleChat()">−</button>
          </div>
          <div class="chat-body" id="chat-body">
            <div class="chatbot-messages" id="chatbot-messages">
              <div class="chatbot-message bot-message">¡Hola! ¿En qué puedo ayudarte hoy?</div>
            </div>
            <div class="chatbot-input-area">
              <input type="text" id="chatbot-input" class="chatbot-input" placeholder="Escribe tu pregunta...">
              <button class="chatbot-send-button" onclick="sendMessage()">Enviar</button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', chatHTML);
    }
  
    // Crear el botón de WhatsApp si no existe
    if (!document.querySelector('.whatsapp-button')) {
      const whatsappHTML = `
        <a href="https://wa.me/123456789" class="whatsapp-button" target="_blank" aria-label="Contactar por WhatsApp">
          <div class="whatsapp-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6 6.31999C16.8 5.49999 15.8 4.89999 14.7 4.49999C13.6 4.09999 12.5 3.99999 11.3 4.09999C10.1 4.19999 9.00001 4.49999 8.00001 5.09999C7.00001 5.59999 6.20001 6.29999 5.50001 7.19999C4.80001 8.09999 4.30001 9.09999 4.10001 10.2C3.80001 11.3 3.90001 12.4 4.10001 13.5C4.40001 14.6 4.90001 15.7 5.70001 16.6L4.00001 20L7.50001 18.3C8.40001 18.9 9.40001 19.3 10.4 19.5C11.5 19.7 12.5 19.7 13.6 19.5C14.7 19.3 15.7 18.8 16.6 18.2C17.5 17.6 18.3 16.8 18.9 15.9C19.5 15 19.9 13.9 20 12.8C20.1 11.7 20 10.5 19.6 9.39999C19.2 8.19999 18.5 7.19999 17.6 6.31999ZM16.8 15.6C16.3 16.3 15.6 16.8 14.9 17.2C14.1 17.6 13.3 17.8 12.4 17.7C11.5 17.7 10.7 17.4 9.90001 17L9.20001 16.6L7.00001 17.6L8.00001 15.5L7.50001 14.8C7.00001 14 6.80001 13.2 6.70001 12.3C6.60001 11.4 6.80001 10.6 7.10001 9.79999C7.50001 8.99999 8.00001 8.29999 8.70001 7.79999C9.40001 7.19999 10.1 6.89999 11 6.79999C11.9 6.69999 12.7 6.79999 13.5 7.09999C14.3 7.39999 15 7.89999 15.6 8.49999C16.2 9.19999 16.6 9.89999 16.8 10.7C17 11.5 17 12.3 16.9 13.1C16.8 14 16.4 14.8 16.8 15.6Z" fill="white"/>
            </svg>
          </div>
        </a>
      `;
      document.body.insertAdjacentHTML('beforeend', whatsappHTML);
    }
  
    // Agregar event listener para el chat
    document.getElementById('chatbot-input').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  }
  
  // Función para enviar mensaje en el chat
  function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    const message = input.value.trim();
  
    if (message) {
      // Display user message
      const userDiv = document.createElement('div');
      userDiv.classList.add('chatbot-message', 'user-message');
      userDiv.textContent = message;
      messagesContainer.appendChild(userDiv);
  
      // Get bot response based on the provided logic
      setTimeout(() => {
        const botResponse = obtenerRespuesta(message);
        const botDiv = document.createElement('div');
        botDiv.classList.add('chatbot-message', 'bot-message');
        botDiv.textContent = botResponse;
        messagesContainer.appendChild(botDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
      }, 1000);
  
      input.value = ''; // Clear input
      messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
    }
  }
  
  // Función para obtener respuesta del chatbot
  function obtenerRespuesta(mensaje) {
    const msg = mensaje.toLowerCase();
    if (msg.includes("precio") || msg.includes("cuánto")) return "¿Sobre qué producto deseas conocer el precio?";
    if (msg.includes("tarjeta") || msg.includes("gráfica")) return "Tenemos la RTX 3050 GIGABYTE por $1.500.000.";
    if (msg.includes("horario")) return "Atendemos de lunes a sábado de 9am a 7pm.";
    if (msg.includes("ram")) return "La RAM Corsair Vengeance 16GB está en $380.000.";
    if (msg.includes("ssd")) return "El SSD Kingston M.2 de 1TB cuesta $510.000.";
    if (msg.includes("gracias")) return "¡Con gusto! ¿Te puedo ayudar en algo más?";
    if (msg.includes("login") || msg.includes("iniciar sesión") || msg.includes("cuenta")) 
      return "Puedes iniciar sesión o registrarte en la sección de 'Mi Cuenta' en la parte superior derecha del sitio.";
    return "Lo siento, no entendí eso. ¿Puedes ser más específico?";
  }
  
  // Función para mostrar/ocultar el chat
  function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    const toggleButton = document.querySelector('.chat-toggle');
    
    if (chatBody.style.display === 'none') {
      chatBody.style.display = 'flex';
      toggleButton.textContent = '−';
    } else {
      chatBody.style.display = 'none';
      toggleButton.textContent = '+';
    }
  }
  
  // Función para agregar al carrito
  function agregarAlCarrito(nombreProducto) {
    alert(`${nombreProducto} fue agregado al carrito 🛒`);
  }
  
  // Inicializar el chat cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', function() {
    initChat();
  });