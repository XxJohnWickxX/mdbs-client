import React, { Component } from 'react';
import image1 from '../images/regiserdr.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import '../styles/Home.css';
import { Carousel } from 'react-bootstrap';




class Contenidohome extends Component {
    

    render(props) {
        return (
            <div className="backhome">     

                <div>  
                    <Carousel className="rounded">
                        <Carousel.Item className="contenido_">
                                <img className="d-block w-100 rounded"src={image3} alt="Primera imagen"/>
                            <Carousel.Caption>
                                <h2 className="foont_ text-white bg-dark">Expediente Clinico Digital</h2>
                               
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="contenido_">
                                 <img className="d-block w-100 rounded" src={image2} alt="Segunda imagen" />
                            <Carousel.Caption>
                                <h2 className="foont_ text-white bg-dark">Archiva, busca y agenda</h2>
                                
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="contenido_">
                                <img className="d-block w-100 rounded" src={image1} alt="Tercera imagen"/>
                            <Carousel.Caption>
                                <h2 className="foont_ text-white bg-dark">Siempre a tu alcance</h2>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Contenidohome;