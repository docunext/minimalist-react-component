import { combineReducers } from 'redux'

const testApp = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            console.log(action.text);
            return {
                myName: action.text
            };
        default:
            return state;
    }
}

export default combineReducers({
    testApp
});
