// // Задание № 1
// function windowSize() {
//     window.addEventListener('resize', function (e) {
//         console.log(window.innerHeight, window.innerWidth);
//     });
// };
// windowSize();

// function windowClose() {
//     window.onbeforeunload = function () {
//         return "Данные не сохранены. Точно перейти?";
//     };
// }
// windowClose();

// const backButton = document.querySelector('.backButton');
// const forwButton = document.querySelector('.forwardButton');

// backButton.addEventListener('click', function (e) {
//     window.history.back();
// });

// forwButton.addEventListener('click', function (e) {
//     window.history.forward();
// });

// Задание № 2
const addBtn = document.getElementById('add-button');
const delBtn = document.getElementById('del-button');
const clnBtn = document.getElementById('clone-button');
const divCont = document.getElementById('div-content');


addBtn.addEventListener('click', () => {
    const divEl = document.createElement('div');
    divEl.classList.add('box');
    divEl.textContent = divCont.children.length + 1;
    divCont.appendChild(divEl);
});

delBtn.addEventListener('click', () => {
    if (divCont.children.length > 0) {
        const lastChild = divCont.lastChild;
        divCont.removeChild(lastChild);
    }
});

clnBtn.addEventListener('click', function (e) {
    const lastBox = divCont.lastChild;
    const clone = lastBox.cloneNode(true);
    clone.classList.add('box');
    divCont.append(clone);
});