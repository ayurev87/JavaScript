
// 1 Задание
console.log('1 задание');
for (let i = 0; i < 11; i++) {
    console.log(i===0? '0 - это ноль' : i%2 === 0 ? i + '- четное число': i + '- нечетное число');
}
console.log('\n\n');

// 2 задание
console.log('2 задание');
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.splice(3,2);
console.log(arr);
console.log('\n\n');

// 3 задание
console.log('3 задание');
const getArrayRandom = (count) => {
    const array =[];
    for (let i = 0; i < count; i++){
        array.push(Math.floor(Math.random()*10));
    }
    return array;
}

const getSum = (array) => {
    let sum = 0;
    for (let i = 0; i< array.length; i++) {
        sum  += array[i];
        
    }
    return sum;
}

const getMin = (array) => {
    let min = Infinity;
    for (let i = 0; i< array.length; i++ )
     {
        if(array[i] < min) min = array [i];
     }
     return min;
}

const getUserNumber = Number(prompt('Введите количество элементов массива целого числа'));
console.log('Количество -' + getUserNumber);
const getArray = getArrayRandom(getUserNumber);
console.log('генерация массива: ' +  getArray.join(', '));
console.log('Минимальное число: ' + getMin(getArray));
console.log('Сумма массива: ' + getSum(getArray));
console.log(getArray.includes(3)? 'Тройка в массиве есть' : 'Тройка в массиве не найдена.');

console.log('\n\n');
// 4 задание
console.log('4 задание');
 function getAddTriangle(rowsCount){
        
        for (let i = 0; i < rowsCount; i++) {
            let getRow = [];
            for (let space = 1; space < rowsCount - i; space++) {
               getRow.push(' ');
            }
               for( let j = 0; j<=i; j++){
                if ( j == 0 || i == 0){
                getRow.push('X');
                } else 
                getRow.push(' X');
               }
            console.log(getRow.join(''));
            
        }
 }

 const count = Number(prompt('Введите сколько ряд горки'));
 getAddTriangle(count);

