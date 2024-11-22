let who = ["Mi perro", "Mi hermana", "Mi gato", "Mi abuela"];
let action = [
  "se desmayó",
  "vomitó",
  "se atoró con un hueso",
  "compró un SEAT Panda",
  "se puso de parto"
];
let where = [
  "en mi casa",
  "en mis documentos",
  "en el veterinario",
  "en el autobús",
  "en el Pc gamer del vecino"
];
let when = [
  "mientras estaba viniendo a clase",
  "cuando estaba estudiando",
  "mientras copiaba el código en ChatGPT",
  "mientras mi primo, amigo de Anonimous, me explicaba el ejercicio"
];

function generadorDeExcusas() {
  let quien = who[Math.floor(Math.random() * who.length)];
  let queHizo = action[Math.floor(Math.random() * action.length)];
  let donde = where[Math.floor(Math.random() * where.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];
  return quien + " " + queHizo + " " + donde + " " + cuando;
  //console.log(quien + " " + queHizo + " " + donde + " " + cuando);
}
let result = generadorDeExcusas();
document.getElementById("excusa").innerHTML = result; // Reemplaza el contenido de <p> con una cadena vacía
