// Если переменная a больше нуля - то в ggg запишем функцию,
// которая выводит один !, иначе запишем функцию, которая выводит два !

// function ggg (a){
//   if (a > 2)
//     return 'true'
//   else return 'red'
// }
//
// console.log(ggg(1))


// Функция ggg принимает 2 параметра: число и анонимную функцию,
// которая возводит число в квадрат. Возведите число в 4-тую степень с
// помощью ggg.



// 1. Вам дана переменная str = 'Nevis ITDB TECH'.
// Выведите в консоль длину первого слова.




// // 2. Вам дана переменная str = 'Максимально УЖАСНО'.
// Выведите в консоль слово УЖАСНО, только нижним регистром.
// // 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.

// // 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split. Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]

// // 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]

// // 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.

// // 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.

// // 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.

// // 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.

// // 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a'




















// function anonymous

// function declaration
//
// function Age(a,b){
//   return a + b
// }
//
// console.log(Age(10,20))
//
// function red (r,e){
//   return r*e
//
// }
// console.log(red(1000,90))


// function expression
//
//
// const arr = (q,r) => {
//   return  q + r
// }
// console.log(arr(10,10))



//
//
// function str (a) {
//   if (a % 2===0){
//     return true
//   }else {
//     return false
//   }
// }
//
// console.log(str(13))






// //
//
//
//
// 1. Вам дана переменная a. Если переменная a равна 10, то выведите
// 'Верно', иначе выведите 'Неверно'.

// function red (a) {
//   if (a===10){
//       return ('Верно')
//   }else {
//     return ('Неверно')
//   }
// }
//
// console.log(red(10))

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// function age (a,b){
//
//   if (a>b){
//     return true
//   }else if (a<b) {
//     return false
//   }
//   else {
//     return 'red'
//   }
// }
//
// console.log(age(50,100))





// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0, 'равно'
// если число равно 0, "negative" если число меньше 0.
//
// function wer (a) {
//   if (a>=0){
//     return 'positive'
//   }else if (a<=0){
//   return "negative"
//   }
// }
//
// console.log(wer(-2))


// 4. Вам дана переменная number=45. Составьте условие, по которому будет
// выводиться в консоль "Четное число", "Нечетное число".

// function arr (number){
//   if (number % 2 ===0){
//     return "Четное число"
//   }else {
//     return "Нечетное число"
//   }
// }
//
// console.log(arr(46))

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому,
// остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".



//
// function redux (a,b){
//   if (a%b===0){
//     return "Четное число"
//   }else {
//     return  "Нечетное число"
//   }
// }
//
// console.log(redux(10,2))
// 6. Вам дана переменная s. Составьте условие, по которому в консоль
// будет выводится тип этой переменной - "boolean", "number", "string".
// function red (s) {
//   return typeof (s)
// }
//
// console.log(red('3'))

// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти,
// то выведите 'Верно', иначе выведите 'Неверно'.





// 8. Вам дана переменная а. Если переменная a равна трем или равна семи,
// то прибавьте к ней 7, иначе поделите ее на 10.
// Выведите новое значение переменной в консоль.


// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне  год", "Мне  лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.
// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".



























// callback function
// function decloration






// 1. Вам дана переменная a. Если переменная a равна 10,
// то выведите 'Верно', иначе выведите 'Неверно'.
// function sum(el){
//   if (el === 10){
//     return 'Верно'
//   }else{
//     return 'Неверно'
//   }
// }
// console.log(sum(11))
// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// function sum(a,b){
//   if (a > b){
//     return 'a больше b'
//   }
//   return 'a меньше b'
// }
// console.log(sum( 50, 100))

// 3. Вам дана переменная a=-2. Составьте условие,
// по которому в консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// function sum(a){
//   if (a > 0){
//     return 'positive'
//   }
//   else if (a === 0){
//     return 'равно'
//   }
//   return 'negative'
// }
// console.log(sum(0))

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
// const sum = (number) =>{
//   if (number % 2 === 0){
//     return "Четное число"
//   }
//   return "Нечетное число"
// }
// console.log(sum(45))


// Нуртилек Борубаев:
// 1. Вам дана переменная str = 'Nevis ITDB TECH'.
// Выведите в консоль длину первого слова.
// const string = (str) => {
//   return str.slice(0,5).length
// }
// console.log(string('Nevis ITDB TECH'))


// 2. Вам дана переменная str = 'Максимально УЖАСНО'.
// Выведите в консоль слово УЖАСНО, только нижним регистром.
// function string(str){
//   return str.slice(12,18).toLowerCase()
// }
// console.log(string('Максимально УЖАСНО'))



// 3. Вам дана переменная str ='Максимально УЖАСНО''.
// Выведите в консоль слово максимально, только верхним регистром.
// function string(str){
//   return str.slice(0,12).toUpperCase()
// }
// console.log(string('Максимально УЖАСНО'))



// 4. Вам дана переменная str = 'Максимально Ужасно'.
// Выведите в консоль каждый символ этой строки, используя метод split.
// Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ',
// 'o','f',' ','m','y',' ','L','I','F','E','!' ]
// function string(str){
//   return str.split('')
// }
// console.log(string('Максимально УЖАСНО'))


// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'.
// Выведите в консоль все
// слова этой строки, используя метод split. Пример:
// [ 'Максимально' 'ужасно', 'переделывай'. ]

// function string(str){
//   return str.split(',')
// }
//
// console.log(string('Максимально Ужасно, переделывай'))

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально
// Ужасно', используя метод slice.
// function string(str){
//   return str.slice(5)
// }
//
// console.log(string('Максимально Ужасно'))

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У,
// использую метод charAt.
// function string(str){
//   return str.charAt(12)
// }
//
// console.log(string('Максимально Ужасно'))


// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в
// консоль соединенные строки, используя метод concat.
// function string(str1,str2){
//   return str1.concat(str2)
// }
//
// console.log(string('Максимально',' Ужасно'))

// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите
// в консоль индекс слова 'Ужасно'.
// function sum(str){
//   return str[1].length
// }
//
// console.log(sum('Максимально Ужасно'))
// 10. Вам дана переменная str = 'Максимально Ужасно'.
// Выведите в консоль "встречается более
// 1 раза", если букв 'a' встречается более 1 раза,
// иначе "встречается менее одного раза"


// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в
// консоль первую букву каждого слова строки в верхний регистр.
// function string(str){
//   return str.slice(0,1).toUpperCase() + str.slice(1,12).toLowerCase() + str.slice(12,13).toUpperCase() + str.slice(13).toLowerCase()
// }
// console.log(string('макСИМАЛЬНО ужаСНО'))

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль
// индекс первого вхождения буквы а.

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в
// консоль индекс первого последнего буквы о.

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя
// разными способами (через substr, substring, slice) и выведите в консоль.

// 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату
// в формат '31/12/2025' и выведите в консоль.

  // 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в"
  // в данной строке, если да, то выведите "Да", иначе - "нет".

  // 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая
  // буква в строке совпадает с
  // последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".

  // 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в
  // первой половине строки, или последней. Если в первой, то выведите в консоль -
  // "В первой половине", иначе - "Во второй половине".

    // 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//
// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому,
// остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне  год", "Мне  лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.
// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".




// greting()

// function greting () {
//
// }
// greting()



// age()
//
// const age = (name) => {
//   return `Hello ${name}`
//
// }
//
// age()
// console.log(age("Medil"))
//
// const age = (start,end) => {
// return Math.floor(Math.random() *( end - start )+ start)
// }
// console.log(age(1,10))



//
//
// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }

// Медил Казыев, [29.10.2022 19:24]
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль
// индекс первого вхождения буквы а.

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в
// консоль индекс первого последнего буквы о.

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя
// разными способами (через substr, substring, slice) и выведите в консоль.

// 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату
// в формат '31/12/2025' и выведите в консоль.
// function sum(str){
//   return str.replaceAll('-', '/')
// }
// console.log(sum('17-02-2021'))

// 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в"
// в данной строке, если да, то выведите "Да", иначе - "нет".
// function sum(str){
//   if (str.includes('а')){
//     return "Да"
//   }
//   return  "нет"
// }
// console.log(sum('Максимально Ужасно'))


// 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая
// буква в строке совпадает с
// последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".
// function sum(str){
//   if (str[0] === str[str.length -1]){
//     return "Совпадает"
//   }
//   return "Не совпадает"
// }
// console.log(sum('АаааааА'))

// 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в
// первой половине строки, или последней. Если в первой, то выведите в консоль -
// "В первой половине", иначе - "Во второй половине".
// function sum(str){
//   if (str.length / 2 && str.includes('л')){
//     return "В первой половине"
//   }
//  else if  (str.slice(6) && str.includes('л')){
//     return "Во второй половине"
//   }
// }
// console.log(sum('Максимально'))


// 6. Вам дана переменная s. Составьте условие,
// по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// function sum(s){
//   if(typeof s === 'string'){
//     return 'string'
//   }else if(typeof s === 'number'){
//     return 'number'
//   }
//   return  'boolean'
// }
// console.log(sum(false))
// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти,
// то выведите 'Верно', иначе выведите 'Неверно'.
// function sum(str){
//   if (str > 1 && str < 9){
//     return 'Верно'
//   }
//   return 'Неверно'
// }
// console.log(sum(11))

// 8. Вам дана переменная а. Если переменная a равна трем или равна семи,
// то прибавьте к ней 7, иначе поделите ее на 10.
// Выведите новое значение переменной в консоль.
// function sum(str){
//   if (str === 3 || str === 7){
//     return str + 7
//   }
//   return  str / 10
// }
// console.log(sum(10))

// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0,
// а переменная b больше или равна 5, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания).
// const sum = (a,b) => {
//   if  (a >= 0 && b <= 5){
//     return a + b
//   }
//   return a - b
// }
// console.log(sum(5,4))
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.
// const sum = (a,b) => {
//   if (a > 4 && a < 10 || b >= 7 && b < 17){
//     return 'Верно'
//   }
//   return 'Неверно'
// }
// console.log(sum(11,18))

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// const sum = (month) => {
//   if  (month > 0 && month < 3 || month === 12){
//     return 'kysh'
//   }else if(month > 2 && month < 7){
//     return 'jaz'
//   }else if(month > 6 && month < 10){
//     return 'jai'
//   }else if (month > 9 && month < 12){
//     return 'kuz'
//   }else{
//     return 'андай ай жок'
//   }
// }
// console.log(sum(7))

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью)
// .
// const sum = (day) => {
//   if (day >= 1 && day < 11){
//     return '1'
//   }
//   else if(day > 10 && day < 21){
//     return '2'
//   }
//   else if(day > 20 && day < 31){
//     return  '3'
//   }
//   return '4'
// }
// console.log(sum(31))

// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является
// цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// const sum = (a) => {
//   if (a[0] === '1' || a[0] === '2' || a[0] === '3'){
//     return 'Да'
//   }else{
//     return 'нет'
//   }
// }
// console.log(sum('12345'))


// 14. Вам дана переменная age=*любое двузначное число*.
// Составьте условие, по которому, в консоль будет выводиться "Мне  год", "Мне  лет",
// в зависимости от возраста. Наример мне 21 год, мне 20 лет.







// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие,
// по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть.
// Если число больше 60, то в консоли будет выдаваться "Неверное число".
// const sum = (time) => {
//   if (time >= 1 &&time < 15){
//     return 'Первая четверть.'
//   }else if (time > 14 && time < 30){
//     return 'вторая четверть'
//   }else if (time > 29 && time < 46){
//     return 'третья четверть'
//   }else if (time > 45 && time < 60){
//     return 'четвертая четверть'
//   }
//   return "Неверное число"
// }
// console.log(sum(29))

// let arr = [123]
// console.log(arr.shift())
// console.log(arr.unshift())
// console.log(arr.pop())
// console.log(arr.push())








// function declaration
// function expression
// aroow function
// IIFE-immediate invoked function expression
// callback,anonymous function




// function declaration
// argument
// parameter
//
// function sum (a,b) {
//   return a + b
// }
//
// console.log(sum(20,30))
