import { combineReducers } from 'redux';
import ownerReducer from './ownerReducer';
import petsReducer from './petsReducer';

const rootReducer = combineReducers({
    ownerReducer,
    petsReducer
})

export default rootReducer;