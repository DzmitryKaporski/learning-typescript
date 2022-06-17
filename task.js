"use strict";
// 0) Замыкание на TS
function closing() {
    const msg = 'Welcome';
    return function (userName = 'incognito') {
        console.log(`0) Замыкание: ${msg} ${userName}`); // Welcome Dima
    };
}
const functionMy = closing();
functionMy('Dima');
// 1) Полиндром TS
function cheсkPolindrom(str) {
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}
console.log('1) Полиндром: soS', cheсkPolindrom('soS')); // true
// 2) Вернуть самое короткое слово из предложения
function shortWord(str) {
    const arrSort = str.split(' ').sort((a, b) => a.length - b.length);
    const [shortWord] = arrSort;
    return shortWord;
}
console.log('2) Вернуть самое короткое слово из предложения (Smallest word in):', shortWord('The Smallest word in')); // in
// 3) Вернуть инициалы
function returnInitials(str) {
    const arr = str.split(' ');
    const [firstName, lastName] = arr;
    return `${firstName[0].toUpperCase()}. ${lastName[0].toUpperCase()}.`;
}
console.log('3) Вернуть инициалы (elon mask):', returnInitials('elon mask')); // E. M.
// 4) Вернуть сумму чисел числа даже если оно отрицательное:
function sum(num = 0) {
    const positiveNumber = Math.abs(num);
    return positiveNumber.toString().split('').map((i) => +i).reduce((a, b) => a + b);
}
console.log('4) Вернуть сумму чисел числа даже если оно отрицательное (-545):', sum(-545)); // 14
// 5) Вернуть макс. и мин. число из массива
function getMaxMinNumbers(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
console.log('5) Вернуть макс. и мин. число из массива: ', getMaxMinNumbers([8, 5, 2, 3, 4])); // [2,8]
// 6) Если остаток при делении n на 3 или на 5 целое число, сложить все числа (n = 12)
function sumNumber(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log('6) Если остаток при делении n на 3 или на 5 целое число, сложить все числа (n = 12):', sumNumber(12)); // 33
// 7) Вернуть массив уникальных значений из нескольких вложенных массивов
function getSetValue(arr) {
    const mainArr = arr.flat();
    return [...new Set(mainArr)].sort((a, b) => a - b);
}
console.log('7) Вернуть массив уникальных значений из нескольких вложенных массивов [[1, 2, 3], 4, [4, 1, 2], [6, 7, 8, 8, 5]]: ', getSetValue([[1, 2, 3], 4, [4, 1, 2], [6, 7, 8, 8, 5]])); // [1, 2, 3, 4, 5, 6, 7, 8]
// 8) Сделать из 9 цифр телефонный номер
function phoneNumber(str) {
    return `(${str.split('').splice(0, 3).join('')}) ${str.split('').splice(3, 3).join('')}-${str.split('').splice(6, 3).join('')}`;
}
console.log('8) Сделать из 9 цифр телефонный номер, 123456789:', phoneNumber('123456789')); // (123) 456-789
function getPhoneNumber(numbers = 123456789) {
    const arr = numbers.toString().split('');
    const [one, two, three, four, five, sex, seven, eight, nine] = arr;
    return `(${one}${two}${three}) ${four}${five}${sex}-${seven}${eight}${nine}`;
}
console.log(getPhoneNumber());
// 9) Посчитать колличество гласных буков в предложении
function countVowels(str) {
    let count = 0;
    str.split('').map((i) => 'aoiue'.includes(i) ? count++ : '');
    return count;
}
console.log('9) Посчитать колличество гласных буков в предложении, "heelloo world":', countVowels("heelloo world"));
// 10)  Глубокое копирование объекта: JSON.parse(JSON.stringify(object))
const user = {
    userName: 'Dima',
    userAge: 25,
    userAddress: {
        city: 'Mogilev',
        street: 'sog',
    }
};
const newObject = JSON.parse(JSON.stringify(user));
console.log('10) Глубокое копирование объекта: JSON.parse(JSON.stringify(object))');
// 11) Рекурсия
function rec(n) {
    if (n === 1)
        return n;
    return n * (rec(n - 1));
}
console.log('11) Рекурсия:', rec(5)); // 120
