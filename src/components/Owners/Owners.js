import React, { Component } from 'react';
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import OwnerListItem from '../OwnerListItem/OwnerListItem';


class Owners extends Component {
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_OWNERS'});
    }

    render() {
        console.log(this.props.reduxStore.ownerReducer);
        return (
            <> 
            <Table>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Number of Pets</TableCell>
                    <TableCell>&nbsp;</TableCell>
                </TableHead>
                <TableBody>
                    {this.props.reduxStore.ownerReducer.map((owner, i) => <OwnerListItem key={i} owner={owner} />)}
                </TableBody>
            </Table>

            </>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Owners);