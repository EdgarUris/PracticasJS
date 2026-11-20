import * as state from "./state.js";
import * as ui from "./ui.js";

//hay que esperar a que el DOM termine de cargar primero para poder hacer lo siguiente
document.addEventListener('DOMContentLoaded', async () => {
    const input = document.querySelector('input');
    const list = document.getElementById('taskList');

    const addBtn = document.querySelector('.btn-add');
    const tasks = await state.fetchTasks();
    ui.render(tasks);

    input.addEventListener("keydown", (e)=>{
        if(e.key === 'Enter') addBtn.click();
    });
    
    addBtn.addEventListener('click', async () => {
        if(input.value.trim() === '') return;

        await state.addTask(input.value);

        input.value = '';

        ui.render(state.tasks);
    })

    list.addEventListener('click', async (e) => {

        const id = parseInt(e.target.closest('li').dataset.id);
        if(e.target.classList.contains('btn-delete')){
            if(confirm('Estas seguro de eliminar la tarea?')){
                await state.deleteTask(id);
            }
        }
        else if(e.target.classList.contains('btn-edit')){
            const task = state.tasks.find(t => t.id === id);
            const newText = prompt("Editar tarea: ", task.text)
            if(newText) await state.editTask(id, newText);
        }
        else if(e.target.tagName !== 'BUTTON'){
            await state.toggleTask();
        }

        ui.render(state.tasks);
    })


});