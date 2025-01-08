// console.log(document.forms.superForm);
// console.log(document.forms[1]);

// const form = document.forms.superForm;
// console.log(form.elements.first);
// form.elements.second.value = 777;
// console.log(form.elements.second);

// // select
// const select = document.forms.superForm.selectForm;
// Следующие 3 строки делают одно и то же
// select.options[2].selected = true;
// select.selectIndex = 2;
// select.value = 'SkillFactory';

// const selected = Array.from(select.options)
//     .filter(option => option.selected)
//     .map(option => option.value);
// console.log(selected);

// //select 2
// const selectElement = document.querySelector('#country-select');
// const capitalInfoElement = document.querySelector('#capital-info');

// selectElement.onchange = function () {
//     const selectCountry = selectElement.value;
//     let capital = '';
//     console.log(selectCountry);

//     // Определеяем стролицу в зависимости от выбранной страны
//     switch (selectCountry) {
//         case 'Russia':
//             capital = 'Москва'
//             break;
//         case 'USA':
//             capital = 'Вашингтон, D. C.'
//             break;
//         case 'China':
//             capital = 'Пекин'
//             break;
//         default:
//             capital = 'Выберите страну, чтобы узнать столицу'
//             break;
//     }

//     // Обновляем информацию о столице на странице
//     capitalInfoElement.textContent = capital;
// };


// // select 3
// const sortSelect = document.querySelector('#sort-select');
// const productList = document.querySelector('#product-list');
// const productItem = Array.from(document.querySelectorAll('.product-item')); // создаём массив из все элементов с классом prodct-item
// console.log(productItem);
// sortSelect.onchange = function () {
//     const selectOption = sortSelect.value; // получение выбранной опции сортировки

//     // сортировка списка торваров по цене
//     if (selectOption === 'asc') {
//         productItem.sort((a, b) => {
//             const priceA = parseInt(a.textContent.split('- $')[1]); //Извлечение цены из текстового содержимого элемента
//             const priceB = parseInt(b.textContent.split('- $')[1]);
//             return priceA - priceB;
//         })
//     } else if (selectOption === 'desc') {
//         productItem.sort((a, b) => {
//             const priceA = parseInt(a.textContent.split('- $')[1]); //Извлечение цены из текстового содержимого элемента
//             const priceB = parseInt(b.textContent.split('- $')[1]);
//             return priceB - priceA;
//         })
//     }
//     productItem.forEach(item => productList.appendChild(item));
// };

// // focus
// const input = document.forms.superForm.input;
// const error = document.querySelector('#error');
// input.onblur = function () {
//     if (!input.value.includes('@')) { // вводимые данные не содержит собачки
//         input.classList.add('invalid');
//         error.innerHTML = 'Пожалуйста, введите правильный email'
//     }
// };

// input.onfocus = function () {
//     if (this.classList.contains('invalid')) {
//         this.classList.remove('invalid');
//         error.innerHTML = '';
//     }
// }

// // inputs
// const form = document.forms.superForm;
// form.email.onchange = () => {
//     console.log('change - email: ', form.email.value);
// }
// form.email.oninput = () => {
//     console.log('input - email: ', form.email.value);
// }
// form.selectForm.onchange = () => {
//     console.log('change - selectForm: ', form.selectForm.value);
// }
// form.selectForm.oninput = () => {
//     console.log('input - selectForm: ', form.selectForm.value);
// }
// form.checkbox.onchange = () => {
//     console.log('change - changebox: ', form.checkbox.checked);
// }
// form.checkbox.oninput = () => {
//     console.log('input - changebox: ', form.checkbox.checked);
// }

// form.email.oncut = form.email.oncopy = form.email.onpaste = (event) => {
//     console.log(event.type + ' - ' + event.clipboardData.getData('text/plain'));
// }

// // input 2
// const commentInput = document.querySelector('#comment-input');
// const charCountElement = document.querySelector('#char-count');

// commentInput.addEventListener('input', updateCharCount);
// commentInput.addEventListener('cut', updateCharCount);
// commentInput.addEventListener('copy', updateCharCount);

// function updateCharCount() {
//     setTimeout(() => {
//         const comment = commentInput.value;
//         const charCount = comment.length;

//         charCountElement.textContent = commentInput.value.length;
//     }, 0);
// }

// // formsend
// const form = document.forms.superForm;

// form.checkbox.oninput = () => {
//     form.submit();
// }

// // fetch
// 'use strict';
// (async () => {
//     const url = 'https://catfact.ninja/fact';
//     const response = await fetch(url);
//     console.log(response.status);
//     console.log(response.ok);
//     const fact = await response.json();
//     console.log(fact);
// })();

// 'use strict';
// fetch('https://catfact.ninja/fact')
//     .then(response => response.json())
//     .then(console.log);

// // Или для вывода только факта
// 'use strict';
// fetch('https://catfact.ninja/fact')
//     .then(response => response.json())
//     .then(obj => console.log(obj.fact));

// // fetch post
// 'use strict';
// fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     body: JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: 'electronic'
//         }
//     )
// })
//     .then(res => res.json())
//     .then(json => console.log(json));

// // formData
// 'use strict';
// const form = document.forms.superForm;
// form.onsubmit = async (e) => {
//     e.preventDefault();

//     let response = await fetch('https://fakestoreapi.com/products', {
//         method: 'POST',
//         body: new FormData(form)
//     });

//     let result = await response.json();

//     console.log(result);
// }

// (async () => {
//     // Шаг 1: начинаем загрузку fetch, получаем поток для чтения
//     let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

//     const reader = response.body.getReader();

//     // Шаг 2: считывает данные:
//     let receivedLength = 0; // количество байт, полученных на данный момент
//     let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
//     while (true) {
//         const { done, value } = await reader.read();

//         if (done) break;

//         chunks.push(value);
//         receivedLength += value.length;
//         console.log(`Получено ${receivedLength} байт`);
//     }

//     // Шаг 3: соединими фрагменты в общий типизированный массив Uint8Array
//     let chunksAll = new Uint8Array(receivedLength);
//     let position = 0;
//     for (let chunk of chunks) {
//         chunksAll.set(chunk, position);
//         position += chunk.length;
//     }

//     // Шаг 4: Декодируем Unit8Array обратно в строку
//     let result = new TextDecoder("utf-8").decode(chunksAll);

//     // Готово
//     let commits = JSON.parse(result);
//     console.log(commits);
// })();


// // fetchUser
// const userListElement = document.querySelector('#user-list');
// const sortSelect = document.querySelector('#sort-select');
// // Загружаем данные о случайных пользователях с помощью API
// fetch('https://randomuser.me/api/?results=5')
//     .then(response => response.json()) // Преобразуем ответ в формат JSON
//     .then(data => {
//         let users = data.results; // Получаем массив с данными о пользователях

//         // Первоначальный вывод списка пользователей
//         renderUserList(users);

//         //Обработчик события изменения выбора в селекте
//         sortSelect.addEventListener('change', () => {
//             const selectedOption = sortSelect.value; // Получаем выбранный параметр сортировки
//             users = sortUsers(users, selectedOption); // Сортируем пользователей в соответсвтии с выбранным параметром
//             renderUserList(users); // Выводим отсортированный список пользователей на страницу
//         });
//     })
//     .catch(error => console.log(error));

// // Функция для вывода списка пользователей на страницу
// function renderUserList(users) {
//     //Очищаем список пользователей перед выводом
//     userListElement.innerHTML = '';

//     // Создаём элементы HTML для каждого пользователя и добавляем их в список
//     users.forEach(user => {
//         const userElement = createUserElement(user);
//         userListElement.appendChild(userElement);
//     });

// }

// // Функция для создания элемента пользователя
// function createUserElement(user) {
//     const userContainer = document.createElement('div');
//     userContainer.classList.add('user');

//     const userName = document.createElement('p');
//     userName.textContent = `Name: ${user.name.first} ${user.name.last}`;
//     userContainer.appendChild(userName);

//     const userAge = document.createElement('p');
//     userAge.textContent = `Age: ${user.dob.age}`;
//     userContainer.appendChild(userAge);
//     return userContainer;
// }


// // функция для сортировки пользователей
// function sortUsers(users, sortBy) {
//     return users.sort((a, b) => {
//         if (sortBy === 'name') {
//             return a.name.first.localeCompare(b.name.first); // Сортировка по имени с использованием метода localeCompare()
//         } else if (sortBy === 'age') {
//             return a.dob.age - b.dob.age;
//         }
//     });
// }