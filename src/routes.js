import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/app';
import MyPlaces from './containers/places';
import ErrorPage from './components/errorPage';
import Main from "./containers/main";

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='myplaces' component={MyPlaces}/>
        <Route path='*' component={ErrorPage}/>
    </Route>)