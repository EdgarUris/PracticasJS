import AuthService from "../services/AuthService.js";
import PostService from "../services/PostService.js";

document.addEventListener('DOMContentLoaded', async () => {
    if(!AuthService.isAuthenticated()){
        window.location.href = 'login.html';
    }

    const user = AuthService.getUser();

    const userInfo = document.getElementById('composer-user-info')

    userInfo.innerHTML = 
    `
    <img src="https://ui-avatars.com/api/?name=${user}" alt="Profile">
    <div class="composer-trigger" id="open-post-modal">
        ¿Qué estás pensando, ${user}?
    </div>
    `

    const postContainer = document.getElementById('posts-container');
    const logoutBtn = document.getElementById('logout-btn');

    const loadPosts = async () => {
        const user = AuthService.getUser();


        try {
            const posts = await PostService.getAll();

            postContainer.innerHTML = posts.length ? '' : "<p> No hay posts aún</p>"


            posts.forEach(post => {
                const postEl = document.createElement('div');
                postEl.className = 'post-card fade-in';
               
                const author = post.user ? post.user.username : 'Usuario';
                const createdTime = post.createdAt ? new Date(post.createdAt).toLocaleString() : 'Hace un momento';


                postEl.innerHTML = `
                    <div class="post-header">
                        <img class="avatar" src="https://ui-avatars.com/api/?name=${author}&background=random"
                            alt="Avatar">
                        <div class="post-user-info">
                            <h3>${author}</h3>
                            <span>${createdTime}</span>
                        </div>
                    </div>
                    <div class="post-content">
                        <div class="post-title">${post.title}</div>
                        <p>${post.content}</p>
                    </div>
                    <div class="post-actions">
                        <button class="action-btn"><i class="far fa-thumbs-up"></i> Me gusta</button>
                    </div>
                `;
                postContainer.appendChild(postEl);
            });


        } catch (error) {
            alert(error.message)
        }
    };


    // Control del modal de nuevo post (abrir/cerrar) y clics de botones
    document.addEventListener('click', (e) => {
        if (e.target.id === 'open-post-modal') {
            const modalRoot = document.getElementById('modal-root');
            modalRoot.innerHTML = `
                <div class="modal-overlay" id="post-modal" style="display: flex;">
                    <div class="modal-content fade-in">
                        <div class="modal-header">
                            <h2>Crear publicación</h2>
                            <button class="close-modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form id="create-post-form">
                                <div class="form-group">
                                    <input type="text" id="post-title" placeholder="Título de tu post" required>
                                </div>
                                <div class="form-group">
                                    <textarea id="post-content" placeholder="¿Qué estás pensando?"
                                        style="width: 100%; min-height: 150px; padding: 12px; border: 1px solid var(--border); border-radius: var(--radius); resize: none; font-size: 1.1rem; outline: none;"
                                        required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Publicar</button>
                            </form>
                        </div>
                    </div>
                </div>
            `;
        } else if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal-overlay')) {
            const modal = document.getElementById('post-modal');
            if (modal) modal.remove();
        }
    });

    loadPosts();
});




