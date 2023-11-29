// HÀM TẠO MỘT ICON CÓ CHỨC NĂNG CHAT VỚI CỬA HÀNG
// Hàm thay đổi giá trị của thuộc tính display của phần tử có class "chat-box" giữa "block" và "none" mỗi khi được gọi.  
// Nếu chat box đang ẩn, hàm sẽ hiển thị nó; nếu chat box đang hiển thị, hàm sẽ ẩn nó.
// công dụng là mỗi khi click vào icon "chat-icon" thì nếu chat-box đang hiển thị thì ẩn đi, nếu đang ẩn thì hiển thị ra màn hình"
function toggleChat() {
    var chatBox = document.querySelector('.chat-box');
    chatBox.style.display = (chatBox.style.display == "none" || chatBox.style.display == "") ? "block" : "none";
}
// hàm sendMessage có công dụng thêm một tin nhắn mới vào cuộc trò chuyện 
// khi người dùng nhập và nhấn "Gửi".
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
