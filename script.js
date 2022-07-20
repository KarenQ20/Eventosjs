class Producto {
  constructor(nombre, marca, precio, cantidad) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const productos = [];

const form = document.getElementById("idform");
const divproductos = document.querySelector("#divproductos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("idnombre").value;
  let marca = document.getElementById("idmarca").value;
  let precio = parseFloat(document.getElementById("idprecio").value);
  let cantidad = parseInt(document.getElementById("idcantidad").value);

  const producto = new Producto(nombre, marca, precio, cantidad);

  productos.push(producto);

  console.log(productos);

  form.reset();
});

document.querySelector("#botonproductos").addEventListener("click", () => {
  productos.forEach((producto) => {
    divproductos.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px">
          <div class="card-body">
             <h5 class="card-title">${producto.nombre}</h5>
             <p class="card-text"> Marca:${producto.marca}</p>
             <p class="card-text"> Precio:${producto.precio}</p>
             <p class="card-text"> Cantidad:${producto.cantidad}</p>
             <button class= "btn btn-danger"> Eliminar</button>
        </div>
       </div> 

        `;
  });
});