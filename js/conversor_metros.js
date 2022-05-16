/*CONVERSOR DE PILETAS Y METROS:

Para que el usuario pueda colocar cuántas piletas corresponden a tantos metros, en una pileta de 20m de largo,
o bien en una pileta de 25m. de largo.

1- lo primero es preguntarle al usuario la cantidad de metros a convertir en piletas, ej:1000 metros.
2- luego preguntar, en piscina de qué largo? 20 o 25m?
3- se hace la cuenta (50 piletas si es una de 20m o 40 piletas, si es una de 25m.)
y arroja el resultado en alert/write
*/

let metros= Number(prompt (" ¿Cuántos metros quieres nadar? Ejemplo: 500 o 1800 o 2000"))
let largo= Number(prompt (" ¿De qué largo es la pileta? Coloque 20 o 25 o 50"))

const pileta =(metros, largo) =>{
    let total = metros / largo;
    document.write (" CONVERSOR DE METROS A PILETAS:" + "<br>" + 
                    " - Metros a nadar: " + metros + " metros." + "<br>" + 
                    " - Largo de la pileta: " + largo + " metros." + "<br>" + 
                    " El total de piletas es de: " + total + " piletas");
}
pileta (metros, largo);

//conversor de piletas a metros, usando otra funcion similar (pero ahora multiplica)

const metro =(piletas, largo) =>{
    let total= piletas*largo;
    document.write ("<br>"+"<br>" + " CONVERSOR DE PILETAS A METROS: " + "<br>" + 
                    " - Piletas a hacer: " + piletas + "<br>" + 
                    " - Largo de la pileta: " + largo + " metros." + "<br>" + 
                    " El total de metros es de: " + total+ " metros.");
}
let piletas= Number(prompt ("Cuántas piletas quieres hacer?"))

metro (piletas, largo);
