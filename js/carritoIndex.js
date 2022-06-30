import {productos} from './productos.js';
/*ESTOY TENIENDO UN ERROR PARA UTILIZAR ESTA PARTE QUE EXPLICAN EN EL AFTERCLASS PERO YA LE VOY A DAR LA VUELTA */
let carritoCompras = [];

export const carritoIndex = (productoId) => {

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const cargarProductoCarrito = () => {
        let producto = productos.find(producto => producto.id == productoId)
        carritoCompras.push(producto)
        producto.cantidad = 1



    
        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML += `
                        <div>

                            <div>
                                
                                <h2 class="card_title_carrito">${producto.nombre}</h2>
                                <h3 class="card-text_carrito">$ ${producto.precio}</h3>
                                <p id="cantidad${producto.id}">Cantidad:${producto.cantidad}<p/>
                            </div>
                            <img src="${producto.img}"alt="">
                        
                        </div>
                        `
        contenedorCarrito.appendChild(div)

    }
    cargarProductoCarrito()


}

document.querySelector("#carrito").onclick = function () {
    document.querySelector("#modal-container").style.display = "flex"
    // body...
}


document.querySelector("#cerrar").onclick = function () {
    document.querySelector("#modal-container").style.display = "none"
    // body...
}