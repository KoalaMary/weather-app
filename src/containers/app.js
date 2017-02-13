import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import '../styles/app.css';

class App extends Component {
    render() {
        const {settings} = this.props;
        return (
            <div className="app">
                <Header />
                <div className="container" style={{backgroundColor: settings.background}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

export default connect(mapStateToProps)(App);

