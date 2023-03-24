// This function creates a new li element for the message, 
// sets its class to chat-item and chat-item-{sender} where {sender} 
// is either "user" or "bot" depending on who sent the message. 
//Then it creates a div element for the message itself, 
//sets its class to chat-message, and adds the text content of the message to it. 
//Finally, it appends the message div to the li element, 
//and the li element to the chat history ul element. 
//This will add the new message to the chat history on the website.

const chatHistory = document.querySelector('.chat-history');
const chatInput = document.querySelector('.chat-input');
const chatSendBtn = document.querySelector('.chat-send-btn');

chatSendBtn.addEventListener('click', () => {
  const userMessage = chatInput.value;
  addMessageToChat(userMessage, 'user');
  chatInput.value = '';
  // Send userMessage to backend for processing
  // Get response from backend and add to chat
  const botMessage = 'I am a chatbot. How can I assist you today?';
  addMessageToChat(botMessage, 'bot');
});

function addMessageToChat(message, sender) {
    const chatItem = document.createElement('li');
    chatItem.classList.add('chat-item');
    chatItem.classList.add(`chat-item-${sender}`);
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');
    chatMessage.textContent = message;
    chatItem.appendChild(chatMessage);
    chatHistory.appendChild(chatItem);
  }
