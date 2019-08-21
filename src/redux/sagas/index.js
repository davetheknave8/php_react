import { all, takeEvery } from 'redux-saga/effects';
import getOwners from './getOwners';
import getPets from './getPets';

export default function* rootSaga(){
   yield takeEvery('FETCH_OWNERS', getOwners)
   yield takeEvery('FETCH_PETS', getPets)
}