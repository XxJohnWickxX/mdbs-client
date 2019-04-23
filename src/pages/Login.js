import React, { Component } from 'react';
import mybackground from '../images/fondo-home.jpeg';
import myLogo from '../images/logonav.png';
import {Form, Button} from 'react-bootstrap'



class Login extends Component {
 
    render() {
        return (
            <div>
                
 
                <img className="Backgra" src={mybackground} alt="backgraund" />
                 <img className="mylogo" src={myLogo} alt="Logo" />         
                 <div className="textlogin_">
                   
                  <h1>Bienvenido</h1>
                  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            
                
                </div>
            </div>
        );
    }
}

export default Login;