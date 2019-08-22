import React, {Component} from 'react';
import {connect} from 'react-redux';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    deleteBtn: {
        backgroundColor: 'gray',
        color: 'white'
    }
})

class OwnerListItem extends Component{
    handleDelete = () => {
        this.props.dispatch({type: 'DELETE_OWNER', payload: {id: Number(this.props.owner.id)}});
    }

    render(){
        const {classes} = this.props;
        return(
            <>
            <TableRow>
                <TableCell>{this.props.owner.name}</TableCell>
                <TableCell>{this.props.owner.count}</TableCell>
                <TableCell><Button variant="contained" className={classes.deleteBtn} size="small" onClick={() => this.handleDelete()}>Delete Owner</Button></TableCell>
            </TableRow>

            </>
        )
    }
}

export default withStyles(styles)(connect()(OwnerListItem));