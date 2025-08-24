//Q1
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');
//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let firstLanguage = languages[0];  // JavaScript
let secondLanguage = languages[3]; // Python

console.log(`私の好きな言語は${firstLanguage}です。次は${secondLanguage}を勉強してみたいです。`);
// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);
// Q4
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
// Q5
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / 3;

console.log(averageAge);
// Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
};
sayWorld();
// Q7 
let updatedUser = Object.assign({}, user);

updatedUser.birthday = '2000-09-27';
updatedUser.sayHello = function() {
  console.log('Hello！');
};

console.log(updatedUser.birthday);
updatedUser.sayHello();
// Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};
calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.divide = function(x, y) {
  console.log(x / y);
};


calc.add(3, 4);   
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);
// Q9
function remainder(x, y) {
  return x % y;
}

let rem = remainder(5, 3);
console.log(`5 を 3 で割った余りは ${rem} です。`);
// Q10 スコープ
function foo() {
  let x = 1;
}

// エラーになる理由：スコープにより foo の外から x を参照できないから

