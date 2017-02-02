import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import initializeStore from './createStore';
import routes from './routes';
import {fetchWeather} from './actions/getWeather';

const store = initializeStore({});
store.dispatch(fetchWeather());
console.log(store.getState());
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
