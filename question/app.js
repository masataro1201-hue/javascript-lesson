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