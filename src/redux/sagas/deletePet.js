import { put } from 'redux-saga/effects';
import axios from 'axios';

function* deletePet(action) {
    try {
        yield axios.delete(`/deletePet.php?id=${Number(action.payload.id)}`)
        yield put({ type: 'FETCH_PETS' });
    }
    catch (error) {
        console.log('error deleting owner', error);
    }
}

export default deletePet;