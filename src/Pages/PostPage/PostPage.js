import React, { useState, useEffect } from 'react'

import{
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Row,
} from 'reactstrap'

import {
    Link
} from 'react-router-dom'

import api from '../../lib/api'

import './style.css'

function PostPage() {
    const [postCollection, setPostCollection] = useState({})

    useEffect( async () => {
        setPostCollection( await api.getAllPosts() )
    }, [])

    return (
        <Row className="pt-3 PostPage">
            {
                Object.keys(postCollection).map( key => {
                    let { title, content, imgUrl } = postCollection[key]
                    return (
                        <Col xs="12" md="3">
                            <Link to={`/post-detail/?postId=${key}`}>
                                <Card className="mb-3">
                                    <CardImg top width="100%" src={ imgUrl} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h5">{ title }</CardTitle>
                                        <CardText>{ content }</CardText>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default PostPage