console.log('//////////////////////////////// Примитивы')

const strTs: string = 'str'
const numTs: number = 10
const booleanTs: boolean = true

let anyTs: any = '123'
let strNumArr: number | string | number[]
strNumArr = 'str'
strNumArr = 77
strNumArr = [1, 2, 3]

const arrNumberTs: number[] = [1, 2, 3, 4]
const arrNumberTsSecond: Array<number> = [1, 2, 3]
const arrStrTs: string[] = ['1', 'a', '2']
const arrStrTsSecond: Array<string> = ['1', 'b', '2']
const arrBooleanTs: boolean[] = [true, false, true]
const arrBooleanTsSecond: Array<boolean> = [true, true, false]

const someTypeTs: (number | string | boolean)[] = ['2', 1, true]
const tuplesArr: [number, number, string, boolean] = [10, 10, 'total', true]//кортеж

function getName(name: string = 'Anonym', age: number = 17): string {
  return age >= 18 ? `Welcome ${name}` : `Stop ${name}`
}
console.log(getName("Dima", 25)) // Welcome Dima
console.log(getName()) // Stop Anonym

console.log('//////////////////////////////// Функции TS')

function person(): Function {
  const nameTs: string = 'Dima'
  return function (ageTs: number): void {
    console.log(`${nameTs} ${ageTs}`) // Dima 25
  }
}
const myFunction: Function = person()
myFunction(25)

const sumNumberArr = function (a: number, b: number): number {
  const arr = Array.from(arguments) // из псевдомассива делаем массив
  const result = arr.reduce((a: number, b: number): number => a + b)
  return result
}
const variable: (a: number, b: number) => number = sumNumberArr // сохраняем функцию в переменную
console.log(variable(23, 3)) // 36

console.log('//////////////////////////////// Объекты TS')

type PersonSuper = {
  name: string,
  age: number,
  gender?: string, //необязательное свойство
  skills: string[],
  print: () => void,
  getSkills: () => string[],
}

const manSuper: PersonSuper = {
  name: 'Dima',
  age: 38,
  gender: 'male',
  skills: ['css', 'html', 'js', 'angular', 'ts'],
  print(): void {
    console.log(this.name)
  },
  getSkills(): string[] {
    return this.skills
  }
}

const womanSuper: PersonSuper = {
  name: 'Lisa',
  age: 30,
  skills: ['css', 'html', 'ts'],
  print(): void {
    console.log(this.name)
  },
  getSkills(): string[] {
    return this.skills
  }
}
console.log(manSuper.getSkills())
console.log(womanSuper.getSkills())

console.log('//////////////////////////////// специальные типы (enum-перечисление)')

const arr: string[] = ['html', 'css', 'js', 'ts', 'git']

enum Skills {
  HTML, CSS, JS, TS, GIT, prop1 = 100, prop2, prop3
}
console.log(arr[Skills.HTML]) // html
console.log(arr[Skills.CSS]) // css
console.log(arr[Skills.JS]) // js
console.log(arr[Skills.TS]) // ts
console.log(arr[Skills.GIT]) // git
console.log(Skills.prop1) // 100
console.log(Skills.prop2) // 101
console.log(Skills.prop3) // 102

// never

// function error(massage: string): never {
//   throw new Error(massage)
// }
// error('massage error') // Uncaught Error: massage error

// перечисление типов

let num: number | null | undefined
num = 1
num = null
num = undefined

console.log('//////////////////////////////// Kлассы')

class Person {
  constructor(
    public name: string,
    private age: number, //private- только для работы в нутри класса, нельзя наследовать
    protected gender: string,  //protected- только для работы в нутри наследуемого класса
    public skills: string[]
  ) { }

  public getName(): string {
    return this.name
  }
  private getAge(): number { // только для работы в нутри класса, нельзя наследовать
    return this.age
  }
}
const personSupe = new Person("Dima", 38, 'male', ['js', 'ts'])

console.log(personSupe) // Person {name: 'Dima', age: 38, gender: 'male', skills: Array(2)}
console.log(personSupe.getName()) // Dima
console.log(personSupe.skills) // ['js', 'ts']

class Developer extends Person {
  constructor(
    name: string,
    age: number, //private- только для работы в нутри класса, нельзя наследовать
    gender: string,  //protected- только для работы в нутри наследуемого класса
    skills: string[],
    public english: string,
  ) { super(name, age, gender, skills) }
  getGender(): string {
    return `Developer ${this.name}, ${this.gender}, skills: ${this.skills} `
  }
}
const developer = new Developer("Max", 38, 'male', ['js', 'ts', 'scss'], 'A2+')
console.log(developer)
console.log(developer.getGender())

console.log('//////////////////////////////// абстрактный класс только наследуется, нельзя создовать экзэмпляр ')
// абстрактный класс только наследуется, нельзя создовать экзэмпляр
abstract class Phone {
  public year: number = 2022
  abstract price: number // обязавает указать свойство в наследуемых классах
  abstract message(msg: string): string // обязавает указать метод в наследуемых классах

  constructor(public model: string) { }

  getPhoneYear(): number {
    return this.year
  }
}

class Xiaomi extends Phone {
  price: number = 1000;
  message(msg: string): string {
    return `${this.model} is ${msg}`
  }
}
class Samsung extends Phone {
  price: number = 1500;
  message(msg: string): string {
    return `${this.model} not ${msg}`
  }
}

const xiaomi = new Xiaomi('Xiaomi Readmi 9')
const samsung = new Samsung('Samsung A50')

console.log(xiaomi) // Xiaomi {year: 2022, price: 1000}
console.log(xiaomi.model) // Readmi 9
console.log(xiaomi.message('perfect')) // Xiaomi Readmi 9 is perfect
console.log(samsung) // Samsung {year: 2022, price: 1500}
console.log(samsung.model) // A 50
console.log(samsung.price) // 1500
console.log(samsung.getPhoneYear()) // 2022
console.log(samsung.message('bad')) // Samsung A50 not bad

console.log('//////////////////////////////// Интерфейсы ')

interface ILength {
  length: number
}

function getLength(item: ILength): void {
  console.log(item.length)
}

const obj1 = { name: 'Object', length: 5 }

getLength('str') // 3
getLength([1, 2, 3, 4]) // 4
getLength(obj1) // 5

interface IPearson {
  name: string,
  age: number,
  gender: string,
  skills?: string[],
  greet(msg: string): void
}

const personMan: IPearson = {
  name: "Dima",
  age: 25,
  gender: 'male',
  greet(msg: string): void {
    console.log(`${msg} ${this.name}!`) // Welcome Dima!
  }
}
console.log(personMan) // {name: 'Dima', age: 25, gender: 'male', greet: ƒ}
personMan.greet('Welcome')

console.log('//////////////////////////////// Generic')
// типизация фунуции
function getData<T>(data: T): T {
  return data
}

//описываем что сохраняем в переменную newGeneric: сохроняем функцию коорая работает с Generic <T> принимает данные типа Т и возвращает данные типа Т
const newGeneric: <T>(data: T) => T = getData

console.log("<T> Generic работает слюбыми типами, но если он начал работать с каким то типом то его нельзя изменить")
console.log('Длинна строки:', ('str').length)
console.log('Метод toFixed преобразует число в строоку:', (15).toFixed())
console.log('Метод valueOf возвращает примитивное значение объекта:', true)

console.log('//////////////////////////////// Generic in class')

// типизирование классов
class Multiply<T extends number | string> {
  constructor(private a: T, private b: T) { }
  getResult(): number {
    return +this.a * +this.b
  }
}

// создаём экземпляр и указываем тип
const mNumber = new Multiply<number>(5, 5) // работает с числами
const mString = new Multiply<string>('5', '5')  // работает со строками
console.log(mNumber.getResult()) // number 25
console.log(mString.getResult()) // number 25
