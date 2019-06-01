import React, { Component } from 'react';
import '../styles/MyDash.css';
import { Link } from 'react-router-dom';
import calendar from '../images/calendar.svg';
import calculadora from '../images/calculadora.svg';
import home from '../images/home.svg';
import historial from '../images/historial.svg';
import consentimiento from '../images/consentimiento.svg';
import config from '../images/config.svg';
import {Card, CardDeck} from 'react-bootstrap';
import avatar from '../images/avatar.jpg';

import axios from 'axios';
// import Botonpay from './components/PayPal/PaypalButtonpay';


const baseURL = `${process.env.REACT_APP_BASE_URL}/api/doctors/auth`

class Mydash extends Component {
    state = {
        bigData: null,
    }
    async componentDidMount(){
      const dataFetch = await axios.get(baseURL)
      this.setState({bigData: dataFetch.data})
  }
    handleChange = event => {
        console.log(this.state)
        this.setState(
            {
                ...this.state,
                [event.target.name]: event.target.value
            }
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();
        
        
        const doctor = {
          email: this.state.logmail,
          password: this.state.logpass
        }
        console.log('esto es', doctor);
        
        axios({
          method: 'get',
          baseURL,
          headers: {'Content-Type': 'application/json'},
          data: doctor
        })
        .then(res => {
          console.log(res.data)
          return res.data.this.setState
          
        })
      }

    render(props) {
        return (
            <div>
              <section>
                <nav className="mynav_">
                  <Link to="/mydash">
                    <p className="textdash text-light"><img className="icons_" src={home} alt="home"/>Home</p>
                  </Link>
                  <Link to="mydash/history">
                    <p className="textdash text-light"><img className="icons_" src={historial} alt="historial"/>Historiales</p>
                  </Link>
                  <Link to="/mydash/agenda">
                    <p className="textdash text-light"><img className="icons_" src={calendar} alt="agenda"/>Agenda</p>
                  </Link>
                  <Link to="/mydash/calculadora">
                    <p className="textdash text-light"><img className="icons_" src={calculadora} alt="agenda"/> Calculadora</p>
                  </Link>
                  <Link to="/mydash/consentimientos">
                    <p className="textdash text-light"><img className="icons_" src={consentimiento} alt="agenda"/>Consentimientos</p>
                  </Link>
                  <Link to="/mydash/config">
                    <p className="textdash text-light"><img className="icons_" src={config} alt="agenda"/>Configuracion</p>
                  </Link>
                </nav>
              </section>
        
                      
              
              
              <CardDeck className="cards_">
                    <Card>
                      <Card.Img className="avatar" src={avatar} />
                      <Card.Body>
                        <Card.Title>Dra Gabriela Perez </Card.Title>
                        <Card.Text>
                          <Link>
                            <p>Mi perfil</p>
                          </Link>
                          <Link>
                            <p>Mis pagos</p>
                          </Link>
                            
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-center text-muted">
                        <Link>
                        <small>Mis Historiales</small>
                        </Link>
                      </Card.Footer>
                    </Card>

                    <Card>
                      
                      <Card.Body>
                        <Card.Title>Citas de hoy</Card.Title>
                        
                          <Card.Footer>
                          <div>
                          <Link>
                          <h6>Laura Esquivel</h6>
                          </Link>
                          <p>Problemas de sueño</p>
                          </div>
                          <div>
                          <Link>
                          <h6>Mariano Peralta</h6>
                          </Link>
                          <p>Dolor en cintura</p>
                          </div>
                          <div>
                          <Link>
                          <h6>Patricio De La Paz</h6>
                          </Link>
                          <p>Nausea y vomito</p>
                          </div>
                          </Card.Footer>
                        
                      </Card.Body>
                      
                    </Card>
                    <Card>
                      
                      <Card.Body>
                        <Card.Title>Recordatorios</Card.Title>
                        <Card.Text>
                          <Link>
                          <p>Cirugia Espalda</p>
                          </Link>
                          <Link>
                          <p>Llamar a Andrea Delgado</p>
                          </Link>
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                  </CardDeck>
                  
              

              
                
            </div>
        );
    }
}

export default Mydash;