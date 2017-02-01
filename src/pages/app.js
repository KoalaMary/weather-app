import React, {Component} from 'react';
import Header from '../components/header';

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
