 //1 задание
 let numFrist = Number(prompt('Введите первое число'));
        let numSecond = Number(prompt('Введите второе число'));
        alert ((numFrist <= 1)&& (numSecond >= 3)? 'Истина' :  'Ложь');

//2 задание

let test = true;
console.log ((test === true)? '+++': '---');

//3 задание 

let day = Number(prompt('Введите число месяц от 1 до 31:', '0-31'));
alert((day >= 1 && day <= 31)? (day >= 1 && day <= 10)? 'Первая декада': (day >= 11 && day <= 20)? 'Вторая декада':  'Третья декада' : 'Ошибка ввода');

//4 задание
let number = Number(prompt('Введите числа', 0 - 999));
let units = Number(number % 10);
let decades = Math.floor((number / 10) % 10);
let hundreda = Math.floor((number / 100) % 10);

alert(`В числе ${number} количество сотен: ${hundreda}, дестяков: ${decades}, единиц: ${units}`);