import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyPlaces extends Component {
    constructor(props) {
        super(props);

    }

    renderPlaces() {
        // let {places} = this.props.places;
        return this.props.places.map((place, i) => {
            return (
                <li key={i}>
                    {place.city}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderPlaces()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        places: state.places
    }
}

export default connect(mapStateToProps)(MyPlaces);
