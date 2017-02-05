import React, {Component} from 'react';
import {Link} from 'react-router';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h2 className="header__title">Koala Weather App</h2>
                <ul className="header__nav">
                    <li className="header__nav__item">
                        <Link to='/' onlyActiveOnIndex={true} activeClassName="header__nav__item__link_active"
                              className="header__nav__item__link">Main</Link>
                    </li>
                    <li className="header__nav__item">
                        <Link to='/myplaces' activeClassName="header__nav__item__link_active"
                              className="header__nav__item__link">My places</Link>
                    </li>
                    <li className="header__nav__item">
                        <Link to='/settings' activeClassName="header__nav__item__link_active"
                              className="header__nav__item__link">Settings</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
