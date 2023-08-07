//Задание 1
console.log("Задание 1\n");
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keuin7: 7,
};
outputValue = (obj, value) =>
  Object.keys(obj)
    .filter((el) => obj[el] > value)
    .map((el) => el + "-" + obj[el]);

console.log(outputValue(numbers, 3));
console.log("\n");
console.log("Задание 2\n");
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
console.log("\n");
console.log("Задание 3\n");
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
const products_1 = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products_1.forEach((el) => (el.price = el.price * 0.85));
console.log(products_1);
console.log("\n");

console.log("Задание 4\n");
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const productsFilter = products.filter(produs => 'photos' in produs && produs.photos.length !==0 );
console.log(productsFilter);
console.log('отсортировать массив');
products.sort((x,y)=> x.price - y.price);
console.log(products);
console.log('\n\n');



console.log("Задание 5\n");
// Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const getWeeks = {};
for (const keys in en) {
    getWeeks[en[keys]] = ru[keys];
    
}
console.log(getWeeks);


