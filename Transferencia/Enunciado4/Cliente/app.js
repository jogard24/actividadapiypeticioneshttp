import { eliminarPostSeguro } from "./Peticiones/index.js";

let idAEliminar = prompt("Ingrese el ID de la publicación que desea eliminar:");
const mensajeResultado = await eliminarPostSeguro(idAEliminar);

console.log(mensajeResultado);