import * as state from "./state.js";
import * as ui from "./ui.js";

//hay que esperar a que el DOM termine de cargar primero para poder hacer lo siguiente
document.addEventListener('DOMContentLoaded', async () => {
    const input = document.querySelector('input');

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
});