import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from "../Actions/AddUserAction"

var array = [];

class SignUpController extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    componentWillMount() {
        this.createListItems();
    }

    createListItems() {
        return this.props.users.map((user) => {
            array.push(user)
        });
    }

    render() {

        return(
            <View style = {{flex: 1, backgroundColor: '#d95', justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                    onChangeText = {firstName => this.setState({firstName: firstName})}
                    placeholder = "Enter First Name"
                    style = {{backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 40, width: 250, marginBottom: 10}} />
                <TextInput
                    onChangeText = {lastName => this.setState({lastName: lastName})}
                    placeholder = "Enter Last Name"
                    style = {{backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 40, width: 250, marginBottom: 10}} />
                <TouchableOpacity
                    onPress = {this.addUserAction.bind(this)}
                    style = {{backgroundColor: 'rgba(50, 50, 205, 0.5)', height: 40, width: 250, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Add User</Text>
                </TouchableOpacity>
            </View>
        )
    }

    addUserAction() {
        console.log('first name : ' + this.state.firstName);
        console.log('last name : ' + this.state.lastName);

        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            id: array.length + 1
        }
        array.push(user);
        console.log('array count : ', + array.length);
        this.props.addUser(user);
        array = [];
        this.createListItems()
        console.log('props : ' + this.props);
        for (let i = 0; i < array.length; i++) {
            console.log('first name : ' + array[i].firstName + ' last name : ' + array[i].lastName);
        }
        Actions.UserController();
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addUser: addUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUpController);
AppRegistry.registerComponent('SignUpController', ()=> SignUpController);
