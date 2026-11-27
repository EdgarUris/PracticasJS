const BASE_URL = 'http://localhost:8080/api';


class PostService{
    static getHeaders(){
        const token = localStorage.getItem('token');
        return {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`
        };
    }


    static async getAll(){
        const res = await fetch(`${BASE_URL}/posts`, { headers : this.getHeaders() });
        const data = await res.json();


        if(!res.ok){
            if(res.status === 401) throw new Error("La sesión ha expirado");
            throw new Error("Error al obtener el listado de posts");
        }


        return data;
    }


    static async create(title, content, userId) {
        const res = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ title, content, userId })
        });
        const data = await res.json();


        if (!res.ok) {
            if (res.status === 401) throw new Error("La sesión ha expirado");
            throw new Error(data.message || "Error al crear la publicación");
        }


        return data;
    }
}


export default PostService;
