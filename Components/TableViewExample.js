import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { selectUser } from '../Actions/ActionIndex';

var array = [];

class TableViewExample extends Component {

    constructor (props) {
        super(props);

        console.log('Inside constructor function');

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        this.state = {
            dataSource: ds.cloneWithRows(array),
        };
    }

    componentWillMount() {
        this.createListItems();
        this.setState({dataSource: this.state.dataSource.cloneWithRows(array)})
    }

    componentWillUnmount() {
        array = [];
    }

    createListItems() {
        return this.props.users.map((user) => {
            array.push(user)
        });
    }

    renderRow(rowData) {
        return(
            <View
                key = {rowData.id}
                style = {RouteStyles.rowContainerView}>
                <TouchableOpacity onPress = {() => this.busSelectionAction(rowData)} >
                    <Text style = {RouteStyles.TextStyle}>{rowData.firstName} {rowData.lastName}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return(
            <View style = {RouteStyles.BackgroundViewStyle}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData) => this.renderRow(rowData)}
                />
            </View>
        )
    }

    busSelectionAction(rowData) {
        this.props.selectUser(rowData)
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

const RouteStyles = StyleSheet.create({
    BackgroundViewStyle: {
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        flex: 1,
        alignItems: 'center',
    },
    HeaderViewStyle: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: 'rgba(206, 43, 62, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    HeaderTextStyle: {
        color: 'rgba(40, 40, 40, 0.8)',
        paddingTop: 20,
        fontFamily: 'Optima',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    MenuButtonStyles: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        bottom: 15,
        right: 5,
        top: 10,
    },
    rowContainerView: {
        width: Dimensions.get('window').width - 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
        flexDirection: 'row',
    },
    TextStyle: {
        paddingLeft: 5,
        fontSize: 20,
        fontFamily: 'Optima',
    },
    RowTouchableStyle: {
        width: 50,
        height: 50,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RowTouchableImageStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});

export default connect(mapStateToProps, matchDispatchToProps)(TableViewExample)
AppRegistry.registerComponent('TableViewExample', ()=> TableViewExample);
