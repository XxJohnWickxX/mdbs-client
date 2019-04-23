// IMPORTACIONES
import React, { Component } from 'react';
import axios from 'axios';
// import Form from '../doctor/Form';

// COMOPONENTE
class Home extends Component {
    state = {
        Doctor:[]
    }
    componentDidMount(){
        const id = this.props.match.params.idMedico
        axios.get(`http://localhost:3002/medicos/${id}`)
        .then(registrados => {
            console.log(registrados.data);
            this.setState({
                Doctor: registrados.data
            })
            
        })
    }

    render(){
        return(
            <div className="App">
            {this.state.Doctor.map(Doctor => <h1>{Doctor.name}</h1>)}
                
            </div>
        )
    }
}
// EXPORTACION
export default Home;
