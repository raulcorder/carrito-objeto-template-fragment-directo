// const carrito = document.getElementById("carrito");
// const template = document.getElementById("template");
// const fragment = document.createDocumentFragment();
// const btnsBotones = document.querySelectorAll(".card .btn");

// const carritoObjeto = [];

// const agregarAlCarrito = (e) => {
//   console.log(e.target.dataset.fruta);

//   const producto = {
//     titulo: e.target.dataset.fruta,
//     id: e.target.dataset.fruta,
//     cantidad: 1,
//   };

//   const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

//   console.log(indice);

//   if (indice === -1) {
//     carritoObjeto.push(producto);
//   } else {
//     carritoObjeto[indice].cantidad++;
//   }
//   console.log(carritoObjeto);
//   pintarCarrito(carritoObjeto);

//   // console.log(carritoObjeto);
// };

// const pintarCarrito = (array) => {
//   carrito.textContent = "";

//   array.forEach((item) => {
//     const clone = template.content.firstElementChild.cloneNode(true);
//     clone.querySelector(".lead").textContent = item.titulo;
//     clone.querySelector(".badge").textContent = item.cantidad;

//     fragment.appendChild(clone);
//   });

//   carrito.appendChild(fragment);
// };

// btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

// const frutas = ["🍌", "🍏", "🍓"];

// const nuevoArray = frutas.map((item) => item);

// console.log(nuevoArray);

// const users = [
//     { name: "John", age: 34 },
//     { name: "Amy", age: 20 },
//     { name: "camperCat", age: 10 },
// ];

// const names = users.map((user) => user.name);

// console.log(names);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosPorDos = numeros.map((num) => num * 2);
// console.log(numerosPorDos);

// const users = [
//   { uid: 1, name: "John", age: 34 },
//   { uid: 2, name: "Amy", age: 20 },
//   { uid: 3, name: "camperCat", age: 10 },
// ];

// // para filtrar elementos
// const mayores = users.filter((user) => user.age >= 30);
// console.log(mayores);

// // para que nos devuelva un array sin un elemento
// const userFiltrado = users.filter((user) => user.uid !== 3);
// console.log(userFiltrado);

// // para encontrar elementos OJO devuelve el primer elemento. Si es array, array. Objeto devuelve objeto.
// const { age } = users.find((user) => user.uid === 2);
// console.log(age);

// // comprobar si existen elementos con una condicion
// const existe = users.some((user) => user.uid === 4);
// console.log(existe);

// // Encontrar un índice. Si no existe tira -1
// const indice = users.findIndex((user) => user.uid === 4);
// console.log(indice);

// //devuelve un pedazo de array ojo con los indices indicados
// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// //             0     [1      2]        3
// const arrayNuevo = arr.slice(1, 3);
// console.log(arrayNuevo);

// //une dos Arrays RaRO se utiliza mejor Spread
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2);

// console.log(array3);

// //Spread
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = [...array1, ...array2];

// console.log(array3);

// const array3b = [...array2, ...array1];

// console.log(array3b);

// //reduce acumula valores en arrays u objetos resultado de la suma 15
// const numeros = [1, 2, 3, 4, 5];

// const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
// console.log(sumarTodos);

// aplanar array
// const arrayNumeros = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// // con REDUCE
// const soloNumeros = arrayNumeros.reduce((acc, current) => acc.concat(current));

// console.log(soloNumeros);

// // con SPREAD operator
// const arrayNumeros = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const arrayPlano = [].concat(...arrayNumeros);
// console.log(arrayPlano);

// // // con flat() OJO nuevo y experimental incluye elementos anidados const arrayNumeros = [1, 2, [3, 4, [5, 6]]];
// const arrayNumeros = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const flatSingle = arrayNumeros.flat();
// console.log(flatSingle);

// // con split.
// const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const arrayMeses = cadenaMeses.split(",");
// console.log(arrayMeses);

// //con join Si no le indico el separador deseado, pone ","
// const nuevoTexto = arrayMeses.join("-");
// console.log(nuevoTexto);

// NUEVA PRACTICA DOM "2"
// const padre = document.querySelector(".border-primary");
// const hijo = document.querySelector(".border-secondary");
// const nieto = document.querySelector(".border-danger");

// padre.addEventListener(
//   "click",
//   () => {
//     console.log("Me diste Click padre");
//   },
//   true
// );

// hijo.addEventListener(
//   "click",
//   () => {
//     console.log("Me diste Click hijo");
//   },
//   true
// );

// nieto.addEventListener(
//   "click",
//   () => {
//     console.log("Me diste Click nieto");
//   },
//   true
// );

// //stop Propagation
// const cajitas = document.querySelectorAll(".border");

// cajitas.forEach((caja) => {
//   caja.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Me diste Click");
//   });
// });

// // preventDefault
// const formulario = document.querySelector("form");

// formulario.addEventListener("submit", (e) => {
//   console.log("Me diste Click");
//   e.preventDefault();
// });

const container = document.querySelector(".container");

// si hago document.addEventListener funciona para cualquier evento en todo el docuemnto
container.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id === "padre") {
    console.log("Diste click al padre");
  }
  console.log(e.target.matches(".border-secondary"));

  if (e.target.matches(".border-secondary")) {
    console.log("diste click al hijo");
  }

  console.log(e.target.dataset.div);
  if (e.target.dataset.div === "divNieto") {
    console.log("diste click al nieto");
  }
});
