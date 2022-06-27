/*CONVERSOR DE PILETAS Y METROS:
Para que el usuario pueda colocar cuántas piletas corresponden a tantos metros, en una pileta de 20m de largo,
o bien en una pileta de 25m. de largo.

1- lo primero es preguntarle al usuario la cantidad de metros a convertir en piletas, ej:1000 metros.
2- luego preguntar, en piscina de qué largo? 18, 20, 25 o 50 m?
3- se hace la cuenta (50 piletas si es una de 20m o 40 piletas, si es una de 25m.)
y arroja el resultado.
*/

function saludar(){
    const saludo = document.getElementById ("convNombre");
    saludo.innerHTML = ` ${localStorage.getItem ("nombre")|| "Nadador anónimo"}<br/>
                        Elige entre estas tres opciones`
}
saludar();


const form1= document.getElementById ("formMetrosA");

const piletasA = document.getElementById ("btnMetrosA").addEventListener(
    "click", (e)=> {e.preventDefault(), 
    form1.setAttribute("style", "display:inline-block")
    form2.setAttribute("style", "display:none")  
})

const form2= document.getElementById ("formPiletasA");

const metrosA = document.getElementById ("btnPiletasA").addEventListener (
    "click", (e)=> {e.preventDefault(),
    form2.setAttribute("style", "display:inline-block")
    form1.setAttribute("style", "display:none")       
    }) 

// METROS A PILETAS
let inputMetrosA= document.getElementById ("inputMetrosA");
let inputMetrosPileta= document.getElementById ("inputMetrosPileta");

const botonEnviarMetrosA = document.getElementById ("botonEnviarMetrosA").addEventListener (
    "click", (e)=> {
        metrosApiletas(), 
        e.preventDefault()}
    );

function metrosApiletas(){
    let piletasTotales = parseInt(inputMetrosA.value / inputMetrosPileta.value);
    const totalPiletas = document.getElementById ("totalPiletas");
    totalPiletas.innerHTML = 
    `CONVERSOR DE METROS A PILETAS: <br/>
                        - Metros a nadar: ${inputMetrosA.value || 0} metros. <br/>
                        - Largo de la pileta: ${inputMetrosPileta.value || 0} metros. <br/>
                        - El TOTAL DE PILETAS a nadar es de ${piletasTotales || 0}`
    totalPiletas.setAttribute ("style", "background-color: rgba(144, 247, 247, 0.575)")

    function sweetMetros (){
        swal({
         title:`- El TOTAL DE PILETAS a nadar es de ${piletasTotales || 0}`,
         timer: 3000,})
     }; 
     sweetMetros()
}
 
 
 //PILETAS A METROS
    
let inputPiletasA= document.getElementById ("inputPiletasA");
let inputMetrosPileta2= document.getElementById ("inputMetrosPileta2");

const botonEnviarPiletasA = document.getElementById ("botonEnviarPiletasA").addEventListener (
    "click", (e)=>{
        piletasAmetros(), 
        e.preventDefault()}
);

function piletasAmetros(){
    let metrosTotales= parseInt(inputPiletasA.value*inputMetrosPileta2.value);
    const totalMetros= document.getElementById ("totalMetros");
    totalMetros.innerHTML = ` CONVERSOR DE PILETAS A METROS: <br/> 
                        - Piletas a nadar: ${inputPiletasA.value || 0} <br/>  
                        - Largo de la pileta: ${inputMetrosPileta2.value || 0} metros. <br/>
                        - El TOTAL DE METROS a nadar es de: ${metrosTotales || 0} metros.`
    totalMetros.setAttribute ("style", "background-color: rgba(144, 247, 247, 0.575)")

    function sweetPiletas (){
        swal({
         title:`- El TOTAL DE METROS a nadar es de: ${metrosTotales || 0} metros.`,
         timer: 3000,})
     }; 
     sweetPiletas()
}



//uso de API externa

function random() {
    const botonRandom = document.createElement("button")
    botonRandom.innerHTML= "Frase Ramdom"
    botonRandom.addEventListener("click", () => {
 
       fraseRandom();
    })
    document.body.appendChild(botonRandom)
 }
 random()
 
 function fraseRandom() {
    fetch("https://catfact.ninja/fact")
       .then((response) => response.json())
       .then((json) => mostrarFrase(json))
 }
 
 function mostrarFrase(frase) {
    
       const divFrase = document.createElement("div");
       divFrase.innerHTML = `${frase.fact}                
       `
       divFrase.setAttribute ("id", "divFrase")
       document.body.appendChild(divFrase)
}
 