import { request } from "../helper/fetch.js";

export const resolverEjercicio1 = async () => {
    

    const usuarios = await request("users");
    const publicaciones = await request("posts");

    // Requerimiento de Filtrar usuarios activos
    const activos = usuarios.filter(u => u.active === true);

    // Requerimiento de Calcular cantidad de publicaciones por usuario
    return activos.map(u => {
        const susPosts = publicaciones.filter(p => Number(p.userId) === Number(u.id));
        return {
            nombre: u.name,
            cantidadPublicaciones: susPosts.length
        };
    });
};