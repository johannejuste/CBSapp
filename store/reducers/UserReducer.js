import {SIGN_UP, SIGN_IN} from "../actions/UserActions";

const initialState = {
    signedUpUser: undefined, //because the intialstate is what should the value be. We are not logged in yet
    loggedInUser: undefined //because the intialstate is what should the value be. We are not logged in yet
    
};

const UserReducer = (state = initialState, action) => { // action er det du gerne vil gøre
switch (action.type) { // compact måde at skrive mange if sætninger. switches on the type of action from chataction.js
    case SIGN_UP: 

    const newState = { ...state, signedUpUser: action.payload } 
    console.log(newState);

    return newState

    case SIGN_IN: 

    const newStateUser = { ...state, loggedInUser: action.payload } 
    console.log(newStateUser);

    return newStateUser
    
    default:
        return state;

}
}
export default UserReducer