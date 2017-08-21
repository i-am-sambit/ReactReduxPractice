/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import  thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Scene } from 'react-native-router-flux';

import App from './Components/App';

import allReducers from './Reducers/ReducerIndex';

const store = createStore(allReducers);

export default class PracticeRedux extends Component {
  render() {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    TextInputStyle: {
        width: Dimensions.get('window').width - 30,
        height: 40,
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        marginLeft: 15,
        marginTop: 5,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Optima',
    },
    LoginButtonStyle: {
        backgroundColor: 'rgba(132 ,43, 37, 1.0)',
        width: Dimensions.get('window').width,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        position: 'absolute',
    },
    LoginButtonTextStyle: {
        fontSize: 25,
        fontFamily: 'Optima',
        color: 'white',
    },
});

AppRegistry.registerComponent('PracticeRedux', () => PracticeRedux);
