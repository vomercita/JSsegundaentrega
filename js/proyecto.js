/* 
1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE.
2- PREGUNTARLE CUÁNTOS METROS QUIERE NADAR Y COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON.
3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA.
4- SE MUESTRA EL TITULO DE LA RUTINA QUE LE CORRESPONDE A LO ELEGIDO (NIVEL Y TIPO)
*/


//1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE:

const inputNombre = document.getElementById ("inputNombre");

const btnNombre= document.getElementById ("btnNombre").addEventListener
("click", (e)=>{saludar (), e.preventDefault()})

function saludar(){
const saludo = document.getElementById ("bienvenida");
saludo.innerHTML = `¡¡Bienvenid@ : ${inputNombre.value} !!<br/>`
}


// 2- PREGUNTARLE CUÁNTOS METROS PUEDE NADAR Y COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON.

const inputMetros = document.getElementById ("inputMetros");

let rutinaNivel;

function decirNivel(){
    let niveles = document.getElementById ("niveles");

    if ((inputMetros.value <=1000) && (inputMetros.value >0)) {
        rutinaNivel = "Mojarrita";
    }
    else if ((inputMetros.value>1000) && (inputMetros.value <2000)) {
        rutinaNivel = "Delfín";
    }
    else if (inputMetros.value>=2000){
        rutinaNivel = "Tiburón";
    }
    niveles.innerHTML = `¡Felicitaciones! eres nivel: ${rutinaNivel}.<br/>`;
}

const btnMetros= document.getElementById ("btnMetros").addEventListener
("click", (e)=>{decirNivel (), e.preventDefault()})


//3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA. 
let rutinaTipo;

const btnResistencia= document.getElementById ("btnResistencia").addEventListener
("click", (e)=>{
    tipo.innerHTML ="Elegiste una rutina de resistencia";
    e.preventDefault();
    
})

const btnVelocidad= document.getElementById ("btnVelocidad").addEventListener
("click", (e)=>{
    tipo.innerHTML ="Elegiste una rutina de velocidad";
    e.preventDefault();
        
})

const btnMixta= document.getElementById ("btnMixta").addEventListener
("click", (e)=>{
    tipo.innerHTML ="Elegiste una rutina mixta";
    e.preventDefault();
    
})


/*

//4- SE MUESTRA EL TITULO DE LA RUTINA CORRESPONDIENTE A LAS ELECCIONES DEL USUARIO (NIVEL Y TIPO)



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
    
const rutinaResistencia1 = new Rutina (   
                                    "Resistencia Mojarrita ",
                                    "Entrada en calor: " + x1[1],
                                    "crol " + x2 [1],
                                    "pecho " + x1 [0],
                                    "crol " + x1 [0],
                                    "espalda " + x1 [0],
                                    "crol " + x2 [1],
                                    "crol " + x2 [0],
                                    "Afloje "+ x1 [2]
                                    );

const rutinaResistencia2 = new Rutina (   
                                    "Resistencia Delfín ",
                                    "Entrada en calor: " + x1[2],
                                    "crol " + x2 [1],
                                    "pecho " + x2 [1],
                                    "crol " + x2 [2],
                                    "espalda " + x2 [1],
                                    "crol " + x2 [2],
                                    "crol " + x1 [3],
                                    "Afloje "+ x1 [3]
                                    );
                          
const rutinaResistencia3 = new Rutina (   
                                    "Resistencia Tiburón ",
                                    "Entrada en calor: " + x1[3],
                                    "crol " + x4 [2],
                                    "crol " + x2 [3],
                                    "pecho " + x2 [3],
                                    "espalda " + x2 [3],
                                    "crol " + x2 [3],
                                    "crol " + x1 [4],
                                    "Afloje "+ x1 [3]
                                    );
                            
const rutinaVelocidad1 = new Rutina (   
                                        "Velocidad Mojarrita ",
                                        "Entrada en calor: " + x1[1],
                                        "patada " + x4[0],
                                        "crol " + x2[0],
                                        "velocidad "+ x2 [0],
                                        "crol " + x2[0],
                                        "velocidad " + x4[0],
                                        "crol " + x2[0],
                                        "Afloje "+ x1 [1]
                                        );
                              
const rutinaVelocidad2 = new Rutina (   
                                        "Velocidad Delfín",
                                        "Entrada en calor: " + x1[2],
                                        "patada " + x2 [1],
                                        "crol " + x4 [1],
                                        "velocidad " + x4 [0],
                                        "velocidad " + x2 [1],
                                        "patada " + x2 [1],
                                        "velocidad " + x5[0],
                                        "Afloje "+ x1 [3]
                                        );
                             
const rutinaVelocidad3 = new Rutina (   
                                        "Velocidad Tiburón",
                                        "Entrada en calor: " + x1[3],
                                        "patada " + x2[2],
                                        "crol " + x10 [1],
                                        "velocidad " + x5 [0],
                                        "velocidad " + x5 [1],
                                        "manoplas " + x8[1],
                                        "velocidad " + x8[1],
                                        "Afloje "+ x1 [3]
                                        );                                        

const rutinaMixta1 = new Rutina ( 
                                    "Rutina Mixta Mojarrita",
                                    "Entrada en calor: " + x1[0],
                                    "patada " + x2 [0],
                                    "pullboy " + x2 [0],
                                    "crol " + x4[0],
                                    "pecho " + x2 [0],
                                    "espalda " + x2[0],
                                    "estilo " + x5 [0],
                                    "Afloje "+ x1 [1]
                                    );
                                
const rutinaMixta2= new Rutina (  
                                    "Rutina Mixta Delfín",
                                    "Entrada en calor: " + x1[2],
                                    "patada " + x1[1],
                                    "pullboy " + x1[1],
                                    "manoplas " + x2 [1],
                                    "crol " + x5 [0],
                                    "medley " + x4 [1],
                                    "estilo " + x4 [2],
                                    "Afloje "+ x1 [3]
                                    );
                        
const rutinaMixta3= new Rutina (  
                                    "Rutina Mixta Tiburón",
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

//ARRAY RUTINAS DE OBJETOS RUTINA
const rutinaS = [rutinaResistencia1, rutinaResistencia2, rutinaResistencia3,
    rutinaVelocidad1,rutinaVelocidad2,rutinaVelocidad3,
    rutinaMixta1, rutinaMixta2, rutinaMixta3];



    //
//if 
//    else if ((inputMetros.value>1000) && (inputMetros.value <2000)) {
//    else if (inputMetros.value>=2000){



/*
else if ((metros>1000) && (metros <2000) && (rutina=="2")){
    console.log (rutinaResistencia2)
    tituloRutina= (rutinaS [1].aNombre)
}
else if ((metros>=2000) && (rutina=="2")){
    console.log (rutinaResistencia3)
    tituloRutina= (rutinaS [2].aNombre)
}
else if((metros <= 1000) && (metros>0) && (rutina=="1")){
    console.log (rutinaVelocidad1);
    tituloRutina= (rutinaS [3].aNombre)
} 
else if ((metros>1000) && (metros <2000) && (rutina=="1")){
    console.log (rutinaVelocidad2)
    tituloRutina= (rutinaS [4].aNombre)
}
else if ((metros>=2000) && (rutina=="1")){
    console.log (rutinaVelocidad3)
    tituloRutina= (rutinaS [5].aNombre)
}
else if ((metros <= 1000) && (metros>0) && (rutina=="3")){
    console.log (rutinaMixta1)
    tituloRutina= (rutinaS [6].aNombre)
}
else if ((metros>1000) && (metros <2000) && (rutina=="3")){
    console.log (rutinaMixta2)
    tituloRutina= (rutinaS [7].aNombre)
}
else if ((metros>=2000) && (rutina=="3")){
    console.log (rutinaMixta3)
    tituloRutina= (rutinaS [8].aNombre)
}


*/