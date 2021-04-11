import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function Home() {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const config = {
        headers:{
            'Authorization':token
        }
    }

    const [search,setsearch]= useState('')
    const [request,setrequest]= useState('')
    const [result,setResult]= useState([])

    const theBody = {
        "Body": {
            "SearchText": search
            }
        }

        useEffect(()=>{
            axios.post('https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/GetUsers',theBody,config)
            .then((response)=>{
                setResult(response.data.Body)
            }).catch((error)=>{
                console.log(error.message)
            })
        },[request])
        
    return (
        <div className="container mt-5">
            <Form onSubmit={(event)=>{
                event.preventDefault()
                setrequest(search)
            }}>
                <Form.Row className="justify-content-center">
                        <Form.Control 
                            className="mb-2 col-6 mr-2"
                            id="inlineFormInput"
                            placeholder="Busqueda"
                            onChange={(event)=>{
                                setsearch(event.target.value)
                            }}
                            id="form"
                        /> 
                        <Button type="submit" className="mb-2">
                            Buscar
                        </Button>
                        <Button type="button" className="mb-2 mr-2 ml-2"
                onClick={()=>{
                    history.push('/create')
                }}>
                    Nuevo
                </Button>
                </Form.Row>
            </Form>
            <Table responsive>
  <thead>
    <tr>
      <th>Id</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Created Date</th>
    </tr>
  </thead>
  <tbody>
  {result.map((user)=>(
             <tr>
                 <td>{user.Id}</td>
             <td>{user.Username}</td>
             <td>{user.Email}</td>
             <td>{user.CreationDate}</td>
             </tr>
             
        ))}
  </tbody>
 
</Table>
        </div>
    )
}

export default Home;