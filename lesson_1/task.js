const taskList = document.getElementById('taskList');
const clearBtn = document.querySelector('.clear');

taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-button')) {
        const taskItem = e.target.closest('li');
        taskItem.remove();

        // Сохранение списка задач в локальном хранилище
        localStorage.setItem('taskList', taskList.innerHTML);
    }

    if (e.target.classList.contains('clone-button')) {
        const taskItem = e.target.closest('li');
        const clonedTaskItem = taskItem.cloneNode(true); // клонирование задачи
        taskItem.after(clonedTaskItem); // Вставка клонированной задачи текущей задачи

        // Сохранение списка задач в локальном хранилище
        localStorage.setItem('taskList', taskList.innerHTML);

    }
});

if (localStorage.getItem('taskList')) {
    taskList.innerHTML = localStorage.getItem('taskList')
};

clearBtn.addEventListener('click', function (e) {
    localStorage.clear();
});
