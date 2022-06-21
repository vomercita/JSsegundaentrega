
const x1 = ["1x80","1x 120","1x 160","1x 200", "1x 400"];
const x2 = ["2x 40", "2x 80","2x 100", "2x 200"];
const x4 = ["4x 40", "4x 80","4x 100", "4x 200"];
const x5 = ["5x 40","5x 80"];
const x8 = ["8x 20","8x 40","8x 80"];
const x10 = ["10x 20","10x 40","10x 80"];

class Rutina{
    constructor (nombre, entrada, bloque1, bloque2, bloque3, bloque4, bloque5, bloque6, afloje) {
        this.nombre=nombre;
        this.entrada=entrada;
        this.bloque1=bloque1;
        this.bloque2=bloque2;
        this.bloque3=bloque3;
        this.bloque4=bloque4;
        this.bloque5=bloque5;
        this.bloque6=bloque6;
        this.afloje=afloje;
    }
}  
const rutinaResistencia1 = new Rutina (   
    "Resistencia Mojarrita: ", 
    "libre" + "<br>" + x1[1],
    "crol " + "<br>" + x2 [1],
    "pecho " + "<br>"+ x1 [0],
    "crol "+ "<br>" + x1 [0],
    "espalda " + "<br>"+ x1 [0],
    "crol " + "<br>"+ x2 [1],
    "crol " + "<br>"+ x2 [0], 
    "libre" + "<br>" + x1 [2]);
                             
const rutinaResistencia2 = new Rutina (   
    "Resistencia Delfín: ",
    "libre" + "<br>" + x1[2],
    "crol "+ "<br>" + x2 [1], 
    "pecho "+ "<br>" + x2 [1],
    "crol " + "<br>"+ x2 [2],
    "espalda " + "<br>"+ x2 [1],
    "crol "+ "<br>" + x2 [2], 
    "crol "+ "<br>" + x1 [3],
    "libre" + "<br>" + x1 [3]);
                               
const rutinaResistencia3 = new Rutina (   
    "Resistencia Tiburón: ",
    "libre" + "<br>" + x1[3],
    "crol "+ "<br>" + x4 [2],
    "crol " + "<br>"+ x2 [3],
    "pecho "+ "<br>" + x2 [3],
    "espalda "+ "<br>" + x2 [3],
    "crol "+ "<br>" + x2 [3],
    "crol "+ "<br>" + x1 [4],
    "libre" + "<br>" + x1 [3]);
                                 
    const rutinaVelocidad1 = new Rutina (   
    "Velocidad Mojarrita: ",
    "libre" + "<br>" + x1[1],
    "patada "+ "<br>" + x4[0],
    "crol "+ "<br>" + x2[0],
    "velocidad "+ "<br>"+ x2 [0],
    "crol "+ "<br>" + x2[0],
    "velocidad "+ "<br>" + x4[0],
    "crol " + "<br>"+ x2[0], 
    "libre" + "<br>" +x1 [1]);
                                   
    const rutinaVelocidad2 = new Rutina (   
    "Velocidad Delfín:",
    "libre" + "<br>" +  x1[2],
    "patada "+ "<br>" + x2 [1],
    "crol " + "<br>"+ x4 [1],
    "velocidad " + "<br>"+ x4 [0],
    "velocidad "+ "<br>" + x2 [1],
    "patada "+ "<br>" + x2 [1],
    "velocidad "+ "<br>" + x5[0],
    "libre" + "<br>" + x1 [3]);
                              
    const rutinaVelocidad3 = new Rutina (   
    "Velocidad Tiburón:",
    "libre" + "<br>" + x1[3],
    "patada "+ "<br>" + x2[2],
    "crol " + "<br>"+ x10 [1],
    "velocidad "+ "<br>" + x5 [0],
    "velocidad "+ "<br>" + x5 [1],
    "manoplas "+ "<br>" + x8[1],
    "velocidad "+ "<br>" + x8[1], 
    "libre" + "<br>" + x1 [3]);                                        
    
    const rutinaMixta1 = new Rutina ( 
    "Rutina Mixta Mojarrita:",
    "libre" + "<br>" + x1[0],
    "patada "+ "<br>" + x2 [0],
    "pullboy "+ "<br>" + x2 [0],
    "crol "+ "<br>" + x4[0],
    "pecho "+ "<br>" + x2 [0],
    "espalda " + "<br>"+ x2[0],
    "estilo "+ "<br>" + x5 [0], 
    "libre" + "<br>" +x1 [1]);
                                     
    const rutinaMixta2= new Rutina (  
    "Rutina Mixta Delfín:",
    "libre" + "<br>" + x1[2],
    "patada "+ "<br>" + x1[1],
    "pullboy "+ "<br>" + x1[1],
    "manoplas "+ "<br>" + x2 [1],
    "crol " + "<br>"+ x5 [0],
    "medley "+ "<br>" + x4 [1],
    "estilo "+ "<br>" + x4 [2],
    "libre" + "<br>" +x1 [3]);
                            
    const rutinaMixta3= new Rutina (  
    "Rutina Mixta Tiburón:",
    "libre" + "<br>" + x1[3],
    "patada " + "<br>" + x1[3],
    "manoplas " + "<br>" + x8[1],
    "crol " + "<br>" + x10 [1],
    "medley " + "<br>" + x5 [1],
    "crol " + "<br>" + x5 [1],
    "medley " + "<br>" + x5 [1],
    "libre" + "<br>" +x1 [3]);
    
//ARRAY RUTINAS DE OBJETOS RUTINA
const rutinaS = [rutinaResistencia1, rutinaResistencia2, rutinaResistencia3,
    rutinaVelocidad1,rutinaVelocidad2,rutinaVelocidad3,
    rutinaMixta1, rutinaMixta2, rutinaMixta3];

