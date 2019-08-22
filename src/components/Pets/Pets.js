import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// test
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';



const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        marginLeft: '1.5%',
        marginTop: '5%',
        backgroundColor: 'gray'
    },
    form: {
        margin: 'auto',
        marginTop: '2%',
        backgroundColor: '#f5e0bf',
        width: '70%'
    },
    formTwo: {
        textAlign: 'center',
        paddingBottom: '2%'
    },
    header: {
        backgroundColor: 'gray',
        padding: '10px',
        color: '#f5e0bf',
        fontFamily: `'Adamina', serif`,
        textAlign: 'center',
        fontSize: '1.5em',
        letterSpacing: '100px'

    },
    input: {
        display: 'none',
    },
    navigate: {
        height: '8vh',
        backgroundColor: '#f5e0bf'
    },
    navBtn: {
        width: '60vh',
        marginTop: '1vh',
        backgroundColor: 'gray',
    },
    navToBtn: {
        marginLeft: '50vh',
        marginTop: '1vh',
        width: '60vh'
    },
    ownerLabel: {
        margin: theme.spacing.unit,
        marginLeft: '1%',
        marginTop: '3.0%'
    },
    tableHead: {
        fontWeight: 'bold',
        fontSize: '5px'
    },
    textField: {
        margin: theme.spacing.unit,
        marginLeft: '1.5%',
        marginTop: '5%'

    },
});





class Pets extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_OWNERS' });
        this.props.dispatch({ type: 'FETCH_PETS' });
    }

    state = {
        owner: '',
        pet_name: '',
        color: '',
        breed: '',
        checked_in: '',
    }

    goDashboard = () => {
        this.props.history.push('/owners');
    }

    handleChangeFor = (event, propName) => {

        this.setState({
            [propName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('in HandleSubmit');
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PETS', payload: this.state })
        this.setState({
            owner_id: '',
            pet_name: '',
            color: '',
            breed: '',
            checked_in: '',
        })
    }
    render() {
        console.log('this.state:', this.state)
        const { classes } = this.props;



        return (

            <>
                <div className={classes.header}>
                    <header>
                        <h1>Pet Hotel</h1>
                    </header>
                </div>
                <div className={classes.navigate}>
                    <Button className={classes.navBtn} variant="contained">Manage Pets</Button>
                    <Button className={classes.navToBtn} variant="contained" onClick={this.goDashboard} >Manage Owners</Button>
                </div>
                <div className={classes.form}>
                    <form onSubmit={event => this.handleSubmit(event)} className={classes.formTwo}>
                        <TextField
                            className={classes.textField}
                            value={this.state.pet_name}
                            type="text"
                            placeholder="Pet Name"
                            onChange={(event) => this.handleChangeFor(event, 'pet_name')}
                        />

                        <TextField
                            className={classes.textField}
                            value={this.state.color}
                            type="text"
                            placeholder="Pet Color"
                            onChange={(event) => this.handleChangeFor(event, 'color')}
                        />

                        <TextField
                            className={classes.textField}
                            type="text"
                            placeholder="Pet Breed"
                            onChange={(event) => this.handleChangeFor(event, 'breed')}
                            value={this.state.breed}
                        />

                        <FormControl className={classes.ownerLabel}>
                            <InputLabel htmlFor="owner-customized=select" className={classes.bootstrapFormLabel}>
                                Owner
                    </InputLabel>
                            <Select
                                onChange={(event) => this.handleChangeFor(event, 'owner')}
                                value={this.state.owner_id}
                            >
                                {this.props.reduxStore.ownerReducer.map((item) => {
                                    return (
                                        <MenuItem
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    )
                                })}
                            </Select>

                        </FormControl>

                        <Button type="submit" variant="contained" className={classes.button} color="primary" size="small">Submit</Button>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <Table>
                        <TableHead className={classes.tableHead}>
                            <TableCell>Owner</TableCell>
                            <TableCell>Pet</TableCell>
                            <TableCell>Breed</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Checked In</TableCell>
                            <TableCell>&nbsp;</TableCell>
                        </TableHead>
                        <TableBody>
                            {this.props.reduxStore.petsReducer.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.pet_name}</TableCell>
                                    <TableCell>{item.breed}</TableCell>
                                    <TableCell>{item.color}</TableCell>
                                    <TableCell>{item.checked_in ? item.checked_in : 'No'}</TableCell>
                                    <TableCell>{item.actions}</TableCell>

                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </div>
            </>
        )
    }
}

const mapsStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapsStateToProps)(Pets));