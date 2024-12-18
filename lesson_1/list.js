const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list');

// восстановление списка дел из локального хранилища при загрузке страницы
if (localStorage.getItem('tasks')) {
    taskList.innerHTML = localStorage.getItem('tasks');
}
addButton.addEventListener('click', function (e) {
    const taskDescription = taskInput.value;
    if (taskDescription !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.innerHTML = `
            <span class="task-description">${taskDescription}</span>
            <button class="delete-button">Удалить</button>
            `;
        taskList.appendChild(listItem);

        taskInput.value = '';
        // сохраняем список дел в локальное хранилище
        localStorage.setItem('tasks', taskList.innerHTML)
    }
});

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.closest('li');
        listItem.parentNode.removeChild(listItem);

        // Обновление списка дел в локальном хранилище
        localStorage.setItem('tasks', taskList.innerHTML);
    }
});