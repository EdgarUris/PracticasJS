const BASE_URL = "http://localhost:8080/api";

class AuthService{
    static async login(username, password){
        const response = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST', //metodo
                headers: { 'Content-Type': 'application/json' }, //cabeceras
                body: JSON.stringify({username, password}) //lo que viene en el body
            });
        const data = await response.json();

        //atrapar errores de la peticion
        if(!response.ok){
            const errorMsg = data.error || "Ocurrió un error al iniciar sesión";
            throw new Error(errorMsg)
        }

        //guardar en el localstorage token y username
        if(data.token){
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', username);
        } else {
            const errorMsg = data.error || "Ocurrió un error al iniciar sesión";
            throw new Error(errorMsg)
        }

        return data;

    }

    static isAuthenticated(){
        return localStorage.getItem('token')
    }

    static getUser(){
        return localStorage.getItem('user');
    }
}

export default AuthService;