import React, { Component } from 'react';
import '../styles/Bienvenido.css';
import wel from '../images/welcom.jpeg';
class Bienvenido extends Component {
    render() {
        return (
            <div>
                <img className="wel_" src={wel} alt="bg"/> 

                <div className="contenido">
                    <p>Gracias por registrarte en<br/>Iatros System</p>
                </div>               
            </div>
        );
    }
}

export default Bienvenido;