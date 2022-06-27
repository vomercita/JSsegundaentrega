

function productosFetch (){
    fetch ("/js/productosFetch.json")
    .then ((response)=> response.json())
    .then ((json)=> mostrarProductos(json))
  }

function mostrarProductos (productos){
    const divv= document.createElement ("div")
    divv.setAttribute("id", "divvElementos")
    document.body.appendChild(divv)

    productos.forEach (productos=>
        {
            const divProductos= document.createElement ("card")
            divProductos.innerHTML= `
            <img src='${productos.foto}'>
            <br>
            ${productos.nombre}
            <br>
            ${productos.precio}
            <br>
            ${productos.descripcion}
            <br><br><br><br>
            
        `
       
        divv.appendChild(divProductos)
        })
    
}
productosFetch();