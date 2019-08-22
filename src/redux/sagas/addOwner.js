import { put } from 'redux-saga/effects';
import axios from 'axios';

function* addOwner(action){
    try{
        let objectToSend = JSON.stringify(action.payload);
        console.log(objectToSend);
        yield axios.post('/addOwner.php', objectToSend);
        yield put({type: 'FETCH_OWNERS'});
    }
    catch(error){
        console.log('error in addOwner', error);
    }
}

export default addOwner;