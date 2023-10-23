const botonCarrito = document.querySelector('.iconoCarrito');
const carritoAbierto = document.querySelector('.contenedor-productos');
const botonCerrar = document.querySelector('.cruzCerrarCarrito');


botonCarrito.addEventListener("click",()=>{
    carritoAbierto.classList.toggle("hidden-cart");
});
botonCerrar.addEventListener("click",()=>{
    carritoAbierto.classList.toggle("hidden-cart");
})