
// 1 Задание
for (let i = 0; i < 11; i++) {
    console.log(i===0? '0 - это ноль' : i%2 !== 1 ? i + '- четное число': i + '- нечетное число');
}


// 2 задание

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.splice(3,2);
console.log(arr);
console.log('\n\n');

// 3 задание
const getArrayRandom = (count) => {
    const array =[];
    for (let i = 0; i < count; i++){
        array.push(Math.floor(Math.random()*10));
    }
}

const getSum = (array) => {
    let sum = array[0];
    for (let i = 1; i< array.length; i++) {
        sum  += array[i];
        
    }
    return;
}

const getMin = (array) => {
    let min = array[0];
    for (let i = 1; i< array.length; i++ )
     {
        if(array[i] < min) min = array [i];
     }
     return min;
}

const getUserNumber = Number(prompt('Введите количество элементов массива целого числа'));
console.log('Количество -' + getUserNumber);
const getArray = getArrayRandom(getUserNumber);
console.log('генерация массива :' + getArray.join(','));
console.log('Сумма массива: ' + getSum(getArray));
console.log(getArray.includes(3)? 'Тройка в массиве есть' : 'Тройка в массиве не найдена.');
