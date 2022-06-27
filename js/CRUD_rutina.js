/*tipo CRUD- mostrar botones: 
1. listar rutinas 
2. armar nueva 
3. buscar*/

//Nombre guardado en storage
function saludar(){
    const saludo = document.getElementById ("crudNombre");
    saludo.innerHTML = ` ${localStorage.getItem ("nombre") || "Nadador anónimo"}<br/>
                        Elige alguna de estas opciones`
    }
saludar();

//BOTON 1: Listar rutinas en DOM

let botonListar = document.getElementById ("botonListar")
    botonListar.innerHTML = "Listar rutinas";

botonListar.addEventListener ("click", (e)=>{
    listarRutina(),
    listadoEncontradas.innerHTML="",
    armarRutinas.innerHTML= "",
    eliminarInputBuscar(),
    e.preventDefault()
    Toastify({
       text: "Vas a ver el listado de todas las rutinas", 
       duration: 3000,
       gravity: "bottom",
       backgroundColor: "linear-gradient(0deg, rgba(34,193,195,0.4990371148459384) 0%, rgba(100,118,225,0.5214460784313726) 51%)",
     }).showToast();
  });

let listadoRutinas = document.createElement ("table");
    listadoRutinas.innerHTML="";
    listadoRutinas.setAttribute ("id", "tablaRutinasListadas")

function listarRutina() {
    const tablaHead = document.createElement("tr");

    const tablaTitulo = document.createElement("th");
        tablaTitulo.innerHTML="Título de la rutina";
        tablaHead.appendChild(tablaTitulo);

    const tablaEntrada = document.createElement("th");
        tablaEntrada.innerHTML="Entrada <br> en calor";
        tablaHead.appendChild(tablaEntrada);   

    const tablaBloque1 = document.createElement("th");
        tablaBloque1.innerHTML="Bloque<br> 1 ";
        tablaHead.appendChild(tablaBloque1);

    const tablaBloque2 = document.createElement("th");
        tablaBloque2.innerHTML="Bloque<br> 2 ";
        tablaHead.appendChild(tablaBloque2);

    const tablaBloque3 = document.createElement("th");
        tablaBloque3.innerHTML="Bloque<br> 3 ";
        tablaHead.appendChild(tablaBloque3);

    const tablaBloque4 = document.createElement("th");
        tablaBloque4.innerHTML="Bloque <br>4 ";
        tablaHead.appendChild(tablaBloque4);

    const tablaBloque5 = document.createElement("th");
        tablaBloque5.innerHTML="Bloque <br>5 ";
        tablaHead.appendChild(tablaBloque5);

    const tablaBloque6 = document.createElement("th");
        tablaBloque6.innerHTML="Bloque<br> 6 ";
        tablaHead.appendChild(tablaBloque6);

    const tablaAfloje = document.createElement("th");
        tablaAfloje.innerHTML="Afloje ";
        tablaHead.appendChild(tablaAfloje);
        
    listadoRutinas.appendChild (tablaHead);

    rutinaS.forEach ((rutina)=>{
        const tablaRow = document.createElement("tr");
        const {nombre,entrada, bloque1, bloque2, bloque3, bloque4, bloque5, bloque6, afloje} = rutina
        let tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${nombre}`;
        tablaRow.appendChild(tablaTd)
        
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${entrada}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque1}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque2}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque3}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque4}`;
        tablaRow.appendChild(tablaTd)

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque5}`;
        tablaRow.appendChild(tablaTd);

        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque6}`;
        tablaRow.appendChild(tablaTd)
        
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${afloje}`;
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
    eliminarInputBuscar (),
    listadoRutinas.innerHTML="", 
    listadoEncontradas.innerHTML="",
    e.preventDefault()
   Toastify({
       text: "Armá tu propia rutina y agregala al listado", 
       duration: 5000,
       gravity: "bottom",
       backgroundColor: "linear-gradient(0deg, rgba(34,193,195,0.4990371148459384) 0%, rgba(100,118,225,0.5214460784313726) 51%)",
     }).showToast();
  })

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


let armarRutinas = document.createElement ("table");
    armarRutinas.innerHTML="";
    armarRutinas.setAttribute ("id", "tablaRutinasArmadas")

function mostrarArmada() {
    const tablaHead = document.createElement("tr");

    const tablaTitulo = document.createElement("th");
        tablaTitulo.innerHTML="Título de la rutina";
        tablaHead.appendChild(tablaTitulo);

    const tablaEntrada = document.createElement("th");
        tablaEntrada.innerHTML="Entrada <br> en calor";
        tablaHead.appendChild(tablaEntrada);   

    const tablaBloque1 = document.createElement("th");
        tablaBloque1.innerHTML="Bloque<br> 1 ";
        tablaHead.appendChild(tablaBloque1);

    const tablaBloque2 = document.createElement("th");
        tablaBloque2.innerHTML="Bloque<br> 2 ";
        tablaHead.appendChild(tablaBloque2);

    const tablaBloque3 = document.createElement("th");
        tablaBloque3.innerHTML="Bloque<br> 3 ";
        tablaHead.appendChild(tablaBloque3);

    const tablaBloque4 = document.createElement("th");
        tablaBloque4.innerHTML="Bloque <br>4 ";
        tablaHead.appendChild(tablaBloque4);

    const tablaBloque5 = document.createElement("th");
        tablaBloque5.innerHTML="Bloque <br>5 ";
        tablaHead.appendChild(tablaBloque5);

    const tablaBloque6 = document.createElement("th");
        tablaBloque6.innerHTML="Bloque<br> 6 ";
        tablaHead.appendChild(tablaBloque6);

    const tablaAfloje = document.createElement("th");
        tablaAfloje.innerHTML="Afloje ";
        tablaHead.appendChild(tablaAfloje);
        
    armarRutinas.appendChild (tablaHead);

        const tablaRow = document.createElement("tr");
      
        let tituloNueva= document.getElementById ("inputTitulo").value;
        let tablaTd = document.createElement("td");
        tablaTd.innerHTML= `"${tituloNueva}"`;
        tablaRow.appendChild(tablaTd)

        let entradaNueva= document.getElementById ("inputEntrada").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${entradaNueva}`;
        tablaRow.appendChild(tablaTd)

        let bloque1Nueva= document.getElementById ("inputB1").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque1Nueva}`;
        tablaRow.appendChild(tablaTd)

        let bloque2Nueva= document.getElementById ("inputB2").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque2Nueva}`;
        tablaRow.appendChild(tablaTd)

        let bloque3Nueva= document.getElementById ("inputB3").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque3Nueva}`;
        tablaRow.appendChild(tablaTd)

        let bloque4Nueva= document.getElementById ("inputB4").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque4Nueva}`;
        tablaRow.appendChild(tablaTd)

        let bloque5Nueva= document.getElementById ("inputB5").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque5Nueva}`;
        tablaRow.appendChild(tablaTd);

        let bloque6Nueva= document.getElementById ("inputB6").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${bloque6Nueva}`;
        tablaRow.appendChild(tablaTd)

        let aflojeNueva= document.getElementById ("inputAfloje").value;
        tablaTd = document.createElement("td");
        tablaTd.innerHTML=`${aflojeNueva}`;
        tablaRow.appendChild(tablaTd)

    armarRutinas.appendChild (tablaRow);
    tablaRow.setAttribute ("id", "filas")
    
    document.body.appendChild (armarRutinas);
    
    let mostrarMenu=document.getElementById ("formularioArmarRutina")
    mostrarMenu.setAttribute ("style", "display:none")



// crea el objeto rutinaNueva
    const rutinaNueva= new Rutina (tituloNueva, entradaNueva, bloque1Nueva, bloque2Nueva, bloque3Nueva, bloque4Nueva, bloque5Nueva, bloque6Nueva, aflojeNueva);
//la agrego al array rutinaS
    rutinaS.push(rutinaNueva);
    console.log (rutinaNueva)
    console.log (rutinaS);
}

// BOTON 3. buscar rutinas que contengan palabra clave, ej: espalda.

let botonBuscar = document.getElementById ("botonBuscar");
    botonBuscar.innerHTML = "Buscar rutina";
    botonBuscar.addEventListener ("click", (e)=>{
        mostrarElInput(),
        mostrarBusqueda(),
        listadoRutinas.innerHTML="",
        armarRutinas.innerHTML= "",
        mostrarInput.setAttribute ("style", "display:inline"),
        botonBusqueda.setAttribute("style", "display:inline"),
        e.preventDefault(),
    Toastify({
       text: "Buscá una rutina poniendo una palabra clave, por ejemplo: espalda, manopla, crol", 
       duration: 5000,
       gravity: "bottom",
       backgroundColor: "linear-gradient(0deg, rgba(34,193,195,0.4990371148459384) 0%, rgba(100,118,225,0.5214460784313726) 51%)"
     }).showToast();
  })

let mostrarInput= document.createElement ("input")
    mostrarInput.setAttribute ("id", "inputBuscar")
    mostrarInput.setAttribute ("placeholder", "buscar palabra clave")

let botonBusqueda = document.createElement ("button")
    botonBusqueda.innerHTML = "Buscar";
    
function mostrarElInput(){
    document.body.appendChild (mostrarInput) 
    let noMostrarMenuArmar=document.getElementById ("formularioArmarRutina")
    noMostrarMenuArmar.setAttribute ("style", "display:none")
}
let listadoEncontradas = document.createElement ("table");
    listadoEncontradas.innerHTML="";

function mostrarBusqueda(){
        document.body.appendChild (botonBusqueda)
        botonBusqueda.addEventListener ("click", ()=>{
            buscarRutina();
            })
    function buscarRutina (){
        let buscar=  document.getElementById ("inputBuscar").value;
        let encontrada= rutinaS.filter ((rutina)=>  rutina.nombre.toLowerCase().indexOf(buscar.toLowerCase())!==-1 ||
                                                    rutina.bloque1.toLowerCase().indexOf(buscar.toLowerCase())!==-1 ||
                                                    rutina.bloque2.toLowerCase().indexOf(buscar.toLowerCase())!==-1 ||
                                                    rutina.bloque2.toLowerCase().indexOf(buscar.toLowerCase())!==-1 || 
                                                    rutina.bloque3.toLowerCase().indexOf(buscar.toLowerCase())!==-1 || 
                                                    rutina.bloque4.toLowerCase().indexOf(buscar.toLowerCase())!==-1 || 
                                                    rutina.bloque5.toLowerCase().indexOf(buscar.toLowerCase())!==-1 ||  
                                                    rutina.bloque6.toLowerCase().indexOf(buscar.toLowerCase())!==-1 );
        function listarEncontradas() {
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

            //destructuring
            const {nombre, entrada, bloque1, bloque2, bloque3, bloque4, bloque5, bloque6, afloje} = buscar

            let tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${nombre}`;
            tablaRow2.appendChild(tablaTd2)
            
            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${entrada}`;
            tablaRow2.appendChild(tablaTd2)

            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${bloque1}`;
            tablaRow2.appendChild(tablaTd2)

            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${bloque2}`;
            tablaRow2.appendChild(tablaTd2)

            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${bloque3}`;
            tablaRow2.appendChild(tablaTd2)

            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${bloque4}`;
            tablaRow2.appendChild(tablaTd2)

            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${bloque5}`;
            tablaRow2.appendChild(tablaTd2);

            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${bloque6}`;
            tablaRow2.appendChild(tablaTd2)
            
            tablaTd2 = document.createElement("td");
            tablaTd2.innerHTML=`${afloje}`;
            tablaRow2.appendChild(tablaTd2)

            listadoEncontradas.appendChild (tablaRow2);
            tablaRow2.setAttribute ("id", "filas")
        })
        document.body.appendChild (listadoEncontradas);
    }    
    listarEncontradas();
}}

function eliminarInputBuscar (){
    mostrarInput.setAttribute ("style", "display:none"),
    botonBusqueda.setAttribute("style", "display:none")
} 