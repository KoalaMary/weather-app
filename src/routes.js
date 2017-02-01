import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/app';
import SettingsPage from './pages/settingsPage';
import Main from "./pages/main";

export default (
    <Route path={App.path} component={App}>
        <IndexRoute component={Main}/>
        <Route path='settings' component={SettingsPage}/>
    </Route>)