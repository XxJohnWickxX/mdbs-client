import React, { Component } from 'react';
import '../styles/Footer.css'
import {Card} from 'react-bootstrap';

import face from '../images/face.png'
import twitt from '../images/twitt.png'
import youtub from '../images/youtub.png'



class Footer extends Component {
    render() {
        return (
            
            <div>

                
                <Card className="text-light">
                   

                     <div className="footercard_">
                       <Card.Title>Derechos reservados Iatros System SA de CV <br/>
                       
                           calle y numero <br/>
                           ciudad y pais <br/>
                           telefono <br/>
                       
                       Correo de contacto: micorreo@miempresa.com </Card.Title>

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
                    
                    </div>
                </Card>
               
            </div>
            
        );
    }
}

export default Footer;