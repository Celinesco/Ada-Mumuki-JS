
//CAPITULO 3

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////               ///////////////////////////////////////////
///////////////////////////////////////////     ARRAYS    ///////////////////////////////////////////
///////////////////////////////////////////               ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//EJERCICIO 1: OBTENER MENOR

// Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el 
// menor de ellos. Ejemplo:

//  obtenerMenor(5, 7, 99, 34, 54, 2, 12)
// 2

const obtenerMenor = (numeros) => {
  let menor = numeros[0]
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i]
    }

  }
  return menor
}

//EJERCICIO 2: SUMAR

// Definí una función sumar que reciba como argumento un array de números numeros y devuelva la suma de ellos. 
// Ejemplo:

//  sumar([5, 7, 10, 12, 24])
// 58

const sumar1 = (numeros) => {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
  }
  return suma
}

// EJERCICIO 3: CONTIENE

// Definí una función contiene que reciba como argumentos un número numero y un array de números numeros 
// y devuelva si el número se encuentra en dicho array.

//  contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])
// true
//  contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
// false

const contiene = (numero, numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    if (numero === numeros[i]) {
      return true
    }
  }
  return false
}

//EJERCICIO 4: 

/*
Definí una función invertirCaso que tome por parámetro un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

 invertirCaso('Ada Lovelace') 
'aDA lOVELACE'
 invertirCaso('feliz cumple') 
'FELIZ CUMPLE'
 invertirCaso('jAvAsCrIpT')
'JaVaScRiPt'

*/

///////////////PRIMER SOLUCIÓN////////////////

// const invertionUpperLower = (caracter) => {
//   if (caracter === caracter.toLowerCase()) {
//     return caracter.toUpperCase()
//   } else {
//     return caracter.toLowerCase();
//   }
// }

// let invertirString = (string) => {
//   let nuevaString = "";
//   for (let i = 0; i < string.length; i++) {
//     nuevaString = nuevaString.concat(invertionUpperLower(string[i]));
//   }
//   return nuevaString;
// }

//////////////////SEGUNDA SOLUCIÓN///////////////////////

const invertionOtra = (x) => {
  if (x >= "A" && x <= "Z") {
    return x.toLowerCase()
  }
  else {
    return x.toUpperCase();
  }
}


let invertirCaso = (string) => {
  let nuevaString = "";
  for (let i = 0; i < string.length; i++) {
    nuevaString = nuevaString.concat(invertionOtra(string[i]));
  }
  return nuevaString;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//EJERCICIO 5: GANÓ
// Definí una función gano que reciba como argumento un array tragamonedas  con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

//  gano(['⭐ '⭐️', '⭐️', '💫', '✨']) // 
// false
//  gano(['💫', '💫', '💫', '💫', '💫']) 
// true
//  gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) 
// true


const gano = (tragamonedas) => {
  let cantidadIgual = 0;
  for (let i = 0; i < 4; i++) {
    if (tragamonedas[i] !== tragamonedas[i + 1])
      return false
  }
  return true;
}

///OTRA SOLUCIÓN 
/*
const gano = (tragamonedas) => {
  let cantidadIgual = 0;
  for (let i=0; i<4; i++) {
    if (tragamonedas[i] === tragamonedas[i+1])
      cantidadIgual ++
  }
  return cantidadIgual === 4
}
*/


//EJERCICIO 6: ESTÁN JUNTOS

// Definí una función estanJuntos que reciba como argumento un array de strings personajes, 
// y devuelva si Sam se encuentra al lado de Frodo, puede encontrarse antes o después.

// estanJuntos(['Sam', 'Frodo', 'Legolas']) 
// true
// estanJuntos(['Aragorn', 'Frodo', 'Sam']) 
// true
// estanJuntos(['Sam', 'Orco', 'Frodo']) 
// false

const estanJuntos = (personajes) => {
  let iSam = personajes.indexOf("Sam")
  let iFrodo = personajes.indexOf("Frodo")
  return Math.abs(iFrodo - iSam) === 1
}

// OTRAS SOLUCIONES
/*
/*const estanJuntos = (personajes) => {
  /*if (personajes[0] === "Sam" && personajes[1] === "Frodo") {
    return true
  }
  if (personajes[0] === "Frodo" && personajes[1] === "Sam") {
    return true
  }*/
/*  for (let i=0; i<personajes.length; i++) {
    if ( personajes[i] === "Sam") {
      if( personajes[i+1] ==="Frodo" || personajes [i-1] === "Frodo")
        return true
    }
   }
  return false
}

const estanJuntos = (personajes) => {
  let iSam = personajes.indexOf("Sam")
  let iFrodo = personajes.indexOf("Frodo")
  return iFrodo-1 === iSam || iFrodo+1 === iSam; 
}

*/

//EJERCICIO 7: SEPARAR

// Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string 
// con los perros agrupados por un lado y los gatos por otro.

//  separar('🐶🐱🐶🐱🐱🐶🐶') 
// '🐶🐶🐶🐶🐱🐱🐱'

/* SOLCUCION APLICANDO MÉTODO. En mumuki lo considera mal porque el sort pone primero a los gatitos. No se por qué 
pone primero a los gatitos igual)


const separar = (emojis) => {
  return emojis.sort()
}

*/

const separar = (emojis) => {
  let mascotasOrdenadas = [];
  mascotasOrdenadas[0] = emojis[0];
  for (let i = 1; i < emojis.length; i++) {
    if (emojis[0] === emojis[i]) {
      mascotasOrdenadas.unshift(emojis[i])
    } else {
      mascotasOrdenadas.push(emojis[i])
    }
  }
  return mascotasOrdenadas
}


//   console.log(separar('🐶🐱🐶🐱🐱🐶🐶'))
//   console.log(separar(["🐶","🐱","🐶","🐱","🐱","🐶","🐶"]))


//EJERCICIO 8: OBTENER CHAT STATUS

// Definí una función obtenerChatStatus que reciba como argumento un array de strings usuarias y 
// devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
//  obtenerChatStatus(['Ada'])
// 'Ada está conectada'
//  obtenerChatStatus(['Ada', 'Grace'])
// 'Ada y Grace están conectadas'
//  obtenerChatStatus(['Ada', 'Grace', 'Marie'])
// 'Ada, Grace y 1 persona(s) más están conectadas'

const obtenerChatStatus = (usuarias) => {
  if (usuarias.length === 1) {
    return usuarias[0] + " está conectada";
  }
  if (usuarias.length === 2) {
    return usuarias[0] + " y " + usuarias[1] + " están conectadas"
  }
  else {
    return usuarias[0] + ", " + usuarias[1] + " y " + (usuarias.length - 2) + " persona(s) más están conectadas"
  }
}


//EJERCICIOS 9 Y 10 NO ME SALIERON PERO VAN LOS INTENTOS

//   let germinar = (plantines) => {
//     console.log(plantines)
//     let plantasGerminadas = [];
//     for (let i=0; i < plantines.length; i++) {
//       if (plantines[i] === "🌱") {
//         plantines[i] = plantines[i-1];

//       }
//       plantasGerminadas.push(plantines[i])
//     }
//     return plantasGerminadas
//   }

let germinar = (plantines) => {
  let plantasGerminadas = [];
  for (let i = 0; i < plantines.length; i++) {
    if (plantines[i] !== "🌱") {
      plantasGerminadas.push(plantines[i])
    }
    else {
      plantasGerminadas.push(plantines[i - 1])
    }
  }
  let stringPlantas = plantasGerminadas.toString()
  return stringPlantas.replace(/,/g, " ")

}

// console.log(germinar(["🌷","🌱","🌻","🌱","🌸","🌱","🌷","🌱","🌻","🌱","🌸","🌱"]))






//   console.log(germinar(["🌷","🌱","🌻","🌱","🌸","🌱","🌷","🌱","🌻","🌱","🌸","🌱"]))

//   console.log(germinar("🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱"))


const comer = (comidita) => {
  let plantasSobrevivientes = []
  if (comidita.indexOf("🐰") != -1) {
    let stopSignal = comidita.indexOf("🚫")
    for (let i = stopSignal + 1; i < comidita.length; i++) {
      plantasSobrevivientes.push(comidita[i])
    }

  }
  return plantasSobrevivientes;
}


//   console.log(comer(["🐰","🥕","🥬","🥕","🚫","🥕"]))



//   const multiplicacion = (a,b) => {
//     let resultado = a*b;
//     return resultado;
//   }



//   // let array = [3,5,7,9]

//   // let sumar1 = (n, index, array) => { 
//   //   array[index]+=array[index]; 
//   // }

//   // array.forEach(sumar1)
//   // console.log(array);


//EJERCICIO 11: MULTIPLICAR 

/*
Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

 multiplicar(2, [5, 7, 15, 22, 40])
[10, 14, 30, 44, 80]
 multiplicar(10, [2, 5, 77])
[20, 50, 770]

*/

let multiplicar = (numero, array1) => {
  array1.forEach(function cb(n, i, array) {
    array1[i] = n * numero;

  })

  return array1;
}

//  console.log(multiplicar(7,[2, 1, 1]))

//EJERCICIO 12: FILTRAR POR LONGITUD MAYOR A

// Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de 
// strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. 
// Ejemplo:

//  filtrarPorLongitudMayorA(4,['dia','remolacha',
// 'azul','sorpresa','te','verde',])
// ['remolacha', 'sorpresa', 'verde']


let filtrarPorLongitud = (longitud, palabras) => {
  let respuesta = [];
  palabras.forEach(function cb(n, i, array) {
    if (array[i].length > longitud) {
      respuesta.push(array[i]);
    }
  })

  return respuesta;
}


// console.log(filtrarPorLongitud(4,['dia','remolacha',
// 'azul','sorpresa','te','verde',]))


//EJERCICIO 13: RECORTAR

// // Definí una función recortar que reciba como argumentos un 
// // número cantidadLetras y un array de strings palabras y devuelva un array 
// // con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras 
// // letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

// //  recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])
// //  ['elef', 'dino' 'choc', 'avio', 'amer']
// //   recortar(1, ['algoritmo', 'bug', 'compilador'])
// //  ['a', 'b', 'c']


let recortar = (cantidadLetras, palabras) => {
  let respuesta = [];
  palabras.forEach(function cb(n, i, array) {
    respuesta.push(array[i].slice(0, cantidadLetras))
  })
  return respuesta
}

// console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))


// // console.log(recortar(1,["dos"]))

// // let arreglito = ["chocolate"]

// // console.log(arreglito[0].slice(0,3))


//EJERCICIO 14: SON IGUALES

/*
Definí una función sonIguales(a, b) que reciba como argumentos dos arrays a y b y devuelva si 
ambos arrays tienen los mismos valores en la misma posición.

 sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])
true
 sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])
false
 sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])
false

*/

const sonIguales = (a1, a2) => {
  return JSON.stringify(a1) === JSON.stringify(a2)
}

// console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]))
// ju

//EJERCICIO 15: OBTENER RESULTADO

/*
Definí una función obtenerResultado que tome por parámetros dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B
 obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])
Ada
 obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9])
Empate
 obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])
Grace

*/

const obtenerResultado = (player1, player2, array1, array2) => {
  let puntosPlayer1 = 0;
  let puntosPlayer2 = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < array2[i]) {
      puntosPlayer2++
    }
    else {
      puntosPlayer1++
    }
  }
  if (puntosPlayer1 > puntosPlayer2) {
    return player1
  }
  else if (puntosPlayer1 < puntosPlayer2) {
    return player2
  }
  return "Empate"
}


//EJERCICIO 16 : JUGAR PIEDRA PAPEL O TIJERAS

/*
Definí una función jugarPiedraPapelTijeras que reciba como argumentos dos strings jugadoraA y 
jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con 
jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la 
ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de 
jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate
 jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) 
Grace
 jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) Empate
 jugarPiedraPapelTijeras(
  'Ada','Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
)
Ada

*/


let valor = (mano) => {
  if (mano === "piedra") return 0;
  if (mano === "tijera") return 1;
  else return 2;
}


let quienGana = (mano1, mano2) => {
  let valor1 = valor(mano1);
  let valor2 = valor(mano2);
  if ((valor2 + 1) % 3 === valor1) {
    return -1;
  }
  else if (mano1 === mano2) {
    return 0
  }
  return 1;

}


const jugarPiedraPapelTijeras = (p1, p2, a1, a2) => {
  let puntajeP1 = 0;

  for (let i = 0; i < a1.length; i++) {
    puntajeP1 += quienGana(a1[i], a2[i])
  }

  if (puntajeP1 > 0) {
    return p1
  }
  else if (puntajeP1 === 0) {
    return "Empate"
  }
  return p2
}


// console.log(jugarPiedraPapelTijeras("jugador1","jugador2",['piedra', 'piedra', 'tijera'],['papel', 'tijera', 'tijera']))
// console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']))
// console.log(jugarPiedraPapelTijeras('Ada','Grace',['piedra', 'papel', 'papel', 'piedra', 'tijera',"tijera"],['papel', 'piedra', 'tijera', 'tijera', 'papel',"papel"]))
// console.log(jugarPiedraPapelTijeras("piedra", "papel"))
// console.log(jugarPiedraPapelTijeras("tijera", "papel"))
// console.log(jugarPiedraPapelTijeras("papel", "papel"))
// console.log(jugarPiedraPapelTijeras("piedra", "piedra"))
// console.log(jugarPiedraPapelTijeras("tijera", "piedra"))
// console.log(jugarPiedraPapelTijeras("papel", "piedra"))
// console.log(jugarPiedraPapelTijeras("piedra", "tijera"))
// console.log(jugarPiedraPapelTijeras("tijera", "tijera"))
// console.log(jugarPiedraPapelTijeras("papel", "tijera"))

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////               ///////////////////////////////////////////
///////////////////////////////////////////     BUCLES    ///////////////////////////////////////////
///////////////////////////////////////////               ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



//EJERCICIO 1: OBTENER ÍNDICE

/*
Definí una función obtenerIndice que reciba como argumento un valor cualquiera valor y un array cualquiera
array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

 obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])
2
 obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])
-1

*/

const obtenerIndice = (valor, array) => {
  return array.indexOf(valor)
}

// SOLUCION (sin método)

/*const obtenerIndice = (valor,array) => {
  for ( let i=0; i<array.length; i++) {
    if (array[i] === valor) {
      return i
    }
  }
  return -1
}
*/

// EJERCICIO 2: REPETIR
/*
Definí una función repetir que tome un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces. 

 repetir('lovelace', 3)
['lovelace', 'lovelace', 'lovelace']
 repetir('a', 5)
['a', 'a', 'a', 'a', 'a']
 repetir('html', 0)
[]
*/

const repetirLetras = (palabra, cantidad) => {
  let arregloRepetido = [];
  for (let i = 0; i < palabra.length; i++) {
    for (let j = 0; j < cantidad; j++) {
      arregloRepetido.push(palabra[i])
    }
  }
  let stringRepetido = arregloRepetido.toString()
  return stringRepetido.replace(/,/g, "");
}

// console.log(repetirLetras('hola', 2))


//EJERCICIO 3: SUMAR IMPARES HASTA

/*
Definí una función sumarImparesHasta que reciba como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

 sumarImparesHasta(5) // (1 + 3 + 5 = 9)
9 
 sumarImparesHasta(13)
49
 sumarImparesHasta(47)
576

*/

const sumarImparesHasta = (n) => {
  let cantidadDeImpares = (n + 1) / 2;
  return Math.pow(cantidadDeImpares, 2)
}

// EJERCICIO 4: CREAR CUENTA REGRESIVA

/*
Definí una función crearCuentaRegresiva que reciba como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

 crearCuentaRegresiva(3)
[3, 2, 1, 0]
 crearCuentaRegresiva(5)
[5, 4, 3, 2, 1, 0]
*/

const crearCuentaRegresiva = (inicio) => {
  let hastaAbajoMami = [inicio,];
  while (inicio > 0) {
    inicio--
    hastaAbajoMami.push(inicio)

  }
  return hastaAbajoMami
}

//EJERCICIO 5: INVERTIR

/*
Definí una función invertir que tome por parámetro un array array y que devuelva un array con 
los mismos valores pero en orden invertido.

 invertir([1, 2, 3]) 
[3, 2, 1]
 invertir([5, 7, 99, 34, 54, 2, 12])
[12, 2, 54, 34, 99, 7, 5]

*/

const invertir = (array) => {
  let invertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    invertido.push(array[i])
  }
  return invertido
}

//EJERCICIO 6: REMOVER DUPLICADOS

/*
Definí una función removerDuplicados que tome por parámetros un array array y que devuelva un 
array con los mismos valores de array pero sin valores duplicados.

 removerDuplicados([1, 1, 1])
[1]
 removerDuplicados([1, 1, 2, 2, 3, 3])
[1, 2 ,3]
 removerDuplicados([5, 23, 8, 5, 5, 44, 23])
[5, 23 ,8, 44]

*/

const removerDuplicados = (array) => {
  let sinRepetir = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      sinRepetir.push(array[i])
    }
  }
  return sinRepetir

}

//EJERCICIO 7: REPETIR LETRAS
/*
Definí una función repetirLetras que reciba como argumento un string palabra y un número entero 
cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

 repetirLetras('hola', 2)
'hhoollaa'
 repetirLetras('ada', 3)
'aaadddaaa'
 repetirLetras('ah!', 5)
aaaaahhhhh!!!!!'
 repetirLetras('basta', 1)
'basta'
// */

// const repetirLetras = (palabra, cantidad) => {
//   let answer = "";
//   for (let i=0; i<palabra.length; i++) {
//     answer = answer.concat(palabra[i].repeat(cantidad));
//   }
//   return answer
// }

//OTRA SOLUCION
/*const repetirLetras = (palabra, cantidad) => {
  let arregloRepetido = [];
  for (let i=0; i<palabra.length; i++) {
    for (let j=0; j<cantidad; j++) {
      arregloRepetido.push(palabra[i])
    }
  }
  let stringRepetido = arregloRepetido.toString()
  return stringRepetido.replace(/,/g,"");
}*/

//EJERCICIO 8: CAPITALIZAR PALABRAS

/*

Definí una función capitalizarPalabras tome un string y devuelva un string donde cada palabra está capitalizada (con la primera letra mayúscula). Dejá las demás letras como están.

 capitalizarPalabras('Esto es un título')
'Esto Es Un Título'
 capitalizarPalabras('había una vez')
'Había Una Vez'
 capitalizarPalabras('OMG')
'OMG'
*/


const capitalizarPalabras = (string) => {
  let answer = "";
  let stringSeparado = string.split([" "])
  stringSeparado.forEach(function makeItCapital(element) {
    let primerLetra = element.charAt(0).toUpperCase();
    let restoPalabra = element.slice(1);
    answer = answer + " " + primerLetra + restoPalabra;
  });
  return answer.slice(1);
}

// console.log(capitalizarPalabras("hola mundo como estas"))

//EJERCICIO 9: SUMAR SECCIÓN

/*
Definí una función sumarSeccion que reciba como argumento un array de números enteros array, 
un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números 
de array empezando a contar desde el ítem con índice comienzo.

 sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3)
8 //(2 + 2 + 4 = 8)
 sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4)
37 //(4 + 3 + 10 + 20 = 37)
 sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1)
10
*/


const sumarSeccion = (array, primerNumero, cantidad) => {
  let arrayCortado = [];
  let suma = 0;
  for (let i = primerNumero; i < array.length; i++) {
    let prueba = arrayCortado.push(array[i])
  }

  for (let j = 0; j < cantidad; j++) {
    suma += arrayCortado[j];

  }
  return suma
}

// console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3))
// console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4))
// console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1))


//EJERCICIO 10: ES SUBCONJUTO

/*
Definí una función esSubconjunto que tome por parámetro dos arrays, subconjunto y conjunto, y devuelva si subconjunto 
es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.

 esSubconjunto([1], [1, 2, 3])
true
 esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5])
true
 esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49])
true
 esSubconjunto([1, 2, 3], [1, 2])
false
 esSubconjunto([1], [2, 3, 4])
false

*/


const esSubconjunto = (subconjunto, conjunto) => {
  let suma = 0;
  if (subconjunto.length > conjunto.length) {
    return false
  }

  else if (subconjunto.length <= conjunto.length) {
    for (let i = 0; i < subconjunto.length; i++) {
      for (let j = 0; j < conjunto.length; j++) {
        if (subconjunto[i] === conjunto[j]) {
          suma++
        }
      }
    }
  }
  return (suma === subconjunto.length)
}




// console.log(esSubconjunto([1], [1]))
// console.log(esSubconjunto([1], [ 2]))
// console.log(esSubconjunto([27], [27, 8, 27, 49]))
// console.log(esSubconjunto([2], [1, 2]))
// console.log(esSubconjunto([1], [2, 3, 4]))


//EJERCICIO 11: TIENE BLOQUE

/*
Definí una función tieneBloque que tome por parámetro un array array y devuelva si dicho array
 tiene un bloque de 3 o más ítems consecutivos idénticos.

 tieneBloque([1, 2, 3])
false
 tieneBloque([1, 1, 1, 2, 3])
true
 tieneBloque([1, 2, 3, 3, 3])
true
 tieneBloque([1, 2, 3, 3, 3, 8])
true
 tieneBloque([1, 2, 2, 3, 3, 4])
false

*/


const tieneBloque = (array) => {
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] === array[i + 1] && array[i] === array[i + 2])
      return true
  }
  return false;
}

// console.log(tieneBloque([1, 2, 3]))

// console.log(tieneBloque([1, 1, 2, 2, 3,1]))

// console.log(tieneBloque([1, 2, 3, 3, 3]))

// console.log(tieneBloque([1, 2, 3, 3, 3, 8]))

// console.log(tieneBloque([1, 2, 2, 3, 3, 4]))

// console.log(tieneBloque([1, 2, 2, 3, 3, 3]))



//EJERCICIO 12: ES PALINDROMO


/*
Definí una función esPalindromo que tome una palabra y devuelva si dicha palabra
es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha  que de derecha a izquierda .

 esPalindromo('ada')
true
 esPalindromo('reconocer')
true
 esPalindromo('mama')
false
 esPalindromo('javascript')
false

*/


const esPalindromo = (palabra) => {
  let suma = 0;

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === palabra[(palabra.length - 1 - i)]) {
      suma++
    }
  }
  return (suma === palabra.length)
}


// // console.log(esPalindromo("ada"))
// console.log(esPalindromo("ada"))
// console.log(esPalindromo("reconocer"))
// console.log(esPalindromo("hola"))
// console.log(esPalindromo("menem"))


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////                ///////////////////////////////////////////
///////////////////////////////////////////     MATRICES   ///////////////////////////////////////////
///////////////////////////////////////////                ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//EJERCICIO 1: OBTENER NÚMERO MAYOR


// Definí una función obtenerNumeroMayor que tome por parámetro un array 2d de números matriz
//  y devuelva el mayor número de dicha matriz.

//  obtenerNumeroMayor([[2, 7, 12, 1],[8, 23],
// [9, 45, 7],[22, 3, 24, 4],]) 
// 45

let obtenerNumeroMayor = (array) => {
  let comparador = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > comparador) {
        comparador = array[i][j]
      }
    }
  }
  return comparador
}

// console.log(obtenerNumeroMayor([[2, 7, 12, 1],[8, 23],[9],[22, 3, 4],]))

//EJERCICIO 2: SUMAR

/*
Definí una función sumar que reciba una matriz de números  y devuelva la suma de todos los números de dicha matriz.

 sumar([[4, 5],[2, 7, 1],[8, 10],])
37
*/

let sumar = (array) => {
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      acumulador += array[i][j]

    }
  }
  return acumulador
}

// console.log(sumar([[4, 5],[2, 7, 1],[8, 10],]))




//EJERCICIO 3: ES MATRIZ CUADRADA


/*Definí una función esMatrizCuadrada que reciba como argumento un array 2d matriz y
 devuelva si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas.

 esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],]) 
false

 esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],])
true
*/


let esMatrizCuadrada = (array) => {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    if (array.length === array[i].length) {
      acc++
    }
  }
  return array.length === acc
}

// console.log(esMatrizCuadrada([[4, 5],[2, 7]]) )
// // false

// console.log(esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],]))
// // true





// EJERCICIO 4: GENERAR GRILLA
/*

/*Definí una función generarGrilla que tome por parámetro un número entero filas, 
un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, 
donde cada ítem de la matriz es un ítem aleatorio de items.

 generarGrilla(2, 3, [1, 2]) 
  [
    [1, 1, 2], 
    [2, 1, 1]
  ]

 generarGrilla(3, 3, ['a', 'b', 'c'])
  [
    ['c', 'c', 'a'], 
    ['c', 'a', 'a'], 
    ['b', 'a', 'b']
  ]



  colours[Math.floor(Math.random() * colours.length)] , obtendrías un elemento aleatorio del array colours.
  */

let generarGrilla = (filas, columnas, array) => {
  let grilla = [];
  for (let i = 0; i < filas; i++) {
    let subArreglo = [];


    for (let j = 0; j < columnas; j++) {
      subArreglo.push(array[Math.trunc(Math.random()*j)])

    }
    grilla.push(subArreglo)


  }
  return grilla
}

console.log(generarGrilla(1,2,['a', '3', 'hola']))



// console.log(Math.trunc(Math.random()*6))

// console.log(generarGrilla(10,0,[1,2]))


//EJERCICIO 5: GENERAR MATRIZ ESCALONADA


// Definí una función generarMatrizEscalonada que reciba como argumento un número
// entero filas y devuelva un array 2d con la cantidad de filas filas, 
// donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. 
// Los ítems de la matriz deben ser 0.

//  generarMatrizEscalonada(3) 
//   [
//     [0], 
//     [0, 0], 
//     [0, 0, 0]
//   ] 
//  generarMatrizEscalonada(5)  
//   [
//     [0], 
//     [0, 0], 
//     [0, 0, 0], 
//     [0, 0, 0, 0], 
//     [0, 0, 0, 0, 0]
//   ] 


const generarMatrizEscalonada = (filas) => {
  let matrizEscalonada = [];
  for (let i = 1; i < filas + 1; i++) {
    let subArreglo = [];
    for (let j = 0; j < i; j++) {
      subArreglo.push(0)
    }
    matrizEscalonada.push(subArreglo);
  }
  return matrizEscalonada
}

// console.log(generarMatrizEscalonada(4))

//EJERCICIO 6: OBTENER FILA MÁS LARGA

// Definí una función obtenerFilaMasLarga que reciba como argumento un array 2d matriz
//  y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud, 
//  debe devolver el primero de ellos.

//  obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])
// [3, 7, 5]
//  obtenerFilaMasLarga([[1], [3, 7], [6, 8]])
// [3, 7]


let obtenerFilaMasLarga = (matriz) => {
  let matrizMayor = []
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i].length > matrizMayor.length) {
      matrizMayor = matriz[i]
    }

  }
  return matrizMayor;
}

// console.log(obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]))


//EJERCICIO 7: OBTENER CANTIDAD

/* 

Definí una función obtenerCantidad que tome un valor cualquiera item y una matriz items y 
devuelva la cantidad de veces que item se encuentra dentro de items.

obtenerCantidad('🍎', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
])
4
*/

let obtenerCantidad = (valor, matriz) => {
  let acumulador = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === valor) {
        acumulador++
      }
    }
  }
  return acumulador
}


// console.log(obtenerCantidad('🍎', [['🍎', '🍏', '🍌', '🍌'],['🍌'],['🍎', '🍏', '🍌'],['🍏', '🍌', '🍎', '🍌'],]))

//EJERCICIO 8: CONVERTIR EN MATRIZ

/*

Definí una función convertirEnMatriz que reciba como argumentos un número entero 
columnas y un array array y devuelva una matriz con los items de array y la cantidad de 
columnas columnas por fila. La última fila puede quedarse con menos columnas de las indicadas 
si no hay más ítems que agregar.

 convertirEnMatriz(2, [1, 2, 3, 4])
[[1, 2], [3, 4]]
 convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7])
[[1, 2, 3], [4, 5, 6], [7]]
 convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]


*/

/*
//PRIMER SOLUCIÓN


let convertirEnMatriz = (columnas, array) => {
  let matrizResultado = [];

  while (array.length >= columnas) {
    matrizResultado.push(array.splice(0, columnas))
  }
  if (array.length > 0) {
    matrizResultado.push(array.splice(0, array.length))
  }

  return matrizResultado
}

*/


let convertirEnMatriz = (columnas, array) => {
  let matrizResultado = [];
  while (array.length > 0) {
    matrizResultado.push(array.splice(0, columnas))
  }

  return matrizResultado
}



// console.log(convertirEnMatriz(2, [1, 2, 3, 4]))
// console.log(convertirEnMatriz(4, [5, 3, 7, 9]))
// console.log(convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 5]))
// console.log(convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7]))



///EJERCICIO 9 : Consultar Tabla

/*
Tenemos una matriz que tiene la estructura de una tabla , en donde el primer array contiene el nombre de las columnas, y los siguientes array son las filas donde se ingresan los registros con sus datos en el orden de las columnas. Por ejemplo, si el índice 1 es la columna nombre todas las demás "filas" deben tener el dato nombre en esa posición. La tabla siempre tiene una columna id, que es un identificador único para cada registro (un número incremental).

const tabla = [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ada', 33, 'ada@gmail.com'],
  [2, 'Grace', 45, 'grace@gmail.com'],
]
Definí la función consultarTablaque tome por parámetro un número id, un string columna, y una matriz tabla y que retorne el valor del dato de la columna dada para el registro con el id indicado.

 consultarTabla(2, 'nombre', tabla)
'Grace'
 consultarTabla(1, 'email', tabla)
'ada@gmail.com'

*/

const tabla = [
  ['id', 'nombre', 'edad', 'email'],
  [1, 'Ada', 33, 'ada@gmail.com'],
  [2, 'Grace', 45, 'grace@gmail.com'],
]



let consultarTabla = (id, categoria, tabla) => {
  for (let i = 0; i < tabla[0].length; i++) {
    if(tabla[0][i] === categoria) {
      return tabla[id][i]
    }
  }
}


// console.log(consultarTabla(2, 'nombre', tabla))


///EJERCICIO 10: Tiene Bloque HOrizontal

/*
Definí una función tieneBloqueHorizontal que reciba como argumento un array 2d matriz y devuelva si dicha matriz tiene un bloque horizontal de 3 o más ítems consecutivos idénticos.

 tieneBloqueHorizontal([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
])
false

 tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [1, 2, 2, 2],
  [1, 2, 4, 5],
])
true

*/

let tieneBloqueHorizontal = (matriz) => {
 
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length-2; j++) {
      if (matriz[i][j] === matriz[i][j+1] && matriz[i][j] === matriz[i][j+2]) {
        return true
      }
     
    }
  }
  return false
  
}


// console.log(tieneBloqueHorizontal([[1, 2, 1, 4],[1, 2, 1, 2],[1, 1, 1, 5],]))

// console.log(tieneBloqueHorizontal([[2, 2, 2],[1, 1, 1],[1, 1, 1],]))
// console.log(tieneBloqueHorizontal([[1, 1, 2],[3, 3, 4],[5, 5, 6],]))
// console.log(tieneBloqueHorizontal([[1, 1, 2, 1, undefined], [1, 1, 2, 1, 1], [1, 1, 2, 2, 1]]))
// console.log(tieneBloqueHorizontal([[undefined]]))




//EJERCICIO 11: Tiene Bloque Vertical 

/*
Definí una función tieneBloqueVertical que tome una matriz y devuelva si la misma tiene un bloque vertical  de 3 o más ítems consecutivos idénticos .

 tieneBloqueVertical([
  [4, 2, 3],
  [1, 5, 3],
  [1, 2, 3],
])
true

 tieneBloqueVertical([
  [1, 2, 3, 4],
  [7, 2, 9, 2],
  [1, 8, 4, 5],
]) 
false

*/


let tieneBloqueVertical = (matriz) => {
  let acumulador = 0;
  for (let j = 0; j < matriz[0].length; j++) {
    for (let i = 0; i < matriz.length; i++) {
      if (matriz[i][j] === matriz[i][j+1]) {
      acumulador++
      }
     
    }
    
  }
  return acumulador >=2
 
}


// console.log(tieneBloqueVertical([
//   [1, 2, 3, 2],
//   [7, 2, 9, 2],
//   [1, 8, 4, 2],
// ]) )

// console.log(tieneBloqueVertical([
//   [1, 1, 1],
//   [1, 5, 3],
//   [1, 2, 3],
// ]))


