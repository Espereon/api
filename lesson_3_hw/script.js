const photoContainer = document.getElementById('photo-container');
// let page = Math.floor(Math.random() * 100); // выставил рандомные картинки со 100 страниц
let page = 1; // но для проверки лайков лучше с 1 страницей, там всего 9 фоток

async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=c-FO7mD6wSo7ZPZgDbaQprvL0t_x1Iz3GSTiL4PzK-E`);
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return [];
    }
}

async function LoadPhotos() {
    const responseObj = await fetchPhotos();
    const imgEl = document.querySelector('#img');
    const pEl = document.querySelector('#description');
    const h2El = document.querySelector('#name_photograph');
    const butEl = document.querySelector('#like_button');
    const countLike = document.querySelector('#like_count');
    const randomIndex = Math.floor(Math.random() * responseObj.length); //случайное фото из полученного массива
    imgEl.src = responseObj[randomIndex].urls.small;
    pEl.textContent = responseObj[randomIndex].alt_description;
    h2El.textContent = responseObj[randomIndex].user.name;
    if (localStorage.getItem(`${responseObj[randomIndex].id}`) === null) {
        localStorage.setItem(responseObj[randomIndex].id, responseObj[randomIndex].likes);
    } // если в локальном хранилище нет, то записываю данные по ID и лайкам
    countLike.textContent = `Количество лайков = ${localStorage.getItem(responseObj[randomIndex].id)}`; // вывожу количествой лайков
    if (parseInt(localStorage.getItem(responseObj[randomIndex].id)) > responseObj[randomIndex].likes) {
        butEl.classList.add('active');
    } else {
        butEl.classList.remove('active');
    } // здесь я пытался, чтобы при обновлении страницы проверялось на кол-во лайков и тем самым отображало кнопку лайка нажатой или нет
    butEl.addEventListener('click', function () {
        const currentLikes = parseInt(localStorage.getItem(responseObj[randomIndex].id));
        if (butEl.classList.contains('active')) {
            // Убираем лайк
            localStorage.setItem(responseObj[randomIndex].id, currentLikes - 1);
            countLike.textContent = `Количество лайков = ${localStorage.getItem(responseObj[randomIndex].id)}`;
            butEl.classList.remove('active');
        } else {
            // Добавляем лайк
            localStorage.setItem(responseObj[randomIndex].id, currentLikes + 1);
            countLike.textContent = `Количество лайков = ${localStorage.getItem(responseObj[randomIndex].id)}`;
            butEl.classList.add('active');
        }
    });
};

LoadPhotos();
// localStorage.clear(); // для чистки локального хранилища
