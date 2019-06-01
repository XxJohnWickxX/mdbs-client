import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// IMPORTACIOND DE MIS RUTAS
import Layout from './hock/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Costs from './components/Costs';
import Planes from './pages/Planes';
import Mydash from './pages/Mydash'
import Bienvenido from './pages/Bienvenido';
import DashHistory from './components/DashHistory';
import DashAgenda from './components/DashAgenda';
import DashConfig from './components/DashConfig';
import DashConsentimientos from './components/DashConsentimientos';
import DashCalculadora from './components/DashCalculadora';




class Routes extends Component {
    render() {
        return (
            <div>
                <Layout>
                 <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/costs" exact component={Costs} />
                    <Route path="/planes" exact component={Planes} />
                    <Route path="/mydash" exact component={Mydash}/>
                    <Route path="/welcom" exact component={Bienvenido}/>
                    <Route path="/mydash/history" exact component={DashHistory}/>
                    <Route path="/mydash/agenda" exact component={DashAgenda}/>
                    <Route path="/mydash/config" exact component={DashConfig}/>
                    <Route path="/mydash/consentimientos" exact component={DashConsentimientos}/>
                    <Route path="/mydash/calculadora" exact component={DashCalculadora}/>
                  </Switch>  
                </Layout>    
            </div>
        );
    }
}

export default Routes;