import React, { Component } from 'react';
import mybackground from '../images/fondo-home.jpeg';
import '../styles/Login.css';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseURL = `${process.env.REACT_APP_BASE_URL}/api/doctors/login`

class Login extends Component {

  state = {
    bigData: null,
}


handleChange = event => {
    console.log(this.state)
    this.setState(
        {
            ...this.state,
            [event.target.name]: event.target.value
        }
    );
}
handleSubmit = (event) => {
  event.preventDefault();
  
  
  const doctor = {
    email: this.state.logmail,
    password: this.state.logpass
  }
  console.log('esto es', doctor);
  
  axios({
    method: 'post',
    baseURL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
    data: doctor
  })
  .then(res => {
    console.log(res.data)
    return res.data
  })
}

 
    render(props) {
      const datalist = this.state.bigData ? this.state.bigData : []
        return (
            <div className="bg-primary">
              

                <img className="Backgra" src={mybackground} alt="backgraund" />
               
                 <div className="textlogin_">
                   
                  <h1 className="textsty_ ">Bienvenido</h1>

                  <Form className="container" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">

                      <Form.Label>Correo electronico</Form.Label>
                      <Form.Control className="input_" type="email" name="logmail" placeholder="tucorreo@ejemplo.com" onChange={this.handleChange} />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>

                    
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control className="input_ form-control" type="password" name="logpass" placeholder="Recuerda nunca compartir tu contraseña" onChange={this.handleChange} />   
                    </Form.Group>
                    <Link to="mydash">
                      <Button className="regisgo_" variant="primary" size="lg" type="submit">Entrar</Button>
                    </Link>

                  <div className="regisgo">
                  <p>¿Aun no estas registrado?</p>
                  <Link to="/register">
                    <Button className="regisgo_" variant="primary" size="lg">Registrate ahora</Button>
                  </Link>
                  </div>

                  </Form>            
                </div>
                <h1>
                    {
                        Object.keys(datalist).map((key, index) => {
                        return (
                            <article key={index}>
                            <Link to={`/${datalist[key].id}`}><h1>{datalist[key].name}</h1></Link>
                            </article>
                            )
                        })
                    } 
                </h1>
                

            </div>
        );
    }
}

export default Login;