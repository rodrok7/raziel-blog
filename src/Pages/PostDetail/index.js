import React, { useState, useEffect } from 'react'

import api from '../../lib/api'

import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap'

function PostDetail() {
    const [ postData, setPostData ] = useState({})

    useEffect( () => {
        const urlParams = new URLSearchParams(window.location.search);
        console.log( urlParams )
        const postId = urlParams.get('postId');
        console.log( postId )
        fetch(`https://ajaxclass-1ca34.firebaseio.com/israel/posts/${postId}/.json`).then( response => response.json())
        .then( json => {
            setPostData( json )
        })

        console.log( api.auth())
    }, [])

    let { imgUrl, title, content } = postData

    return (
        <Row className="PostDetail p-3">
            <Col xs="12" md={{ size: 10, offset: 1 }}>
                <Card className="shadow">
                    <CardImg 
                        top 
                        width="100%" 
                        src={imgUrl}
                        alt="Card image cap" 
                    />
                    <CardBody>
                        <CardTitle tag="h5">{ title }</CardTitle>
                        <CardText>{ content }</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default PostDetail