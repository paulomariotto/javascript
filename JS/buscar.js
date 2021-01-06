const formulario = document.querySelector('#formulario')
const listaproductos = document.querySelector('#lista-productos')
formulario.addEventListener('submit', filtrarProductos )

function filtrarProductos(e) {
    e.preventDefault();
   
    const busqueda = document.querySelector('#buscador').value
    
    /*limpiar el listado de productos*/
    listaProductos.innerHTML = ''

    /* buscar el producto for each*/
    //const resultado = [] 
    //stockProductos.forEach(producto => {
    //    if ( producto.marca.includes(busqueda)) {
   //         resultado.push(producto)
    //    }
   // })

   /* con filter */
   const resultado = stockProductos.filter(producto => producto.marca.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
    
    

    resultado.forEach((producto, index) => {
        const {imagen, marca, descripcion, id} = producto
        
        const liCard = document.createElement('li')
        
        liCard.innerHTML = `
                    <div class="card-deck" style="width: 250;>
                    <div class="card">
                    <img src=${imagen} class="card-img-top" alt="picador atomic metal glinder de 4 partes">
                    <div class="card-body">
                    <h5 class="card-title marca">${marca}</h5>
                    <p class="card-text descripcion">${descripcion}</p>
                    <button type="button" class="btn btn-outline-secondary agregar-carrito" data-id=${id}>Agregar al Carrito</button>
                    </div>
                    </div>
                    
                    
                    
                    `
        
        
        if (index % 3 ==0) {
            const ul = document.createElement('ul')
            ul.classList.add('ul-cards', 'd-inline-flex')
            listaProductos.appendChild(ul)                 
            ul.appendChild(liCard)

        }else{
            const uls = document.querySelectorAll('#lista-productos .ul-cards')         
            const ul = uls[uls.length - 1]            
            ul.appendChild(liCard)
        }
    })   
    


}

const stockProductos = [
    {
        imagen:"Productos/picadores/picador-4partes-6colores.jpg",
        marca:"Atomic",
        descripcion:"Metal 4 partes",
        id:1,
    },
    {
        imagen:"Productos/picadores/picador-alunminio-4partes.jpg",
        marca:"Atomic",
        descripcion:"Alunminio 4 Partes",
        id:2,
    },
    {
        imagen:"Productos/picadores/picador-antique-40mm.jpg",
        marca:"Atomic",
        descripcion:"Metal 3 partes",
        id:3,
    },
    {
        imagen:"Productos/picadores/picador-metal52mm.jpg",
        marca:"Atomic",
        descripcion:"Metal Grande",
        id:4,
    },
    {
        imagen:"Productos/picadores/picador-metalskull3d50mm.jpg",
        marca:"Atomic",
        descripcion:"Calavera",
        id:5,
    },
    {
        imagen:"Productos/picadores/picador-plastico3partes.jpg",
        marca:"Atomic",
        descripcion:"Plastico 3 partes",
        id:6,
    },
    {
        imagen:"Productos/picadores/picador-plastico4partes.jpg",
        marca:"Atomic",
        descripcion:"Plastico 4 Partes",
        id:7,
    },
    {
        imagen:"Productos/picadores/picador-plasticochico.jpg",
        marca:"Atomic",
        descripcion:"Plastico Chico",
        id:8,
    },
    {
        imagen:"Productos/picadores/picador-4partes-surtidos.jpg",
        marca:"Glinder",
        descripcion:"Plastico",
        id:9,
    },
   
]