import {combineReducers} from 'redux';

const counter = (state = 5, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.value;
        default:
            return state;
    }
}

const todo = (state = ['Task 1'], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}

export default combineReducers({
    counter,
    todo
});