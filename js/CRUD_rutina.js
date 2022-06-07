/*tipo CRUD
1 mostrar botones: 1 listar rutinas 2 armar nueva 3. buscar 
2 elegir e ingresar datos
3 modificar y eliminar, aun no.
*/

//Nombre guardado en storage
function saludar(){
    const saludo = document.getElementById ("crudNombre");
    saludo.innerHTML = ` ${localStorage.getItem ("nombre")}<br/>
                        Elige alguna de estas opciones`
    }
saludar();

//BOTON 1: Listar rutinas en DOM

let botonListar = document.getElementById ("botonListar")
botonListar.innerHTML = "Listar rutinas";

botonListar.addEventListener ("click", (e)=>{
    listarRutina(),
    e.preventDefault()
});

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
        tablaTd.innerHTML=`${rutina.Nombre}`;
        tablaRow.appendChild(tablaTd)
        
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${rutina.Entrada}`;
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
        tablaTd.innerHTML=`${rutina.Afloje}`;
        tablaRow.appendChild(tablaTd)

        listadoRutinas.appendChild (tablaRow);
        tablaRow.setAttribute ("id", "filas")
    })
    document.body.appendChild (listadoRutinas);
    
    let mostrarMenu=document.getElementById ("formularioArmarRutina")
    mostrarMenu.setAttribute ("style", "display:none")

}



//BOTON 2: Armar rutina

let botonArmar = document.getElementById ("botonArmar")
botonArmar.innerHTML = "Armar una rutina";

botonArmar.addEventListener ("click", (e)=> {
    mostrarMenuArmar(), 
    e.preventDefault()
}); 

function mostrarMenuArmar(){
    let mostrarMenu=document.getElementById ("formularioArmarRutina")
    mostrarMenu.setAttribute ("style", "display:inline")
}
let botonRutinaArmada= document.getElementById ("botonRutinaArmada");
botonRutinaArmada.addEventListener ("click", (e)=>{
    e.preventDefault(), 
    mostrarArmada(),
    borrarMenuArmar()
});
function borrarMenuArmar(){
    let borrarMenu=document.getElementById ("formularioArmarRutina")
    borrarMenu.setAttribute ("style", "display:none")
}
function mostrarArmada (){
    let tituloNueva= document.getElementById ("inputTitulo").value;
    let tituloh2= document.createElement ("h2")
    tituloh2.innerHTML= `El título de tu nueva rutina es: "${tituloNueva}"`;
    document.body.appendChild (tituloh2)

    let entradaNueva= document.getElementById ("inputEntrada").value;
    let entradah2= document.createElement ("h2")
    entradah2.innerHTML= `La entrada en calor es: ${entradaNueva}`;
    document.body.appendChild (entradah2)

    let bloque1Nueva= document.getElementById ("inputB1").value;
    let bloque1h2= document.createElement ("h2")
    bloque1h2.innerHTML= `El bloque 1 es: ${bloque1Nueva}`;
    document.body.appendChild (bloque1h2)

    let bloque2Nueva= document.getElementById ("inputB2").value;
    let bloque2h2= document.createElement ("h2")
    bloque2h2.innerHTML= `El bloque 2 es: ${bloque2Nueva}`;
    document.body.appendChild (bloque2h2)

    let bloque3Nueva= document.getElementById ("inputB3").value;
    let bloque3h2= document.createElement ("h2")
    bloque3h2.innerHTML= `El bloque 3 es: ${bloque3Nueva}`;
    document.body.appendChild (bloque3h2)

    let bloque4Nueva= document.getElementById ("inputB4").value;
    let bloque4h2= document.createElement ("h2")
    bloque4h2.innerHTML= `El bloque 4 es: ${bloque4Nueva}`;
    document.body.appendChild (bloque4h2)

    let bloque5Nueva= document.getElementById ("inputB5").value;
    let bloque5h2= document.createElement ("h2")
    bloque5h2.innerHTML= `El bloque 5 es: ${bloque5Nueva}`;
    document.body.appendChild (bloque5h2)

    let bloque6Nueva= document.getElementById ("inputB6").value;
    let bloque6h2= document.createElement ("h2")
    bloque6h2.innerHTML= `El bloque 6 es: ${bloque6Nueva}`;
    document.body.appendChild (bloque6h2)

    let aflojeNueva= document.getElementById ("inputAfloje").value;
    let aflojeh2= document.createElement ("h2")
    aflojeh2.innerHTML= `El afloje es: ${aflojeNueva}`;
    document.body.appendChild (aflojeh2)

// crea el objeto rutinaNueva
    const rutinaNueva= new Rutina (tituloNueva, entradaNueva, bloque1Nueva, bloque2Nueva, bloque3Nueva, bloque4Nueva, bloque5Nueva, bloque6Nueva, aflojeNueva);
//la agrego al array rutinaS
    rutinaS.push(rutinaNueva);
    console.log (rutinaNueva)
    console.log (rutinaS)
}


// BOTON 3. buscar rutinas que contengan palabra clave, ej: espalda.

let botonBuscar = document.getElementById ("botonBuscar");
    botonBuscar.innerHTML = "Buscar rutina";
    botonBuscar.addEventListener ("click", (e)=>{
        mostrarInput(),
        mostrarBusqueda(),
        e.preventDefault()
  })



function mostrarInput(){
    let mostrarInput= document.createElement ("input")
        mostrarInput.setAttribute ("id", "inputBuscar")
        mostrarInput.setAttribute ("placeholder", "buscar palabra clave")
        document.body.appendChild (mostrarInput) 

    let noMostrarMenuArmar=document.getElementById ("formularioArmarRutina")
        noMostrarMenuArmar.setAttribute ("style", "display:none")

 }

function mostrarBusqueda(){
    let botonBusqueda = document.createElement ("button")
        document.body.appendChild (botonBusqueda)
       
        botonBusqueda.innerHTML = "Buscar";

        botonBusqueda.addEventListener ("click", ()=>{
            buscarRutina()
            })
function buscarRutina (){
    let buscar=  document.getElementById ("inputBuscar").value;
    console.log(buscar) //para ver si funciona

    let encontrada= rutinaS.filter ((rutina)=>rutina.bloque1.indexOf(buscar)!==-1 ||
                                                rutina.bloque2.indexOf(buscar)!==-1 ||
                                                rutina.bloque2.indexOf(buscar)!==-1 || 
                                                rutina.bloque3.indexOf(buscar)!==-1 || 
                                                rutina.bloque4.indexOf(buscar)!==-1 || 
                                                rutina.bloque5.indexOf(buscar)!==-1 ||  
                                                rutina.bloque6.indexOf(buscar)!==-1);
    console.log (encontrada); // para ver si funciona

function listarEncontradas() {

    let listadoEncontradas = document.createElement ("table");
    listadoEncontradas.innerHTML="";
    listadoEncontradas.setAttribute ("id", "tablaRutinasEncontradas")

    const tablaHead2 = document.createElement("tr");

    const tablaTitulo2 = document.createElement("th");
        tablaTitulo2.innerHTML="Título de la rutina";
        tablaHead2.appendChild(tablaTitulo2);

    const tablaEntrada2 = document.createElement("th");
        tablaEntrada2.innerHTML="Entrada en calor";
        tablaHead2.appendChild(tablaEntrada2);   

    const tablaBloque12 = document.createElement("th");
        tablaBloque12.innerHTML="Bloque 1 ";
        tablaHead2.appendChild(tablaBloque12);

    const tablaBloque22 = document.createElement("th");
        tablaBloque22.innerHTML="Bloque 2 ";
        tablaHead2.appendChild(tablaBloque22);

    const tablaBloque32 = document.createElement("th");
        tablaBloque32.innerHTML="Bloque 3 ";
        tablaHead2.appendChild(tablaBloque32);

    const tablaBloque42 = document.createElement("th");
        tablaBloque42.innerHTML="Bloque 4 ";
        tablaHead2.appendChild(tablaBloque42);

    const tablaBloque52 = document.createElement("th");
        tablaBloque52.innerHTML="Bloque 5 ";
        tablaHead2.appendChild(tablaBloque52);

    const tablaBloque62 = document.createElement("th");
        tablaBloque62.innerHTML="Bloque 6 ";
        tablaHead2.appendChild(tablaBloque62);

    const tablaAfloje2 = document.createElement("th");
        tablaAfloje2.innerHTML="Afloje ";
        tablaHead2.appendChild(tablaAfloje2);
        
    listadoEncontradas.appendChild (tablaHead2);

    encontrada.forEach ((buscar)=>{
        const tablaRow2 = document.createElement("tr");

        let tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.Nombre}`;
        tablaRow2.appendChild(tablaTd2)
        
        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.Entrada}`;
        tablaRow2.appendChild(tablaTd2)

        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.bloque1}`;
        tablaRow2.appendChild(tablaTd2)

        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.bloque2}`;
        tablaRow2.appendChild(tablaTd2)

        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.bloque3}`;
        tablaRow2.appendChild(tablaTd2)

        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.bloque4}`;
        tablaRow2.appendChild(tablaTd2)

        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.bloque5}`;
        tablaRow2.appendChild(tablaTd2);

        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.bloque6}`;
        tablaRow2.appendChild(tablaTd2)
        
        tablaTd2 = document.createElement("td");
        tablaTd2.innerHTML=`${buscar.Afloje}`;
        tablaRow2.appendChild(tablaTd2)

        listadoEncontradas.appendChild (tablaRow2);
        tablaRow2.setAttribute ("id", "filas")
    })
    document.body.appendChild (listadoEncontradas);
}    
  listarEncontradas();
}}


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



