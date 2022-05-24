/* 1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE.
2- PREGUNTARLE CUÁNTOS METROS QUIERE NADAR Y ENTONCES COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON
3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA.
4- SE MUESTRA EN CONSOLA LA RUTINA QUE LE CORRESPONDE A LO ELEGIDO (NIVEL Y TIPO)*/

const h1= document.createElement ("h1");
h1.innerHTML= "Simulador de rutinas";
document.body.appendChild (h1);

//1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE:
let nombre = prompt ("¡¡Hola!! ¿Cómo te llamas?");
const saludo = () => { 
    alert, document.write ("¡¡Bienvenid@ " + nombre + "!!" + "<br>");
}
saludo();


/* 2- PREGUNTARLE CUÁNTOS METROS PUEDE NADAR Y ENTONCES COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON: y CICLO PARA Q REPITA el prompt SI LA OPCION ES INCORRECTA*/

let metros = Number (prompt (nombre + ", ¿cuántos metros piensas que puedes nadar?"));
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
            metros = Number(prompt (nombre + ", ¿cuántos metros piensas que puedes nadar?"));
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
                                    1 - velocidad
                                    2 - resistencia
                                    3 - mixta`);
const tipoRutina= ()=> {
    if(rutina=="1"){
        alert ("Elegiste una rutina de velocidad")
    }
    else if (rutina=="2") {
        alert("Elegiste una rutina de resistencia")
    }
    else if (rutina=="3"){
        alert ("Elegiste una rutina mixta")
    }
    else {
        while (rutina!== "1" && rutina!== "2" && rutina!== "3"){
            alert ("Error")
            rutina = prompt (nombre+ `, elegí un tipo de rutina a realizar:
                                    1 - velocidad
                                    2 - resistencia
                                    3 - mixta`)
        }
        if(rutina=="1"){
            alert ("Elegiste una rutina de velocidad");
        }
        else if (rutina=="2") {
            alert("Elegiste una rutina de resistencia")
        }
        else if (rutina=="3"){
            alert ("Elegiste una rutina mixta");
        }
    }
    
}   
tipoRutina();

if((metros <= 1000) && (metros>0)){
    document.write (" - Eres nivel: Mojarrita" + "<br>" + "   - Rutina elegida: "+ rutina);
}
else if ((metros>1000) && (metros <2000)){
    document.write (" - Eres nivel: Delfín" + "<br>" + "   - Rutina elegida: "+ rutina);
}
else if (metros>2000){
    document.write (" - Eres nivel: Tiburón" + "<br>" + "   - Rutina elegida: "+ rutina);
}


//2DO DESAFIO COMPLEMENTARIO. CON ARRAYS Y OBJETOS
//4- SE MUESTRA POR CONSOLA LA RUTINA CORRESPONDIENTE A LAS ELECCIONES DEL USUARIO (NIVEL Y TIPO)

const x1 = ["1x80","1x 120","1x 160","1x 200", "1x 400"];
const x2 = ["2x 40", "2x 80","2x 100", "2x 200"];
const x4 = ["4x 40", "4x 80","4x 100", "4x 200"];
const x5 = ["5x 40","5x 80"];
const x8 = ["8x 20","8x 40","8x 80"];
const x10 = ["10x 20","10x 40","10x 80"];

class Rutina{
    constructor (nombre, entrada, bloque1, bloque2, bloque3, bloque4, bloque5, bloque6, afloje) {
        this.aNombre=nombre;
        this.bEntrada=entrada;
        this.bloque1=bloque1;
        this.bloque2=bloque2;
        this.bloque3=bloque3;
        this.bloque4=bloque4;
        this.bloque5=bloque5;
        this.bloque6=bloque6;
        this.cAfloje=afloje;
    }
    resistencia(){};
    velocidad(){};
    mixta(){};
}  
    
//menos de 1000    920
const rutinaResistencia1 = new Rutina (   
                                    "Resistencia Mojarrita: ",
                                    "Entrada en calor: " + x1[1],
                                    "crol " + x2 [1],
                                    "pecho " + x1 [0],
                                    "crol " + x1 [0],
                                    "espalda " + x1 [0],
                                    "crol " + x2 [1],
                                    "crol " + x2 [0],
                                    "Afloje "+ x1 [2]
                                    );

//1000 -2000      1440                              
const rutinaResistencia2 = new Rutina (   
                                    "Resistencia Delfín: ",
                                    "Entrada en calor: " + x1[2],
                                    "crol " + x2 [1],
                                    "pecho " + x2 [1],
                                    "crol " + x2 [2],
                                    "espalda " + x2 [1],
                                    "crol " + x2 [2],
                                    "crol " + x1 [3],
                                    "Afloje "+ x1 [3]
                                    );
// mas de 2000       2800                             
const rutinaResistencia3 = new Rutina (   
                                    "Resistencia Tiburón: ",
                                    "Entrada en calor: " + x1[3],
                                    "crol " + x4 [2],
                                    "crol " + x2 [3],
                                    "pecho " + x2 [3],
                                    "espalda " + x2 [3],
                                    "crol " + x2 [3],
                                    "crol " + x1 [4],
                                    "Afloje "+ x1 [3]
                                    );
// menos de 1000     880                               
const rutinaVelocidad1 = new Rutina (   
                                        "Velocidad Mojarrita: ",
                                        "Entrada en calor: " + x1[1],
                                        "patada " + x4[0],
                                        "crol " + x2[0],
                                        "velocidad "+ x2 [0],
                                        "crol " + x2[0],
                                        "velocidad " + x4[0],
                                        "crol " + x2[0],
                                        "Afloje "+ x1 [1]
                                        );
//1000-2000      1520                                 
const rutinaVelocidad2 = new Rutina (   
                                        "Velocidad Delfín:",
                                        "Entrada en calor: " + x1[2],
                                        "patada " + x2 [1],
                                        "crol " + x4 [1],
                                        "velocidad " + x4 [0],
                                        "velocidad " + x2 [1],
                                        "patada " + x2 [1],
                                        "velocidad " + x5[0],
                                        "Afloje "+ x1 [3]
                                        );
// mas de 2000          2240                             
const rutinaVelocidad3 = new Rutina (   
                                        "Velocidad Tiburón:",
                                        "Entrada en calor: " + x1[3],
                                        "patada " + x2[2],
                                        "crol " + x10 [1],
                                        "velocidad " + x5 [0],
                                        "velocidad " + x5 [1],
                                        "manoplas " + x8[1],
                                        "velocidad " + x8[1],
                                        "Afloje "+ x1 [3]
                                        );                                        
//menos de 1000    880
const rutinaMixta1 = new Rutina ( 
                                    "Rutina Mixta Mojarrita:",
                                    "Entrada en calor: " + x1[0],
                                    "patada " + x2 [0],
                                    "pullboy " + x2 [0],
                                    "crol " + x4[0],
                                    "pecho " + x2 [0],
                                    "espalda " + x2[0],
                                    "estilo " + x5 [0],
                                    "Afloje "+ x1 [1]
                                    );
//1000-2000   1680                                 
const rutinaMixta2= new Rutina (  
                                    "Rutina Mixta Delfín:",
                                    "Entrada en calor: " + x1[2],
                                    "patada " + x1[1],
                                    "pullboy " + x1[1],
                                    "manoplas " + x2 [1],
                                    "crol " + x5 [0],
                                    "medley " + x4 [1],
                                    "estilo " + x4 [2],
                                    "Afloje "+ x1 [3]
                                    );
//mas de 2000         2520                           
const rutinaMixta3= new Rutina (  
                                    "Rutina Mixta Tiburón:",
                                    "Entrada en calor: " + x1[3],
                                    "patada " + x1[3],
                                    "manoplas " + x8[1],
                                    "crol " + x10 [1],
                                    "medley " + x5 [1],
                                    "crol " + x5 [1],
                                    "medley " + x5 [1],
                                    "Afloje "+ x1 [3]
                                    );
rutinaResistencia1.resistencia();
rutinaResistencia2.resistencia();
rutinaResistencia3.resistencia();
rutinaVelocidad1.velocidad ();
rutinaVelocidad2.velocidad ();
rutinaVelocidad3.velocidad ();
rutinaMixta1.mixta();
rutinaMixta2.mixta();
rutinaMixta3.mixta();



if((metros <= 1000) && (metros>0) && (rutina=="1")){
    console.log (rutinaVelocidad1)
} 
else if ((metros <= 1000) && (metros>0) && (rutina=="2")){
    console.log (rutinaResistencia1)
}
else if ((metros <= 1000) && (metros>0) && (rutina=="3")){
    console.log (rutinaMixta1)
}
else if ((metros>1000) && (metros <2000) && (rutina=="1")){
    console.log (rutinaVelocidad2)
}
else if ((metros>1000) && (metros <2000) && (rutina=="2")){
    console.log (rutinaResistencia2)
}
else if ((metros>1000) && (metros <2000) && (rutina=="3")){
    console.log (rutinaMixta2)
}
else if ((metros>2000) && (rutina=="1")){
    console.log (rutinaVelocidad3)
}
else if ((metros>2000) && (rutina=="2")){
    console.log (rutinaResistencia3)
}
else if ((metros>2000) && (rutina=="3")){
    console.log (rutinaMixta3)
}

document.write ("<br>" + "<br>" + nombre + ", mira por consola la rutina que te ha tocado ---->");