let precio: number = document.getElementById("precio");
let descuento: number = document.getElementById("descuento");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let resultado: number = (precio.value * descuento.value) / 100;
  console.log(resultado);
});
