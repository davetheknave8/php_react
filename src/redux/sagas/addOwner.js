import { put } from 'redux-saga/effects';
import axios from 'axios';

function* addOwner(action){
    try{
        let objectToSend = action.payload;
        // let objectToSend = action.payload;
        console.log(objectToSend);
        yield axios.post('/addOwner.php', `name=${objectToSend}`);
        yield put({type: 'FETCH_OWNERS'});
    }
    catch(error){
        console.log('error in addOwner', error);
    }
}

export default addOwner;