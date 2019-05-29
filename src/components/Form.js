import React, {Component} from 'react';
import '../styles/Register.css';
import axios from 'axios'
import {Form, Col, Button } from 'react-bootstrap';
import {Link, LinkContainer} from 'react-router-bootstrap';


class Formulario extends Component {

    state = {
      bigData: null,
    }


    handleChange = event => {
      console.log(this.state)
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      });
    }
   
    handleSubmit= event => {
        const doctor = event.currentTarget();
        
        if (doctor.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        this.setState({ validated: true });
        // event.preventDefault();
        const regisDoctor = {
          name: this.state.regisname,
          lastName:this.state.regislastname,
          officeAddress: this.state.regisdomi,
          identificationCard: this.state.regiscedu,
          celPhone: this.state.regiscel,
          specialty: this.state.regisspecialty,
          specialty2: this.state.regisspecialty2,
          email: this.state.regisemail,
          password: this.state.regispass,
          city: this.state.regiscity,
          state: this.state.regisstate,
          postalCode: this.state.regispostal
          
        }
        
        
        
        console.log("esto enviaste:", regisDoctor)
        axios({
          method: 'post',
          baseURL: 'http://localhost:3002/api/doctors/register',
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
          data: regisDoctor
        })
        .then(res => {
          console.log(res.data)
          return res.data
        })
      }
  

      render(props) {
        const datalist = this.state.bigData ? this.state.bigData : []
        const { validated } = this.state;
        

        return (
          <div className="back">

        <Form
        noValidate
        validated={validated}
        onSubmit= {this.handleSubmit}
        >
           
            <div className="cont">
            <div className="title text-white bg-dark"><p>Nuevo Registro</p> </div>
        
            

          <Form.Row>
            {/* CASILLA NOMBRE */}

            <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Nombre(s)</Form.Label>
                      <Form.Control
                        name="regisname"
                        onChange={this.handleChange}
                         required
                         type="text"
                         placeholder="Nombre"
                         />
                   <Form.Control.Feedback>¡Bien!</Form.Control.Feedback>
            </Form.Group>

            {/* CASILLA APELLIDOS */}

            <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Apellidos</Form.Label>
                      <Form.Control
                        name="regislastname"
                        onChange={this.handleChange}
                        required
                        type="text"
                        placeholder="Paterno Materno"
                        />
                  <Form.Control.Feedback>¡Bien!</Form.Control.Feedback>
            </Form.Group>

            {/* CASILLA ESPECIALIDAD */}

            <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Especialidad</Form.Label>
                      <Form.Control
                        name="regisspecialty"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Cardiologia Neurologia"
                        />
                  <Form.Control.Feedback type="invalid"> </Form.Control.Feedback>      
              </Form.Group>
          </Form.Row>

          
          <Form.Row>
            {/* CASILLA CEDULA */}
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Cedula Profesional</Form.Label>
                     <Form.Control
                      name="regiscedu" 
                      onChange={this.handleChange}
                       type="text" 
                       placeholder="Ejemplo AESSA-9999999" 
                       required
                       />
                  <Form.Control.Feedback type="invalid">Invalido</Form.Control.Feedback>
            </Form.Group>

            {/* CASILLA TELEFONO */}
            <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Telefono</Form.Label>
                      <Form.Control
                        name="regiscel" 
                      onChange={this.handleChange}  
                       type="text" 
                       placeholder="55 5555 5555" 
                       unique="true"
                       required 
                       />
                  <Form.Control.Feedback type="invalid">Invalido</Form.Control.Feedback>
            </Form.Group>

              {/* CASILL CEDULA PROFESIONAL ESPECIALIDAD */}

            <Form.Group as={Col} md="3" controlId="validationCustom06">
                  <Form.Label>Cedula Profesional de Especialidad</Form.Label>
                      <Form.Control
                        name="regisspecialty2" 
                        onChange={this.handleChange}
                         type="text" 
                         placeholder="Ejemplo AESSA-9999999" 
                         />
                 <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
          </Form.Row>


          <Form.Row>
            {/* CASILLA DOMICILIO */}
          <Form.Group as={Col} md="4" controlId="validationCustom07">
                  <Form.Label>Domicilio</Form.Label>
                      <Form.Control
                        name="regisdomi" 
                        onChange={this.handleChange}
                        type="text"    
                        placeholder="Calle y numero"
                        required
                        />
                  <Form.Control.Feedback type="invalid">Invalido </Form.Control.Feedback>
              </Form.Group>
          
            {/* CASILLA CIUDAD */}

              <Form.Group as={Col} md="3" controlId="validationCustom08">
                  <Form.Label>Ciudad</Form.Label>
                      <Form.Control
                        name="regiscity" 
                        onChange={this.handleChange}
                        type="text"    
                        placeholder="En que ciudad esta tu consultorio"
                        required
                        />
                  <Form.Control.Feedback type="invalid">Invalido </Form.Control.Feedback>
              </Form.Group>

              {/* CASILLA ESTADO */}

            <Form.Group as={Col} md="3" controlId="validationCustom09">
                <Form.Label>Estado</Form.Label>
                    <Form.Control
                      name="regisstate" 
                      onChange={this.handleChange}
                      type="text" 
                      placeholder="En que estado" 
                      required 
                      />
                <Form.Control.Feedback type="invalid">Invalido</Form.Control.Feedback>
            </Form.Group>

            {/* CASILLA CP */}

            <Form.Group as={Col} md="3" controlId="validationCustom010">
                <Form.Label>Codigo Postal</Form.Label>
                   <Form.Control
                    name="regispostal" 
                    onChange={this.handleChange}
                     type="text" 
                     placeholder="Ejemplo 52000" 
                     required
                     />
                <Form.Control.Feedback type="invalid">Invalido</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          
          <Form.Row>

            {/* CASILL EMAIL */}

          <Form.Group as={Col} md="3" controlId="validationCustom11">
              <Form.Label>Correo electronico</Form.Label>
                  <Form.Control
                    name="regisemail" 
                  onChange={this.handleChange}
                    type="text" 
                    placeholder="minombre@ejemplo.com" 
                    trim="true"
                    unique="true"
                    required={true}
                    />
              <Form.Control.Feedback type="invalid">Invalido</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>


        <Form.Row>
          {/* CASILLA PASS */}
            <Form.Group as={Col} md="3" controlId="validationCustom12">
               <Form.Label>Constraseña</Form.Label>
                   <Form.Control
                    name="regispass" 
                   onChange={this.handleChange}
                     type="password" 
                     placeholder="Contraseñasegura1234" 
                     minLength="8"
                     required
                     />
               <Form.Control.Feedback type="invalid">Invalido</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>


          <Form.Row>
            {/* CASILLA CONF PASS */}
            <Form.Group as={Col} md="3" controlId="validationCustom13">
                <Form.Label>Confirmar Constraseña</Form.Label>
                    <Form.Control
                      name="regispass" 
                    onChange={this.handleChange}
                      type="password" 
                      placeholder="Vuelve a introducir contraseña" 
                      minLength= "8"
                      required 
                      />
                <Form.Control.Feedback type="invalid">Invalido</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group>
              <Form.Check
                name="agreement"
                onChange={this.handleChange}
                required
                label="Acepto los terminos y condiciones"
                />
          </Form.Group>
              <LinkContainer to="mydash">
              <Button  className="btn btn-primary" type="submit">Registrar</Button>
              </LinkContainer>
          </div>
          
        </Form>
             <h1>
                    {
                        Object.keys(datalist).map((key, index) => {
                        return (
                            <article key={index}>
                                <Link to={`/${datalist[key].id}`}>
                                    <h1>{datalist[key].name}</h1>
                                </Link>
                            </article>
                            )
                        })
                    } 
                </h1>
        
        
      </div>
      );
    }
}
export default Formulario;