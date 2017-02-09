import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/app';
import MyPlaces from './pages/myPlaces';
import ErrorPage from './components/errorPage';
import Main from "./pages/main";

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='myplaces' component={MyPlaces}/>
        <Route path='*' component={ErrorPage}/>
    </Route>)