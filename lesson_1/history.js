const backButton = document.querySelector('.backButton');
const forwButton = document.querySelector('.forwardButton');

backButton.addEventListener('click', function (e) {
    window.history.back();
});

forwButton.addEventListener('click', function (e) {
    window.history.forward();
});