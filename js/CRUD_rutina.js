/*tipo CRUD
1 mostrar botones: 1 listar rutinas 2 armar nueva 3. buscar 
2 elegir e ingresar datos
3 modificar y eliminar, aun no.
*/

const x1 = ["1 x 80","1 x 120","1 x 160","1 x 200", "1 x 400"]; 
const x2 = ["2 x 40","2 x 80","2 x 100", "2 x 200"]; 
const x4 = ["4 x 40","4 x 80","4 x 100", "4 x 200"];
const x5 = ["5 x 40","5 x 80"]; 
const x8 = ["8 x 20","8 x 40","8 x 80"]; 
const x10 = ["10 x 20","10 x 40","10 x 80"];

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
"Resistencia Mojarrita: ", "libre" + "<br>" + x1[1],"crol " + "<br>" + x2 [1],"pecho " + "<br>"+ x1 [0],"crol "+ "<br>" + x1 [0],
"espalda " + "<br>"+ x1 [0],"crol " + "<br>"+ x2 [1],"crol " + "<br>"+ x2 [0], "libre" + "<br>" + x1 [2]);
                         
const rutinaResistencia2 = new Rutina (   
"Resistencia Delfín: ","libre" + "<br>" + x1[2],"crol "+ "<br>" + x2 [1], "pecho "+ "<br>" + x2 [1],"crol " + "<br>"+ x2 [2],
"espalda " + "<br>"+ x2 [1],"crol "+ "<br>" + x2 [2], "crol "+ "<br>" + x1 [3],"libre" + "<br>" + x1 [3]);
                           
const rutinaResistencia3 = new Rutina (   
 "Resistencia Tiburón: ","libre" + "<br>" + x1[3],"crol "+ "<br>" + x4 [2],"crol " + "<br>"+ x2 [3],"pecho "+ "<br>" + x2 [3],
 "espalda "+ "<br>" + x2 [3],"crol "+ "<br>" + x2 [3],"crol "+ "<br>" + x1 [4],"libre" + "<br>" + x1 [3]);
                             
const rutinaVelocidad1 = new Rutina (   
"Velocidad Mojarrita: ","libre" + "<br>" + x1[1],"patada "+ "<br>" + x4[0],"crol "+ "<br>" + x2[0],"velocidad "+ "<br>"+ x2 [0],
"crol "+ "<br>" + x2[0],"velocidad "+ "<br>" + x4[0],"crol " + "<br>"+ x2[0], "libre" + "<br>" +x1 [1]);
                               
const rutinaVelocidad2 = new Rutina (   
"Velocidad Delfín:","libre" + "<br>" +  x1[2],"patada "+ "<br>" + x2 [1],"crol " + "<br>"+ x4 [1],"velocidad " + "<br>"+ x4 [0],
"velocidad "+ "<br>" + x2 [1],"patada "+ "<br>" + x2 [1],"velocidad "+ "<br>" + x5[0], "libre" + "<br>" + x1 [3]);
                          
const rutinaVelocidad3 = new Rutina (   
"Velocidad Tiburón:","libre" + "<br>" + x1[3],"patada "+ "<br>" + x2[2],"crol " + "<br>"+ x10 [1],"velocidad "+ "<br>" + x5 [0],
"velocidad "+ "<br>" + x5 [1],"manoplas "+ "<br>" + x8[1],"velocidad "+ "<br>" + x8[1], "libre" + "<br>" + x1 [3]);                                        

const rutinaMixta1 = new Rutina ( 
"Rutina Mixta Mojarrita:","libre" + "<br>" + x1[0],"patada "+ "<br>" + x2 [0],"pullboy "+ "<br>" + x2 [0],"crol "+ "<br>" + x4[0],
"pecho "+ "<br>" + x2 [0],"espalda " + "<br>"+ x2[0],"estilo "+ "<br>" + x5 [0], "libre" + "<br>" +x1 [1]);
                                 
const rutinaMixta2= new Rutina (  
"Rutina Mixta Delfín:","libre" + "<br>" + x1[2],"patada "+ "<br>" + x1[1],"pullboy "+ "<br>" + x1[1],"manoplas "+ "<br>" + x2 [1],
"crol " + "<br>"+ x5 [0],"medley "+ "<br>" + x4 [1],"estilo "+ "<br>" + x4 [2],"libre" + "<br>" +x1 [3]);
                        
const rutinaMixta3= new Rutina (  
"Rutina Mixta Tiburón:","libre" + "<br>" + x1[3],"patada " + "<br>" + x1[3],"manoplas " + "<br>" + x8[1],"crol " + "<br>" + x10 [1],
"medley " + "<br>" + x5 [1],"crol " + "<br>" + x5 [1],"medley " + "<br>" + x5 [1],"libre" + "<br>" +x1 [3]);

//ARRAY RUTINAS DE OBJETOS RUTINA
const rutinaS = [rutinaResistencia1, rutinaResistencia2, rutinaResistencia3,
                 rutinaVelocidad1,rutinaVelocidad2,rutinaVelocidad3,
                 rutinaMixta1, rutinaMixta2, rutinaMixta3];

//boton 1: Listar rutinas en DOM

let botonListar = document.getElementById ("botonListar")
botonListar.innerHTML = "Listar rutinas";
botonListar.addEventListener ("click", ()=>{listarRutina()});


function listarRutina() {

    let listadoRutinas = document.createElement ("table");
    listadoRutinas.innerHTML="";
    listadoRutinas.setAttribute ("id", "tablaRutinasListadas")

    const tablaHead = document.createElement("tr");

    const tablaTitulo = document.createElement("th");
        tablaTitulo.innerHTML="Título de la rutina";
        tablaHead.appendChild(tablaTitulo);

    const tablaEntrada = document.createElement("th");
        tablaEntrada.innerHTML="Entrada en calor";
        tablaHead.appendChild(tablaEntrada);   

    const tablaBloque1 = document.createElement("th");
        tablaBloque1.innerHTML="Bloque 1 ";
        tablaHead.appendChild(tablaBloque1);

    const tablaBloque2 = document.createElement("th");
        tablaBloque2.innerHTML="Bloque 2 ";
        tablaHead.appendChild(tablaBloque2);

    const tablaBloque3 = document.createElement("th");
        tablaBloque3.innerHTML="Bloque 3 ";
        tablaHead.appendChild(tablaBloque3);

    const tablaBloque4 = document.createElement("th");
        tablaBloque4.innerHTML="Bloque 4 ";
        tablaHead.appendChild(tablaBloque4);

    const tablaBloque5 = document.createElement("th");
        tablaBloque5.innerHTML="Bloque 5 ";
        tablaHead.appendChild(tablaBloque5);

    const tablaBloque6 = document.createElement("th");
        tablaBloque6.innerHTML="Bloque 6 ";
        tablaHead.appendChild(tablaBloque6);

    const tablaAfloje = document.createElement("th");
        tablaAfloje.innerHTML="Afloje ";
        tablaHead.appendChild(tablaAfloje);
        
    listadoRutinas.appendChild (tablaHead);

    rutinaS.forEach ((rutina)=>{
        const tablaRow = document.createElement("tr");

        let tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.aNombre}`;
        tablaRow.appendChild(tablaTd)
        
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.bEntrada}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.bloque1}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.bloque2}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.bloque3}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.bloque4}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.bloque5}`;
        tablaRow.appendChild(tablaTd);

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.bloque6}`;
        tablaRow.appendChild(tablaTd)
        
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.cAfloje}`;
        tablaRow.appendChild(tablaTd)

        listadoRutinas.appendChild (tablaRow);
        tablaRow.setAttribute ("id", "filas")
        

    })
    document.body.appendChild (listadoRutinas);
}
//boton 2 armar rutina

let botonArmar = document.getElementById ("botonArmar")
botonArmar.innerHTML = "Armar una rutina";

botonArmar.addEventListener ("click", ()=> {armarRutina()}); 
   
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






// boton 3. buscar rutinas que contengan palabra clave, ej: espalda.

let botonBuscar = document.getElementById ("botonBuscar");
botonBuscar.innerHTML = "Buscar rutina";
botonBuscar.addEventListener ("click", ()=>{buscarRutina()})

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
    const encontradas=document.createElement("ul")
    encontradas.innerHTML=`-  ${buscadas.aNombre}</br>
                        -  ${buscadas.bEntrada}</br>
                        -  ${buscadas.bloque1}</br>
                        -  ${buscadas.bloque2}</br>
                        -  ${buscadas.bloque3}</br>
                        -  ${buscadas.bloque4}</br>
                        -  ${buscadas.bloque5}</br>
                        -  ${buscadas.bloque6}</br>
                        -  ${buscadas.cAfloje} `
    document.body.appendChild (encontradas);
    encontradas.setAttribute ("style", "margin: 2rem")
    })
} 



/* Agos, esto lo dejo comentado porque aun no vimos como hacer las modificaciones en las listas :/

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
*/



