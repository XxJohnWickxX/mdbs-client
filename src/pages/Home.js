import React, { Component } from 'react';
import Contenidohome from '../components/Contenidohome';
import Costs from '../components/Costs';
import Skills from '../components/Skills';





class Home extends Component {

  
    render() {
        return (
            <div>
                <Contenidohome/>   
                <Skills/>   
                <Costs/>
            </div>
        );
    }
}

export default Home;