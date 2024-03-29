"Use strict"

console.log("Connected");


//Types

/**
 * 1. string - строка - любое значение в кавычках ''
 * 2. number - число - 23   2.5
 * 3. undefined - если есть неопределённость значения
 * 4. null - отсутствие значения - пустота - даже не 0
 * 5. boolean - true or false
 * 6. object - ссылочный тип данных - любое значение например {}
 * 
 * 7. begint  -  что бы можно было считать большие числа - добавлять в консоле к числу букву n и оно считает коректно
 * 8. symbol  -  с помощью символа можно создавать в js уникальные значения - используется для итерируемых обьектов
 */


// ПЕРЕМЕННАЯ и её польза:
// --> ячейка памяти
// без неё нужно было бы каждый раз в ручную менять имя
// addAdressTo('Petya');
// addPurchaseTo('Petya');
// //.....
// shipProductsTo('Petya');


// С ПЕРЕМЕННОЙ - я могу поменять имя только раз в переменной
// let userName = 'Petya';

// addAdressTo('userName');
// addPurchaseTo('userName');
// //.....
// shipProductsTo('userName');


// Как обьявить ПЕРЕМЕННУЮ?
// var a = 2;  //--> устаревший и без контроля use strict его можно обьявить много раз и это может стать проблемой
// let b = 3;
// const c = 4;


// c let можно перезаписать значение
// let a = 2;
// a = 3;

// console.log(a);

// const  - константа получает своё значение при рождении и больше его не меняет
// const c = 4;
// c = 5;      // изза этого вылазеет ошибка

// console.log(c);


// Именование переменной:
// - $laeofjodfm
// - user2
// - _user
// - userName

// - 2user - нельзя ставить перед названием числа и.т.д.!!!


// typeof
console.log( typeof 2 ); // определение того что стоит после typeof
// --> здесь он определяет и выводит в консоль что это number


console.log( typeof null ); // выводит object - ошибка

console.log( typeof 'Oxana' ); // string


// ВОЗВРАТ ЗНАЧЕНИЯ:
// любое обращение к переменной всегда возвращает значение

// z.B.
const age = 2;
console.log(age);
console.log( 3 + 4); //js вычесляет значение и выводит/возвращает  результат значения 7

console.log(console.log());

console.log( typeof typeof 2);
// сначала вычесляется typeof 2 - 'number' 
// а потом вчесляется typeof 'number' и вводит string!

// typeof = унарный оператор - может быть только один оперант с права
// оперант = вычесленное значение

// +/- = бинарный оператор



// ПРЕОБРАЗОВАНИЕ

// в строку:
// String();
// 2 + ''
// преобразование в лева на право

// в булевый:
// Boolean();
// !!2 - true
// !2 - false
// Boolean(' '); - true - так как есть пробел

// в число:
// Number();
// Number(false) --> 0
// Number(true)  --> 1
// Number('lkadfljdjfdjöfj') --> NaN

// typeof NaN --> "number"

// 'aldjfjdf' - 2 --> NaN 
// 'aldjfjdf' * 2 --> NaN 
// --> NaN это когда в пытаетесь сделать арифметическое вычесление но js не понимает как его вычеслить

// 2/10-NaN*51-2**3 - есль есть хоть один NaN, то всё NaN 

// Number(null) --> 0  - ближашее число
// Number('2') --> 2 - если в строку только число
// Number('2x') --> NaN
// Number('2 5') --> NaN
// Number('  25   ') --> 25
// Number('true2') --> NaN 

// true + null --> 1 = преобразует всё в числа 

// typeof Infinity --> number

// +false --> 0 = неявное преобразование к числу с помощью арефметическим оператором --> все 
// 2 * null --> 0

// 2 * !null (--> boolean) --> 2 * true --> 2 * 1 --> 1


// undefined + 'hi!' --> 'undefinedhi!'


// NaN не равен сам себе
// NaN === NaN - false
// NaN == NaN - false
// NaN > NaN - false
// NaN < NaN - false
// NaN !== NaN - true

// isNaN('ldfjldj') --> true
// isNaN('  2') --> false

// 10 % 2 --> 0


// let a = 2;
// let b = 3;

// a = a + b;
// a += b;

// a = a - b;
// a -= b;

// a = a * b;
// a *= b;

// a = a / b;
// a /= b;



// Инкременты:

// let a = 1;
// a++;
// let b = a++ +3;
// console.log(a);

// console.log(a++); увеличивает после того как завершится
// console.log(++а); увеличивает до того как завершится


// Декременты:
// let a = 1;
// a--;
// console.log(a);

// for(let i = 0; i < 10; ++i) {
//     console.log(i);
// }

// while (a < 10) {
//     console.log(++a);
// }