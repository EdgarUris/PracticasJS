import AuthService from "./AuthService.js";

const BASE_URL = "http://localhost:8080/api";

class CommentService{

    static async handleResponse(res, defaultMessage) {
        const data = await res.json();

        if (!res.ok) {
            if (res.status === 401) {
                AuthService.logout();
                throw new Error('Tu sesión expiró, vuelve a iniciar sesión');
            }
            throw new Error(data.error || defaultMessage);
        }

        return data;
    }

    static getHeaders() {
        // TODO: Retornar un objeto con:
        //       - 'Content-Type': 'application/json'
        //       - 'Authorization': `Bearer ${...}`  (el token lo da AuthService.getToken())
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AuthService.getToken()}`
        }
    }
    
    static async obtenerComentarios(postId){
        const response = await fetch(`${BASE_URL}/comments/post/${postId}`, {
            headers: this.getHeaders(),
        });
        return this.handleResponse(response, "Error al obtener los comentarios");
    }

    static async hacerComentario(text, postId){
        const response = await fetch(`${BASE_URL}/comments`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ postId, text })
        });
        return this.handleResponse(response, "Error al realizar el comentario");
    }
}

export default CommentService;