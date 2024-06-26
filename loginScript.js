const signupForm = document.getElementById('signupForm');
const notice = document.getElementById('notice');
const noticeMessage = document.getElementById('notice-message');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get name, email, username, and password from the signup form
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // ... (Your actual signup logic here) ... 

    // Example: Simulate successful signup and redirect
    noticeMessage.textContent = "حساب شما با موفقیت ایجاد شد. در حال انتقال به صفحه اصلی...";
    notice.style.display = 'block';

    // Redirect to the main page (index.html) after a short delay
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000); // Delay of 2 seconds
});