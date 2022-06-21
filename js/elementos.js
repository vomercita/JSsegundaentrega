

function productosFetch (){
    fetch ("/js/productosFetch.json")
    .then ((response)=> response.json())
    .then ((json)=> mostrarProductos(json))
  }

function mostrarProductos (productos){
    const divv= document.createElement ("div")
    divv.setAttribute("style", "background-color:white")
    document.body.appendChild(divv)

    productos.forEach (productos=>
        {
            const divProductos= document.createElement ("card")
            divProductos.innerHTML= `
            <img src='${productos.foto}'>
            ${productos.nombre}
            <br>
            ${productos.precio}
            <br>
            ${productos.descripcion}
            <br>
            
        `
       
        divv.appendChild(divProductos)
        })
    
}
productosFetch();