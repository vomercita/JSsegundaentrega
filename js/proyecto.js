/*
1- PREGUNTAR AL USUARIO COMO SE LLAMA
Y SALUDARLO CON SU NOMBRE.
2- PREGUNTARLE CUÁNTOS METROS QUIERE NADAR
Y ENTONCES COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON
3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: 
VELOCIDAD, RESISTENCIA O MIXTA.
*/

//1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE:
let nombre = prompt ("¡¡Hola!! ¿Cómo te llamas?");

const saludo = () => { 
    alert, document.write ("¡¡Bienvenid@ " + nombre + "!!");
}
saludo();

/* 2- PREGUNTARLE CUÁNTOS METROS QUIERE NADAR
Y ENTONCES COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON:
y CICLO PARA Q REPITA el prompt SI LA OPCION ES INCORRECTA*/

let metros = Number (prompt (nombre + ", ¿cuántos metros deseas nadar?"));

const categoria = ()=> {
    
    if((metros <= 1000) && (metros>0)){
        
        alert ("¡Felicitaciones! eres nivel Mojarrita")
    }
    else if ((metros>1000) && (metros <2000)){
        alert ("¡Felicitaciones! eres nivel Delfín")
    }
    else if (metros>2000){
        alert ("¡Felicitaciones! eres nivel Tiburón")
    }
    else { 
        while (isNaN (metros)){
            alert ("¡Error! colocar número de metros, por ejemplo: 500, 800, 1500, 2500") 
            metros = Number(prompt (nombre + ", ¿cuántos metros deseas nadar?"));
            }
        if((metros <= 1000) && (metros>0)){
            alert ("¡Felicitaciones! eres nivel Mojarrita")
        }
        else if ((metros>1000) && (metros <2000)){
            alert ("¡Felicitaciones! eres nivel Delfín")
        }
        else if (metros>2000){
            alert ("¡Felicitaciones! eres nivel Tiburón")
        }
    }
}
categoria();

/*3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA.
Y CICLO PARA Q REPITA el prompt SI LA OPCION ES INCORRECTA*/

let rutina = prompt (nombre+ `, elegí un tipo de rutina a realizar:
                                    - velocidad
                                    - resistencia
                                    - mixta`);
const tipoRutina= ()=> {
    if(rutina=="velocidad"){
        alert ("Elegiste una rutina de velocidad")
    }
    else if (rutina=="resistencia") {
        alert("Elegiste una rutina de resistencia")
    }
    else if (rutina=="mixta"){
        alert ("Elegiste una rutina mixta")
    }
    else {
        while (rutina!== "velocidad" && rutina!== "resistencia" && rutina!== "mixta" ){
            alert ("Error")
            rutina = prompt (nombre+ `, elegí un tipo de rutina a realizar:
                                    - velocidad
                                    - resistencia
                                    - mixta`)
        }
        if(rutina=="velocidad"){
            alert ("Elegiste una rutina de velocidad")
        }
        else if (rutina=="resistencia") {
            alert("Elegiste una rutina de resistencia")
        }
        else if (rutina=="mixta"){
            alert ("Elegiste una rutina mixta")
        }
    }
    
}   
tipoRutina();

document.write (" - Cantidad de metros elegidos: " + metros + "   - Rutina elegida: "+ rutina);