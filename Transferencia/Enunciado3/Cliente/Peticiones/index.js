import { request } from "../helper/fetch.js";

export const buscarDetallePublicacion = async (idBuscado) => {
    const posts = await request("posts");
    const comments = await request("comments");

    // Forzamos a que ambos sean números antes de comparar
    const idAComparar = Number(idBuscado); 

    // Usamos find para localizar el post
    const publicacion = posts.find(p => Number(p.id) === idAComparar);

    if (!publicacion) {
        console.warn("No se encontró el post con ID:", idAComparar);
        return "Publicación no encontrada";
    }

    // Filtramos los comentarios vinculados por postId
    const comentariosAsociados = comments.filter(c => Number(c.postId) === idAComparar);

    return {
        titulo: publicacion.title,
        contenido: publicacion.body,
        numeroComentarios: comentariosAsociados.length
    };
};