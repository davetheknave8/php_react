const ownerReducer = (state=[], action) => {
    if(action.type === 'SET_OWNER'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default ownerReducer;