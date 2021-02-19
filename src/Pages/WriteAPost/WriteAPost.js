import React, { useState } from 'react'

import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    ModalBody,
    ModalFooter
} from "reactstrap"

import FullPost from '../../Components/FullPost';

import "./style.css"

function WriteAPost() {
    const [modal, setModal] = useState(false);
    const [entryObject, setEntryObject] = useState({})

    const toggle = () => setModal(!modal);

    const getEntryData = event => {
        let property = event.target.name
        let value = event.target.value
        setEntryObject({ ...entryObject, [property]: value })
    }

    const savePost = () => {
        fetch("https://ajaxclass-1ca34.firebaseio.com/israel/posts/.json", {
            method: "POST",
            body: JSON.stringify(entryObject)
        }).then(response => response.json())
            .then(json => {
                console.log(json)
                setModal(!modal)
                setEntryObject({})
            })
    }

    return (
        <>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalBody>
                    ¡Tu post se guardó con éxito!
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Yeah!</Button>
                </ModalFooter>
            </Modal>
            <Row className="WriteAPost">
                <Col xs="12" md="6">
                    <Form className="mt-3 p-3 bg-dark text-white border rounded shadow">
                        <FormGroup>
                            <Label>Título</Label>
                            <Input
                                name="title"
                                onChange={getEntryData}
                                value={!entryObject.title ? "" : entryObject.title}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Contenido</Label>
                            <Input
                                name="content"
                                onChange={getEntryData}
                                value={!entryObject.content ? "" : entryObject.content}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Url de la imagen</Label>
                            <Input
                                name="imgUrl"
                                onChange={getEntryData}
                                value={!entryObject.imgUrl ? "" : entryObject.imgUrl}
                            />
                        </FormGroup>
                        <Button type="button" color="primary" onClick={savePost}>Guardar Post</Button>
                    </Form>
                </Col>

                <Col xs="12" md="6">
                    <h2>Vista previa:</h2>
                    {
                        Object.keys(entryObject).length != 0 && (
                            <FullPost postData = { entryObject } />
                        )
                    }
                </Col>

            </Row>
        </>
    )
}

export default WriteAPost