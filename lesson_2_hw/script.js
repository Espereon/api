const all_images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg"
];

const countArray = all_images.length;
const dotButtons = document.createElement('button');
const prevBt = document.querySelector('.preview');
const btnEl = document.querySelector('.buttons');
const nextBt = document.querySelector('.next');
const imgEl = document.querySelector('.img');
const divEl = document.querySelector('.img-container');
const pointEl = document.querySelector('.points');
let numImg = 0;
let numBtn = 0;
const textEl = document.createElement('p');
divEl.append(textEl);

nextBt.addEventListener('click', function (e) {
    ++numImg
    if (numImg < countArray) {
        console.log(numImg);
    }
    else {
        numImg = 0;
    }
    imgEl.src = all_images[numImg];
});

prevBt.addEventListener('click', function (e) {
    if (numImg > 0) {
        numImg--
        console.log(numImg);
    }
    else {
        numImg = countArray - 1;
    }
    imgEl.src = all_images[numImg]
});

while (pointEl.children.length < countArray) {
    const element = document.createElement('button');
    element.classList.add('dot-class');
    element.setAttribute('id', numBtn++)
    pointEl.append(element);
    element.addEventListener('click', (e) => {
        imgEl.src = all_images[element.id];
        element.classList.add('click-class');

    });
};