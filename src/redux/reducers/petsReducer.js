const petsReducer = (state=[], action) => {
    if(action.type === 'SET_PETS'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default petsReducer;