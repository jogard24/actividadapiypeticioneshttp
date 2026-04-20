import { buscarDetallePublicacion } from "./Peticiones/index.js";

let idPost = parseInt(prompt("Ingrese el ID de la publicación que desea consultar:"));
const detalle = await buscarDetallePublicacion(idPost);

console.log("--- Detalle de Búsqueda Específica ---");
console.log(detalle);