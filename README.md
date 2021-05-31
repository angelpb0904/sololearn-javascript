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
 {

   document.write(i);

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
