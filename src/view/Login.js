import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import useForm from '../hook/useForm'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login (){
    const history = useHistory()
    const requestLogin = (data)=>{
        const theBody = {
          Body:data
        }
        axios.post('https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/authentication/authentication',theBody)
        .then((response)=>{
          const token = response.data.Body.Token
          if(token){
            window.localStorage.setItem('token',token)
            history.push('/home')
          }else{
            alert('Sus datos son incorrectos, verifique su información e intente nuevamente')
          }
        }).catch((error)=>{
          console.log(error)
        })
      }
    
      const {inputs,handleChange,hanldeSubimt} = useForm(requestLogin,{})
      
      return (
        <div className="App container mt-5">
          <h1 className="m-2 text-center">Inicio de Sesión</h1>
          <Form onSubmit = {hanldeSubimt}>
          <Form.Group as={Row} controlId="formPlaintext">
        <Form.Label column sm="2">
          User
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Usuario" onChange={handleChange} name="Username" value={inputs.Username}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" onChange={handleChange} name="Password" value={inputs.Password}/>
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit" className="col-12">
        Submit
      </Button>
    </Form>
        </div>
      );
}

export default Login;