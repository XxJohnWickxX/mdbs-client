import React, { Component } from 'react';
import '../styles/Skills.css'
import acces from '../images/acces.png'
import agenda from '../images/agenda.png'
import down from '../images/down.png'
import calcu from '../images/calculadora.png'
import conse from '../images/consentimiento.png'
import confir from '../images/confirmacion.png'


class Skills extends Component {
    render() {
        return (
            <div className="bgski">
            
             <div className="title_">
                 <h1 className="text-center text-light">Iatros System te ofrece...</h1>
            </div>
            <div className="container text-center text-light ">
                <div className="row">
                    <div className="col-md">
                        <img className="formatoicon" src={acces} alt="acces"/>
                        <h3>Acceso online</h3>
                        <p>Siempre a tu alcance</p>
                    </div>
                    
                    <div className="col-md"> 
                        <img className="formatoicon" src={agenda} alt="agenda"/>
                        <h3>Agenda electronica</h3>
                        <p>Tu agenda organizada y lista</p>
                    </div>
                    

                    <div className="col-md">
                        <img className="formatoicon" src={down} alt="down"/>
                        <h3>Descargas</h3>
                        <p>Visualiza tus historiales sin conexion</p>
                    </div>
{/* SOLO ES UN ESPACIO  */}
<div className="salto"></div>
                        
                <div className="row">
                    <div className="col-md">
                        <img className="formatoicon" src={calcu} alt="calculadora"/>
                        <h3>Calculadora de dosis</h3>
                        <p>Calcula las dosis con precisión sin salir de la pagina</p>
                    </div>

                    <div className="col-md">
                        <img className="formatoicon" src={conse} alt="cons"/>
                        <h3>Consentimiento informado</h3>
                        <p>Tendras formatos a tu disposicion</p>
                    </div>

                    <div className="col-md">
                        <img className="formatoicon" src={confir} alt=""/>
                        <h3>Confirmacion de citas</h3>
                        <p>Se enviara una notificacion a tus pacientes para confirmar tus citas</p>
                    </div>

                </div>
                </div>
                    
            </div>
            </div>
        );
    }
}

export default Skills;