import { put } from 'redux-saga/effects';
import axios from 'axios';

function* addOwner(action){
    try{
        yield axios.post('/addOwner.php', action.payload);
        yield put({type: 'FETCH_OWNERS'});
    }
    catch(error){
        console.log('error in addOwner', error);
    }
}

export default addOwner;