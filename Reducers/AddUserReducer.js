
import {addUser} from './UserReducer';

const initialState = {
    users: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_USER" :
            console.log('add user reducer : ' + action.payload);
            let array = addUser(action.payload);
            return array;
            break;
    }
    return state;
}