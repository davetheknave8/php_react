import { put } from 'redux-saga/effects';
import axios from 'axios';

function* addPets(action){
    try{
        let objectToSend = JSON.stringify(action.payload);
        // let objectToSend = action.payload;
        console.log(objectToSend);
        yield axios.post('/addPets.php', objectToSend);
        yield put({type: 'FETCH_PETS'});
    }
    catch(error){
        console.log('error in addPETS', error);
    }
}

export default addPets;