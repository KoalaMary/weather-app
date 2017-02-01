import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';

function _getMiddleware() {
    const middleware = [
    ];

    return applyMiddleware(...middleware);
}


export default function (initialState) {
    return createStore(rootReducer, initialState);
}


