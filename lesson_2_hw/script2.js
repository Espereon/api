const all_images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
];

const countArray = all_images.length;
const prevBt = document.querySelector(".preview");
const nextBt = document.querySelector(".next");
const imgEl = document.querySelector(".img");
const pointEl = document.querySelector(".points");

let numImg = 0;

nextBt.addEventListener("click", function () {
  numImg = (numImg + 1) % countArray;
  updateSlider(numImg);
});


prevBt.addEventListener("click", function () {
  numImg = (numImg - 1 + countArray) % countArray;
  updateSlider(numImg);
});

for (let i = 0; i < countArray; i++) {
  const element = document.createElement("button");
  element.classList.add("dot-class");
  element.dataset.index = i; // Хранение индекса в data-атрибуте
  pointEl.append(element);

  element.addEventListener("click", () => {
    numImg = parseInt(element.dataset.index);
    updateSlider(numImg);
  });
}

function updateSlider(index) {
  imgEl.src = all_images[index];

  Array.from(pointEl.children).forEach((dot) => {
    dot.classList.remove("click-class");
  });

  pointEl.children[index].classList.add("click-class");
}

updateSlider(numImg);