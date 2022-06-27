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
    "libre" + "<br>" + "1x120" ,
    "crol " + "<br>" + "2x80",
    "pecho " + "<br>"+ "1x80",
    "crol "+ "<br>" + "1x80",
    "espalda " + "<br>"+ "1x80",
    "crol " + "<br>"+ "2x80",
    "crol " + "<br>"+ "2x40", 
    "libre" + "<br>" + "1x160");
                             
const rutinaResistencia2 = new Rutina (   
    "Resistencia Delfín: ",
    "libre" + "<br>" + "1x160",
    "crol "+ "<br>" + "2x80", 
    "pecho "+ "<br>" + "2x80",
    "crol " + "<br>"+ "2x100",
    "espalda " + "<br>"+"2x80" ,
    "crol "+ "<br>" + "2x100", 
    "crol "+ "<br>" + "2x80",
    "libre" + "<br>" +"1x200" );
                               
const rutinaResistencia3 = new Rutina (   
    "Resistencia Tiburón: ",
    "libre" + "<br>" + "1x200",
    "crol "+ "<br>" +"4x100" ,
    "crol " + "<br>"+ "2x100",
    "pecho "+ "<br>" +"2x200" ,
    "espalda "+ "<br>" + "2x200",
    "crol "+ "<br>" +"2x200" ,
    "crol "+ "<br>" + "1x400",
    "libre" + "<br>" + "1x200");
                                 
const rutinaVelocidad1 = new Rutina (   
    "Velocidad Mojarrita: ",
    "libre" + "<br>" + "1x120",
    "patada "+ "<br>" + "4x40",
    "crol "+ "<br>" +"2x40" ,
    "velocidad "+ "<br>"+"2x40" ,
    "crol "+ "<br>" +"2x40" ,
    "velocidad "+ "<br>" +"4x40" ,
    "crol " + "<br>"+"2x40" , 
    "libre" + "<br>" +"1x120" );
                                   
const rutinaVelocidad2 = new Rutina (   
    "Velocidad Delfín:",
    "libre" + "<br>" +  "1x160",
    "patada "+ "<br>" +"2x80" ,
    "crol " + "<br>"+"4x80" ,
    "velocidad " + "<br>"+"4x40" ,
    "velocidad "+ "<br>" +"2x80" ,
    "patada "+ "<br>" +"2x80" ,
    "velocidad "+ "<br>" +"5x40" ,
    "libre" + "<br>" + "1x200");
                              
const rutinaVelocidad3 = new Rutina (   
    "Velocidad Tiburón:",
    "libre" + "<br>" +"1x200" ,
    "patada "+ "<br>" +"2x100" ,
    "crol " + "<br>"+"10x40" ,
    "velocidad "+ "<br>" +"5x40" ,
    "velocidad "+ "<br>" +"5x80" ,
    "manoplas "+ "<br>" +"8x40" ,
    "velocidad "+ "<br>" +"8x40" , 
    "libre" + "<br>" + "1x200");                                        
    
const rutinaMixta1 = new Rutina ( 
    "Rutina Mixta Mojarrita:",
    "libre" + "<br>" +"1x120" ,
    "patada "+ "<br>" +"2x40" ,
    "pullboy "+ "<br>" +"2x40" ,
    "crol "+ "<br>" +"4x40" ,
    "pecho "+ "<br>" +"2x40" ,
    "espalda " + "<br>"+"2x40" ,
    "estilo "+ "<br>" +"5x40" , 
    "libre" + "<br>" + "1x120");
                                     
const rutinaMixta2= new Rutina (  
    "Rutina Mixta Delfín:",
    "libre" + "<br>" +"1x60" ,
    "patada "+ "<br>" +"1x120" ,
    "pullboy "+ "<br>" +"1x120" ,
    "manoplas "+ "<br>" +"2x80" ,
    "crol " + "<br>"+"5x40" ,
    "medley "+ "<br>" +"4x80" ,
    "estilo "+ "<br>" +"4x100" ,
    "libre" + "<br>" +"1x200");
                            
const rutinaMixta3= new Rutina (  
    "Rutina Mixta Tiburón:",
    "libre" + "<br>" +"1x200" ,
    "patada " + "<br>" +"1x200" ,
    "manoplas " + "<br>" +"8x40" ,
    "crol " + "<br>" +"10x40" ,
    "medley " + "<br>" +"5x80" ,
    "crol " + "<br>" +"5x80" ,
    "medley " + "<br>" +"5x80" ,
    "libre" + "<br>" +"1x200");
    
//ARRAY RUTINAS DE OBJETOS RUTINA
const rutinaS = [rutinaResistencia1, rutinaResistencia2, rutinaResistencia3,
    rutinaVelocidad1,rutinaVelocidad2,rutinaVelocidad3,
    rutinaMixta1, rutinaMixta2, rutinaMixta3];

