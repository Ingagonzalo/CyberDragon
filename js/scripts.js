

const items = [] /*Creo mi array */
const carrito = []

class item { /*Creo Mi constructor */
    constructor(id, category, name, price) {
        this.id = id
        this.category = category
        this.name = name
        this.price = price
    }
    finalPrice() { /*Aplico el IVA */
        return parseFloat((this.importe * 1.21).toFixed(2))
    }
} 




function generadorAutomatico() { //generador automatico de arrays
    items.push(new item(1234, "Almacenamiento", "DISCO SOLIDO SSD 240GB KINGSTON A400 SATAIII", 4499))
    items.push(new item(2934, "Notebook", "NOTEBOOK MSI KATANA GF76 12UC I5 12500H RTX", 249990))
    items.push(new item(1964, "Almacenamiento", "DISCO SOLIDO SSD 250GB KINGSTON NV1 M2 NVME", 4695))
    items.push(new item(1694, "Procesadores", "PROCESADOR AMD RYZEN 5 5600G 4.4GHZ AM4", 30000))
    items.push(new item(9523, "Placa de Video", "PLACA DE VIDEO ASUS TUF RX 6900 XT", 255000))
    items.push(new item(7523, "Placa de Video", "MSI GEFORCE NVIDIA RTX 3070TI VENTUS 3X 8GB OC", 167000))
    items.push(new item(9813, "Mouse", "MOUSE REDRAGON M610 GAINER", 1500))
    items.push(new item(1294, "Placa de Video", "MSI PREVENTA GEFORCE NVIDIA 3090 RTX GAMING", 315000))
    items.push(new item(6213, "Cooler", "COOLER AEROCOOL ASTRO 12 ARGB 120MM", 3000))
    
}
generadorAutomatico();




function itemsList() { /*Me permite ver uan tabla con los datos ingresados */
    console.table(items)
   
} 

function shopList() { /*Me permite ver uan tabla con los datos ingresados */
    console.table(carrito)
   
} 
    
 function addItem() { /*añado un item */
    debugger
    let id = newID()
    let category = prompt("Ingresa la categoria del producto:")
    let name = prompt("Ingresa el nombre del producto:").toUpperCase()
    let price = parseFloat(prompt("Ingresa el precio:"))
        items.push(new item(id, category, name, price))
}
    
function newID() { /*Genero un id random */
    return parseInt(Math.random() * 10000)
}
    


function showArray() {
for (let item of items) {
    console.table(item)
}
}

function showShop() {
    for (let shop of carrito) {
        console.table(shop)
    }
    }
        
function searchItem() {
    let search= prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    debugger
    let resultado = items.find((item)=> item.name.includes(search)) //texto parcial
    if (resultado !== undefined) {
        console.clear()
        console.table(resultado) //mostrar el resultado en pantalla
    }
}


import { productos } from './productos.js'
import { carritoIndex } from './carritoIndex.js'

const mostrarProductos = ( productos ) => {
    const contenerdorProductos = document.getElementById('productos-contenedor')
    productos.forEach(producto => {
        const div= document.createElement('div')
        div.classList.add('card')
        div.innerHTML +=  ` 
                                <img src="${producto.img}" class="card-img-top" alt="">
                                <h2 class="card-title">${producto.nombre}</h2>
                                <h3 class="card-text">$ ${producto.precio}</h3>
                                <button class="boton_add" id=boton${producto.id}>Comprar</button>
                            `
    contenerdorProductos.appendChild(div)  
    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', ()=>{
        carritoIndex(producto.id)
        alert(`Se agrego ${producto.nombre}`)
    })
    
    })
    
}


mostrarProductos(productos)

