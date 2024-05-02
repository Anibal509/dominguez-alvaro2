// Función para calcular las operaciones (Problema 2)
function calcularOperaciones() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;

    document.getElementById("operaciones").innerHTML = `
        <label>Resultados:</label>
        <p>Suma: ${suma}</p>
        <p>Resta: ${resta}</p>
        <p>Multiplicación: ${multiplicacion}</p>
        <p>División: ${division}</p>
    `;
}

// Función para concatenar textos (Problema 3)
function concatenar() {
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    let concatenacion = str1 + " " + str2;

    document.getElementById("concatenacion").innerHTML = `
        <label>Resultado:</label>
        <p>${concatenacion}</p>
    `;
}

// Función para obtener el tipo de dato (Problema 4)
function tipoDato() {
    let const1 = document.getElementById("const1").value;
    let const2 = document.getElementById("const2").value;
    let tipoDato1 = typeof const1;
    let tipoDato2 = typeof const2;

    document.getElementById("tiposDatos").innerHTML = `
        <label>Tipos de Dato:</label>
        <p>Tipo de dato de constante 1: ${tipoDato1}</p>
        <p>Tipo de dato de constante 2: ${tipoDato2}</p>
    `;
}

// Función para crear objeto con diferentes tipos de datos (Problema 5)
function crearObjeto() {
    let miObjeto = {
        numero: 10,
        texto: "Hola",
        booleano: true,
        objetoVacio: {}
    };

    document.getElementById("objeto").innerHTML = `
        <label>Objeto:</label>
        <p>${JSON.stringify(miObjeto)}</p>
    `;
}

// Función para sumar múltiplos de 3 o 5 menores que un número dado (Problema 6)
function sumarMultiplos() {
    let numero = parseInt(document.getElementById("numeroMultiplos").value);
    let suma = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
    }

    document.getElementById("sumaMultiplos").innerHTML = `
        <label>Suma de múltiplos de 3 o 5 menores que ${numero}:</label>
        <p>${suma}</p>
    `;
}
