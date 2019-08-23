import { takeEvery } from 'redux-saga/effects';
import getOwners from './getOwners';
import getPets from './getPets';
import addOwner from './addOwner';
import deleteOwner from './deleteOwner';
import addPets from './addPets';
import deletePet from './deletePet';
import checkinPet from './checkinPet';
import checkoutPet from './checkoutPet';
import updatePet from './updatePet';

export default function* rootSaga(){
   yield takeEvery('FETCH_OWNERS', getOwners)
   yield takeEvery('FETCH_PETS', getPets)
   yield takeEvery('ADD_OWNER', addOwner)
   yield takeEvery('DELETE_OWNER', deleteOwner);
   yield takeEvery("ADD_PETS", addPets);
   yield takeEvery('DELETE_PET', deletePet);
   yield takeEvery('CHECKIN_PET', checkinPet);
   yield takeEvery('CHECKOUT_PET', checkoutPet);
   yield takeEvery('UPDATE_PET', updatePet)
}