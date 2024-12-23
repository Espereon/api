// На странице есть список элементов, каждый из которых имеет атрибут data-price, содержащий цену товара. Создайте функцию, которая принимает максимальную цену и скрывает все элементы с ценой выше указанной значения. 

const filterElementsByDataAttribute = (attrubuteName, maxPrice) => {
    const elements = Array.from(document.querySelectorAll(`[${attrubuteName}]`));
    elements.forEach(element => {
        const price = parseFloat(element.getAttribute(attrubuteName));
        if (price > maxPrice) {
            element.style.display = 'none';
        }
    });
};

filterElementsByDataAttribute('data-price', 50);


// На странице есть список элементов, каждый из которых имеет атрибут data-rating, содержащий рейтинг товара. Создайте функцию, которая сортирует элементы в порядке убиывания рейтинга и переставляет их на странице в соответствии с новым порядком. 
const sortElementByDataAttribue = attributeName => {
    const rating = document.querySelector('.rating');
    const elements = Array.from(rating.querySelectorAll(`[${attributeName}]`));
    elements.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute(attributeName));
        const ratingB = parseInt(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    elements.forEach(element => {
        rating.appendChild(element);
    });
};

sortElementByDataAttribue('data-rating');
