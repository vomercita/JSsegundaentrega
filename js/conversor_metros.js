/*CONVERSOR DE PILETAS Y METROS:
Para que el usuario pueda colocar cuántas piletas corresponden a tantos metros, en una pileta de 20m de largo,
o bien en una pileta de 25m. de largo.

1- lo primero es preguntarle al usuario la cantidad de metros a convertir en piletas, ej:1000 metros.
2- luego preguntar, en piscina de qué largo? 20 o 25m?
3- se hace la cuenta (50 piletas si es una de 20m o 40 piletas, si es una de 25m.)
y arroja el resultado en alert/write
*/

const conversor = prompt (`Ingresa la opción que deseas: 
                                1. Conversor de metros a piletas
                                2. Conversor de piletas a metros`);
if (conversor=="1"){
    let metros= Number(prompt (" ¿Cuántos metros quieres nadar? Ejemplo: 500 o 1800 o 2000"))
    let largo= Number(prompt (" ¿Cuántos metros mide tu pileta de natación? Coloca 18, 20, 25 o 50"))

const pileta =(metros, largo) =>{
    let total = parseInt(metros / largo);
    
    let lista= document.createElement ("ul")
    document.body.appendChild (lista)
    lista.innerHTML= `CONVERSOR DE METROS A PILETAS: <br/>
                        - Metros a nadar: ${metros} metros. <br/>
                        - Largo de la pileta: ${largo } metros. <br/>
                        - El TOTAL DE PILETAS es de: ${ total} piletas.`
   
}
pileta (metros, largo); }

else if (conversor=="2"){
    
    let piletas= Number(prompt ("Cuántas piletas quieres hacer?"))
    let largo= Number(prompt (" ¿Cuántos metros mide tu pileta de natación? Coloca 18, 20, 25 o 50"))

    const metro =(piletas, largo) =>{
    let total= parseInt(piletas*largo);
    
    let lista2= document.createElement ("ul")
    document.body.appendChild (lista2)
    lista2.innerHTML= ` CONVERSOR DE PILETAS A METROS: <br/> 
                        - Piletas a hacer: ${piletas} <br/>  
                        - Largo de la pileta: ${largo} metros. <br/>
                        - El TOTAL DE METROS es de: ${total} metros.`
}
metro (piletas, largo);

}
else if (conversor!=="1" || conversor!=="2") {
    prompt ("Error")
};



