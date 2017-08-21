import React, {Component} from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import UserController from './UserController';
import SignUpController from './SignUpController';

export default class App extends Component {
    render() {
        return(
            <Router>
                <Scene
                    key="root"
                    hideNavBar="false"
                >
                    <Scene
                        key="SignUpController"
                        component={SignUpController}
                        initial
                    />
                    <Scene
                        key="UserController"
                        component={UserController}
                    />
                </Scene>
            </Router>
        )
    }
}

AppRegistry.registerComponent('App', ()=> App);