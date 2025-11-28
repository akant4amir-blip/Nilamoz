document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // ذخیره اطلاعات کاربر
    localStorage.setItem('studentUsername', username);
    
    // بررسی مدیر
    if (username === 'amirhossein' && password === '13') {
        window.location.href = 'admin-complete.html';
    }
    // بررسی دانش‌آموز
    else if (username.length >= 5 && password.length === 3) {
        window.location.href = 'index.html'; // به صفحه اصلی برو
    }
    else {
        alert('نام کاربری یا رمز عبور اشتباه است!\nنام کاربری: حداقل ۵ حرف\nرمز عبور: دقیقاً ۳ رقم');
    }
});