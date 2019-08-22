import { put } from 'redux-saga/effects';
import axios from 'axios';

function* checkoutPet(action) {
    try {
        yield axios.put(`/checkoutPet.php?id=${Number(action.payload.id)}`)
        yield put({type: 'FETCH_PETS'})
    }
    catch (error) {
        console.log('error checking in pet', error);
    }
}

export default checkoutPet;