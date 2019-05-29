import React, { Component } from 'react';
// import axios from 'axios';
// import Botonpay fro../components/PayPal/PaypalButtonpay';
import Pay from '../components/PayPal/Pay' ;



class Mydash extends Component {
  //   state = {
  //       bigData: null,
  //   }
  //   async componentDidMount(){
  //     const dataFetch = await axios.get('http://localhost:3002/api/doctors/auth')
  //     this.setState({bigData: dataFetch.data})
  // }
  //   handleChange = event => {
  //       console.log(this.state)
  //       this.setState(
  //           {
  //               ...this.state,
  //               [event.target.name]: event.target.value
  //           }
  //       );
  //   }
  //   handleSubmit = (event) => {
  //       event.preventDefault();
        
        
  //       const doctor = {
  //         email: this.state.logmail,
  //         password: this.state.logpass
  //       }
  //       console.log('esto es', doctor);
        
  //       axios({
  //         method: 'get',
  //         baseURL: 'http://localhost:3002/api/doctors/auth',
  //         headers: {'Content-Type': 'application/json'},
  //         data: doctor
  //       })
  //       .then(res => {
  //         console.log(res.data)
  //         return res.data
  //         // hacer el this,set,state
  //       })
  //     }

    render() {
        return (
            <div>
              <Pay/>
                
            </div>
        );
    }
}

export default Mydash;