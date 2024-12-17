console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);
console.log(navigator.doNotTrack);
console.log(navigator.geolocation);


// функция, которая возвращает ближайший город к пользователю
function calculateDistance(location1, location2) {
    const [lat1, lon1] = location1;
    const [lat2, lon2] = location2;

    const toRad = value => (value * Math.PI) / 180; //преобразование формулы в радиант
    const R = 6371; // радиус земли в километрах

    const dLat = toRad(lat2 - lat1); // разница широты в радианах;
    const dLon = toRad(lon2 - lon1); // разница долготы в радианах

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // вычисляет центральный угол между двумя местоположениями
    const distance = R * c; // вычисляем расстояние между двумя местоположениями на сфере Земли
    return distance;
}

function findFastestCity(cities) {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) { // проверяем поддержку геолокации в браузере
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLocation = [position.coords.latitude, position.coords.longitude]; // Получает текущие координаты пользователя
                    let closestCity = null; // Переменная для хранения ближайшего города
                    let shortestDistance = Infinity; // Переменная для хранения кратчайшего расстояния

                    cities.forEach(city => { // перебирает все города из массива cities 
                        const distance = calculateDistance(userLocation, city.location); // вычисляем расстояние между местоположением пользователя и текущим городом
                        if (distance < shortestDistance) { // Если расстояние меньше кратчайшего расстояния
                            closestCity = city.name; // Записываем имя текущего города 
                            shortestDistance = distance;
                        }
                    })
                    resolve(closestCity); // возвращаем ближайший город
                },
                error => {
                    if (error.code === error.PERMISSION_DENIED) { // Если пользователь отказал в доступе к геолокации
                        reject(new Error('ПОльзователь отказал в доступе к геолокации')); // Возвращает ошибку
                    } else {
                        reject(new Error('Ошибка при получении местоположения')) // Возвращает ошибку
                    }
                }
            );
        } else {
            reject(new Error('Геолокация не поддерживается вашими браузером')) // Возвращает ошибку
        }
    });
};

const cities = [
    { name: 'Нью-Йорк', location: [40.7128, -74.0060] },
    { name: 'Лондон', location: [51.5074, -0.1278] },
    { name: 'Токио', location: [35.6895, 139.6917] },
    { name: 'Москва', location: [55.751244, 37.618423] }
];

findFastestCity(cities)
    .then(closestCity => {
        console.log(closestCity);
    }).catch(error => {
        console.log(error.message);
    });
