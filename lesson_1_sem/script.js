function windowSize() {
    window.addEventListener('resize', function (e) {
        console.log(window.innerHeight, window.innerWidth);
    });
};
windowSize();

function windowClose() {
    window.onbeforeunload = function () {
        return "Данные не сохранены. Точно перейти?";
    };
}
windowClose();

const backButton = document.querySelector('.backButton');
const forwButton = document.querySelector('.forwardButton');

backButton.addEventListener('click', function (e) {
    window.history.back();
});

forwButton.addEventListener('click', function (e) {
    window.history.forward();
});