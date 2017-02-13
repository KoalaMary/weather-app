import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h2 className="header__title">Weather App</h2>
                <ul className="nav">
                    <li className="nav__item">
                        <Link to='/' onlyActiveOnIndex={true} activeClassName="nav__item__link_active"
                              className="nav__item__link">Main</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/myplaces' activeClassName="nav__item__link_active"
                              className="nav__item__link">My places</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
