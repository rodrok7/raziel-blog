/* Creamos el archivo api.js, el cual contiene un objeto con todas las funciones que querramos exportar. Usamos export default para exportar todo el contenido del objeto*/

export default {
    /*Creamos las funciones para cada petición, estas funciones son asíncronas puesto que fetch nos devolverá una promesa que debemos esperar a que sea resuelta*/

    async getAllPosts(){
        /*creamos una variable para almacenar la respuesta de la promesa, usamos await para esperar a que la promesa se resuelva*/
        const response = await fetch( `https://ajaxclass-1ca34.firebaseio.com/israel/posts/.json` )

        /*regresamos la respuesta de la petición, usando await para esperar que resuelva el método .json()*/
        return await response.json()
    },

    async getSinglePost( postId ){
        const response = await fetch( `https://ajaxclass-1ca34.firebaseio.com/israel/posts/${postId}.json` )

        return await response.json()
    }
}
