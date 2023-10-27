const botonCarrito = document.querySelector('.iconoCarrito');
const carritoAbierto = document.querySelector('.contenedor-productos');


//carrito (mostrar y ocultar)
botonCarrito.addEventListener("click",()=>{
    carritoAbierto.classList.toggle("hidden-cart");
});

const listaProductos = document.querySelector('.contenedorProductos');
const filaProducto = document.querySelector('.filaProducto');

let productosEnCarrito = [];


listaProductos.addEventListener('click', e=>{
    if (e.target.classList.contains('botonComprar')){
        const producto = e.target.parentElement;
        
        const infoProducto = {
            cantidad: 1,
            titulo: producto.querySelector('h2').textContent,
            precio: producto.querySelector('p').textContent

        }
        const existencia = productosEnCarrito.some(producto => producto.titulo === infoProducto.titulo);
        if (existencia){
            const productos = productosEnCarrito.map(producto => {
                if(producto.titulo === infoProducto.titulo){
                producto.cantidad++;
            return producto;
            } else{
                return producto;
            }
        });
            productosEnCarrito = [...productos]
        } else {

        productosEnCarrito = [...productosEnCarrito, infoProducto]
        }
        showHTML();
        }
})


const showHTML = () =>{
    
    filaProducto.innerHTML='';
    productosEnCarrito.forEach(productoo =>{
    const contenedorCarritoProducto = document.createElement("div");
    contenedorCarritoProducto.classList.add("carritoEnSi");

    contenedorCarritoProducto.innerHTML = `<div class="infoProductoCarrito">
                                        <span class="cantidadProductoCarrito">${productoo.cantidad}</span>
                                        <p class="tituloProductoCarrito">${productoo.titulo}</p>
                                        <span class="precioProductoCarrito">${productoo.precio}</span>

                                    <div class="cerrarCarrito">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"    class="cruzCerrarCarrito">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    </div>`;

    filaProducto.append(contenedorCarritoProducto);

})

}