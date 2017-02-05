import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/app';
import SettingsPage from './pages/settingsPage';
import MyPlaces from './My Places/myPlaces';
import Main from "./pages/main";

export default (
    <Route path={App.path} component={App}>
        <IndexRoute component={Main}/>
        <Route path='myplaces' component={MyPlaces}/>
        <Route path='settings' component={SettingsPage}/>
    </Route>)