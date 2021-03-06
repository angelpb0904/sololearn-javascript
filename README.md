# RESPUESTAS DE LOS QUIZ DEL CURSO DE JAVASCRIPT EN SOLOLEARN.

## Modulo #1 Descripcion General.

### Complete los espacios en blanco para generar "JS is cool!" a la consola:

- console.log("JS is cool!");

### Declare una variable llamada x, asígnele el valor 42 y envíela a la consola.
```
 x = 42; 
 console.log(x);
```
### ¿Cuál es el resultado de este código? // x = 8; x = 2; // x = 3; console.log (x);

- 2

### Reorganizar para formar un código JavaScript válido que declare una variable y la envíe a la consola.
```
<script>
nombre = "James";
console.log(nombre);
</script>
```
## Modulo #2 Conceptos Basicos.

### ¿Cuáles de estos nombres son aceptables para las variables de JavaScript?

- _module
- firtsNumber

### Complete los tipos de datos de los datos que se muestran a continuación en el campo de comentarios:

- 12 // numero
- "Algun texto" // string
- cierto // booleano

### ¿Cuál es el resultado de la expresión var1 && var2, si var1 = true y var2 = false?

- Falso

## Modulo #3 Condiciones y Bucles.

### ¿Cuál es el resultado de este código? var x = 0; mientras (x <6) {x ++; } document.write (x);

- 6

### Complete las palabras clave correctas para probar las condiciones:
```
switch(día de la semana) {

  caso 1:

  caso 2:

  caso 3:

  caso 4:

  caso 5:

    document.write ("Días laborables");

    
break
;

  caso 6:

    document.write ("sábado");

    
break
;

  defecto:

    document.write ("Hoy es domingo");

    rotura;

}
```
### Complete las palabras clave correctas para componer un bucle:
```
do
{ document.write(i);
    i++;
}

while
 (i < 10);
 ```

## Modulo #4 Funciones.

### ¿El siguiente código dará como resultado qué valor?

```
function test(number)
{
   while(number < 5) {
      number++;
   }
   return number;
}
alert(test(2));

```
- 5

### ¿Cuál es el resultado de la siguiente expresión?
```
function multNmbrs(a, b) {
    var c = a*b;
}
multNmbrs(2, 6);
```
- Nada

### Complete los nombres correspondientes para los cuadros de diálogo integrados:

- prompt es para obtener información del usuario;

- alert es para mostrar un mensaje en un cuadro;

### Complete los espacios en blanco para calcular el máximo de los parámetros:
```
function max(a, b) {
 
if(a >= b)

    return a;\

else

    return b;

}
```

### ¿Cuál es la sintaxis correcta para hacer referencia a un script externo llamado "script.js"?

```<script src = "script.js">```

### ¿Qué alerta se mostrará en la pantalla?
```
function test(a, b) {
  if(a > b) {
    return a*b; 
} else {
     return b / a; 
    }
}
alert(test(5, 15));
```
- 3

## Modulo #5 Objetos.

### Las propiedades de un objeto son similares a las variables; los métodos son similares a:

- funciones.

### ¿Cuál es el resultado de la siguiente expresión?
```
var myString = "abcdef";
document.write(myString.length);
```
- 6

### Complete la expresión para crear un constructor de objetos, teniendo en cuenta que "altura" y "peso" son propiedades y "calcular" es un método para el objeto dado:
```
function mathCalc (height, weight) {

  this.height = height;

  this.weight = weight;

  this.sampleCalc = calculate;
}
```
## Modulo #6 Objetos Centrales,

### Dada la matriz a continuación, complete la expresión para recibir una alerta con "manzana".
```
var fruit = new Array ("pera", "naranja", "manzana", "pomelo");

alerta (frutas[2]);
```

### ¿Cuál es el resultado de la siguiente expresión? alerta (Math.sqrt (36));

- 6

### Complete los espacios en blanco para mostrar los minutos actuales:
```
var date = new Date();

alert(date.getMinutes());
```
### ¿Cuál es el resultado de este código?
``` 
var arr = new Array("a", "b", "c"); 
alert(arr[1]);
```
- b

### Arrastre y suelte las opciones siguientes para recibir una alerta con el valor de la constante PI.
```
alert(Math.PI);
```
## Modulo #7 DOM y Eventos.

### Complete los espacios en blanco para cambiar el contenido de todas las etiquetas de párrafo de la página a "SoloLearn".
```
var arr = 
document.getElementsByTagName("p");

for(var x=0; x<arr.length; x++) 
{
   arr[
x
].innerHTML="SoloLearn";

}
```
### ¿Cuál es el resultado de este código?
```
<div id="test">
<p>some text</p>
</div>
<script>
var el=document.getElementById("test");
alert(el.hasChildNodes());
</script>
```
- true

### Arrastre y suelte las opciones siguientes para cambiar el color del párrafo con id = "p2" a rojo.
```
<script>
var d = document.getElementById("p2");
d.style.color= "red";
</script>
```
### ¿Puede manejar varios eventos en el mismo elemento HTML?
- Si

### Complete los espacios en blanco para alertar un mensaje cuando se hace clic en el botón.
```
<button onclick="msg()">Click me</button>
<script>
function msg() {
    alert("Hi!");
}
</script>
```
### Muestre una alerta cuando el puntero del mouse esté sobre la etiqueta div:
```
<div onmouseover = "alert('Hi!');">

</div>
```
## Modulo #8 ECMAScript 6.

### ¿Cuál de las siguientes no es una de las nuevas características de ES6?
- Hoisting

### Complete los espacios en blanco para declarar un número constante y una función de flecha calc.
```
const num = 5;
const calc = (x, y, z = num) =>
 {
  return x + y + z;
}
```
### Complete los espacios en blanco para que la variable arr3 tenga el siguiente aspecto: [1, 2, 3, 4, 5, 6, 7, 8].
```
const arr1 = [1, 2, 3];

const arr2 = [5, 6, 7, 8];

let arr3 = [...arr1, 4, ...arr2];
```
### ¿Cuál es la salida del siguiente código? 
```
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];
const func = (...rest) => {
  console.log(rest.length);
}
func(...arr1);
func(...arr2);
```
- 5 6

### ¿Cuál es el resultado de este código?
```
const square = num => num * num;
console.log(square(6) + 6);
```
- 42

### Complete los espacios en blanco para copiar el objeto de usuario al objeto newUser desestructurando las propiedades de nombre y edad. Pase el valor 9999 para la propiedad id.
```
const user = {

  name: 'David',

  age: 28,

  id: 1234

};

let newUser = Object.assign({},

  {name, age} = user,

  {id: 9999});

console.log(newUser);
```
### Complete los espacios en blanco para obtener el siguiente resultado: cero = 0 uno = 1
```
let myMap = new Map();

myMap.set('zero', 0);

myMap.set('one', 1);

for(let [key, value] of myMap) {

  console.log(`${key} = ${value}`);
}
