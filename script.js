/*Asignacion de variables*/

var a = 2;
var b = 2.1;
var d = true;
var c = "Hola a todos";

/*Operaciones basicas*/

var suma = a + b;
var resta = a - b;
var multiplicacion = a * b;
var divicion = a / b;

var restante = a % b;

/* Incrementos o decrementos de forma corta */

suma++;
suma--;

a += 2;
a -= 2;

var totalVentas = 125345845.2;
totalVentas += 23123;

var valorDos = 2;
valorDos /= 2;

var valorTercero = 2;
valorTercero *= 2;

/* Cadenas de caracteres */

var caracteres = "Hola a todos"
var name = "Edinson";
var cadena;
cadena = 'Hola a todos "Esta es una cadena con comillas"';


/* Escapar cadenas de caracteres */

var cadena = "hola a todos \"esta palabra esta dentro de comillas\"";

/* Secuencias de escape 

Código | Resultado
------------------
\'      Comilla simple
\"      Comilla doble
\\      Barra invertida
\n      Linea Nueva
\r      Retorno de Carro
\t      Tabulación
\b      Retroceso
\f      Salto de página
*/

/* Concatenación de cadenas */

var nombreCompleto = "Edinson " + "Corredor";

var nombre = "Edinson";
var apellido = "Corredor";

/* Longitud de una cadena de caracteres */

var cadena = "Abc";
cadena = cadena.length;

/* Notación de corchetes de una cadena */

var lgPro = "Php";
var caracter2 = lgPro[1];

/* Notación de corchetes de una cadena enecimo caracter*/

var lgPro = "Php";
var caracter2 = lgPro[4]; //Si se asigna un valor de indice mayor a la cadena quedara como undefined

/* Notación de corchetes de una cadena ultimo caracter */

var lgPro = "Php";
var longitudCadena = lgPro.length;
var ultimoCaracter = lgPro[longitudCadena - 1];
console.log(lgPro[lgPro.length - 1]);

/*Notación de corchetes de derecha a izquierda */

var cadena = "Python"
var n = 2;
console.log(cadena[cadena.length - n])

/* Inmutabilidad de cadenas de caracteres */

var cadena = "Jola, Mundo";
cadena[0] = "H"; //Error
cadena = "Hola, Mundo";

/*Palabras en blanco*/
/* Concatenar cadenas para crear una sola cadena que muestre cualquier mensaje */

var miSustantivo = "Niño"
var miAdjetivo = "pequeño"
var miVerbo = "camino"
var miAdverbio = "lentamente"

var palabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a su casa";
console.log(palabrasEnBlanco);

/* Arreglos (Arrays) */

var miArreglo = ["Juan", 23, "Colombia", "Casado", true];
console.log(miArreglo)

miArreglo[0] = "Camilo";
console.log(miArreglo);
var notas = [4, 2, 3, 5];

/* Arreglos Anidados */

var miArreglo = [["Juan", 24, "Colombia"], ["Andres", 23, "Colombia"]];
console.log(miArreglo[0]);

var inventario = [["Jean", 23444, "J12"], ["Camisa", 23412, "C12"], ["Tablet", 2113123, "T12"], ["iPhone", 1233123, "i123"]];
console.log(inventario[inventario.length - 1]);

/* Arreglos multidimencionales */

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];  //Para seleccionar elementos de un arreglo anidado hay que seleccionar la cantida de indicides como arreglos anidados existan.

var valor = miArreglo[2][1];
console.log(valor);

/* .push() */ //agregar elementos a un arreglo, metodo .push()

var estaciones = ["Invierno", "Otoño", "Verano"];
estaciones.push("Primavera");
console.log(estaciones);

/* Metodo pop(), remueve el ultimo elemento de un arreglo */

var estacion = estaciones.pop();
console.log(estacion);

/* Metodo .shift(); remueve el primer elemento del arreglo */

estaciones.shift();
console.log(estaciones);

/* Metodo unshift(); agrega un elemento al inicio del arreglo */
estaciones.unshift("Invierno");
console.log(estaciones);

/* Lista de compras, arreglos multidimencional */

var listaCompras = [["Cereal", 4], ["Gaseosa", 2], ["Arina", 2], ["Leche", 2], ["Manzana", 5]];
console.log("Voy a comprar " + listaCompras[0][1] + " Unidades de: " + listaCompras[0][0]);

/* Funciones */

function suma(numero1, numero2) {
    var sumas = numero1 + numero2;
    console.log(sumas);
}

function multiplicacion(numero1, numero2) {
    var multiplicacion = numero1 * numero2;
    console.log(multiplicacion)
}

suma(2, 4);
multiplicacion(3, 3);

/* Argumentos */

function concatenarCadenas(cadena1, cadena2, cadena3) {
    var cadenaFinal = cadena1 + " " + cadena2 + " " + cadena3;
    console.log(cadenaFinal);
}

concatenarCadenas("Hola", "a", "todos");

/* Ambito Global */

var varGlobal = 6;

function miFuncion() {
    console.log(varGlobal);
    var resta = "Hola a todos" //Variable que solo se usa en la funcion y no se puede usar en otro lugar
}

var miNombre = "Nora";

function mostrarMiNombre() {
    var miNombre = "Gino";
    console.log(miNombre);
}

mostrarMiNombre();
console.log(miNombre);

/* Retornar valores */

function retornarValor(a, b) {
    return a + b;
}

console.log(retornarValor(5, 2));

/* Undefined */

function sumars(a, b) {
    console.log(a + b);
}

console.log(sumar(2, 2));  //Por defecto las funciones returnan un valor Undefined

/* Asignar valor retornado a una variable */

function sumar(a, b) {
    return a + b;
}

var resultadoSuma = sumar(5, 3);
console.log(resultadoSuma);

/* Colas */

function proximoEnFila(arreglo, elemento) {
    arreglo.push(elemento);
    var removido = "El elemento removido fue: " + arreglo.shift();
    return removido;
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnFila(miArreglo, 6));
console.log("Despues: " + JSON.stringify(miArreglo));

/* Valores Booleanos */

true - false

/* Operador de igualdad */

//No sirve para comparar arreglos dado que cada arreglo representa un objeto diferente en el sistema. 

var num1 = 2;
var num2 = 3;

if (num1 == num2) {
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

/* Operador de igualdad estricta */

//Solo compara el valor
console.log(9 == 9);
console.log(9 == "9");

//Compara el valor y el tipo de dato
console.log(9 === "9");
console.log(9 === 9);

/* Operador de desigualdad */

var a = 2;
var b = "2";

console.log(a != b);

/* Operador de desigualdad estricta */

console.log(a !== b); //Compara el valor pero tambien el tipo de dato

/* Operadores logicos */

/* And */

console.log((a == b) && (b === a)); //Es verdader siempre y cuando se cumplan las dos condiciones

/* Operador Or */

console.log(a == b || b === a); //Devuelve true cuando una de las dos condicines es verdadera;

/* Operador NOT */ //Se agrega ! para negar el valor de la condicion

console.log(!true);
console.log(!false);

var a = 8;

console.log(!(a > 3));

/* Sentencias condicionales */

var a = 5;
var b = 6;

if (a > b) {
    console.log("El valor de a es mayor que el valor b");
} else {
    console.log("El valor de b es mayor");
}

var estacion = "Invierno";

if (estacion == "Invierno") {
    console.log("Si, me encanta el " + estacion);
}

/* Encadenar sentencias if else */

function calcularImc(imc) {
    if (imc < 15) {
        console.log("El indice de masa corporal es debajo de su peso");
    } else if (imc <= 24) {
        console.log("El indice de masa corporal es normal");
    } else {
        console.log("Esta en sobrepeso");
    }
}

calcularImc(2);

/* Codigo de Golf */

function juegoGolf(par, golpes) {
    if (golpes == 1) {
        return "Hole-in-one";
    } else if (golpes <= (par - 2)) {
        return "Eagle";
    } else if (golpes == (par - 1)) {
        return "Birdie";
    } else if (golpes == par) {
        return "Par";
    } else if (golpes == (par + 1)) {
        return "Bogey";
    } else if (golpes == (par + 2)) {
        return "Double Bogey";
    } else if (golpes >= (par + 3)) {
        return "Go Home!";
    }
}

console.log(juegoGolf(4, 7));

/* Sentencias Switch */

function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(4));

/* Sentencias Switch: Opción predeterminada */

function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Ingles";
            break;
        default:
            idioma = "Frances"
            break;
    }
    return idioma;
}

console.log("El idioma actual es: " + seleccionarIdioma());

/* Sentencia Switch: Multiples casos */

function clasificarVolumen(valorVolumen) {
    var volumen;

    switch (valorVolumen) {
        case 1:
            volumen = "Bajo";
            break;
        case 2:
            volumen = "Medio";
            break;
        case 3:    // -> Se agregan n+1 casos que se quieren evaluar;
        case 4:
            volumen = "Alto";
            break;
        default:
            volumen = "Apagado";
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(5));

/* Retornar Valores Booleanos */

function esMenorQue(valor1, valor2) {

    if (valor1 < valor2) {
        return true;
    } else {
        return false;
    }

    return valor1 < valor2;  // -> es una forma mas compacta de escribir el condicional de arriba;
}

console.log(esMenorQue(2, 3));

/* Patrón de retorno anticipado */

function miFuction() {
    console.log("Hola");
    return "Mundo";
    console.log("JavaScript"); // -> Solo se ejecuta el codigo hasta return
}

console.log(miFuction());

function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined;  // -> Es útil cuando queremos detener el programa con una condición específica como es   el caso de las raíces negativas
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-4));

/* Mini proyecto conteo de cartas */

var conteo = 0;

function contarCartas(carta) {
    var decision;

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
    }

    if (conteo > 0) {
        decision = "Apostar";
    } else {
        decision = "Esperar";
    }

    return conteo + " " + decision;
}

console.log(contarCartas(2));
console.log(contarCartas("J"));
console.log(contarCartas(2));
console.log(contarCartas("K"));
console.log(contarCartas(10));

/* Objetos */

var miGato = {
    "nombre": "MazeKeen",
    "edad": 2,
    "peso": 4,
    "raza": "Criollo"
};

console.log(miGato.nombre);

/* Acceder a las propiedades -- notacion de corchetes */

var miCuaderno = {
    "color": "Rojo",
    "categoria": 3,
    "numero de paginas": 200,  // -> se puede usar camelCase para evitar tener propiedades separadas y poder utilizar notación de puntos.
    "numero de hojas": 100
};

console.log(miCuaderno["numero de paginas"]);

/* Acceso a propiedades de variables */

var resultados = {
    1: "Nora",
    2: "Gino",
    3: "Edinson"
};

var posicion = 3;
console.log(resultados[posicion]);

/* Actualizar propiedades */

var miObjeto = {
    "nombre": "Edinson",
    "apellido": "Corredor",
    "propiedades": ["Bicicleta", "Computador"]
};

miObjeto.nombre = "Kamila"; //-> Asignar o actualizar el valor del objeto
console.log(miObjeto.nombre);

miObjeto.propiedades.push("Motocicleta"); //-> para quitar podemos usar pop();
console.log(miObjeto.propiedades);

miObjeto.propiedades[1] = "Casa"; //-> Actualizar un valor especifico del arreglo
console.log(miObjeto.propiedades);

/* Agregar propiedades a los objetos */

var miObjeto = {
    "nombre": "Edinson",
    "apellido": "Corredor",
    "propiedades": ["Bicicleta", "Computador"]
};

miObjeto.gustos = "Videojuegos"; //-> Se agrega con la notacion de punto y corchetes adjuntando el nombre de la nueva propiedad y su valor. 
console.log(miObjeto);

/* Eliminar propiedades de un objeto */

delete miObjeto.gustos;
console.log(miObjeto);

/* Objetos para busquedas */

function buscarElementoQuimico(simbolo) {

    //-> Este bloque de codigo se puede reemplazar por un objeto para realizar codigo mas compacto.

    var elementoQuimico = "";

    switch (simbolo) {
        case "AL":
            elementoQuimico = "Aluminio";
            break;
        case "S":
            elementoQuimico = "Azufre"
            break;
        case "Cl":
            elementoQuimico = "Cloro"
            break;
    };

    return elementoQuimico

    //-> Se puede reemplazar de esta manera

    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro"
    };

    return simbolosQuimicos[simbolo];

};

console.log(buscarElementoQuimico("Al"));


/* Verificar propiedades del objeto */

var miCuaderno = {
    "color": "Verde",
    "categoria": 3,
    "precio": 3200
}

console.log(miCuaderno.hasOwnProperty("color"));

function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "La propiedad: " + propiedad + " es; " + obj[propiedad];
    } else {
        return "El objeto no tiene la propiedad: " + propiedad;
    }
}

console.log(verificarPropiedad(miCuaderno, "precio"));

/* Objetos complejos */

var ordenesDePizzas = [
    {
        "tipo": "Margarita",
        "tamaño": "Individual",
        "precio": 16755,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "Cuatro quesos",
        "tamaño": "Familiar",
        "precio": 32856,
        "toppings": [
            "extra queso",
            "pimenton",
        ],
        "paraLlevar": false
    },
    {
        "tipo": "Napolitana",
        "tamaño": "Familiar",
        "precio": 35856,
        "toppings": [
            "piña"
        ],
        "paraLlevar": true
    }
];

console.log(ordenesDePizzas[2].toppings);

/* Objetos anidados */

var miReceta = {
    "descripcion": "Mi postre favorito",
    "costo": 16000,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharada",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};

console.log(miReceta.ingredientes.masa.agua);
console.log(miReceta["ingredientes"]["masa"]["agua"]);

/* Arreglos anidados */

var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
]

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);

/* Colección de discos -- Mini proyect */

/*
Tenemos un objeto que representa parte de una colección
de álbunes musicales.

Cada álbum tiene un número de identificación único (id)
asociado a otas propiedades.

No todos los álbumes tienen la información completa.
*/

var coleccionDeDiscos = {
    7853: {
        tituloDeAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin ' Alive"]
    },
    5439: {
        tituloDeAlbum: "ABBA Gold"
    }
}

/*
Define una función actualizarDiscos que tome los siguientes parámetros:
- Discos (el objeto quie representa la colección de discos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la funcióm implementando las siguientes reglas para
modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum
no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor"
a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es
una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum
correspondiente.

-Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna
el valor del parámetro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar ese valor.
 */

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista);

/* Ciclo While */

var i = 0;

while (i < 5) {
    console.log("Hola mundo")
    i++;
};

var miArreglo = [];
var i = 0;

console.log(miArreglo);

while (i < 10) {
    miArreglo.push(i);
    i++;
};

console.log(miArreglo);

var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 35];

while (numeros.length > 4) {
    numeros.pop();
}

console.log(numeros);


/* Ciclo for */

var miArreglo = [];

for (var i = 0; i < 10; i++) {
    miArreglo.push(i);
}

console.log(miArreglo);/*

/* Ciclos for números impares */

var miArreglo = [];

for (var i = 1; i < 20; i += 2) {
    miArreglo.push(i);
}

console.log(miArreglo);

/* Ciclo for contar hacia atras */

var miArreglo = [];

for (var i = 0; i < 20; i += 2) {
    miArreglo.push(i);
}

console.log(miArreglo);

for (var i = miArreglo.length - 1; i >= 0; i--) {
    console.log(miArreglo[i]);
}

function contarPares(arreglo) {
    var totalPares = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            console.log("El numero: " + arreglo[i] + " es un numero par")
            totalPares++;
        } else {
            console.log("El numero: " + arreglo[i] + " no es un numero par")
        }
    }
    return totalPares;
};

console.log(contarPares([3, 7, 9]));

/* Ciclos for anidados */

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < miArreglo.length; i++) {
    console.log("Nueva iteración");
    var arregloAnidado = miArreglo[i];
    console.log("Arreglo: " + arregloAnidado);

    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log("Ciclo anidado");
        console.log("Elemento:")
        console.log(arregloAnidado[j]);
    }
}

/* Ciclos do while */

var x;
x = 1;

do {
    console.log(x);
    x++;
} while (x < 10)


/* Busqueda de perfil */

var contactos = [
    {
        "nombre": "Carlos",
        "apellido": "Corredor",
        "numero": "124578596",
        "gustos": ["Pizza", "Programación"]
    },
    {
        "nombre": "Edinson",
        "apellido": "Corredor",
        "numero": "1002537529",
        "gustos": ["Ejercicio", "Programación"]
    },
    {
        "nombre": "Maria",
        "apellido": "Castañeda",
        "numero": "125421325",
        "gustos": ["Pasta", "Ejercicio"]
    },
    {
        "nombre": "Angel",
        "apellido": "Corredor",
        "numero": "78456821",
        "gustos": ["Carros", "Peliculas"]
    }
];

function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i]["nombre"] === nombre) {
            return console.log(contactos[i][propiedad] || "La propiedad no existe");
        }
    }
    return console.log("El contacto: " + nombre + " no existe");
};

buscarPerfil("Zulma", "apellido");

/* Numeros aleatorios */

function generarFraccionAleatoria() {
    return Math.random();
}

console.log(generarFraccionAleatoria());

/* Numeros enteros aleatorios */

function generarEneteroAleatorio(limiteSuperior) {
    return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEneteroAleatorio(5));

/* Generar aleatorios en un rango especifico */

function rangoAleatorio(limiteInferior, limiteSuperior){
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior +1)) + limiteInferior;
}

console.log(rangoAleatorio(3,8));

/* Función parseInt() */ //-> Convierte cadenas de caracteres a enteros

var numero = "10";
var numero2 = 10;

console.log(numero === numero2);
numero = parseInt(numero);
console.log(numero === numero2);