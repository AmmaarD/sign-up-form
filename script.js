

//Check if password and confirm password match in the form
function checkPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (confirmPassword === "") {
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        document.getElementById('password').classList.add('invalid');
        document.getElementById('confirm-password').classList.add('invalid');
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.style.display = 'none';
        document.getElementById('password').classList.remove('invalid');
        document.getElementById('confirm-password').classList.remove('invalid');
    }
}
document.getElementById('confirm-password').addEventListener('blur', function() {
    const confirmPassword = document.getElementById('confirm-password').value;
    console.log("confirmpwd: \""+confirmPassword+"\"");
    if (confirmPassword === "") {

    }else{
        checkPassword();
    }
});

document.getElementById('confirm-password').addEventListener('focus', checkPassword);
document.getElementById('confirm-password').addEventListener('blur', checkPassword);



