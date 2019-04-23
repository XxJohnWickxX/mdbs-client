import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// IMPORTACIOND DE MIS RUTAS
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login'


class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                </Switch>      
            </div>
        );
    }
}

export default Routes;