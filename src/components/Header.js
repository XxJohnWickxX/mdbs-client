import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logonav.png';
import  '../styles/Header.css'
import {Form, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


class Header extends Component{
   render(){
    return( 

      <div  className="fixed-top font_">
            <Navbar bg="primary" expand="lg">

                  <Link to="/">
                     <img className="headerlog"  alt="logo" src={logo} />
                  </Link>

                  <Link to="/">
                      <Navbar.Brand>Iatros System</Navbar.Brand>
                  </Link>

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />

                  <Navbar.Collapse id="basic-navbar-nav">

                      <Nav className="mr-auto">

                        <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/planes">
                        <Nav.Link >Costos</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/register">
                        <Nav.Link >Prueba Gratis</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    <Form inline>
                         <Link to="/register">
                              <button className="botones btn btn-outline-light botones">Registro</button>
                          </Link>

                          <Link to="/login">
                              <button className="btn btn-outline-light">Inicia Sesión</button>  
                          </Link>
                     </Form>
                   </Navbar.Collapse>
                  </Navbar>
                  
      </div>
        )
    }
}
export default Header;