const divEl = document.querySelector('.exercise');
data.forEach(element => {
    // блок с занятими 
    const elExercise = document.createElement('div');
    // название занятия
    const elTitle = document.createElement('li');
    elTitle.textContent = `Название занятия: ${element.title}`;
    // длительность занятия 
    const elTime = document.createElement('p');
    elTime.textContent = `Длительность занятия - ${element.time}`;
    // максимальное количество участников
    const cardText = document.createElement('p');
    cardText.textContent = 'Максимальное количество учеников: ';
    const elMaxCount = document.createElement('span');
    elMaxCount.textContent = element.max_count;
    // текущее количество участников
    const cardText2 = document.createElement('p');
    cardText2.textContent = 'Текущее количество учеников: ';
    const elCurCount = document.createElement('span');
    elCurCount.textContent = element.curent_count;
    // кнопка записи
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Записаться';
    addBtn.classList.add('btn', 'btn-primary')
    if (parseInt(elCurCount.textContent) >= parseInt(elMaxCount.textContent)) {
        addBtn.classList.add('btn', 'btn-danger');
        addBtn.disabled = true;
    };
    let pushCounter = 0;
    // привязки
    divEl.append(elExercise);
    elExercise.append(elTitle);
    elTitle.append(elTime);
    elExercise.append(cardText);
    cardText.append(elMaxCount);
    elExercise.append(cardText2);
    cardText2.append(elCurCount);
    elExercise.append(addBtn);


    addBtn.addEventListener('click', () => {
        pushCounter++;
        elCurCount.textContent = parseInt(elCurCount.textContent) + 1;
        addBtn.disabled = true;
        addBtn.textContent = 'Записались';
        if (parseInt(elCurCount.textContent) === parseInt(elMaxCount.textContent)) {
            addBtn.classList.add('btn', 'btn-danger');
        }
        const cancel = document.createElement('button');
        cancel.classList.add('btn', 'btn-warning');
        if (!divEl.lastChild.classList.contains('cancel')) {
            cancel.textContent = 'Отменить запсись';
            elExercise.appendChild(cancel);
        }
        cancel.addEventListener('click', () => {
            pushCounter--;
            addBtn.disabled = false;
            if (pushCounter === 0) {
                elExercise.removeChild(cancel);
            }
            addBtn.classList.remove('btn-danger', 'btn-warning');
            addBtn.classList.add('btn-primary');
            addBtn.textContent = 'Записаться'
            elCurCount.textContent = parseInt(elCurCount.textContent) - 1;
        });
    });
});
