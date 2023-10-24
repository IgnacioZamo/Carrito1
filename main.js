const botonCarrito = document.querySelector('.iconoCarrito');
const carritoAbierto = document.querySelector('.contenedor-productos');



botonCarrito.addEventListener("click",()=>{
    carritoAbierto.classList.toggle("hidden-cart");
});

const listaProductos = document.querySelector('.contenedorProductos');
const filaProducto = document.querySelector('.filaProducto');

listaProductos.addEventListener('click', e=>{
    console.log(e.target);
})