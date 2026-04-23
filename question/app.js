//Q1 変数
let nickname = 'ごっしー';
let  age = '28';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2 配列
let  languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算
let ages = playerList.map(player => player.age);
let total = ages.reduce((sum, age) => sum + age, 0);
let average = total / ages.length;
console.log(average);

//Q6 関数
function sayHello() {
  console.log('Hello');
}

let sayWorld = function() {
  console.log('World');
}

sayHello();
sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = sayHello;

user.sayHello();

//Q8 引数
let calc = {
  add(x,y) {
    console.log(x + y);
  },
  subtract(x,y) {
    console.log(x - y);
  },
  multiply(x,y) {
    console.log(x * y);
  },
  divide(x,y) {
    console.log(x / y);
  }
};

calc.add(5,2);
calc.subtract(12,2);
calc.multiply(7,7);
calc.divide(25,5);

//Q9 返り値
console.log('5 を 3 で割った余りは' + remainder(5,3) + 'です。');
function remainder(x,y) {
  let surplus = x % y;
return surplus; 
}

