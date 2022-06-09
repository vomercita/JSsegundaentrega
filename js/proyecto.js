/* 
1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE.
2- PREGUNTARLE CUÁNTOS METROS QUIERE NADAR Y COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON.
3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA.
4- SE MUESTRA LA RUTINA CORRESPONDIENTE A LAS ELECCIONES DEL USUARIO (NIVEL Y TIPO)
*/

//1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE:

const inputNombre = document.getElementById ("inputNombre");

const btnNombre= document.getElementById ("btnNombre").addEventListener
("click", (e)=>{saludar (), e.preventDefault(), guardarNombre()})

function saludar(){
    const saludo = document.getElementById ("bienvenida");
    saludo.innerHTML = `¡¡Bienvenid@ : ${inputNombre.value || "Nadador anónimo"} !!<br/>`
}
function guardarNombre(){
    let nombreGuardado= document.getElementById ("inputNombre").value || `"Nadador anónimo"`;
    localStorage.setItem ("nombre", nombreGuardado);
    localStorage.getItem("nombre")
}

// 2- PREGUNTARLE CUÁNTOS METROS PUEDE NADAR Y COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON.

const inputMetros = document.getElementById ("inputMetros");
let rutinaNivel;

function decirNivel(){
    let niveles = document.getElementById ("niveles");

    ((inputMetros.value <=1000) && (inputMetros.value >=0)) &&(rutinaNivel = "Mojarrita");
    ((inputMetros.value>1000) && (inputMetros.value <2000)) &&(rutinaNivel = "Delfín");
    (inputMetros.value>=2000) && (rutinaNivel = "Tiburón");
    niveles.innerHTML = `¡Felicitaciones! eres nivel: ${rutinaNivel}.<br/>`;
}
const btnMetros= document.getElementById ("btnMetros").addEventListener
("click", (e)=>{decirNivel (), e.preventDefault()})


//3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA. 
//4- SE MUESTRA LA RUTINA CORRESPONDIENTE A LAS ELECCIONES DEL USUARIO (NIVEL Y TIPO).

let rutinaTipo = document.createElement ("div")
rutinaTipo.setAttribute ("id", "divDeRutina")
document.body.appendChild (rutinaTipo) 

const btnResistencia= document.getElementById ("btnResistencia").addEventListener
("click", (e)=>{
    tipo.innerHTML ="Elegiste una rutina de resistencia";
    e.preventDefault();    
    (rutinaNivel==="Mojarrita") && (rutinaTipo.innerHTML= JSON.stringify (rutinaResistencia1));
    (rutinaNivel==="Delfín") && (rutinaTipo.innerHTML= JSON.stringify (rutinaResistencia2));
    (rutinaNivel==="Tiburón") && (rutinaTipo.innerHTML= JSON.stringify (rutinaResistencia3));
})

const btnVelocidad= document.getElementById ("btnVelocidad").addEventListener
("click", (e)=>{
    tipo.innerHTML ="Elegiste una rutina de velocidad";
    e.preventDefault();
    (rutinaNivel==="Mojarrita") && (rutinaTipo.innerHTML= JSON.stringify (rutinaVelocidad1));
    (rutinaNivel==="Delfín") && (rutinaTipo.innerHTML= JSON.stringify (rutinaVelocidad2));
    (rutinaNivel==="Tiburón") && (rutinaTipo.innerHTML= JSON.stringify (rutinaVelocidad3));
})
const btnMixta= document.getElementById ("btnMixta").addEventListener
("click", (e)=>{
    tipo.innerHTML ="Elegiste una rutina mixta";
    e.preventDefault();
    (rutinaNivel==="Mojarrita") && (rutinaTipo.innerHTML= JSON.stringify (rutinaMixta1));
    (rutinaNivel==="Delfín") && (rutinaTipo.innerHTML= JSON.stringify (rutinaMixta2));
    (rutinaNivel==="Tiburón") && (rutinaTipo.innerHTML= JSON.stringify (rutinaMixta3));
})