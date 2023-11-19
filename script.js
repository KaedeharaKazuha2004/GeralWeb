function toggleChat() {
    var chatBox = document.querySelector('.chat-box');
    chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "block" : "none";
}

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var chatContent = document.getElementById("chat-content");

    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.innerText = messageText;

        chatContent.appendChild(messageElement);
        chatContent.scrollTop = chatContent.scrollHeight;

        // Reset input
        messageInput.value = "";
    }
}
