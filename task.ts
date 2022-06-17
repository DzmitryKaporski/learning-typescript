// 0) Замыкание на TS

function closing(): Function {
  const msg: string = 'Welcome'
  return function (userName: string = 'incognito'): void {
    console.log(`0) Замыкание: ${msg} ${userName}`) // Welcome Dima
  }
}
const functionMy: Function = closing()
functionMy('Dima')



// 1) Полиндром TS

function cheсkPolindrom(str: string): boolean {
  return str.split('').reverse().join('').toLowerCase() === str.toLowerCase()
}
console.log('1) Полиндром: soS', cheсkPolindrom('soS')) // true

// 2) Вернуть самое короткое слово из предложения

function shortWord(str: string): string {
  const arrSort: string[] = str.split(' ').sort((a: string, b: string): number => a.length - b.length)
  const [shortWord] = arrSort
  return shortWord
}
console.log('2) Вернуть самое короткое слово из предложения (Smallest word in):', shortWord('The Smallest word in')) // in

// 3) Вернуть инициалы

function returnInitials(str: string): string {
  const arr: string[] = str.split(' ')
  const [firstName, lastName] = arr
  return `${firstName[0].toUpperCase()}. ${lastName[0].toUpperCase()}.`
}
console.log('3) Вернуть инициалы (elon mask):', returnInitials('elon mask')) // E. M.

// 4) Вернуть сумму чисел числа даже если оно отрицательное:

function sum(num: number = 0): number {
  const positiveNumber: number = Math.abs(num)
  return positiveNumber.toString().split('').map((i: string): number => +i).reduce((a: number, b: number): number => a + b)
}
console.log('4) Вернуть сумму чисел числа даже если оно отрицательное (-545):', sum(-545))// 14

// 5) Вернуть макс. и мин. число из массива

function getMaxMinNumbers(arr: number[]): number[] {
  return [Math.min(...arr), Math.max(...arr)]
}
console.log('5) Вернуть макс. и мин. число из массива: ', getMaxMinNumbers([8, 5, 2, 3, 4])) // [2,8]

// 6) Если остаток при делении n на 3 или на 5 целое число, сложить все числа (n = 12)

function sumNumber(num: number): number {
  let sum: number = 0
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
console.log('6) Если остаток при делении n на 3 или на 5 целое число, сложить все числа (n = 12):', sumNumber(12)) // 33

// 7) Вернуть массив уникальных значений из нескольких вложенных массивов

function getSetValue(arr: (number | number[])[]): number[] {
  const mainArr: number[] = arr.flat()
  return [...new Set(mainArr)].sort((a: number, b: number): number => a - b)
}
console.log('7) Вернуть массив уникальных значений из нескольких вложенных массивов [[1, 2, 3], 4, [4, 1, 2], [6, 7, 8, 8, 5]]: ', getSetValue([[1, 2, 3], 4, [4, 1, 2], [6, 7, 8, 8, 5]])) // [1, 2, 3, 4, 5, 6, 7, 8]

// 8) Сделать из 9 цифр телефонный номер

function phoneNumber(str: string): string {
  return `(${str.split('').splice(0, 3).join('')}) ${str.split('').splice(3, 3).join('')
    }-${str.split('').splice(6, 3).join('')}`
}
console.log('8) Сделать из 9 цифр телефонный номер, 123456789:', phoneNumber('123456789')) // (123) 456-789

function getPhoneNumber(numbers: number = 123456789): string {
  const arr = numbers.toString().split('')
  const [one, two, three, four, five, sex, seven, eight, nine] = arr
  return `(${one}${two}${three}) ${four}${five}${sex}-${seven}${eight}${nine}`
}
console.log(getPhoneNumber())

// 9) Посчитать колличество гласных буков в предложении

function countVowels(str: string): number {
  let count: number = 0
  str.split('').map((i) => 'aoiue'.includes(i) ? count++ : '')
  return count
}
console.log('9) Посчитать колличество гласных буков в предложении, "heelloo world":', countVowels("heelloo world"))


// 10) гдубокое копирование объекта

interface IUser {
  userName: string
  userAge: number
  userAddress: object
}

const user: IUser = {
  userName: 'Dima',
  userAge: 25,
  userAddress: {
    city: 'Mogilev',
    street: 'sog',
  }
}

const newObject = JSON.parse(JSON.stringify(user))
console.log('10) Глубокое копирование объекта: JSON.parse(JSON.stringify(object))')

// 11) Рекурсия

function rec(n: number): number {
  if (n === 1) return n
  return n * (rec(n - 1))
}
console.log('11) Рекурсия:', rec(5)) // 120
