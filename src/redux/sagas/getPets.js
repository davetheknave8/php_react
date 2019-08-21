import {put} from 'redux-saga/effects';
import axios from 'axios';

function* getPets(){
    try{
        const response = yield axios.get('/pets.php');
        console.log(response);
        yield put({type: 'SET_PETS', payload: response.data});                
    }
    catch(error){
        console.log('error getting name', error);
    }
}

export default getPets;