console.log('Hello World!');
let text = 'JavaScriptの練習';
console.log(text);
text = 'JavaScriptをマスターした';
console.log(text);
// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

console.log('elephant'); // => elephant が出力される


let number = 5;
number += 3; // number = number + 3と同じ
console.log(number);
// 以下を追記
number -= 1; // number = number - 1と同じ
console.log(number);
number *= 5; // number = number * 5と同じ
console.log(number);
number /= 7; // number = number / 7と同じ
console.log(number);

let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);

let bigNum = 25;
let smallNum = 2;

console.log(bigNum ** smallNum); // 25の2乗なので、25 * 25となり、625が表示される

let names = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let John = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2

//関数
function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');