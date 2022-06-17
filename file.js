"use strict";
console.log('//////////////////////////////// Примитивы');
const strTs = 'str';
const numTs = 10;
const booleanTs = true;
let anyTs = '123';
let strNumArr;
strNumArr = 'str';
strNumArr = 77;
strNumArr = [1, 2, 3];
const arrNumberTs = [1, 2, 3, 4];
const arrNumberTsSecond = [1, 2, 3];
const arrStrTs = ['1', 'a', '2'];
const arrStrTsSecond = ['1', 'b', '2'];
const arrBooleanTs = [true, false, true];
const arrBooleanTsSecond = [true, true, false];
const someTypeTs = ['2', 1, true];
const tuplesArr = [10, 10, 'total', true]; //кортеж
function getName(name = 'Anonym', age = 17) {
    return age >= 18 ? `Welcome ${name}` : `Stop ${name}`;
}
console.log(getName("Dima", 25)); // Welcome Dima
console.log(getName()); // Stop Anonym
console.log('//////////////////////////////// Фуекции TS');
function person() {
    const nameTs = 'Dima';
    return function (ageTs) {
        console.log(`${nameTs} ${ageTs}`); // Dima 25
    };
}
const myFunction = person();
myFunction(25);
const sumNumberArr = function (a, b) {
    const arr = Array.from(arguments); // из псевдомассива делаем массив
    const result = arr.reduce((a, b) => a + b);
    return result;
};
const variable = sumNumberArr; // сохраняем функцию в переменную
console.log(variable(23, 3)); // 36
console.log('//////////////////////////////// Объекты TS');
const manSuper = {
    name: 'Dima',
    age: 38,
    gender: 'male',
    skills: ['css', 'html', 'js', 'angular', 'ts'],
    print() {
        console.log(this.name);
    },
    getSkills() {
        return this.skills;
    }
};
const womanSuper = {
    name: 'Lisa',
    age: 30,
    skills: ['css', 'html', 'ts'],
    print() {
        console.log(this.name);
    },
    getSkills() {
        return this.skills;
    }
};
console.log(manSuper.getSkills());
console.log(womanSuper.getSkills());
console.log('//////////////////////////////// специальные типы (enum-перечисление)');
const arr = ['html', 'css', 'js', 'ts', 'git'];
var Skills;
(function (Skills) {
    Skills[Skills["HTML"] = 0] = "HTML";
    Skills[Skills["CSS"] = 1] = "CSS";
    Skills[Skills["JS"] = 2] = "JS";
    Skills[Skills["TS"] = 3] = "TS";
    Skills[Skills["GIT"] = 4] = "GIT";
    Skills[Skills["prop1"] = 100] = "prop1";
    Skills[Skills["prop2"] = 101] = "prop2";
    Skills[Skills["prop3"] = 102] = "prop3";
})(Skills || (Skills = {}));
console.log(arr[Skills.HTML]); // html
console.log(arr[Skills.CSS]); // css
console.log(arr[Skills.JS]); // js
console.log(arr[Skills.TS]); // ts
console.log(arr[Skills.GIT]); // git
console.log(Skills.prop1); // 100
console.log(Skills.prop2); // 101
console.log(Skills.prop3); // 102
// never
// function error(massage: string): never {
//   throw new Error(massage)
// }
// error('massage error') // Uncaught Error: massage error
// перечисление типов
let num;
num = 1;
num = null;
num = undefined;
console.log('//////////////////////////////// Kлассы');
class Person {
    constructor(name, age, //private- только для работы в нутри класса, нельзя наследовать
    gender, //protected- только для работы в нутри наследуемого класса
    skills) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.skills = skills;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const personSupe = new Person("Dima", 38, 'male', ['js', 'ts']);
console.log(personSupe); // Person {name: 'Dima', age: 38, gender: 'male', skills: Array(2)}
console.log(personSupe.getName()); // Dima
console.log(personSupe.skills); // ['js', 'ts']
class Developer extends Person {
    constructor(name, age, //private- только для работы в нутри класса, нельзя наследовать
    gender, //protected- только для работы в нутри наследуемого класса
    skills, english) {
        super(name, age, gender, skills);
        this.english = english;
    }
    getGender() {
        return `Developer ${this.name}, ${this.gender}, skills: ${this.skills} `;
    }
}
const developer = new Developer("Max", 38, 'male', ['js', 'ts', 'scss'], 'A2+');
console.log(developer);
console.log(developer.getGender());
console.log('//////////////////////////////// абстрактный класс только наследуется, нельзя создовать экзэмпляр ');
// абстрактный класс только наследуется, нельзя создовать экзэмпляр
class Phone {
    constructor(model) {
        this.model = model;
        this.year = 2022;
    }
    getPhoneYear() {
        return this.year;
    }
}
class Xiaomi extends Phone {
    constructor() {
        super(...arguments);
        this.price = 1000;
    }
    message(msg) {
        return `${this.model} is ${msg}`;
    }
}
class Samsung extends Phone {
    constructor() {
        super(...arguments);
        this.price = 1500;
    }
    message(msg) {
        return `${this.model} not ${msg}`;
    }
}
const xiaomi = new Xiaomi('Xiaomi Readmi 9');
const samsung = new Samsung('Samsung A50');
console.log(xiaomi); // Xiaomi {year: 2022, price: 1000}
console.log(xiaomi.model); // Readmi 9
console.log(xiaomi.message('perfect')); // Xiaomi Readmi 9 is perfect
console.log(samsung); // Samsung {year: 2022, price: 1500}
console.log(samsung.model); // A 50
console.log(samsung.price); // 1500
console.log(samsung.getPhoneYear()); // 2022
console.log(samsung.message('bad')); // Samsung A50 not bad
console.log('//////////////////////////////// Интерфейсы ');
function getLength(item) {
    console.log(item.length);
}
const obj1 = { name: 'Object', length: 5 };
getLength('str'); // 3
getLength([1, 2, 3, 4]); // 4
getLength(obj1); // 5
const personMan = {
    name: "Dima",
    age: 25,
    gender: 'male',
    greet(msg) {
        console.log(`${msg} ${this.name}!`); // Welcome Dima!
    }
};
console.log(personMan); // {name: 'Dima', age: 25, gender: 'male', greet: ƒ}
personMan.greet('Welcome');
console.log('//////////////////////////////// Generic');
// типизация фунуции
function getData(data) {
    return data;
}
//описываем что сохраняем в переменную newGeneric: сохроняем функцию коорая работает с Generic <T> принимает данные типа Т и возвращает данные типа Т
const newGeneric = getData;
console.log("<T> Generic работает слюбыми типами, но если он начал работать с каким то типом то его нельзя изменить");
console.log('Длинна строки:', ('str').length);
console.log('Метод toFixed преобразует число в строоку:', (15).toFixed());
console.log('Метод valueOf возвращает примитивное значение объекта:', true);
console.log('//////////////////////////////// Generic in class');
// типизирование классов
class Multiply {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getResult() {
        return +this.a * +this.b;
    }
}
// создаём экземпляр и указываем тип
const mNumber = new Multiply(5, 5); // работает с числами
const mString = new Multiply('5', '5'); // работает со строками
console.log(mNumber.getResult()); // number 25
console.log(mString.getResult()); // number 25
