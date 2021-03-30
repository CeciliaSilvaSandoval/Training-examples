"use strict";
// console.log("Hello World!");
//Primitive Types
// let myName = 'Steve';
// myName = 'Tom';
// console.log(myName);
//Primitive Types
var myName = 'Steve';
var myAge = 21;
var hasJob = true;
var color = 'white';
// Reference Types
var myHobbies = ['cooking', 'baseball'];
// Tuple
var myAddress = ['Park street', 23];
// Enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
//Function
// function sayHello( name: string ){
//     console.log(name);
// }
// sayHello("hola");
function sayHello(name) {
    return 'Hello $(name)';
    // console.log('Hello');
}
var result = sayHello('Steve');
function print() {
    console.log('Printing...');
}
print();
function multiply(num1, num2) {
    return num1 * num2;
}
multiply(12, 13);
function PrintMe(data) {
    return 'Hello $(data)';
}
//Funtion type
var greetings;
greetings = sayHello;
greetings('Steve');
// greetings = PrintMe;
// Object 
var user = {
    name: 'Steve',
    age: 21,
    hobbies: ['cooking', 'baseball'],
    print: function (data) {
        console.log(data);
    }
};
var userData;
userData = user;
//or 
var user2 = {
    name: 'Steve',
    age: 21,
    hobbies: ['cooking', 'baseball'],
    print: function (data) {
        console.log(data);
    }
};
var userData2;
userData2 = user2;
console.log("Hola");
