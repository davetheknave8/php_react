import React, { Component } from 'react';
import {connect} from 'react-redux';

import OwnerListItem from '../OwnerListItem/OwnerListItem';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    table: {
        width: '90%',
        margin: 'auto',
        marginTop: '3vh'
    },
    header: {
        backgroundColor: 'gray',
        padding: '10px',
        color: '#f5e0bf',
        fontFamily:`'Adamina', serif`,
        textAlign: 'center',
        fontSize: '1.5em',
        letterSpacing: '100px'
        
    },
    navigate: {
        height: '8vh',
        backgroundColor: '#f5e0bf'
    },
    navBtn: {
        width: '30%',
        marginTop: '1vh',
        backgroundColor: 'gray',
    },
    navToBtn: {
        marginLeft: '20%',
        marginTop: '1vh',
        width: '30%'
    },
    form: {
        marginLeft: '20vh'
    }, 
    nameIn: {
        width: '80%',
        marginTop: '3vh'
    },
    submitBtn: {
        marginTop: '3vh',
        height: '8.5vh',
        marginLeft: '2vh',
        width: '20vh',
        backgroundColor: '#f5e0bf'
    } 
})



class Owners extends Component {
    state = {
        newOwner: ''
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_OWNERS'});
    }

    handleChange = (event) => {
        this.setState({newOwner: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_OWNER', payload: {name: this.state.newOwner, nametwo: 'adam'}})
        this.setState({newOwner: ''})
    }

    goDashboard = () => {
        this.props.history.push('/pets');
    }

    render() {
        const {classes} = this.props;
        return (
            <>
            
            <div className={classes.header}>
                <header>
                    <h1>Pet Hotel</h1>
                </header>
            </div> 
            <div className={classes.navigate}>
                <Button className={classes.navToBtn} variant="contained" onClick={this.goDashboard}>Manage Pets</Button>
                <Button className={classes.navBtn} variant="contained" >Manage Owners</Button>
            </div>
            <div>
                <form onSubmit={event => this.handleSubmit(event)} className={classes.form}>
                    <TextField variant="outlined" className={classes.nameIn} value={this.state.newOwner} label="Add Owner" placeholder="Owner name" onChange={(event) => this.handleChange(event)} />
                    <Button className={classes.submitBtn}type="submit" variant="contained">Submit</Button>
                </form>
            </div>
            <Table className={classes.table}>
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

export default withStyles(styles)(connect(mapReduxStoreToProps)(Owners));