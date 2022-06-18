const user =  'user1';
const pass = 'user1';

const login_auth = (e) => {
    e.preventDefault();
    const username = document.getElementsByName('username')[0];
    const password = document.getElementsByName('password')[0];
    if (user === username.value && pass === password.value) {
        window.location.href="home.html";
    }
    if (!username.value) {
        document.getElementById('username').removeAttribute("hidden");
        username.classList.add('border-danger');
    } 
    if (!password.value) {
        document.getElementById('password').removeAttribute("hidden");
        password.classList.add('border-danger');
    } 
    if (user != username.value || pass != password.value) {
        document.getElementById('username').removeAttribute("hidden");
        username.classList.add('border-danger');
        password.classList.add('border-danger');
    }
    

}