//PRE ENTREGA 1
/*
function entrega1(){
let saludo = alert(
  "Gracias por comprar con nosotros! A continuación deberá brindarnos información sobre su compra"
);
let monto =""
do {
  monto = parseInt(prompt("Ingrese el monto total de su compra"));
  
} while (monto == "" || isNaN(monto));

let formaDePago = parseInt(
  prompt(
    "Por favor selecciones su forma de pago:\n 1) efectivo (15%off)\n  2)12 cuotas (20% de recargo)\n 3) transferencia bancaria (10% off)\n 4) 3 cuotas sin interes"
  )
);

let formaDePagoElegida = formaDePago;

console.log(formaDePagoElegida);

if (formaDePagoElegida >4){
    alert('Por favor elija una opcion válida')
} else {
    switch (formaDePagoElegida) {
  case 1:
    alert("La forma de pago elegida es efectivo, y el monto total es de $" +
        monto * 0.85);
    break;
  case 2:
    alert("La forma de pago elegida es 12 cuotas, y el monto total es de $" +
        monto * 1.20);
    break;
  case 3:
    alert("La forma de pago elegida es trasferencia bancaria, y el monto total es de $" +monto * 0.9);
    break;
  case 4:
    alert("La forma de pago elegida es trasferencia 3 cuotas sin interés, y cada cuota será de  $" + monto / 3);
    break;
}
}
}
entrega1();
*/

//PRE ENTREGA 2



function entrega2() {
  let saludo = alert(
    "Hola! gracias por utilizar nuestro software para actualizar su inventario"
  );
  const productos = [];
  class Producto {
    constructor(nombre, precio, stock, fechaDeIngreso) {
      (this.nombre = nombre), (this.precio = precio * 1.21);
      this.stock = stock;
      this.fechaDeIngreso = new Date(fechaDeIngreso);
    }
  }
  for (let i = 0; i < 4; i++) {
    let nombre = prompt("ingrese el nombre del producto");
    let precio = parseInt(prompt("Ingrese el precio por unidad"));
    let stock = parseInt(prompt("ingrese la cantidad da unidades ingresadas"));
    let fechaDeIngreso = prompt(
      "ingrese la fecha de carga del producto en el formato YYYY-MM-DD"
    );
    let nuevoProducto = new Producto(nombre, precio, stock, fechaDeIngreso);
    productos.push(nuevoProducto);
  }
  console.log(productos);

  let totalPrecios = 0;
  for (const producto of productos) {
    totalPrecios += producto.precio * producto.stock;
  }
  console.log("el total invertido es de $" + totalPrecios);
  let productoABuscar = prompt(
    "ingrese el nombre del prod que desea buscar en el inventario"
  );
  const busqueda = productos.find(
    (producto) => producto.nombre === productoABuscar
  );
  console.log(busqueda);
  const ordenarProductos = parseInt(
    prompt(
      "Elija si desea ordenar los productos: \n 1)de menor a mayor precio. \n 2) de mayor a menor precio"
    )
  );
  if (ordenarProductos === 1) {
    return productos.sort((a, b) => a.precio - b.precio);
  } else if (ordenarProductos === 2) {
    return productos.sort((a, b) => b.precio - a.precio);
  }
  console.log(productos);

}
entrega2();
