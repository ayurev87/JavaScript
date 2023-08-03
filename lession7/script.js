/* let count = 0;
while (count < 3) {
    console.log('hello');
    count++;
} */

/* for (let i = 0; i < 3; i++){
    console.log('Hello');
} */
/* for (let j = 0; j <=2; j++){
    console.log(j);
} */

// for (;;) {  // бесконечность цикл
//     console.log('hel');
// }

/* let pass;
let count = 0;
do {
    pass = Number(prompt('Введите пароль'));
    count++;
    if (count >= 2){
        alert('Неверный пароль');
    if ( count >= 5) 
    {
        alert('многие раза вводите неверный пароль');
    }};
} while (pass !== 234);
 */
// let pass;
// let count =0;

// do  {
//     if(count>1){
//         alert('Пароль неверный!');
//     }
//     pass = Number(prompt('Введите пароль'));
//     count ++;
    
// } while ( pass != 234);

// const arr = [];
// /* arr = 5; // - нельзя записать число в массиве */
// arr.push(1);
// console.log(arr);
// let arrNew = [];
// arrNew = 6;

/* const arr = [1, 2, 'Hello',4,7];
console.log(arr);
console.log(arr[2]);
console.log(arr.length);
console.log(arr[arr.length -1]); */

/* const user = [];

const userName = prompt('Ваш имя');
const userAge = prompt('Ваш возраст');

user.push(userName);
user.push(Number(userAge));

console.log(user); */


/* const numbers = [2, 3, 19, 15];
 
alert(`Запомни цифры ${numbers}`);

// console.log(number[numbers.length - 1]);
console.log(numbers.pop());
console.log(numbers); */

/* const word = 'example';

const arrWord = word.split('');

// console.log(arrWord.pop().toUpperCase);
const upWord = arrWord.pop();
// console.log(upWord.toLocaleUpperCase());

arrWord.push(upWord.toLocaleUpperCase());
console.log(arrWord.join('')); */

/* let arr =[1,2,3];
arr.push = 4;
console.log(arr); */

/* const arr = [5, 1, 2, 3, 7, 19, 7 , 13 , 3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element>=5 ) {
        console.log(element);
    } else {
        continue;
    }
    
    
}
console.log(arr.indexOf('3')); */

const arrAnswers = ['елка', 'ёлка', 'ель'];
const userAnswers = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswers){
        console.log('Молодец');
        break;
    }else{
        continue;
    }
}