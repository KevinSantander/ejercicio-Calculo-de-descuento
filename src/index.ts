let precio: number = Number(dato1.value);
let descuento: number = Number(dato2.value);
let descuentoFinal: number = Number(precio * descuento);
console.log("el precio final es", descuentoFinal);

precio = document.getElementById("dato1");
descuento = document.getElementById("dato2");

btncalcular.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("el dato ingresado es ", precio.value * descuento.value);
  //}
});
