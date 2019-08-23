import { put } from 'redux-saga/effects';
import axios from 'axios';

function* updatePet(action){
    try{
        let objectToSend = JSON.stringify(action.payload);
        console.log(objectToSend);
        yield axios.put(`/updatePet.php?id=${Number(action.payload.id)}`, objectToSend );
        yield put({ type: 'FETCH_PETS' });
    }
    catch(error){
        console.log('error checking in pet', error);
    }
}

export default updatePet;