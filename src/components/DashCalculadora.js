import React, { Component } from 'react';
import construyendo from '../images/notfound.jpg';
import '../styles/NotFound.css'

class DashCalculadora extends Component {
    render() {
        return (
            <div>
                <img className="notfound_" src={construyendo} alt="not"/> 
            </div>
        );
    }
}

export default DashCalculadora;