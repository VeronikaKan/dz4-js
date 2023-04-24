// task 1
// Напишите функцию, которая принимает массив чисел, 
// строк, булеан и верните тип каждого элемента.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false]  


const getTypeByEl = (arr) => {
return arr.map((el) => {
if(typeof(el) === "number"){
    return "number"
}else if(typeof(el) === "string"){
    return "string"
}else if(typeof(el) === "boolean"){
    return "boolean"
}
})}
console.log(getTypeByEl([1,2,3,4 , "string"," hello" , true, false] ));


// task 2
// Напишите функцию, которая принимает строку и выводит индекс каждого 
// символа.

const getIndex = (str) => {
let arr = [...str]
return arr.map((el,index) => {
 return index;
})
}
console.log(getIndex("hello"));

// task 3
// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 
// если число четное “нечетное” если число нечетное. Используйте тернарное выражение.
// ВЫВОД: ['нечетное', 'четное', 'нечетное', 'четное', 'нечетное', 'четное', 'нечетное', 'четное']

const compare = (arr) => {
return arr.map((num) => {
 return num % 2 === 0 ? "четное" : "нечетное"
})}
console.log(compare( [1,2,3,4,5,6,7,8]));

// task 4
// Вам дана переменная str = 'максимально ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// ВЫВОД: [ 'Максимально', 'Ужасно' ]
let str = 'максимально ужасно'
const firstLetterToUpperCase = (str) => {
const arr = str.split(" ")
return arr.map((word) => {
 return word[0].toUpperCase() + word.slice(1)
})
}
console.log(firstLetterToUpperCase(str))

// task 5
// Напишите функцию которая принимает массив ['мир', 'программирования'] и добовляет в него строку 'привет'
// ВЫВОД: ['привет', 'мир', 'программирования']


const a = (arr) => {
 return ['привет' , ...arr]}
console.log(a(['мир', 'программирования']));