import React, { Component} from 'react';
import {Router,Route} from 'react-router-dom'

import {Login} from  './components/auth/login';
import { Register} from './components/auth/register';
import {Home} from './components/Home/Home';

import { history} from './helpers';
import {PrivateRoute} from './components/PrivateRoute';
import { connect} from 'react-redux';
import { alertActions} from  './actions';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        history.listen ((location,action) =>{
            this.props.clearAlerts();
        });
    }

    render(){
        const {alert} = this.props;
        return (
            
        )
    }

}
