import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';

export default function initializeStore(persistedState) {
    const store = createStore(
        rootReducer,
        persistedState,
        compose(
            applyMiddleware(thunk, logger())
        )
    );
    return store;
};
