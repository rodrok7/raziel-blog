import React, { useState } from 'react'
import{
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap'

import api from '../../lib/api'

function LoginForm(){
    const [ userData, setUserData ] = useState({})
    const [ logedIn , setLogedIn ] = useState(null)
    const [ loginError, setLoginError ] = useState(false)

    const changeHandler = event => {
        setUserData( {...userData, [event.target.name] : event.target.value })
        setLoginError( false )
    }

    const login = () => {
        let response = api.login(userData)
        console.log( response )
        response.status === "error" ? setLoginError( response ) : bringAccess( response )
    }

    const bringAccess = ( loginData ) => {
        console.log( loginData )
        let { token, role } = loginData;
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        window.location.href = '/home'
    }

    let token = localStorage.getItem("token")
    return(
        <Row>
            <Col xs="12" md={ {size:6, offset:3}}>
                { !token && <p>Debes iniciar sesión para ver esta sección</p> }
                <Form className="bg-dark p-3 mt-3 border rounded text-white">
                    <FormGroup>
                        <Label>Nombre de usuario</Label>
                        <Input name="userName" onChange = { changeHandler }/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Contraseña</Label>
                        <Input name="password" onChange = { changeHandler }/>
                    </FormGroup>
                    <Button onClick = { login }>Ingresar</Button>
                </Form>
                {
                    loginError && <div className="card p-3 border rounded bg-danger text-white">{ loginError.errorMsg }</div>
                }
                
            </Col>
        </Row> 
    )
}

export default LoginForm