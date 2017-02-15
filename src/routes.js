import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/app';
import Main from "./pages/main/main";
import MyPlaces from './pages/places/places';
import ErrorPage from './pages/errorPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='myplaces' component={MyPlaces}/>
        <Route path='*' component={ErrorPage}/>
    </Route>)