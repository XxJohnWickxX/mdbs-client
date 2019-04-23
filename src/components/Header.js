import React, {Component} from 'react';

import logo from '../images/logonav.png';
import  '../styles/Header.css'
import { Nav, Navbar, Button, ButtonToolbar} from 'react-bootstrap';



class Header extends Component{
   render(){
    return( 

      <div>
               <Navbar bg="primary" variant="dark">

                  <img className="headerlog"  alt="logo" src={logo} />
                 <Navbar.Brand href="#home">Iatros System</Navbar.Brand>
                  <Nav className="mr-auto">
                     
                     <Nav.Link href="#caracteristicas">Caracteristicas</Nav.Link>
                     <Nav.Link href="#costos">Costos</Nav.Link>
                     <Nav.Link href="#Prueba">Prueba Gratis</Nav.Link>
                  </Nav>
                  <ButtonToolbar>
                  <Button className="botones" variant="outline-light">Registro</Button>

                  <Button variant="outline-light">Inicia Sesion</Button>
                  </ButtonToolbar>

                  
               </Navbar>
      </div>
        )
    }
}
export default Header;