import React, {Component} from 'react';


class Form extends Component{
    render(){
        return(
            <div className="fuente_form">
                <h1>Bienvenido</h1>
                <h3>Nuevo Registro</h3>
                <div>
                    <label>Nombre</label>
                    
                    <input className="formulario_registro"
                        type="text"
                        name="Name"
                         />
                         
                    <label>Apellido Paterno</label>
                    <input className="formulario_registro"
                        type="text"
                        name="ApellidoPaterno"
                         />
                    <label>Apellido Materno</label>
                    <input className="formulario_registro"
                        type="text"
                        name="ApellidoMaterno"
                         />

                         <br/>

                         <label>Direccion del Consultorio</label>
                    <input className="formulario_registro"
                        type="text"
                        name="Direcciondelconsultorio"
                         />
                         <label>Cédula Profecional</label>
                    <input className="formulario_registro"
                        type="text"
                        name="Cedula"
                         />
                         <label>Celular</label>
                    <input className="formulario_registro"
                        type="text"
                        name="Celular"
                         />

                         <br/>

                         <label>Especialidad</label>
                    <input className="formulario_registro"
                        type="text"
                        name="Especialidad"
                         />
                         <label>Correo</label>
                    <input className="formulario_registro"
                        type="text"
                        name="email"
                         />
                          <label>Contraseña</label>
                    <input className="formulario_registro"
                        type="text"
                        name="contraseña"
                         />
                         

                         <input type="onCheck"/> <h6>Acepto que he leido y estoy de acurdo con el aviso de privacidad y los terminos y condiciones</h6>

                         <button className="registro_" onClick="" >Registrarme</button>
                        

                         
                         
                </div>
            </div>

        )
    }
}
export default Form;