console.log('Задание 1');
function getCalculyatorCube(length){
    return length**3;
}

let length = Number(prompt('Введите любое целое число', 5));
alert(`Куб числа ${length} = ${getCalculyatorCube(length)}`);

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

console.log('Задание 4');

const getSum = (frist, second) => frist+second;
const getDiff = (frist, second) => frist === second? 0 : frist - second;
const getMulti = (frist, second) => frist * second;
const getQuotient = (frist, second) => second === 0 ? 0 : frist / second;

function getUserCalc(oper , frist , second) {
   return oper === '+' ?  getSum(frist, second) : oper === '-' ? getDiff(frist,second): oper === '*' ? getMulti(frist, second): oper === '/'? getQuotient(frist, second) : 'Вввод ошибки неизвестно операции';
}

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let oper = prompt('какая операция из них соврешает: + , - , * , / ');

alert(`Результат действия: ${a} ${oper} ${b} = ${getUserCalc(oper, a, b)}`);
