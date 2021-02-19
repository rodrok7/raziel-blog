import React, { useState, useEffect } from 'react'

/*importamos el archivo api.js bajo el alias "api", así podremos invocar cualquier método de este archivo usando api.nombreDelMétodo( parametros )*/
import api from '../../lib/api'

import {
    Row,
    Col,
} from 'reactstrap'
import FullPost from '../../Components/FullPost'

function PostDetail() {
    const [ postData, setPostData ] = useState({})

    /* para poder extraer adecuadamente el resultado de nuestras peticiones, es necesario que el callback de useEffect sea una fución asíncrona ( async () => {} )*/
    useEffect( async () => {
        const urlParams = new URLSearchParams(window.location.search);
        console.log( urlParams )
        const postId = urlParams.get('postId');
        
        /*seteamos la data del post seleccionado usando la respuesta del método getSinglePost de nuestro archivo api*/

        setPostData( await api.getSinglePost( postId ))
        /*requerimos usar await para que nos guarde la data de la petición en el estado*/
    }, [])

    return (
        <Row className="PostDetail p-3">
            <Col xs="12" md={{ size: 10, offset: 1 }}>
                <FullPost postData = { postData }/>
            </Col>
        </Row>
    )
}

export default PostDetail