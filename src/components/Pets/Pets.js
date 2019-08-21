import React, {Component} from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
  

class Pets extends Component{

    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_OWNERS'});
        this.props.dispatch({type: 'FETCH_PETS'});
    }

    state={
        owner: '',
        pet_name: '',
        breed: '',
        checked_in: '',
    }

    render(){

        const { classes } = this.props;
 

        return(
            <>
            <div>
                <form>
                    <TextField 
                    value={this.state.pet_name} 
                    type="text" 
                    placeholder="Pet Name" 
                    name="pet name"/>

                    <TextField 
                    value={this.state.pet_name} 
                    type="text" 
                    placeholder="Pet Color" 
                    name="pet color"/>

                    <TextField 
                    value={this.state.pet_name} 
                    type="text" placeholder="Pet Breed" 
                    name="breed"/>
                    <select>
                        {this.props.reduxStore.ownerReducer.map((item) => { 
                            return (

                                <option key={item.id}>{item.name}</option>
                        )    
                        })} 
                    </select>
                    <Button variant="contained" className={classes.button} color="primary" size="small">Submit</Button>
                </form>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>Owner</th>
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked In</th>
                            <th>Actions</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.petsReducer.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.owner_id}</TableCell>
                                <TableCell>{item.pet_name}</TableCell>
                                <TableCell>{item.breed}</TableCell>
                                <TableCell>{item.color}</TableCell>
                                <TableCell>{item.checked_in}</TableCell>
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