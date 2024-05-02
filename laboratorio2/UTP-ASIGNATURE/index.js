/*Probando diferentes codigos ///
1.Declarar dos variables con la palabra reservada "var",
 imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" en la consola.
Las variables pueden ser estática.*/
//Declaración de variables.
var numero1 = 20;
var numero2 = 4;

// Operaciones 
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

//  Resultados en la consola
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
//Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.
// Declaración de variables con "let"
 let nombre = "Alvaro";
 let apellido = "Domínguez";

// Concatenación de las variables
 let nombreCompleto = nombre + " " + apellido;

// Impresión del resultado
 console.log("Nombre completo:", nombreCompleto);

//Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.
 const nombre1= 'Madison';


//Declarar una variable tipo Objeto, colocar 4 llaves dentro de él que contengan un number, un string, un booleano y un objeto vacío, en ese mismo orden.

const miObjeto = {
numero: 42,
texto: 'Hola, mundo!',
booleano: true,
objetoVacio: {}
};

console.log(typeof miObjeto.numero); // Tipo de dato: número
console.log(typeof miObjeto.texto); // Tipo de dato: cadena de caracteres (string)
console.log(typeof miObjeto.booleano); // Tipo de dato: booleano
console.log(typeof miObjeto.objetoVacio); // Tipo de dato: objeto

//6.Escribir una función en JS que tome un número entero positivo como argumento y devuelva la suma de todos los números menores que sean múltiplos de 3 o 5. Por ejemplo: Si el número dado es 10, la función debería devolver la suma de 3, 5, 6 y 9, que es 23. 
function sumaMultiplos(numero) {
let suma = 0;

for (let i = 1; i < numero; i++) {
if (i % 3 === 0 || i % 5 === 0) {
  suma += i;
}
}

return suma;
}

// Ejemplo de uso:
const numeroEjemplo = 10;
const resultado = sumaMultiplos(numeroEjemplo);
console.log(`La suma de los múltiplos de 3 o 5 menores que ${numeroEjemplo} es: ${resultado}`);
