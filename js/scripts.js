import { productos } from './productos.js'
import { carritoIndex } from './carritoIndex.js'

const mostrarInventario = ( productos ) => {
    const contenedorProductos = document.getElementById('productos-contenedor')
    productos.forEach(producto => {
        const div= document.createElement('div')
        div.classList.add('card')
        div.innerHTML =  ` 
                                <img src="${producto.img}" class="card-img-top" alt="">
                                <h2 class="card-title">${producto.nombre}</h2>
                                <h3 class="card-text">$ ${producto.precio}</h3>
                                <button class="boton_add" id=boton${producto.id}>Agregar al Carrito</button>
                            `
    contenedorProductos.appendChild(div)  

    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', ()=>{
        
        carritoIndex(producto.id)
        console.log(`Funciono ${producto.nombre}`)
        
    })
    
    })
    
}


mostrarInventario(productos)


