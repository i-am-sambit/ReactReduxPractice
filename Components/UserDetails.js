import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render() {

        if (!this.props.user) {
            return (
                <View>
                    <Text>Please select a user to display</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text>{this.props.user.firstName} {this.props.user.lastName}</Text>
                </View>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.selectUser
    };
}

export default connect(mapStateToProps)(UserDetails);