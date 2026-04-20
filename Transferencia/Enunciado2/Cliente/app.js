import { obtenerReporteComentarios } from "./peticiones/index.js";

const reporteInteraccion = await obtenerReporteComentarios();
console.log("--- Reporte de Interacción de Publicaciones ---");
console.table(reporteInteraccion);