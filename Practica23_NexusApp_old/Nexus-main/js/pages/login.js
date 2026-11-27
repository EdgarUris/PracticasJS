import AuthService from "../services/AuthService.js";

//esperar que el DOM termine de cargar
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if(loginForm){
        loginForm.addEventListener('submit', async (e) => {
            //quitar el comportamiento por default del form
            e.preventDefault();
            //obtener los datos del form para hacer la peticion
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            try{
                await AuthService.login(username, password);
                window.location.href = 'index.html';
            }catch(error){
                alert(error.message);
            }
        })
    }
})