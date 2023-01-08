/*
let js = 'amazing'

30 + 213 + 21;
console.log(30 + 213 + 21);
console.log('bacon');
console.log(23)

// let 用于声明一个变量
let firstname = "bacon"
console.log(firstname);

// 命名只能用数字字母下划线和美元符号$，数字不能作为开头
let myname = "bacon";
let PI = 3.1415;
console.log(myname);

let javascriptisFun = true
console.log(true)
console.log(typeof true)
javascriptisFun = 'Fun';
console.log(typeof javascriptisFun);

let year
console.log(typeof year);
year = 1000;
console.log(typeof year);

console.log(typeof null) //null被视为一个对象，但这是一个bug没有被修复？


let age = 20;
age = 21;

const birthYear = 2002;

// birthYear = 1900;
// 无法改变一个const常量的值

// 不能声明一个未初始化的常量
// 'const' declarations must be initialized
// const job;

// var关键字定义变量，一种旧用法， 尽量永远不要用var！！
var job = 'student';
job = 'teacher';

// 没有关键字的声明变量，则是在全局变量下建立一个属性
lastName = 'Yao';
console.log(lastName);
// 最好也不要这样声明变量


// 基本操作符basic operators 逻辑基本不变，与python和C类似
const now = 2023;
const ageBacon = now - 2002;
const ageJerry = now - 2012;
console.log(ageBacon * 2, ageJerry / 10, 2 ** 2);

const firstName = 'Yao';
const lastName = 'Peigen';
console.log(firstName + ' ' + lastName);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


//////////////////////////////////////
// Challenge #1
// 定义变量
// const massMark = 78, massJohn = 92;
// const heightMark = 1.69, heightJohn = 1.95;
const massMark = 95, massJohn = 85;
const heightMark = 1.88, heightJohn = 1.76;
// 计算BMI
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

// 比较二者bmi
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);


const firstName = 'Yao';
const job = 'student';
const birthYear = 2002;
const year = 2023;

const YaoPeigen = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(YaoPeigen);

// ${}可以在``内引用变量
const Yaonew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(Yaonew);

// 关于字符转行可以使用\n\ 也可以使用``这个模板字符，这是js特有的，可以避免转义字符的问题
console.log(`String
multiple
lines`);

console.log('String\n\
multiple\n\
lines');

// if/else
const age = 9;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('bacon can start driving license 🐱‍🏍')
} else {
    const yearsleft = 18 - age;
    console.log(`bacon is too young, wait another ${yearsleft} years 😢`);
}



/////////////////
// challenge #2

// 定义变量
// const massMark = 78, massJohn = 92;
// const heightMark = 1.69, heightJohn = 1.95;
const massMark = 95, massJohn = 85;
const heightMark = 1.88, heightJohn = 1.76;
// 计算BMI
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})🐱‍🏍!`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})🐱‍🏍!`)
}



// type conversion字符转换
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('bacon'));
// NaN is a number type character
console.log(typeof NaN)

console.log(String(23), 23)
console.log('23' + '10' + 3)
// 加号会将数字强制转化为字符串
// 减号、除号则相反，字符串强制转化为数字
console.log('23' - '10' - 3)


console.log(Boolean(0));
// 没有被定义 初始化的变量会被视为假值
console.log(Boolean(undefined));
// 处理非空字符串，定义为真值
console.log(Boolean('Bacon'));
console.log(Boolean(''));
// 处理对象，都为真值
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log('you should find a job!')
}

let height;
if (height) {
    console.log('Height is defined')
} else {
    console.log('Height is undefined')
}



// ==松散和===严谨相等运算符的区别
// const age = 19;
// if (age === 18) console.log('You just became am adult')
// == 只判断数值是否相等，若字符串与数字比较，会将字符串转化为数值
// === 判断数值和数据类型是否都相等

const favorite = prompt("What's your favorite number?");
// 此时favorite是一个字符串型数据
console.log(favorite)
console.log(typeof favorite);
if (favorite == 23) {
    console.log('Cool!')
}

// Boolean 双目运算符AND与 && OR或 || NOT非！



////////////////////////////
// challenge #3
// const Dolphins = (96 + 108 + 89) / 3;
// const Koalas = (88 + 91 + 110) / 3;
// // test 1
// if (Dolphins > Koalas) {
//     console.log('The winner is Dolphins');
// } else if (Dolphins === Koalas) {
//     console.log("It's a draw")
// } else {
//     console.log('The winner is Koalas')
// }
//test bonus 1
const Dolphins = (97 + 112 + 80) / 3;
const Koalas = (109 + 95 + 90) / 3;
console.log(Dolphins, Koalas)
if (Dolphins > Koalas && Dolphins >= 100) {
    console.log('Dolphins wins');
} else if (Koalas > Dolphins && Koalas >= 100) {
    console.log('Koalas wins');
} else if (Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100) {
    console.log('Both win the trophy')
} else {
    console.log('None wins');
}


// switch用法 日常使用频率比较低，了解了解就好

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Play pc games');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('gossip with mu girlfriend');
        break;
    case 'friday':
        console.log('sleep');
        break;
    case 'saturday':
    case 'sunday':
        console.log('kiss my baby');
        break;
    default:
        console.log('nothing')
}



// 条件运算符 'conditon ? if : else' 三元运算符
const age = 23;
// age >= 18 ? console.log('I like to drink wine. 🍺') :
//     console.log('I like to drink water! 🥛');

const drink = age >= 18 ? 'wine 🍺' : 'water 🥛';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍺' : 'water 🥛'}`);
*/


//////////////////////
// challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
