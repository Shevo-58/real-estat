// إضافة مستمع للأزرار عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    ...
    const registerBtn = document.getElementById('register-interest-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', submitInterestForm);
    }
    ...
});

// داخل دالة showPropertyDetails
document.getElementById('modal-image').alt = title;
document.getElementById('modal-description').textContent = description;
