import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/app';
import MyPlaces from './My Places/myPlaces';
import ErrorPage from './ErrorPage/errorPage';
import Main from "./pages/main";

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='myplaces' component={MyPlaces}/>
        <Route path='*' component={ErrorPage}/>
    </Route>)