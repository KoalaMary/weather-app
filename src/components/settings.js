import React, {Component} from 'react';
import {setBlueColor, setRedColor, setFontSize} from '../actions/settings';
import {connect} from 'react-redux';

class Settings extends Component {

    setBlueColor() {
        this.props.dispatch(setBlueColor());
    }

    setRedColor() {
        this.props.dispatch(setRedColor());
    }

    setFontSize(event) {
        this.props.dispatch(setFontSize(event.target.value));
        console.log(this.props);
    }

    render() {
        return (
            <div className="settings" style={{fontSize: this.props.size}}>
                <h1>Settings</h1>
                <ul>
                    <li style={{color: this.props.color}}>
                        Color
                        <ul>
                            <li style={{color: 'blue'}} onClick={this.setBlueColor.bind(this)}>Blue</li>
                            <li style={{color: 'red'}} onClick={this.setRedColor.bind(this)}>Red</li>
                        </ul>
                    </li>
                    <li>
                       Font size
                        <input type="number" min="16" max="30" step="1" defaultValue="20" onChange={this.setFontSize.bind(this)}/>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        size: state.settings.size,
        color: state.settings.color
    }
}

export default connect(mapStateToProps)(Settings);
