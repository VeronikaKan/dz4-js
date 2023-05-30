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

// const getString = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec
//     }, "")
// }
// console.log(getString(["hello", "hi", "bye"]));
// Написать функцию, которая принимает массив строк и возвращает количество символов во всех строках с использованием метода reduce().

// const getNumbers = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec.length
//     }, 0)
// }
// console.log(getNumbers(["hello", "hi", "bye"]));

// const getNumbers = (arr) => {
//     return arr.reduce((acc,rec) => {
//     return [...acc, acc + rec.length]
//     },[])
//     }
//     console.log(getNumbers(["hello", "hi" ,"bye"]));
// Написать функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из элементов, которые больше заданного значения, с использованием метода reduce(), (Без использования метода push()) 

// const getNum = (arr, num) => { // 2. здесь бы я принял эту 5-ку под ключевым словом num
//     return arr.reduce((acc, rec) => {
//         if (rec > num) {    // 3. и здесь я бы уже сравнивал num
//             return [...acc, rec]
//         }
//         return [...acc]
// return rec > 5? [...acc, rec] : [...acc]
//     }, [])
// }
// console.log(getNum([2, 4, 6, 3, 8, 10], 5));  // 1. здесь бы я передал вторым аргументом вашу 5-ку

// // // // // // Очень хорошо! Я бы даже сказал подозрительно хорошо)) Молодец, так держать!  
/////////////////////////////////////object////////////////////////////////////////////////////////////////////////////////
// 1. Создать объект user с полями name, age и email. Вывести значения полей в консоль.
//      -Добавить ключ id со значением 1 
//      -Добавить ключ second name
//      -Удалить ключ age
//      -Изменит значение ключа email
//      -Сделать так чтоб в дальнейшем этот объект не могли изменять

// let user = {
//     name: "Yulia",
//     age: 16,
//     email: "yulia@gmail.com"
// };
// user.id = 1;
// user.['second name'] = "Stepanova"
// delete user.age
// user.email = "gfhfhf@gmail.com"
// Object.freeze(user)
// console.log(user);


// 2. Создайте объект заработных плат obj = {Ширин: '1000',
//    Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// let obj = {
//     Ширин: '1000',
//     Айжан: '500',
//     Атай: '200'
// }
// delete obj.Айжан
// console.log(`zarplata Shirin:${obj.Ширин}, zarplata Ataya: ${obj.Атай}`);



// 3. Создать объект team с полем members, представляющим собой массив имен участников. 
//    Добавить нового участника в массив и вывести обновленный объект в консоль. 
//    (Учитываем, то что мы можем не знать список участников которые уже записаны)

// let team = {
//     members: ["Atay","Shirin","Aijan"]
// }
// team.members = [...team.members ,"Sezim","Sasha"]
// console.log(team);


// 1. Вам дан обьект, с ключами herbivores, predators, All animals. 
//    Заполните значение ключа All animals всеми животными.

// let obj = {
//     herbivores: ["Заяц", "Корова", "Лошадь"],
//     predators: ["Волк", "Медведь", "Лунтик"], 
//     "All animals": []
// }
// obj[ "All animals"] = [obj.herbivores + obj.predators]
// console.log(obj);


// 2. Вам дан обьект obj, напишите функцию которая удалит поля со 
//    значениями undefined и вывести в консоль обновленный обьект 

// const deleteKey = (obj) => {
// let arr = Object.keys(obj)
//  arr.forEach((el) => {
// if(obj[el] === undefined){
// delete obj[el]
// }else{
//     obj[el]
// }
// })
// return obj
// }
// console.log(deleteKey({
//     id: 1,
//     title: "tuna sandwich",
//     subtitle: undefined,
//     price: "20$",
//     "new price": null,
//     description: "tuna sandwich best sandwich in the world",
//     "more info": undefined,
//     categories: null
// }));


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Напишите функцию, которая 
// принимает объект, как аргумент 
// и возвращает новый объект. 
// Только с полями, у которых тип значения - строка;

// Input: { name: 'Baha', isAdmin: true }
// Output: { name: 'Baha' }

// Input: { isAdmin: true }
// Output: {}

// const returnStr = (obj) => {
// const newObj = {}
// let arr = Object.keys(obj)
//  arr.forEach((el) => {
//  return  typeof(obj[el]) === "string" ? newObj[el] = obj[el]: newObj
// })
// return newObj
// }
// console.log(returnStr({ name: 'Baha', isAdmin: true }));


// 2. Напишите функцию, которая принимает объект,
// как аргумент и возвращает новый массив с именами ключей - значение, которых false

// Input: { isAdmin: false, isBaha: true }
// Output: ['isAdmin']


// const returnArr = (obj) => {
// let arr = Object.keys(obj)
// return arr.filter((el) => {
// return obj[el] === false 
// })
// }
// console.log(returnArr({ isAdmin: false, isBaha: true }));


// 3. Напишите функцию, которая 
// принимает массив объектов с полем id. 
// Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id

// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]

// const convert = (arr) => {
// return arr.map((el) => {
// return el.id
// })
// }
// console.log(convert([{id: 1},{id: 2},{id: 3},{id: 4}]));

// 4. Вам дан объект product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%.
//    Если это не так, сделайте скидку на 7%. Обновите объект.

// const getSale = (product) => {
    
//    if  (product.price > 100){
//      product.discount = 10
//    } else{
//      product.discount = 7
//    }
//    return product
// }
// console.log(getSale( {
//         name: "headphones",
//       price: 110,
//        discount: 0
//     }));
// 5. Вам дан массив из обьектов, создайте функцию которая добовляет в список новый 
//    продукт и вычисляет общее количество калорий. Функция должна передавать новый 
//    продукт например: ('banana', '500').

 
const list = [
    {
        title: 'sandwich',
        'калорий': '200',
    },
    {
        title: 'chocolate',
        'калорий': '1000',
    },
    {
        title: 'chicken',
        'калорий': '700',
    },
    {
        title: 'burger',
        'калорий': '1000',
    }, 
]
const calcKkal = (name,count) => {
const newProduct = {title:name,
    'калорий': count
}
list.push(newProduct)
return list.reduce((acc,product) => {
return Number(product.калорий) + acc
},0)
}
console.log(calcKkal('banana', '500'));
console.log(list);



