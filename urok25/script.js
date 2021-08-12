var person = {
    name: "Mederbek",
    surname: "Bekboliev",
    age: 21,
    year_of_birth: 2000,
    place_of_birth: "Kyrgyzstan"
};

var meder = ['mederbek', 'bekboliev', 'hello', 'world', 2021];

console.log(meder[2]);

console.log(person.surname);
console.log(person.age);

// Базовые фукции взаимодействия с пользователем

console.log("Message"); 

alert("Hello guest!");

name_ = prompt("Enter your name");
surname = prompt("Enter your surname");

console.log(name_ , surname);

let num1 = +prompt("enter first num:", "");
let num2 = +prompt("enter second num:", "");
alert(num1 + num2);

let num11 = +prompt("enter first num for multiply :", "");
let num22 = +prompt("enter second num for multiply:", "");
alert(num11 * num22);

