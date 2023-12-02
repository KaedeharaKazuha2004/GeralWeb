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

// Xử lý sự kiện submit của form
document.addEventListener("DOMContentLoaded", function () {
    // Lấy ra form bằng ID
    const form = document.querySelector('form');
  
    // Thêm sự kiện submit cho form
    form.addEventListener('submit', function (event) {
      // Ngăn chặn việc submit mặc định của form
      event.preventDefault();
  
      // Lấy ra email và password từ form
      const email = document.getElementById('form3Example3').value;
      const password = document.getElementById('form3Example4').value;
  
      // Kiểm tra nếu email và password không rỗng
      if (email.trim() !== '' && password.trim() !== '') {
        // Hiển thị thông báo đăng ký thành công
        alert('Đăng ký thành công!');
        // Tùy chỉnh hành động sau khi đăng ký thành công ở đây, có thể chuyển hướng trang hoặc thực hiện các hành động khác.
      } else {
        // Hiển thị thông báo lỗi nếu email hoặc password trống
        alert('Vui lòng nhập email và password!');
      }
    });
  });
  
