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
    var messageInput = document.getElementById("message-input"); // Lấy phần tử có id là "message-input"
    var chatContent = document.getElementById("chat-content"); // lấy phần tử có id là "chat-content"
// Lấy giá trị của phần tử đầu vào (tức là nội dung tin nhắn) và loại bỏ khoảng trắng ở đầu và cuối chuỗi.
    var messageText = messageInput.value.trim(); 
    if (messageText !== "") {
//Tạo một phần tử <div> mới với class là "message" và đặt nội dung của phần tử này là nội dung tin nhắn.
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.innerText = messageText;
//Thêm phần tử tin nhắn mới vào cuộc trò chuyện và cuộn xuống cuối cùng để hiển thị tin nhắn mới nhất.
        chatContent.appendChild(messageElement);
        chatContent.scrollTop = chatContent.scrollHeight;

// Đặt lại giá trị của phần tử đầu vào sau khi tin nhắn đã được gửi đi để người dùng có thể nhập tin nhắn mới.
        messageInput.value = "";
    }
}
//Hàm kiểm tra ô nhập dữ liệu trong chat-box
function checkKeySearch(event) {
    var key = event.key;
    if (key == "32") {
        // Ngăn chặn hành động mặc định của Enter trên input (nếu có)
        event.preventDefault();
        sendMessage();
    }
}