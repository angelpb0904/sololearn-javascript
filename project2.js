// El CARACOL EN EL POZO.

/*El caracol sube 7 pies cada día y retrocede 2 pies cada noche.
¿Cuántos días tardará el caracol en salir de un pozo con la profundidad dada? */

function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    var dia = 0;
    var total = 0;
    while(total<depth){
        dia = dia + 1;
        total = total + 7;
        if(total >= depth){
            console.log(dia);
            break;

        }
        total = total - 2;
    }

}
