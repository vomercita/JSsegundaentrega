/*tipo CRUD
1 mostrar un menu
2 ingresar datos
3 pedir al usuario 1. armar nuevo 2. listar 3. buscar 4. modificar 5.eliminar
4 crear template de rutina */

const x1 = ["1x80","1x 120","1x 160","1x 200", "1x 400"]; const x2 = ["2x 40", "2x 80","2x 100", "2x 200"]; const x4 = ["4x 40", "4x 80","4x 100", "4x 200"];
const x5 = ["5x 40","5x 80"]; const x8 = ["8x 20","8x 40","8x 80"]; const x10 = ["10x 20","10x 40","10x 80"];

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
}  
const rutinaResistencia1 = new Rutina (   
"Resistencia Mojarrita: ","Entrada en calor: " + x1[1],"crol " + x2 [1],"pecho " + x1 [0],"crol " + x1 [0],
"espalda " + x1 [0],"crol " + x2 [1],"crol " + x2 [0],"Afloje "+ x1 [2]);
                         
const rutinaResistencia2 = new Rutina (   
"Resistencia Delfín: ", "Entrada en calor: " + x1[2],"crol " + x2 [1], "pecho " + x2 [1],"crol " + x2 [2],
"espalda " + x2 [1],"crol " + x2 [2], "crol " + x1 [3],"Afloje "+ x1 [3]);
                           
const rutinaResistencia3 = new Rutina (   
 "Resistencia Tiburón: ","Entrada en calor: " + x1[3],"crol " + x4 [2],"crol " + x2 [3],"pecho " + x2 [3],
 "espalda " + x2 [3],"crol " + x2 [3],"crol " + x1 [4],"Afloje "+ x1 [3]);
                             
const rutinaVelocidad1 = new Rutina (   
"Velocidad Mojarrita: ","Entrada en calor: " + x1[1],"patada " + x4[0],"crol " + x2[0],"velocidad "+ x2 [0],
"crol " + x2[0],"velocidad " + x4[0],"crol " + x2[0],"Afloje "+ x1 [1]);
                               
const rutinaVelocidad2 = new Rutina (   
"Velocidad Delfín:","Entrada en calor: " + x1[2],"patada " + x2 [1],"crol " + x4 [1],"velocidad " + x4 [0],
"velocidad " + x2 [1],"patada " + x2 [1],"velocidad " + x5[0],"Afloje "+ x1 [3]);
                          
const rutinaVelocidad3 = new Rutina (   
"Velocidad Tiburón:","Entrada en calor: " + x1[3],"patada " + x2[2],"crol " + x10 [1],"velocidad " + x5 [0],
"velocidad " + x5 [1],"manoplas " + x8[1],"velocidad " + x8[1],"Afloje "+ x1 [3]);                                        

const rutinaMixta1 = new Rutina ( 
"Rutina Mixta Mojarrita:","Entrada en calor: " + x1[0],"patada " + x2 [0],"pullboy " + x2 [0],"crol " + x4[0],
"pecho " + x2 [0],"espalda " + x2[0],"estilo " + x5 [0],"Afloje "+ x1 [1]);
                                 
const rutinaMixta2= new Rutina (  
"Rutina Mixta Delfín:","Entrada en calor: " + x1[2],"patada " + x1[1],"pullboy " + x1[1],"manoplas " + x2 [1],
"crol " + x5 [0],"medley " + x4 [1],"estilo " + x4 [2],"Afloje "+ x1 [3]);
                        
const rutinaMixta3= new Rutina (  
"Rutina Mixta Tiburón:","Entrada en calor: " + x1[3],"patada " + x1[3],"manoplas " + x8[1],"crol " + x10 [1],
"medley " + x5 [1],"crol " + x5 [1],"medley " + x5 [1],"Afloje "+ x1 [3]);

//ARRAY RUTINAS DE OBJETOS RUTINA
const rutinaS = [rutinaResistencia1, rutinaResistencia2, rutinaResistencia3,
                 rutinaVelocidad1,rutinaVelocidad2,rutinaVelocidad3,
                 rutinaMixta1, rutinaMixta2, rutinaMixta3];

//1 fx para MOSTRAR MENU
menuRutina();
function menuRutina () {
    let opcion = Number (prompt (`Selecciona una opción: 
                                        1. Armar una nueva rutina
                                        2. Listar rutinas existentes
                                        3. Buscar rutinas
                                        4. Modificar rutina
                                        5. Salir`))
    if (opcion=="1") { armarRutina()}
    else if (opcion=="2") { listarRutina()}
    else if (opcion=="3") { buscarRutina()}
    else if (opcion=="4") { modificarRutina()}
    else if (opcion=="5") { }
    else (alert ("opción inválida")) 
}

//opcion 1 armar rutina
function armarRutina (){
    //pide datos para armar la rutina    
    let nombre = prompt ("Ingresa un nombre para tu nueva rutina")
    let entrada = prompt ("Ingresa la entrada en calor")
    let bloque1 = prompt ("Ingresa el bloque 1 ")
    let bloque2 = prompt ("Ingresa el bloque 2 ")
    let bloque3 = prompt ("Ingresa el bloque 3 ")
    let bloque4 = prompt ("Ingresa el bloque 4 ")
    let bloque5 = prompt ("Ingresa el bloque 5 ")
    let bloque6 = prompt ("Ingresa el bloque 6 ")
    let afloje = prompt ("Ingresa el afloje ")
    
// crea el objeto rutinaNueva
    const rutinaNueva= new Rutina (nombre, entrada, bloque1, bloque2, bloque3, bloque4, bloque5, bloque6, afloje);
//la agrego al array rutinaS
    rutinaS.push(rutinaNueva);
// y se muestra por consola 
    console.log (rutinaNueva);

    // y por DOM
    const listado=document.createElement("ul")
    listado.innerHTML=`- Nombre de tu rutina: ${rutinaNueva.aNombre} </br>
                        - La entrada en calor es de: ${rutinaNueva.bEntrada}</br>
                        - Bloque 1: ${rutinaNueva.bloque1}</br>
                        - Bloque 2: ${rutinaNueva.bloque2}</br>
                        - Bloque 3: ${rutinaNueva.bloque3}</br>
                        - Bloque 4: ${rutinaNueva.bloque4}</br>
                        - Bloque 5: ${rutinaNueva.bloque5}</br>
                        - Bloque 6: ${rutinaNueva.bloque6}</br>
                        - Afloje: ${rutinaNueva.cAfloje} `
    document.body.appendChild (listado);
   }
    
//opcion 2: Listar rutinas en DOM
function listarRutina() {

let listadoRutinas = document.createElement ("ul")

    rutinaS.forEach ((rutina)=>{
        const listado=document.createElement("li")
        listado.innerHTML=`- ${rutina.aNombre}</br>
                               - ${rutina.bEntrada}</br>
                               - ${rutina.bloque1}</br>
                               - ${rutina.bloque2}</br>
                               - ${rutina.bloque3}</br>
                               - ${rutina.bloque4}</br>
                               - ${rutina.bloque5}</br>
                               - ${rutina.bloque6}</br>
                               - ${rutina.cAfloje} `
        listadoRutinas.appendChild (listado);
    })
    document.body.appendChild (listadoRutinas)        
}

// opcion 3. BUSCAR RUTINAS QUE CONTENGAN ....--- EJ ESPALDA. Aparecen en consola

function buscarRutina (){
    const buscar= prompt ("Elige una palabra clave");
    const encontrada= rutinaS.filter ((rutina)=>rutina.bloque1.indexOf(buscar)!==-1 ||
                                                rutina.bloque2.indexOf(buscar)!==-1 ||
                                                rutina.bloque2.indexOf(buscar)!==-1 || 
                                                rutina.bloque3.indexOf(buscar)!==-1 || 
                                                rutina.bloque4.indexOf(buscar)!==-1 || 
                                                rutina.bloque5.indexOf(buscar)!==-1 ||  
                                                rutina.bloque6.indexOf(buscar)!==-1);
    console.log (encontrada);

//para verlas en DOM:    
    
    encontrada.forEach ((buscadas)=>{
    document.write ("<br/>",buscadas.aNombre, "<br/>", buscadas.bloque1,"<br/>", buscadas.bloque2,"<br/>", buscadas.bloque3,
    "<br/>", buscadas.bloque4,"<br/>", buscadas.bloque5, "<br/>",buscadas.bloque6, "<br/>",buscadas.cAfloje, "<br/>")})

} 



// opcion 4 modificar uno o varios bloques de una rutina existente
//1° buscar la rutina. 2° elegir el bloque a modificar. 3° modificar ese bloque elegido. 4° elegir otro bloque o salir

function modificarRutina (){
    //1° buscar la rutina
    let listadoModificables= Number (prompt (`Elige la rutina a modificar: 
                                                    1. Resistencia Mojarrita
                                                    2. Resistencia Delfín
                                                    3. Resistencia Tiburón
                                                    4. Velocidad Mojarrita
                                                    5. Velocidad Delfín
                                                    6. Velocidad Tiburón
                                                    7. Rutina Mixta Mojarrita
                                                    8. Rutina Mixta Delfín
                                                    9. Rutina Mixta Tiburón
                                                    10. Volver a menú principal `));
    switch (listadoModificables) {
            case 1:
                listadoModificables = rutinaS [0];
                alert ("elegiste modificar la rutina Resistencia Mojarrita")
                modificarBloque();
                console.log (rutinaResistencia1)               
                break;

            case 2:
                listadoModificables = rutinaS [1]
                alert ("elegiste modificar la rutina Resistencia Delfín")
                modificarBloque();
                console.log (rutinaResistencia2);                
                break;        

            case 3:
                listadoModificables = rutinaS [2]
                alert ("elegiste modificar la rutina Resistencia Tiburón")
                modificarBloque(rutinaResistencia3);
                console.log (rutinaResistencia3);
                break;

            case 4:
                listadoModificables= rutinaS [3]
                alert ("elegiste modificar la rutina Velocidad Mojarrita")
                modificarBloque(rutinaVelocidad1);
                console.log (rutinaVelocidad1);
                break;    

            case 5:
                listadoModificables= rutinaS [4]
                alert ("elegiste modificar la rutina Velocidad Delfín")
                modificarBloque(rutinaVelocidad2);
                console.log (rutinaVelocidad2);
                break;

            case 6:
                listadoModificables =rutinaS [5]
                alert ("elegiste modificar la rutina Velocidad Tiburón")
                modificarBloque(rutinaVelocidad3);
                console.log (rutinaVelocidad3);
                break;

            case 7:
                listadoModificables =rutinaS [6] 
                alert ("elegiste modificar la rutina Mixta de Mojarrita")
                modificarBloque(rutinaMixta1);
                console.log (rutinaMixta1)
                break;    

            case 8: 
                listadoModificables =rutinaS [7]
                alert ("elegiste modificar la rutina Mixta de Delfín")
                modificarBloque(rutinaMixta2);
                console.log (rutinaMixta2);               
                break;

            case 9:
                listadoModificables=rutinaS [8]
                alert ("elegiste modificar la rutina Mixta de Tiburón")
                modificarBloque(rutinaMixta3);
                console.log (rutinaMixta3);
                break;

            case 10:
                menuRutina();                       
                break;  

            default:
                break;
        }

    //2° elegir el bloque a modificar y 3°modificarlo
    function modificarBloque (){
        let modificar = Number(prompt (`ingresa el bloque de la rutina a modificar:
                             1. Bloque 1
                             2. Bloque 2
                             3. Bloque 3
                             4. Bloque 4
                             5. Bloque 5
                             6. Bloque 6                            
                             7. Listo`));
                             
        switch (modificar) {

        case 1:
            let nuevoBloque1= prompt ("ingresa el nuevo bloque");
            listadoModificables.bloque1= nuevoBloque1
            break;

        case 2:
            let nuevoBloque2= prompt ("ingresa el nuevo bloque");
            listadoModificables.bloque2= nuevoBloque2             
            break;

        case 3:
            let nuevoBloque3= prompt ("ingresa el nuevo bloque") ;
            listadoModificables.bloque3= nuevoBloque3           
            break;

        case 4:
            let nuevoBloque4= prompt ("ingresa el nuevo bloque") ;
            listadoModificables.bloque4= nuevoBloque4
            break;
            
        case 5:
            let nuevoBloque5= prompt ("ingresa el nuevo bloque");
            listadoModificables.bloque5= nuevoBloque5;
            break;

        case 6:
            let nuevoBloque6= prompt ("ingresa el nuevo bloque");
            listadoModificables.bloque6= nuevoBloque6;    
            break;

        default:
            break;
        }    
        //4° elegir otro bloque o salir
        if (modificar!==7) {modificarBloque()}
        else {}
               
    }
}


