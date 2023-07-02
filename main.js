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

