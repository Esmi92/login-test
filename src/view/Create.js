import React, { useState } from 'react'
import useForm from '../hook/useForm'
import { Form, Button, Row, Col } from 'react-bootstrap'
// import axios from 'axios'

function Create() {
    const token = window.localStorage.getItem('token')

    //Lo escondo porque salio un https://reactjs.org/docs/cross-origin-errors.html
    // const config = {
    //     headers:{
    //         'Authorization': token
    //     }
    // }
    const [rol, setRol] = useState('')

    // const basicBody = {
    //     Tenant: null,
    //     Metadata: null,
    //     Roles: [JSON.parse(rol)]
    // }
    // let theBody = {}

    const createUser = (data) => {
        console.log(data)
        // theBody = { Body: { ...basicBody, ...data } }
        // console.log(theBody)
        // console.log(rol)
        // axios.post('https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/RegisterUserRole', theBody, config)
        //     .then((response) => {
        //         console.log(response.data)
        //     }).catch((error) => {
        //         console.log(error.message)
        //     })
    }

    const { inputs, handleChange, hanldeSubimt } = useForm(createUser, {})

    return (
        <div className="App container mt-5">
            <h1 className="m-2 mb-5">Usuario Nuevo</h1>
            <Form onSubmit={hanldeSubimt}>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Nombre de usuario
        </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Usuario" onChange={handleChange} name="Username" value={inputs.Username} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Nombre
        </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Nombre" onChange={handleChange} name="Name" value={inputs.Name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Apellido Paterno
        </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Apellido Paterno" onChange={handleChange} name="FatherLastName" value={inputs.FatherLastName} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Apellido Materno
        </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Apellido Materno" onChange={handleChange} name="MotherLastName" value={inputs.MotherLastName} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Email
        </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Email" onChange={handleChange} name="Email" value={inputs.Email} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Teléfono
        </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Telefono" onChange={handleChange} name="PhoneNumber" value={inputs.PhoneNumber} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
        </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" onChange={handleChange} name="Password" value={inputs.Password} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">State</Form.Label>
                    <Col>
                        <Form.Control as="select" onChange={(event) => {
                            setRol(event.target.value)
                        }}>
                            <option value="" disabled>Selecciona</option>
                            <option value={`{"Id": 2,"Name": "Usuario Tradicional"}`}>Tradicional</option>
                            <option value={`{"Id": 1,"Name": "Usuario No Tradicional"}`}>No tradicional</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit" className="col-12">
                    Submit
      </Button>
            </Form>
        </div>
    )
}

export default Create;