import { SUCCESS_LOGIN } from "./../actions/types";

const isTokenInStorage = () => {
    return sessionStorage.getItem('Nekot') !== null ? true : false;
};

const defaultState = {
    isAuthenticated: isTokenInStorage()
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
            debugger;
            return{
                ...state,
                isAuthenticated: true
            }    
        default:
            return state;
    }
}