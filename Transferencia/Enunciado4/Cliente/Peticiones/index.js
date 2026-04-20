import { request, destroy } from "../helper/fetch.js";

export const eliminarPostSeguro = async (idPost) => {

    //Consultar las publicaciones y comentarios
    const posts = await request("posts");
    const comments = await request("comments");

    //Verificar si existen comentarios asociados
    //Observ: Se establese tanto el id a buscar como los id de la bd como number
    //Esto para que la busqueda si se pueda llevar a cabo
    const postExiste = posts.find(p => Number(p.id) === Number(idPost));

    //Se verifica si la publicacion existe
    if (!postExiste) return "Error: La publicación no existe.";

    const tieneComentarios = comments.some(c => c.postId === parseInt(idPost));

    // If para la eliminacion de la publicacion
    if (tieneComentarios) {
        return "No se puede eliminar la publicación porque tiene comentarios";
    } else {
        // Se ejecuta la emilacion usando el fecth.js en la carpeta helper
        await destroy(`posts/${idPost}`); 
        
        // Se valida el resultado
        const postsActualizados = await request("posts");
        const todaviaExiste = postsActualizados.some(p => p.id === parseInt(idPost));
        
        return !todaviaExiste 
            ? "Publicación eliminada correctamente" 
            : "Error técnico: No se pudo eliminar.";
    }
};