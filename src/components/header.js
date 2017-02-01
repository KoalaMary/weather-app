import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h2>Koala Weather App</h2>
                <ul>
                    <li><Link to='/' onlyActiveOnIndex={true} activeClassName='active'>Main</Link></li>
                    <li><Link to='/settings' activeClassName='active'>Settings</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;
