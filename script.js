// task 1
// Напишите функцию, которая принимает массив чисел, 
// строк, булеан и верните тип каждого элемента.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false]  

// const getTypeByEl = (arr) => {
// return arr.map((el) => {
// return typeof(el)
// })}
// console.log(getTypeByEl([1,2,3,4,"string", "hello", true, false] ));

// // // // // // // // // 1. Не нужно сравнивать с типом данных, когда мы просто применяем метод 
// // // // // // // // // typeof то уже подразумеваем что нам нужен именно этот тип данных.   


// task 2
// Напишите функцию, которая принимает строку и выводит индекс каждого 
// символа.

// const getIndex = (str) => {
// let arr = [...str]
// return arr.map((el,index) => {
//  return index;
// })
// }
// console.log(getIndex("hello"));

// const getIndex = (str) => {
//     let arr = str.split("") 
//    return arr.map((el,index) => {
//         return index
//     })
// }
// console.log(getIndex("hello"));

// // // // // // // // // 2. Хорошее применение спред оператора, а как бы мы сделали это без него?


// task 3
// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 
// если число четное “нечетное” если число нечетное. Используйте тернарное выражение.
// ВЫВОД: ['нечетное', 'четное', 'нечетное', 'четное', 'нечетное', 'четное', 'нечетное', 'четное']

// const compare = (arr) => {
// return arr.map((num) => {
//  return num % 2 === 0 ? "четное" : "нечетное"
// })}
// console.log(compare( [1,2,3,4,5,6,7,8]));

// // // // // // // // // 3.


// task 4
// Вам дана переменная str = 'максимально ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// ВЫВОД: [ 'Максимально', 'Ужасно' ]

// let str = 'максимально ужасно'
// const firstLetterToUpperCase = (str) => {
// const arr = str.split(" ")
// return arr.map((word) => {
//  return word[0].toUpperCase() + word.slice(1)
// })
// }
// console.log(firstLetterToUpperCase(str))

// // // // // // // // // 4.


// task 5
// Напишите функцию которая принимает массив ['мир', 'программирования'] и добовляет в него строку 'привет'
// ВЫВОД: ['привет', 'мир', 'программирования']

// const a = (arr) => {
//  return ['привет' , ...arr]}
// console.log(a(['мир', 'программирования']));

// // // // // // // // // 5.


// Нужно будет исправить первую задачу, и если хотите попробовать сделать вторую задачу без спредов. 
// Как всегда, очень хорошо) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ..........................................task 1  
// Напишите функцию, которая принимает массив чисел, 
// строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]


// const replaceBoolean = (arr) => {
//     return arr.map((el) => {
//         if (el === true || el === false) {
//             return !el
//         } else {
//             return el
//         }
//     })
// }
// console.log(replaceBoolean([1,2,3,4,"string", "hello", true, false] ));
// ..........................................task 2
// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
// Пример входных данных: "test"
// ВЫВОД: "tteesstt"

// const getDoubleLetter = (str) => {
//  let arr = str.split("")
//  let newArr = arr.map((el) => {
// return el + el
//  })
//  return newArr.join("")
// }
// console.log(getDoubleLetter("test"));


// ..........................................task 3
// Напишите функцию которая принимает массив ['Ваня', 'Антон', 'Ян', 'Джонни', 'Том', 'Бекнур'],
// если в этом массиве есть строки 'Ян' и 'Том' то верните длину этих строк, иначе верните строку.
// ВЫВОД: [ 'Ваня', 'Антон', 2, 'Джонни', 3, 'Бекнур' ]


// let arr = ['Ваня', 'Антон', 'Ян', 'Джонни', 'Том', 'Бекнур']
// const getQantityOfNames = (arr) => {
// return newArr = arr.map((el) => {
// return el === 'Ян' || el === 'Том' ? el.length : el
// })}
// console.log(getQantityOfNames(['Ваня', 'Антон', 'Ян', 'Джонни', 'Том', 'Бекнур']));
// ..........................................task 4
// Напишите функцию которая принимает массив из чисел и возводит четные числа в квадрат.

// const exponentiation = (arr) => {
// return  newArr = arr.map((el) => {
//     if(el % 2 === 0){
//         return el ** 2 // это хорошо, а мы знаем метод который возводит в квалрат?
//     }else{
//         return el
//     }
// })}
// console.log(exponentiation([1, 2, 3, 4, 5, 6]));


// ..........................................task 5
// Напишите функцию которая принимает массив из строк и чисел,
// и выводит длину каждой строки, а если число, то выводит его индекс


// const getLenghtAndIndex = (arr) => {
// return newArr = arr.map((el,index) => {
//     if(typeof(el) === "string"){
//         return el.length
//     }else if(typeof(el) === "number"){
//         return index
//     }
// })}
// console.log(getLenghtAndIndex(["hello", "hi",23, 3]));

// ..........................................task 6
// Напишите функцию которая принимает массив из чисел, и умножает каждое число на последнее значение массива.
// const multiplyByLastElem = (arr) => {
// let lastEl = arr[arr.length-1]
// return newArr = arr.map((el) => { // тут нам newArr не нужен. Мы сразу возращаем резултат, и хранить этот результат нам ненужно
// return el * lastEl
// })}

// console.log(multiplyByLastElem ([2, 3, 4, 5 ,6 ,7,8]));

// Отличная работа! 



// Написать функцию, которая принимает массив строк и возвращает новую строку, состоящую из всех элементов этого массива, объединенных в одну строку, с использованием метода reduce().

const getString = (arr) => {
return arr.reduce((acc, rec) => {
return acc + rec
},"")
}
console.log(getString(["hello", "hi" ,"bye"]));
// Написать функцию, которая принимает массив строк и возвращает количество символов во всех строках с использованием метода reduce().

// const getNumbers = (arr) => {
// return arr.reduce((acc,rec) => {
// return acc + rec.length
// },0)
// }
// console.log(getNumbers(["hello", "hi" ,"bye"]));

const getNumbers = (arr) => {
    return arr.reduce((acc,rec) => {
    return [...acc,rec.length]
    },[])
    }
    console.log(getNumbers(["hello", "hi" ,"bye"]));
// Написать функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из элементов, которые больше заданного значения, с использованием метода reduce(), (Без использования метода push()) 

const getNum = (arr) => {
return arr.reduce((acc, rec) => {
if(rec > 5){
    return [...acc, rec]
} 
return [...acc]
// return rec > 5? [...acc, rec] : [...acc]
}, [])
}
console.log(getNum([2,4,6,3,8,10]));