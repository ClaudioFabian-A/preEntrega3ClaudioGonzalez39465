const formulario = document.getElementById('formulario')
const datoNombre = document.getElementById('nombre')
const datoApellido = document.getElementById('apellido')
const titulo = document.getElementById('titulo')
const divcard = document.getElementById('cardsArticulos')


formulario.onsubmit = (envia) => {
    envia.preventDefault()

    const datosCliente = {
        nombre: datoNombre.value,

    }

    localStorage.setItem('datosDelCliente', JSON.stringify(datosCliente))
    formulario.remove()
    titulo.innerText = `Buen dia ${datoNombre.value}.`



}

class Articulo {

    constructor(id, nombre, precio, descripcion, stock, imagen) {

        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.stock = stock
        this.imagen = imagen
    }


}
const articulos = [

    new Articulo(1, 'taza', 2500, 'articulo de comedor', 100, ''),
    new Articulo(2, 'vaso', 1500, 'articulo de comedor', 100, ''),
    new Articulo(3, 'plato', 2000, 'articulo de comedor', 100, ''),
    new Articulo(4, 'cuchar', 1000, 'articulo de comedor', 100, ''),
    new Articulo(5, 'tenedor', 1000, 'articulo de comedor', 100, ''),
    new Articulo(6, 'cuchillo', 1000, 'articulo de comedor', 100, ''),
    new Articulo(7, 'servilleta', 1500, 'articulo de comedor', 100, ''),
    new Articulo(8, 'repasador', 2000, 'articulo de comedor', 100, ''),
    new Articulo(9, 'mantel', 2500, 'articulo de comedor', 100, ''),
    new Articulo(10, 'copa', 5000, 'articulo de comedor', 100, ''),

]


articulos.forEach((art) => {

    divcard.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${''}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${art.nombre}</h5>
          <p class="card-text">${art.precio}</p>
          <button id=${art.id} class="btn btn-secondary">Comprar</button>
        </div>
      </div>`

    console.log(art.id);
}
)
console.log(articulos);


const carrito = []

const botonesDeCard = document.querySelectorAll('.btn-secondary')
//console.log(botonesDeCard);
botonesDeCard.forEach((boton) => {
    boton.onclick = () => {
        const articulo = articulos.find((art) => art.id === parseInt(boton.id))

        const prodCarrito = {
            id: articulo.id,
            nombre: articulo.nombre,
            precio: articulo.precio,
            descripcion: articulo.descripcion,
            cantidad: 1,
        }


        const indexProd = carrito.findIndex((prod) => prod.id === prodCarrito.id)
        if (indexProd === -1) {
            carrito.push(prodCarrito)
        } else {
            carrito[indexProd].cantidad++
        }
        console.log(carrito)










    }
})


const botonFinCompra = document.getElementById('confirmaCarrito')
const thead = document.querySelector('#thead')
const tbody = document.querySelector('#tbody')
const parrafoTotal = document.querySelector('#total')


botonFinCompra.onclick = () => {
    cardsArticulos.remove()
    botonFinCompra.remove()
    thead.innerHTML = `<tr>
<th scope="col">Producto</th>
<th scope="col">Cantidad</th>
<th scope="col">Total</th>
</tr>`
    let totalCompra = 0
    carrito.forEach(prod => {
        totalCompra += prod.cantidad * prod.precio
        tbody.innerHTML += `
    <tr>
      <td>${prod.nombre}</td>
      <td>${prod.cantidad}</td>
      <td>${prod.cantidad * prod.precio}</td>
    </tr>
    `
    })
    parrafoTotal.innerText = `El total de tu compra es ${totalCompra}`
    console.log(carrito);
}









