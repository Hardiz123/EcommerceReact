import UserActionsTypes from './user.types';



const INITAL_STATE = { 
    currentUser: null,
    error:null
};

const userReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case UserActionsTypes.SIGN_IN_SUCCESS:
        return {
            ...state,
            currentUser: action.payload,
            error: null
        };
        case UserActionsTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
        return state;
    }
}

export default userReducer;