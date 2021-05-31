// PLANIFICADOR DE VIAJES

/*Necesitas planificar un viaje por carretera. Viaja a una velocidad promedio de 40 millas por hora .
Dada una distancia en millas como entrada (el código para tomar la entrada ya está presente),
envíe a la consola el tiempo que le tomará recorrerlo en minutos.*/

function main() {
    var distance = parseInt(readLine(), 10);
    //your code goes here
    var velocity = 40
    var time = distance/velocity
    var minutes = time * 60
    console.log(minutes)
    
}