export default {
    author:"Israel Salinas Martínez",
    greeting( name ){
        console.log( `Hola ${name}` )
    },
    getPost(postId){
        const data = fetch(`https://ajaxclass-1ca34.firebaseio.com/israel/posts/${postId}.json`).then( response => response.json())
        .then( json => {
            //console.log( "el json", json)
            return json
        })
        return data
    },
    auth(){
        return 1234124545454
    }
}