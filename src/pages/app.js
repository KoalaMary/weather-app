import React, {Component} from 'react';
import Header from '../Header/header';

class App extends Component {

    static path = '/';

    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
