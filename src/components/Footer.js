import React, { Component } from 'react';
import '../styles/Footer.css'
import {Card} from 'react-bootstrap';

import face from '../images/face.png'
import twitt from '../images/twitt.png'
import youtub from  '../images/youtub.png'



class Footer extends Component {
    render() {
        return (
            
            <div className="footercard_">

                
                <Card className="text-light">
                   

                     <Card.ImgOverlay className="bg-primary">
                         

                       <Card.Title>Derechos reservados Iatros System SA de CV</Card.Title>
                       <Card.Text>
                           calle y numero
                           ciudad y pais
                           telefono
                       </Card.Text>
                       <Card.Text>Correo de contacto: micorreo@miempresa.com </Card.Text>

                    {/* ICONOS */}
                        <a href="https://es-la.facebook.com/">
                            <img className="foot" src={face} alt="facebook"/>
                        </a>
                        <a href="https://twitter.com/">
                            <img className="foot" src={twitt} alt="twitter"/>
                        </a>
                        <a href="https://www.youtube.com/">
                            <img className="foot" src={youtub} alt="youtube"/>
                        </a>
                    
                    </Card.ImgOverlay>
                </Card>
               
            </div>
            
        );
    }
}

export default Footer;