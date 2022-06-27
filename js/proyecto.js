/* 
1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE.
2- PREGUNTARLE CUÁNTOS METROS QUIERE NADAR Y COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON.
3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA.
4- SE MUESTRA LA RUTINA CORRESPONDIENTE A LAS ELECCIONES DEL USUARIO (NIVEL Y TIPO)
*/

//1- PREGUNTAR AL USUARIO COMO SE LLAMA Y SALUDARLO CON SU NOMBRE:

const inputNombre = document.getElementById ("inputNombre");

const btnNombre= document.getElementById ("btnNombre").addEventListener
("click", (e)=>{e.preventDefault(), guardarNombre()})

function guardarNombre(){
    let nombreGuardado= document.getElementById ("inputNombre").value || `"Nadador anónimo"`;
    localStorage.setItem ("nombre", nombreGuardado);
    localStorage.getItem("nombre")
    
    function sweet(){
        swal({
            title:`¡¡Bienvenid@ ${nombreGuardado} !!`,
            button: 'GRACIAS',
            timer: 5000,
            })
    }
    sweet()

}

// 2- PREGUNTARLE CUÁNTOS METROS PUEDE NADAR Y COLOCARLO EN CATEGORIA MOJARRITA, DELFIN O TIBURON.

const inputMetros = document.getElementById ("inputMetros");
let rutinaNivel;

const btnMetros= document.getElementById ("btnMetros").addEventListener
("click", (e)=>{decirNivel (), e.preventDefault()})

function decirNivel(){
    ((inputMetros.value <=1000) && (inputMetros.value >=0)) &&(rutinaNivel = "Mojarrita");
    ((inputMetros.value>1000) && (inputMetros.value <2000)) &&(rutinaNivel = "Delfín");
    (inputMetros.value>=2000) && (rutinaNivel = "Tiburón");
    (inputMetros.value=="") && (rutinaNivel= "???")

function sweet(){
    swal({
        title:`¡¡Felicitaciones!!`,
        text: `Eres nivel "${rutinaNivel}"`,
        button: 'GENIAL',
        timer: 5000,
        })
    }   
    sweet()
}

 
//3- DARLE 3 OPCIONES DE RUTINA PARA QUE ELIJA: VELOCIDAD, RESISTENCIA O MIXTA. 
//4- SE MUESTRA LA RUTINA CORRESPONDIENTE A LAS ELECCIONES DEL USUARIO (NIVEL Y TIPO).

let rutinaTipo = document.createElement ("div")
rutinaTipo.setAttribute ("id", "divDeRutina")
document.body.appendChild (rutinaTipo) 

const btnResistencia= document.getElementById ("btnResistencia").addEventListener
("click", (e)=>{
    function sweet(){
        swal({
            title:`¡Te ha tocado esta rutina de resistencia!`,
            button: 'QUIERO VER!',
            timer: 5000,
            icon: "img/flecha.png"
            })
        }   
        sweet()
    e.preventDefault();    
    (rutinaNivel==="Mojarrita") && (rutinaTipo.innerHTML= JSON.stringify (rutinaResistencia1, null, '<br>')) ;
    (rutinaNivel==="Delfín") && (rutinaTipo.innerHTML= JSON.stringify (rutinaResistencia2, null, '<br>'));
    (rutinaNivel==="Tiburón") && (rutinaTipo.innerHTML= JSON.stringify (rutinaResistencia3, null, '<br>'));
})

const btnVelocidad= document.getElementById ("btnVelocidad").addEventListener
("click", (e)=>{
    function sweet(){
        swal({
            title:`¡Te ha tocado esta rutina de velocidad!`,
            button: 'QUIERO VER',
            timer: 5000,
            icon: "img/flecha.png",
            })
        }   
        sweet()
    e.preventDefault();
    (rutinaNivel==="Mojarrita") && (rutinaTipo.innerHTML= JSON.stringify (rutinaVelocidad1, null, '<br>'));
    (rutinaNivel==="Delfín") && (rutinaTipo.innerHTML= JSON.stringify (rutinaVelocidad2, null, '<br>'));
    (rutinaNivel==="Tiburón") && (rutinaTipo.innerHTML= JSON.stringify (rutinaVelocidad3, null, '<br>'));
})
const btnMixta= document.getElementById ("btnMixta").addEventListener
("click", (e)=>{
    function sweet(){
        swal({
            title:`¡Te ha tocado esta rutina mixta!`,
            button: 'QUIERO VER',
            timer: 5000,
            icon: "img/flecha.png"
            })
        }   
        sweet()
    e.preventDefault();
    (rutinaNivel==="Mojarrita") && (rutinaTipo.innerHTML= JSON.stringify (rutinaMixta1, null, '<br>'));
    (rutinaNivel==="Delfín") && (rutinaTipo.innerHTML= JSON.stringify (rutinaMixta2, null, '<br>'));
    (rutinaNivel==="Tiburón") && (rutinaTipo.innerHTML= JSON.stringify (rutinaMixta3, null, '<br>'));
    

})
