import { request } from "../helper/fetch.js";

export const obtenerReporteComentarios = async () => {
    // 1. Obtener datos de entrada
    const posts = await request("posts");
    const comments = await request("comments");

    // 2. Procesar y clasificar
    return posts.map(post => {
        // Relacionar mediante postId
        const numComentarios = comments.filter(c => Number(c.postId) === Number(post.id)).length;

        return {
            titulo: post.title,
            numeroComentarios: numComentarios,
            estado: numComentarios > 0 ? "Con comentarios" : "Sin comentarios"
        };
    });
};