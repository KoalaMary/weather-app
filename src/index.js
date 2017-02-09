import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import ReduxModal from 'react-redux-modal';
import initializeStore from './createStore';
import routes from './routes';

const store = initializeStore({});
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                {routes}
            </Router>
            <ReduxModal />
        </div>
    </Provider>,
    document.getElementById('root')
);
