const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const listaProductos = document.querySelector('#lista-productos')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = []

listaProductos.addEventListener('click', agregarProducto)

carrito.addEventListener('click', eliminarProducto)
vaciarCarritoBtn.addEventListener('click, vaciarCarrito')

document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []

    insertarCarritoHTML()
})

function vaciarCarrito() {
    borrarHTML()
    articulosCarrito = []
    guardarStorage()
}

function agregarProducto(e) {
    e.preventDefault()
    if (e.target.classList.contains("agregar-carrito")) {
        const productoSeleccionado = e.target.parentElement.parentElement

        productoSeleccionado.querySelector('button').getAttribute('data-id')
        obtenerDatosProducto(productoSeleccionado)
    }
}

function eliminarProducto(e) {
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id')

        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId)

        insertarCarritoHTML()
        guardarStorage()

    }

}


function obtenerDatosProducto(producto) {
    /* extraemos informacion del producto seleccionado */
    const productoAgregado = {
        imagen: producto.querySelector('img').src,
        marca: producto.querySelector('h5').textContent,
        descripcion: producto.querySelector('p').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some(producto => producto.id === productoAgregado.id)

    if (existe) {
        const productos = articulosCarrito.map(producto => {
            if (producto.id === productoCarrito.id) {
                producto.cantidad++
                // producto.precio = productoAgregado.precio*producto.cantidad
                //producto.precio = Number(productoAgregado.precio.slice(1)) * producto.cantidad
                return producto
            } else {
                return producto
            }
        })
        articulosCarrito = [...productos]
    } else {
        articulosCarrito = [...articulosCarrito, productoAgregado]
    }



    /*agregar el procuto al carrito */
    //articulosCarrito = [...articulosCarrito, productoAgregado]

    articulosCarrito.push(productoAgregado)
    insertarCarritoHTML()


}

function insertarCarritoHTML() {
    borrarHTML()

    articulosCarrito.forEach(producto=> {
        const {marca, descripcion, cantidad, id} = producto

        const row = document.createElement('tr')

        row.innerHTML = 
        '<td><img src = "${imagen}"></td> '           
        '<td>${marca}</td> '
        '<td>${descripcion}</td>'                    
        '<td>${cantidad}</td>'
        '<td><a href="#" class="borrar-producto" data - id="${id}" > X </a></td>'
        
       
            

        contenedorCarrito.appendChild(row);

    })

    guardarStorage()
}

function guardarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}


function borrarHTML() {

    //contenedorCarrito.innerHTML = ''

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}