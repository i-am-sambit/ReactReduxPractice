import React, {Component} from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';
import TableViewExample from './TableViewExample';
import UserDetails from './UserDetails';

export default class UserController extends Component {
    render() {
        return(
            <View style = {{flex: 1}}>
                <TableViewExample />
                <UserDetails />
            </View>
        )
    }
}

AppRegistry.registerComponent('UserController', ()=> UserController)