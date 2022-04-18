'use strict';

// variable
// let (added in ES6)

let nickname = 'kim';
console.log(nickname);
nickname = 'jun';
console.log(nickname);
nickname = 'suk';
console.log(nickname);

{
    let nickname2 = 'kim2';
    console.log(nickname2);
    nickname2 = 'jun2';
    console.log(nickname2);
    nickname2 = 'suk2';
    console.log(nickname2);
}

// 3. Constants
// 값을 할당하면 값이 절대 바뀌지 않는 변수를 의미한다.
// 보안상의 이유

// 4. Variable types
// js에서 숫자는 number하나로 사용가능
let a = 12; // integer
console.log('value : ' + a + ' , type : ' + typeof a);
const b = 1.2; // decimal number
console.log('value : ' + b + ' , type : ' + typeof b);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log('value : ' + greeting + ' , type : ' + typeof greeting);
// 문자마다 +를 해주는 것이아닌 ``를 이용하고 ${}를 이용함으로써 더 간편하게 문자열작성가능
const helloBob = `hi ${brendan}!`;
console.log('value : ' + helloBob + ' , type : ' + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ...
// true : any other value
const canRead = true; // true
const test = 3 < 1; // false
console.log(`value = ${canRead} , type = ${typeof canRead}`);
console.log(`value = ${test} , type = ${typeof test}`);

// null
// 비어있는 상태
let nothing = null;
console.log(`value = ${nothing} , type = ${typeof nothing}`);

// undefined 
// 비어있는지 값이 들어가있는지 정해지지 않은 상태
let x = undefined;
console.log(`value = ${x} , type = ${typeof x}`);

// Symbol -> 동일한 문자열이나 값이라도 고유의 식별자를 가지는 상태 
// 필요하다면 찾아서 배우기

// 5. Dynamic typing  : 선언할때 어떤 타입인지 선언하지 않고 프로그램의 동작에따라 할당된 값에 따라서 타입이 변경될 수 있음
