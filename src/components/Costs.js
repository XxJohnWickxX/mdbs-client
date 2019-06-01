import React, { Component } from 'react';
import { Card, CardGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../styles/Costs.css';
import basic from '../images/basic.png';
import middle from '../images/middle.png';
import pro from '../images/Pro.png';

class Costs extends Component {
    render() {
        return (
            <div className="backcost">

                    <div className="titlecosts">
                        <h1 className="text-center text-light" >Nuestros Planes</h1>
                    </div>

                <CardGroup>
                    <Card className="text-center">
                        <Card.Img className="promos"  variant="top" src={basic} />

                        <Card.Body>
                             <Card.Title className="text-dark titlecard"><h3>Gratuito</h3></Card.Title>
                            <Card.Text>
                                <p>Acceso limitado</p>
                                <p className="text-light titlecard">Emisión de expedientes digitales en PDF</p>
                                <p>Publicidad</p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            <Link to="/register"> 
                                 <Button variant="outline-primary">¡Gratis!</Button>
                            </Link>
                        </Card.Footer>
                        
                    </Card>


                    <Card className="text-center">
                        <Card.Img className="promos" variant="top" src={middle} />

                        <Card.Body>
                            <Card.Title className="text-dark titlecard"><h3>Plan Mensual</h3></Card.Title>
                                <Card.Text>
                                <p>Acceso ilimitado a toda la plataforma</p>
                                    <p className="text-light titlecard">Emisión de expedientes digitales en PDF</p>
                                    <p>Almacenamiento digital de resultados de laboratorio</p>
                                    <p className="text-light titlecard">Correo electrónico personalizado</p>
                                    <p>Agenda electrónica</p>
                                    <p className="text-light titlecard">Emisión personalizada de documentos</p>
                                </Card.Text>
                        </Card.Body>

                        <Card.Footer>
                            <Link to="/register">
                                <Button variant="outline-primary">$450 MXN/mes*</Button>
                            </Link>
                        </Card.Footer>  
                    </Card>

                    <Card className="text-center">
                        <Card.Img className="promos" variant="top" src={pro} />

                        <Card.Body>
                            <Card.Title className="text-Dark titlecard"><h3>Plan Anual</h3></Card.Title>
                                <Card.Text>
                                    <p>Acceso ilimitado a toda la plataforma</p>
                                    <p className="text-light titlecard">Emisión de expedientes digitales en PDF</p>
                                    <p>Almacenamiento digital de resultados de laboratorio</p>
                                    <p className="text-light titlecard">Correo electrónico personalizado</p>
                                    <p>Agenda electrónica</p>
                                    <p className="text-light titlecard">Emisión personalizada de documentos</p>
                                    <p>Hasta un 20% de descuento</p>
                                </Card.Text>
                        </Card.Body>

                         <Card.Footer>
                             <Link to="/register">
                                <Button variant="outline-primary">$4,300 MXN/año*</Button>
                             </Link>
                         </Card.Footer>
                    </Card>
                </CardGroup>
                
            </div>
        );
    }
}

export default Costs;