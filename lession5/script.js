// function helloName(name){
//     console.log(name);
// }
// helloName('Alex');

// let count = 5;
// function couner() {
//    return count++;
// }

// couner();  
// console.log(count);

// let age = Number(prompt('Сколько вам лет'));

// // function upAge(){
// //     return age += 5;
// // }
// // upAge();

// // console.log(`Через 5 лет вам будет ${age}`);

// // const lvlUpAge = () => {
// //     return age + 5;
// // }

// const lvlUpAge = () => age + 5;



// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

/* function hello() {
    console.log('Hello function');
}

hello();

const sum = (param1, param2) => {
    return param1 + param2;
    
}
//  const result = sum(2,5);
//  console.log(result);
 console.log(sum(2,5));

 const salary = (money) => {
    money*=0.87; //  money - money * 13%
    return money*0.75;
 }

 const useMoney = Number(prompt('Сколько ты зарабатываешь'));

 let moneyMonth = salary(useMoney);

//  console.log(salary(useMoney));
console.log('Для расхода можно использовать ' + salary(useMoney));

console.log(`На еду желательно потратить не более чем ${moneyMonth*0.3}`); */


/* function sayHello(){ //глобальная функция
    alert ('Привет'); 
    alert('нажал на кнопку');
}

const hello2 = () => { // локальная функция
    alert('Hello2');
    
}
 */

/* const userAnswer = prompt('Зимой и летом одним цветом');

console.log(userAnswer === 'елка'? 'Угадал': 'Не угадал');


const userAnswer2 = prompt('Сидит дед во 100шуб одет, кто его раздевает тот слезы проливае');

console.log(userAnswer2 === 'лук'? 'Угадал': 'Не угадал'); */

function askQuestion(answer, question){
    const userAnswer = prompt(question);
    console.log(userAnswer.toLowerCase() === answer ? 'Молодец угадал': 'Не угадал');
}



function puzzle(){
askQuestion('лук', 'Сидит дед во 100шуб одет, кто его раздевает тот слезы проливае');
askQuestion('елка', 'Зимой и летом одним цветом');
}