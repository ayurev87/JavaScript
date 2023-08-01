console.log('Задание 1');
function getCalculyatorCube(length){
    return length**3;
}

let length = Number(prompt('Введите любое целое число', 5));
console.log(`Куб числа ${length}`)

console.log('Задание 2');
function getTaxDeduction(finance){
    return finance * 0.87;
}

const getUserSalaries = (prompt('Введите размер заработной платы до вычета НДФЛ'));
alert(`Размер заработной платы за вычетом налогов равен ${getTaxDeduction(getUserSalaries)}`);

console.log('Задание 3');

function getUserNum(){
    return Number(prompt(`Введите число`));
}

function getMax(num1, num2, num3){
    num1 <= num2 ? temp = num2 : temp = num1;
    return temp <= num3 ? num3 : temp;
}
const num1 = getUserNum();
const num2 = getUserNum();
const num3 = getUserNum();

alert(`один из трех числа максимальное число  - ${getMax(num1, num2, num3)}`);