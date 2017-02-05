import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';

// function _getMiddleware() {
//     const middleware = [
//     ];
//
//     return applyMiddleware(...middleware);
// }

const middleware = applyMiddleware(thunk, logger());

export default function (initialState) {
    return createStore(rootReducer, initialState, middleware);
}
