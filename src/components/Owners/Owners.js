import React, { Component } from 'react';
import {connect} from 'react-redux';

class Owners extends Component {
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_OWNERS'});
    }

    render() {
        console.log(this.props.reduxStore.ownerReducer);
        return (
            <>

            </>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Owners);