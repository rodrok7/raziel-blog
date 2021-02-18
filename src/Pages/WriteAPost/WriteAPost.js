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
    ModalHeader, 
    ModalBody, 
    ModalFooter
} from "reactstrap"

function WriteAPost() {
    const [modal, setModal] = useState( false );
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
        }).then( response => response.json())
        .then( json => {
            console.log( json )
            setModal( !modal )
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
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Row>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
                    <Form className="mt-3 p-3 bg-dark text-white border rounded shadow">
                        <FormGroup>
                            <Label>Título</Label>
                            <Input 
                                name="title" 
                                onChange={getEntryData} 
                                value={ !entryObject.title ? "" : entryObject.title}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Contenido</Label>
                            <Input 
                                name="content" 
                                onChange={getEntryData} 
                                value={ !entryObject.content ? "" : entryObject.content}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Url de la imagen</Label>
                            <Input 
                                name="imgUrl" 
                                onChange={getEntryData} 
                                value={ !entryObject.imgUrl ? "" : entryObject.imgUrl}
                            />
                        </FormGroup>
                        <Button type="button" color="primary" onClick={savePost}>Guardar Post</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default WriteAPost