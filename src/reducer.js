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

const initTodoState = [
    {text: 'Task 1', solved: false},
    {text: 'Task 2', solved: true}
];

const todo = (state = initTodoState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{text: action.text, solved: false}]);
        case 'SOLVED_TODO':
            const newState = state.slice();
            newState[action.index]['solved'] = !newState[action.index]['solved'];
            return newState;
        default:
            return state;
    }
}

export default combineReducers({
    counter,
    todo
});