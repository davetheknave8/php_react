import { put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteOwner(action){
    try{
        yield axios.delete(`/deleteOwner.php?id=${Number(action.payload.id)}`)
        yield put({type: 'FETCH_OWNERS'});
    }
    catch(error){
        console.log('error deleting owner', error);
    }
}

export default deleteOwner;