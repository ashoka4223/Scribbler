function openSignupModal() {
    document.getElementById('signUpModal').style.display = 'block';
}

function openSigninModal() {
    var a= document.getElementById('signInModal');
    a.style.display = 'block';
    a.value=a.defaultValue;
}

function closeModal() {
    document.getElementById('signInModal').style.display = 'none';
    document.getElementById('signUpModal').style.display = 'none';
}

function displaySignupModal() {
    document.getElementById('signInModal').style.display = 'none';
    document.getElementById('signUpModal').style.display = 'block';
}
