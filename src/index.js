import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import ReduxModal from 'react-redux-modal';
import throttle from 'lodash/throttle';
import initializeStore from './store';
import routes from './routes';
import {loadState, saveState} from './localStorage';

const persistendState = loadState();
const store = initializeStore(persistendState);
const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(throttle(() => {
    saveState({
        places: store.getState().places,
        settings: store.getState().settings
    })
}, 1000));

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
