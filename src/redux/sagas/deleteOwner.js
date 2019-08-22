import { put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteOwner(){
    try{
        const objectToSend = JSON.stringify(action.payload);
        yield axios.delete('/deleteOwner.php', objectToSend)
        yield put({type: 'FETCH_OWNERS'});
    }
    catch(error){
        console.log('error deleting owner', error);
    }
}

export default deleteOwner;