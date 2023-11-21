//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parOImpar = (n) => {
    if (n%2 === 0) {
      console.log('El número es par');
    } else 
      console.log('El número es impar');
}

let printNum = prompt('Ingresá un número');

parOImpar(printNum);

//2- Crear una función que reciba dos números por parámetro e indique 
//en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorN(a, b) { 
    if (a > b) {
        console.log(`${a} es mayor que ${b}`);
    } else if (a < b) {
        console.log(`${b} es mayor que ${a}`);
    } else
        console.log(`${a} y ${b} son iguales`);
}

let number1 = prompt ('Ingresá el número 1');
let number2 = prompt ('Ingresá el número 2');

mayorN(number1, number2);

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multDeCinco(n) {
    if (n%5 === 0) {
        console.log(`${n} es múltiplo de 5`);
    } else 
        console.log(`${n} no es múltiplo de 5`);
}

let mult = prompt('Ingresá un número'); 
multDeCinco(mult);

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function hastaCero(n) {
    if (n <= 0) {
        console.log('El número debe ser mayor a 0');
    } else 
        for(let i = 0 ; i <= n ; i++) {
        console.log(i);
    }
}

let cero = prompt('Ingrese un número');

hastaCero(cero);

//5 - Crear una función que reciba una palabra y un número por parámetro 
//e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repeatWord(word, n) {
    for(let i = 0 ; i <= n ; i++) {
      if (i === 0) {
        continue;
      }
        console.log(`${i}.${word}`);
    }
}

let userWord = prompt('Ingrese una palabra');
let num = prompt('Ingrese un número');

repeatWord(userWord, num);

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function printArray(arrayN) {
    for(let i=0 ; i <= 2; i++) {
        console.log(arrayN[i]);
    }
}

let array = [1, 2, 3];

printArray(array);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, 
//menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function printArrayV2(array) {
    for(let i=0 ; i <= 9 ; i++) {
        if (i === 4) {
            continue;
        }
        console.log(array[i]);
    }
}

let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

printArrayV2(tenNumbers);

//8 - Crea una función que reciba un array de números y un número por parámetro 
//e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function arrayOfNumbers(array, n) {
    for(i=0 ; i <= 3 ; i++) {
       console.log(array[i] * n);
    }
}

let arrayNum = [5, 3, 7, 1];
const num1 = 3;

arrayOfNumbers(arrayNum, num1);
