import { resolverEjercicio1 } from "./Peticiones/index.js";

const reporte = await resolverEjercicio1();

console.log("--- Reporte de Usuarios Activos ---");
console.log(reporte);