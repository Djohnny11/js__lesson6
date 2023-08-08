//Массив -это структура данных, хранящая набор значений
// массив обозначается квадратными скобками

// let info=[4,4,4,6,7,7,0,12]
// //значения начинаются с 0, как в списках в питоне
// console.log(info.length)

// let array=[1,3,5,7,9]
// for(let i=0;i<array.length;i++) {
//     console.log(array[i]*5)
// }
// let result=0
// let array=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<array.length;i++) {
//     result+=array[i]%2==0 ? 1 : 0
// }
// console.log(result);


//splice(удаляет выбранные ячейки с массива)
// let names = [ 'ismail']
// for(let key in names) {
//     names[key]=='asilbek'? names.splice(key,3) : ''
//     names.push("hellboy") //добавляет элемент в конец массива
//     names.unshift('capitan america') //добавляет в начало
//     names.shift()//удаляет с начала
//     names.pop()//удаляет с конца
// }
// console.log(names)

// let users=[
//     {id:1,name:'html',age:20},
//     {id:2, name:'css', age:23}
// ]

// users.push({id:3,name:"javascript",age:80})

// for(let key in users) {
//     for(let newKey in users[key]) {
//         console.log(users[key][newKey])
//     }
// }
//метод сплит разбивает строку на массив
// let str='iphone, samsung'
// let array=str.split(',')
// console.log(array)

let array=['naruto', 'sasuke', 85]
for(key in array) {
    console.log(key)
}
// array.splice(0,1)
// console.log(array)
