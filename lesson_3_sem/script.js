// // Задание № 1
// const productsData = [
//     {
//         id: 1,
//         name: 'Ноутбук',
//         category: 'Электроника'
//     },
//     {
//         id: 2,
//         name: 'Лампа',
//         category: 'Электроника'
//     },
//     {
//         id: 3,
//         name: 'Камера',
//         category: 'Электроника'
//     },
//     {
//         id: 4,
//         name: 'Лыжи',
//         category: 'Спорттовар'
//     },
//     {
//         id: 5,
//         name: 'Коньки',
//         category: 'Спорттовар'
//     },
//     {
//         id: 6,
//         name: 'Сноуборд',
//         category: 'Спорттовар'
//     },
//     {
//         id: 7,
//         name: 'Яблоко',
//         category: 'Еда'
//     },
//     {
//         id: 8,
//         name: 'Банана',
//         category: 'Еда'
//     },
//     {
//         id: 9,
//         name: 'Апельсин',
//         category: 'Еда'
//     }
// ]

// const selectEl = document.querySelector("#category-select");

// selectEl.addEventListener("change", () => {
//     const value = selectEl.value;
//     displayProducts(value);
// });

// function displayProducts(category) {
//     const productsList = document.getElementById("productList");
//     productsList.innerHTML = "";

//     productsData.forEach((product) => {
//         if (category === "" || product.category === category) {
//             const listItem = document.createElement("li");
//             listItem.textContent = product.name;
//             productsList.appendChild(listItem);
//         }
//     });
// }

// Задание № 2
const photoContainer = document.getElementById('photo-container');
let page = 1;

async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=1&per_page=9&client_id=c-FO7mD6wSo7ZPZgDbaQprvL0t_x1Iz3GSTiL4PzK-E`);
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return [];
    }
}

async function loadMorePhotos() {
    const responseObj = await fetchPhotos();
    responseObj.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo');
        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        photoElement.appendChild(img);
        photoContainer.appendChild(photoElement);
    });
}
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMorePhotos();
    }
});
loadMorePhotos();
