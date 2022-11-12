// Array - массивы
// length
// index[012345678]
// []
// new Array()

//
// let numbersArr = []
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(numbersArr.length)
// console.log(arr.length)

// let dataArray = [1,true,false,null,'qwert',[1,2,3,5,5],{},NaN,undefined]
//
// dataArray.length = 100
// console.log(dataArray.length)


// console.log(dataArray.length)
// console.log(dataArray[2])
// console.log(dataArray[5][4])



// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.slice(0,5))
// splice(start,delete count, item)
// console.log(arr.splice(2,3,5))
// console.log(arr)
// console.log(arr.splice(9,1))
// let deletedNumber = arr.splice(3,3)
// console.log(deletedNumber)
// console.log(arr)
// arr.length = 100
// console.log(arr)
// console.log(arr.length)
// arr[10] = 11
//
// arr[0] = 0
// console.log(arr)
//
//
//
// let numbersArr = [1,2,3,4,5,6,7,8,9,10]
//
// let secondNumber = ['a','b','c','d','f','j']
//
// console.log(numbersArr + secondNumber)
//
// console.log(typeof numbersArr)
// console.log(numbersArr.concat(secondNumber))


// split()
// join()
// push(),unshift(),shift(), pop ()





// split() - string только строкаларга гана колдонулат
// split - string -> []
// // join
//
// let a = "frontend"
// let b = 'Medil Kazyev'
// let c = '2022/12/12'
// let d = '2022*12*12'
// let e =  ['1','2','3','4','5','6','7']
// console.log(e.join(''))
// console.log(e.join(' ').length)



// console.log(a.split(''))
// console.log(b.split(" "))
// console.log(c.split('/'))
// console.log(d.split('*'))









































// Array - массивы
// index - []
//   length
// []
// new

//
// let numbersArr = [1,2,3,4,5,6,7,8,9,10]
//
// console.log(numbersArr)
// console.log(numbersArr.length)
//
//
//
// let dataArr = [1,null,false, [1,2,3,4,5 ,['345678','2345678']],{},true,'qwertyu',undefined,NaN]
//
//
// console.log(dataArr)
// console.log(dataArr.length)
// console.log(dataArr[3])
// console.log(dataArr[3][2])

// let numbersArr = [1,2,3,4,5,6,7,8,9]

// console.log(numbersArr.length)
// numbersArr.length = 100
// numbersArr.length = 20
// console.log(numbersArr)
// numbersArr[2] = 5
// numbersArr[9] = 10
// console.log(numbersArr)
// console.log(numbersArr.slice(0,5))


// splice (start,deleted count,item)

// let numbersArr = [1,2,3,4,5,6,7,8,9]
// let addedNumber = numbersArr.splice(9,5,10,11,12,13,14,15)
// console.log(addedNumber)
// console.log(numbersArr)
// let secondNumbers = ['a','b','c','d',]
// console.log(numbersArr + secondNumbers)
// console.log(numbersArr.concat(secondNumbers))
// console.log(typeof secondNumbers)

// let deletedNumber = numbersArr.splice(3,3)
// console.log(deletedNumber)
// console.log(numbersArr)
// console.log(numbersArr.splice(5,2))



// split
// join
// push,pop,shift,unshift
// new



// split() - только сторокаларга колдонулат string -> []
// join()


// let q = 'Frontend'
// let t = 'medil kazyev'
// let f = '2022/12/12'
// let y = '2022*12*12'
//
// let s = ['1','2','3','4']
//
// console.log(s.join(''))
// console.log(s.join(' '))
// console.log(s.join('*'))
//
// console.log(t.split(' '))
//
// console.log(q.split(""))
// console.log(f.split('/').join('/'))
// console.log(y.split('*'))




// let arr = [1,2,3,4,5,6,7,8,9,10]

// pop
// push
// shift
// unshift

// console.log(arr.unshift(0))
// console.log(arr)
//
// console.log(arr.push(11))
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.pop()
// console.log(arr)

// new
// unary operator
// global object -  Array
// fill

// let array = new Array(10).fill(0)
// console.log(array)


// let w = [1,2,3,4,5,6,7,8,9,10]
// console.log(w.reverse())
// reverse















//
//
// Во всех задачах используйте только методы map, filter.
//
// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.

let arr = [315, 64, 75, 43, 65, 63]





// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.














































// Array - массивы
// length
// index[012345678]
// []
// new Array()

//
// let numbersArr = []
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(numbersArr.length)
// console.log(arr.length)

// let dataArray = [1,true,false,null,'qwert',[1,2,3,5,5],{},NaN,undefined]
//
// dataArray.length = 100
// console.log(dataArray.length)


// console.log(dataArray.length)
// console.log(dataArray[2])
// console.log(dataArray[5][4])


// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.slice(0,5))
// splice(start,delete count, item)
// console.log(arr.splice(2,3,5))
// console.log(arr)
// console.log(arr.splice(9,1))
// let deletedNumber = arr.splice(3,3)
// console.log(deletedNumber)
// console.log(arr)
// arr.length = 100
// console.log(arr)
// console.log(arr.length)
// arr[10] = 11
//
// arr[0] = 0
// console.log(arr)
//
//
//
// let numbersArr = [1,2,3,4,5,6,7,8,9,10]
//
// let secondNumber = ['a','b','c','d','f','j']
//
// console.log(numbersArr + secondNumber)
//
// console.log(typeof numbersArr)
// console.log(numbersArr.concat(secondNumber))


// split()
// join()
// push(),unshift(),shift(), pop ()





// split() - string только строкаларга гана колдонулат
// split - string -> []
// // join
//
// let a = "frontend"
// let b = 'Medil Kazyev'
// let c = '2022/12/12'
// let d = '2022*12*12'
// let e =  ['1','2','3','4','5','6','7']
// console.log(e.join(''))
// console.log(e.join(' ').length)



// console.log(a.split(''))
// console.log(b.split(" "))
// console.log(c.split('/'))
// console.log(d.split('*'))









































// Array - массивы
// index - []
//   length
// []
// new

//
// let numbersArr = [1,2,3,4,5,6,7,8,9,10]
//
// console.log(numbersArr)
// console.log(numbersArr.length)
//
//
//
// let dataArr = [1,null,false, [1,2,3,4,5 ,['345678','2345678']],{},true,'qwertyu',undefined,NaN]
//
//
// console.log(dataArr)
// console.log(dataArr.length)
// console.log(dataArr[3])
// console.log(dataArr[3][2])

// let numbersArr = [1,2,3,4,5,6,7,8,9]

// console.log(numbersArr.length)
// numbersArr.length = 100
// numbersArr.length = 20
// console.log(numbersArr)
// numbersArr[2] = 5
// numbersArr[9] = 10
// console.log(numbersArr)
// console.log(numbersArr.slice(0,5))


// splice (start,deleted count,item)

// let numbersArr = [1,2,3,4,5,6,7,8,9]
// let addedNumber = numbersArr.splice(9,5,10,11,12,13,14,15)
// console.log(addedNumber)
// console.log(numbersArr)
// let secondNumbers = ['a','b','c','d',]
// console.log(numbersArr + secondNumbers)
// console.log(numbersArr.concat(secondNumbers))
// console.log(typeof secondNumbers)

// let deletedNumber = numbersArr.splice(3,3)
// console.log(deletedNumber)
// console.log(numbersArr)
// console.log(numbersArr.splice(5,2))



// split
// join
// push,pop,shift,unshift
// new



// split() - только сторокаларга колдонулат string -> []
// join()


// let q = 'Frontend'
// let t = 'medil kazyev'
// let f = '2022/12/12'
// let y = '2022*12*12'
//
// let s = ['1','2','3','4']
//
// console.log(s.join(''))
// console.log(s.join(' '))
// console.log(s.join('*'))
//
// console.log(t.split(' '))
//
// console.log(q.split(""))
// console.log(f.split('/').join('/'))
// console.log(y.split('*'))




// let arr = [1,2,3,4,5,6,7,8,9,10]

// pop
// push
// shift
// unshift

// console.log(arr.unshift(0))
// console.log(arr)
//
// console.log(arr.push(11))
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.pop()
// console.log(arr)

// new
// unary operator
// global object -  Array
// fill

// let array = new Array(10).fill(0)
// console.log(array)


// let w = [1,2,3,4,5,6,7,8,9,10]
// console.log(w.reverse())
// reverse


// //
//
// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.


// let arr =  ['a', 'b', 'c']
// str =arr.push( 1, 2, 3.)
// console.log (arr)

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1, 2, 3]
// console.log (arr.concat([4, 5, 6]))


// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
// let arr = [1,2,3]
// console.log (arr.concat(4,5,6))


// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.


//
// let arr = [1,2,3]
// arr.unshift(4,5,6)
// console.log (arr)

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq']
// console.log (arr.splice(0,1))



// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
//
// let arr = ['js', 'css', 'jq']
//
//
// console.log (arr.slice(-1))


// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice
// запишите в новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5]
// console.log (arr.slice(0,3))

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice
// запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5]
// console.log (arr.slice(3,6))


// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// преобразуйте массив в [1, 4, 5].


// let arr = [1, 2, 3, 4, 5]
//  str = arr.splice(1,2)
//
// console.log (str)
// console.log (arr)
//
// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода
// splice запишите в новый массив элементы [2, 3, 4].
//
// let arr =  [1, 2, 3, 4, 5]
// console.log (arr.splice(1,3))

//
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5]
//

// str = arr.splice(2,3,'a', 'b', 'c', 4, 5)
// console.log (arr)

//
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода
// splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let arr = [1, 2, 3, 4, 5]
//
// console.log (arr.splice(1,4, 'a', 'b', 2, 3, 4, 'c', 5, 'e'))
// console.log (arr)


//
// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
//
// 14 биринчи элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];
//
// function getFirst(array) {
//     ваш код
//
// };
// 15 акыркы элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];
//
// function getLast(array, n) {
//     ваш код
// };
//
