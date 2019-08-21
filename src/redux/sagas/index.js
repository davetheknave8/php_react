import { all, takeEvery } from 'redux-saga/effects';
import getOwners from './getOwners'

export default function* rootSaga(){
   yield takeEvery('FETCH_OWNERS', getOwners)
}