import React, { Component } from 'react';
import image1 from '../images/regiserdr.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import '../styles/Home.css'
import { Carousel } from 'react-bootstrap';
import back from '../images/backhome.jpg';


class Contenidohome extends Component {
    render() {
        return (
            <div>
                
                <img className="Backgroun_home" src={back} alt="fondo"/>

                <div className="title">
                    <h1 className="text-light text-center"> Expediete Clinico Digital</h1>
                </div>

                <div className="contenido">  
                    <Carousel className=" rounded">
                        <Carousel.Item>
                                <img className="d-block w-100 rounded"src={image1} alt="Primera imagen"/>
                            <Carousel.Caption className="text-dark">
                                <h2 className="font-weight-bold">Acceso ilimitado</h2>
                                <h6 className="font-weight-bold">El historial de tus pacientes desde cualquier dispositivo conectado a internet</h6>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                                 <img className="d-block w-100 rounded" src={image2} alt="Segunda imagen" />
                            <Carousel.Caption className="text-dark">
                                <h2 className="font-weight-bold">Archiva y busca</h2>
                                <h6 className="font-weight-bold">Accede de una manera rapida y eficiente a cada historial y crea nuevos pacientes en pocos pasos</h6>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                                <img className="d-block w-100 rounded" src={image3} alt="Tercera imagen"/>
                            <Carousel.Caption className="text-dark">
                                <h2 className="font-weight-bold">Facil de usar</h2>
                                <h6 className="font-weight-bold">Una interface amigable</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Contenidohome;