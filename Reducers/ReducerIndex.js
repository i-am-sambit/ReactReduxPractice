import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import UserSelectedReducer from './UserSelectedReducer';
import AddUserReducer from './AddUserReducer';

const  AllReducers = combineReducers({
    users: UserReducer,
    selectUser: UserSelectedReducer,
    addUser: AddUserReducer
});

export default AllReducers;