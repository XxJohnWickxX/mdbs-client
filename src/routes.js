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
                  </Switch>  
                </Layout>    
            </div>
        );
    }
}

export default Routes;