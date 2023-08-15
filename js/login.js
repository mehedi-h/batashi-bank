
document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmil = document.getElementById('user-email');
    const email = userEmil.value;
    
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value;

    if (email === 'batashi@khan.com' && password === '123321') {
        window.location.href = 'bank.html'; 
    } else {
        alert('Invalid email or password')
    }
})