let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email.trim() !== '' && password.trim() !== '') {
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);

        emailInput.value = '';
        passwordInput.value = '';

        alert('your data has been submitted')
    } else {
        alert('Please fill the fields');
    }
});

