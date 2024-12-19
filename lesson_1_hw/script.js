const divEl = document.querySelector('.exercise');
data.forEach(element => {
    const elTitle = document.createElement('li');
    const elMaxCount = document.createElement('p');
    const elCurCount = document.createElement('p');
    const elTime = document.createElement('p');
    const addBtn = document.createElement('button');
    elTitle.textContent = `Название занятия: ${element.title}`;
    elTime.textContent = `Длительность занятия - ${element.time}`;
    elMaxCount.textContent = `Максимальное количество участников: ${element.max_count}`;
    elCurCount.textContent = `Текущее количество записанных участников: ${element.curent_count}`;
    addBtn.textContent = 'Записаться';
    divEl.append(elTitle);
    elTitle.append(elTime);
    elTime.append(elMaxCount);
    elMaxCount.append(elCurCount);
    elCurCount.append(addBtn);

    addBtn.addEventListener('click', function (e) {
        if (element.curent_count < element.max_count) {
            element.curent_count + 1;
        } else {
            alert('Нет свободных мест')
        }
    });
});
