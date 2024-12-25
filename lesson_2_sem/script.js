// // Задание № 1
// document.addEventListener('DOMContentLoaded', function (e) {
//     const aEl = document.querySelector('.link');
//     aEl.addEventListener('mouseover', function (e) {
//         aEl.classList.add('hover');
//     });
//     aEl.addEventListener('click', function (e) {
//         aEl.classList.add('onclick');
//     });
//     aEl.addEventListener('mouseout', function (e) {
//         aEl.classList.add('out');
//     });
// });

// // Задание № 2
// const divEl = document.querySelector('.block');
// const btnEl = document.querySelector('.btn');
// const closeBtn = document.querySelector('.closeBtn');
// const modalEl = document.querySelector('.modal');

// btnEl.addEventListener('click', function (e) {
//     modalEl.style.display = 'block';
//     btnEl.style.display = 'none';
// });

// closeBtn.addEventListener('click', function (e) {
//     modalEl.style.display = 'none';
//     btnEl.style.display = 'block';
// });

// Задание № 3
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function (e) {
    if (e.isTrusted) {
        setTimeout(() => {
            e.target.textContent = 'Товар добавлен в корзину';
            setTimeout(() => {
                e.target.textContent = 'Купить'
            }, 2000);
        }, 2000);
    } else {
        console.log('события является не доверенным');
    }
});