/*Esto es un comentario
   multilinea*/

//    Comentario de una linea

/* alert que esta en amarillo es una función que al ser
 * del sistema se llama método */

// alert("Hola!!");    //alert abre un mensaje emergente en el navegador

// console.log("hola mundo"); //vemos el resultado a través de consola


// &&&&&&&&&&&&&&     VARIABLES         &&&&&&&&&&&&&&&&
// es un contenedor donde se pueden ir guardando valores.


/* estamos declarando una variable llamada variable_1 que le asignamos el valor "Hola Mundo" */
// let variable_1 = "Hola Mundo";
// console.log(variable_1);

/*Esto es otra forma de declarar una variable */
// var variable_2 = 25
// console.log(variable_2);

/** Las variables de texto son de tipo string y van entre comillas */
// variable_1="Soy un string" //esto es una variable de tipo string

// Con typeof averiguamos de que tipo es la variable y con clg lo miramos
// console.log(typeof(variable_1));

/* los string se pueden iniciar con comillas dobles ("")
*  comillas simples ('')
*  o con acentor (``) ----> este sistema permite incorporar el contenido de otras variables dentro*/

// let nombre = "Ivonne"
// let frase = `Te llamas ${nombre}, bienvenido`    //Esto es temple style, es decir plantilla
// console.log(frase);

/* En js la variable puede ser de cualquier tipo. Aquí pasa de string a int */
// variable_1 = 1678
// console.log(typeof(variable_1));

/* Dentro de las variables de numero tiene enteros (int) si se le pone un Punto
será un decimal*/
// variable_1 = 1678.05

/** existen las varibles booleanas, verdadero (TRUE) o falso (FALSE) */
// variable_1=true
// console.log(typeof(variable_1));

// Ejemplo de usar variables booleanas
// let llueve = false
// llueve = false

/** existen estructuras en funcion de las necesidades
 * una de ellas es la estructura condicional IF
 */
//si algo es verdadero que pase algo y si es falso se utiliza el else (si no)
// if (llueve){
//     console.log("Ei, toma un paraguas!");
// } else{
//     console.log("vamos de paseo");
// }


/** EJEMPLO del condicional IF **/

// let dinero = 2

// if (dinero >= 5){
//     console.log("Comeré una pizza"); 
// } else if (dinero >= 3) {
//     console.log("Comeré un bocata")
// } else if (dinero >= 1.5){
//     console.log("Tomare un café con leche")
// } else{
//     console.log("Hoy toca ayuno")
// }

// dinero = 10
// if(dinero >= 5) {
//     let eleccion = "patata"
//     if (eleccion == 'pizza'){
//         console.log("Comeremos pizza")
//         } else {
//             console.log(`Comeremos ${eleccion}`);
//     }
// }

// #################3   FUNCIONES 3#######################

/**sintaxis básica de la función, primero palabra reservada (function)
 * el nombre que le queremos dar a la funcion, luego parentesis () y 
 * asi js sabe que es una funcion es obligatorio nombre y parentesis, 
 * luego llaves {}, luego si queremos hacer servir la funcion debemos
 * llamarla con el nombre y los parentesis.
 */
// Primera version para hacer una función de suma
function sumar_v1(){
    let suma = 1 + 2
    console.log(suma);
}
sumar_v1()

//Es mejor que la función de salida este fuera de la función
function sumar_v2(){
    let suma = 1 + 3
    return suma
}
console.log(sumar_v2());

//Se puede ahorrar memoria sin declarar variables
function sumar_v3(){
    return 1 +4
}
console.log(sumar_v3());

// ponemos parametros a la función para que sea dinámico
function sumar_v4(num1, num2){
    return num1 + num2
}
console.log(sumar_v4(2,60));

function dividir(num1, num2){
    return num1 / num2
}
console.log(dividir(10,4));


// %%%%%%%%%%%%%%%% FORMULARIOS %%%%%%%%%%%%%%%%%%