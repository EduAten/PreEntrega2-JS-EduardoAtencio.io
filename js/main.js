let nombre = prompt("¡Bienvenido a Guitar Of Slash!\nIngrese su nombre para empezar a seleccionar nuestros productos:");
alert(`Hola ${nombre}, presione OK para continuar`);

const productos = [
  { id: 1, nombre: 'Guitarra', precio: 70000 },
  { id: 2, nombre: 'Bajo', precio: 80000 },
  { id: 3, nombre: 'Bateria', precio: 100000 },
  
];

let productosDisponibles = 'Productos disponibles:\n\n';
productos.forEach(producto => {
  productosDisponibles += `${producto.id}: ${producto.nombre} - $${producto.precio}\n`;
});
alert(productosDisponibles);

let seleccion;
let productoSeleccionado;

do {
  seleccion = parseInt(prompt('Seleccione el número del producto que desee comprar:'));
  productoSeleccionado = productos.find(producto => producto.id === seleccion);

  if (!productoSeleccionado) {
    alert('Producto no válido. Por favor, seleccione un producto válido.');
  }
} while (!productoSeleccionado);

let cantidad;
do {
  cantidad = parseInt(prompt(`Seleccione la cantidad de unidades (mínimo 2) para ${productoSeleccionado.nombre}:`));
} while (cantidad < 2);

const costoTotal = productoSeleccionado.precio * cantidad;
alert(`Resumen de la compra:\n\nProducto: ${productoSeleccionado.nombre}\nCantidad: ${cantidad} unidades\nCosto total: $${costoTotal}`);

let entrada;

do {
  entrada = prompt("Ingrese Si para solicitar envío o No para retirar por el local");

  switch (entrada) {
    case "Si":
      alert("Ha seleccionado la opción envío a domicilio");
      break;

    case "No":
      alert("Ha seleccionado retirar por el local");
      break;

    default:
      alert("Seleccione una opción correcta");
      break;
  }
} while (entrada !== "Si" && entrada !== "No");

alert("¡Gracias por su compra!");
